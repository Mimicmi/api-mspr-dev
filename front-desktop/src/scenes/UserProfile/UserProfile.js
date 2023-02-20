import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import AddressInput from '../../components/AddressInput/AddressInput';
import { UserContext } from '../../services/UserService'
import Api from '../../Api';

const UserProfile = () => {

    const { userId, clientId, role, botanistId } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');


    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


    const [siret, setSiret] = useState('');
    const [documents, setDocuments] = useState('');


    const [editMode, setEditMode] = useState(false);


    useEffect(() => {
        Api.get('users/' + userId)
            .then(res => {
                setEmail(res.data.email);
                setPseudo(res.data.pseudo);
                setPassword(res.data.password)
            })
            .catch(err => console.log(err));

        Api.get('clients/' + clientId)
            .then(res => {
                setAddress(res.data.address);
                setLatitude(res.data.lat)
                setLongitude(res.data.lon)
            })
            .catch(err => console.log(err));

        if(role == 'ROLE_BOTANIST') {
            Api.get('botanists/' + botanistId)
                .then(res => {
                    setSiret(res.data.siret);
                    setDocuments(res.data.documents)
                })
                .catch(err => console.log(err));
        }
    }, []);


    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
        //setFormValuesUser(user);
    };

    const handleSaveClick = () => {
        let data = {
            "email":email,
            "password": password,
            "pseudo":pseudo
        }
        Api.put('users/' + userId, data)
            .then(res => {
                setEditMode(false);
            })
            .catch(err => console.log(err));

        data = {
            "user": {
                "id": userId
            },
            "address": address,
            "lat": latitude,
            "lon": longitude
        }

        Api.put('clients/' + clientId, data)
            .then(res => {
                setEditMode(false);
            })
            .catch(err => console.log(err));

        if (role == 'ROLE_BOTANIST') {
            data = {
                "client": {
                    "id": clientId
                },
                "siret": siret,
                "documents": documents
            }
            Api.put('botanists/' + botanistId, data)
                .then(res => {
                    setEditMode(false);
                })
                .catch(err => console.log(err));
        }
    };

    const isBotanist = () => {
        if (role == 'ROLE_BOTANIST') {
            return (
                <p><strong>Siret :</strong> {siret}</p>
            )
        }
    }

    const isBotanistForm = () => {
        if (role == 'ROLE_BOTANIST') {
            return (
                <Form.Group>
                        <Form.Label>Siret : </Form.Label>
                        <Form.Control name="siret" value={siret || ''} onChange={(event) => setSiret(event.target.value)} />
                </Form.Group>
            )
        }
    }

    return (
        <Container className="my-5">
            <h1 className="mb-4">Profil utilisateur</h1>
            {editMode ? (
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="nom" value={email || ''} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control name="prenom" value={pseudo || ''} onChange={(event) => setPseudo(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <AddressInput
                            address={address}
                            setAddress={setAddress}
                            latitude={latitude}
                            setLatitude={setLatitude}
                            longitude={longitude}
                            setLongitude={setLongitude}
                        />
                    </Form.Group>
                    {isBotanistForm()}
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary" className="mr-2" onClick={handleCancelClick}>Annuler</Button>
                        <Button variant="primary" onClick={handleSaveClick}>Enregistrer</Button>
                    </div>

                    
                </Form>
            ) : (
                <>
                    <p><strong>Email :</strong> {email}</p>
                    <p><strong>Pseudo :</strong> {pseudo}</p>
                    <p><strong>Adresse :</strong> {address}</p>

                    {isBotanist()}

                    <div className="d-flex justify-content-end">
                        <Button variant="primary" onClick={handleEditClick}>Editer</Button>
                    </div>
                </>
            )}
        </Container>
    );
};

export default UserProfile;