import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../services/UserService'

import {
    Card,
    Modal,
    Form,
    Button,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import Api from "../../Api";
import ErrorServer from '../../scenes/Error/ErrorServer';
import { useNavigate } from 'react-router-dom';


function Advertisement() {
    const navigate = useNavigate();
    const { clientId } = useContext(UserContext);


    const { advertisement_id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [advertisement, setAdvertisement] = useState([]);

    const [plant, setPlant] = useState(null);
    const [client, setClient] = useState(null);
    const [user, setUser] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        let data = {
            "client": {
                "id": clientId
            },
            "plant": {
                "id": plant.id
            },
            "date_in": formatDate(advertisement.date_in),
            "date_out": formatDate(advertisement.date_out),
            "price": advertisement.price
        }
        Api.put('advertisements/' + advertisement.id, data)
            .then(res => res.data)
            .then(
                (result) => {
                    handleClose()
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    const deleteAdvertisment = () => {
        Api.delete('advertisements/' + advertisement.id)
            .then(res => res.data)
            .then(
                (result) => {
                    navigate("/les-annonces/to-me")
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    const formatDate = (date) => {
        date = new Date(date)
        return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        Api.get('advertisements/' + advertisement_id)
            .then(res => res.data)
            .then(
                (result_advertisement) => {
                    setAdvertisement(result_advertisement);

                    Api.get('plants/' + result_advertisement.plant_id)
                        .then(res => res.data)
                        .then(
                            (result) => {
                                setPlant(result)
                                Api.get('clients/' + result_advertisement.client_id)
                                    .then(res => res.data)
                                    .then(
                                        (result) => {
                                            setClient(result)

                                            Api.get('users/' + result.user_id)
                                                .then(res => res.data)
                                                .then(
                                                    (result) => {
                                                        setUser(result)
                                                        setIsLoaded(true);
                                                    },
                                                    (error) => {
                                                        console.log(error)
                                                    }
                                                )
                                        },
                                        (error) => {
                                        }
                                    )
                            },
                            (error) => {
                            }
                        )
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    const contentButton = () => {
        if (clientId == advertisement.client_id) {
            return (<div><Button onClick={handleShow} style={{ width: "70%" }}>Modifer</Button>
            <Button onClick={deleteAdvertisment} style={{ width: "30%" }}>Suprimer</Button></div>)
        } else {
            return (<Button style={{ width: "100%" }}>Postuler</Button>)
        }
    }


    if (error) {
        return <ErrorServer></ErrorServer>
    } else if (!isLoaded) {
        return (<div> En attente du serveur</div>);
    } else {
        return (
            <div>
                <Card className='mx-5 my-5'>
                    <Container fluid>
                        <Row>
                            <Col md={4}>
                                <Card.Img
                                    top
                                    src='imagesrc'
                                    style={{ borderRadius: "10px 0 0 10px" }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Subtitle>{user.pseudo}</Card.Subtitle>
                                    <Card.Subtitle>{client.address}</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Price: </strong>
                                        {advertisement.price} €
                                        <br />
                                        <strong>Dates: </strong>
                                        {advertisement.date_in} aux {advertisement.date_out}
                                        <br />
                                        <strong>Description: </strong>
                                        Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum
                                        <br />
                                        <strong>Espèce : </strong>
                                        {plant.specie.name}
                                    </Card.Text>
                                    {contentButton()}
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier l'annonce</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={advertisement.price}
                                    onChange={(event) => {
                                        setAdvertisement({ ...advertisement, price: event.target.value })
                                    }}
                                />
                            </Form.Group>
  
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Enregistrer
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>);
    }



}

export default Advertisement;