import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import CareTips from '../../components/CareTips/CareTips';
import Api from '../../Api';
import Carousel from 'react-bootstrap/Carousel';

function SpeciesCRUD() {

    const [species, setSpecies] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentSpecies, setCurrentSpecies] = useState({});

    const updtedSpecieTable = () => {
        Api.get('species')
            .then((res) => {
                console.log(res.data)
                setSpecies(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => updtedSpecieTable, []);

    const handleAddModalClose = () => setShowAddModal(false);
    const handleAddModalShow = () => {
        setCurrentSpecies({})
        setShowAddModal(true);
    }
    const handleEditModalClose = () => setShowEditModal(false);
    const handleEditModalShow = (species) => {
        setCurrentSpecies(species);
        setShowEditModal(true);
    };

    const handleAddSpecies = (specie) => {
        // Ajout d'une nouvelle espèce à la table "Species"
        Api.post('species', specie)
            .then((res) => {
                updtedSpecieTable()
                handleAddModalClose()
            })
            .catch((error) => {
                //TODO : vérification que tu c'est bien passé
                console.error(error)
            })
    };

    const handleEditSpecies = (species) => {
        // Mise à jour d'une espèce existante dans la table "Species"
        Api.put(`species/${species.id}`, species)
            .then(res => {
                //TODO : vérification que tu c'est bien passé
                updtedSpecieTable()
            });
        handleEditModalClose();
    };

    const handleDeleteSpecies = (id) => {
        // Suppression d'une espèce de la table "Species"
        Api.delete(`species/${id}`)
            .then(res => {
                const updatedSpecies = species.filter(item => item.id !== id);
                setSpecies(updatedSpecies);
            });
    };

    return (
        <div>
            <Table className='red-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom de l'espèce</th>
                        <th>Description</th>
                        <th>Conseils d'entretiens</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {species.map(species => (
                        <tr key={species.id}>
                            <td>{species.id}</td>
                            <td>{species.specie}</td>
                            <td>{species.description}</td>
                            <th style={{ width: '1000px' }}>
                                <Carousel variant="dark" slide="false">

                                    {JSON.parse(species.advice).map(advice => (
                                        <Carousel.Item className='text-center' style={{ maxWidth: '100%' }}>{advice}</Carousel.Item>
                                    ))}
                                </Carousel>
                            </th>
                            <td className='d-flex'>
                                <Button variant="warning" onClick={() => handleEditModalShow(species)}>Editer</Button>{' '}
                                <Button variant="danger" onClick={() => handleDeleteSpecies(species.id)}>Supprimer</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleAddModalShow}>Ajouter une espèce</Button>

            <Modal show={showAddModal} onHide={handleAddModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une espèce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nom de l'espèce</Form.Label>
                            <Form.Control type="text" placeholder="Entrer le nom de l'espèce" onChange={e => setCurrentSpecies({ ...currentSpecies, specie: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Entrer la description de l'espèce" onChange={e => setCurrentSpecies({ ...currentSpecies, description: e.target.value })} />
                        </Form.Group>

                        <CareTips currentSpecies={currentSpecies} setCurrentSpecies={setCurrentSpecies} isCreateSpecie={true}></CareTips>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAddModalClose}>Fermer</Button>
                    <Button variant="primary" onClick={() => handleAddSpecies(currentSpecies)}>Ajouter</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editer une espèce</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nom de l'espèce</Form.Label>
                            <Form.Control type="text" defaultValue={currentSpecies.specie} onChange={e => setCurrentSpecies({ ...currentSpecies, specie: e.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" defaultValue={currentSpecies.description} onChange={e => setCurrentSpecies({ ...currentSpecies, description: e.target.value })} />
                        </Form.Group>

                        <CareTips currentSpecies={currentSpecies} setCurrentSpecies={setCurrentSpecies}></CareTips>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditModalClose}>Fermer</Button>
                    <Button variant="primary" onClick={() => handleEditSpecies(currentSpecies)}>Enregistrer</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default SpeciesCRUD;


