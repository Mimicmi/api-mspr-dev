import React, { useState, useEffect } from 'react';
import {
    Card,
    Button,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import Api from "../../Api";

function Advertisement() {

    const { advertisement_id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [advertisement, setAdvertisement] = useState([]);

    useEffect(() => {
        Api.get('advertisements/' + advertisement_id)
            .then(res => res.data)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAdvertisement(result);
                },

                (error) => {
                    console.log(error)
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <Navigate replace to="/403" />
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
                                    <Card.Subtitle>Antoine</Card.Subtitle>
                                    <Card.Subtitle>69290</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Price: </strong>
                                        15 €
                                        <br />
                                        <strong>Dates: </strong>
                                        10/12/2023 12h30 aux 01/01/2024 10h30
                                        <br />
                                        <strong>Description: </strong>
                                        Arroser une plante de haut en bas
                                        <br />
                                        <strong>Espèce : </strong>
                                        Tulipe
                                    </Card.Text>
                                    <Button style={{ width: "100%" }}>Postuler</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>);
    }



}

export default Advertisement;