import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner';

import Api from '../../Api';
import React, { useState, useEffect, useContext } from 'react';

import './Annonce.css'

function Annonce({ annonce }) {

    const [plant, setPlant] = useState(null);
    const [client, setClient] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    const [labelBouton, setlabelBouton] = useState("Arroser");
    

    useEffect(() => {

        Api.get('plants/' + annonce.plant_id)
            .then(res => res.data)
            .then(
                (result) => {
                    setPlant(result)
                },
                (error) => {
                }
            )

        Api.get('clients/' + annonce.client_id)
            .then(res => res.data)
            .then(
                (result) => {
                    setClient(result)

                    Api.get('users/' + result.user_id)
                        .then(res => res.data)
                        .then(
                            (result) => {
                                setUser(result)
                                setIsLoaded(false)
                            },
                            (error) => {
                                console.log(error)
                            }
                        )
                },
                (error) => {
                }
            )
    }, [])


    if (isLoaded) {
        return (<Spinner animation="grow" variant="primary" />)
    } else {
        return (
            <Card className='m-2'>
                <div class="container-fluid">
                    <div class="row p-1 m-1">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-3 px-0 d-flex align-items-center justify-content-center">
                                    <Image roundedCircle="true" className='float-left' width={60} height={60} src='https://i0.wp.com/osezplantercapousse.com/wp-content/uploads/2019/12/img_1144.jpg?resize=955%2C1536&ssl=1'></Image>
                                </div>
                                <div class="col-6 text-start">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-12 px-1">
                                                    <p className='mb-0 text-truncate'>{user.pseudo}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 px-1">
                                                    <p className='mb-0 fs-6 fw-lighter text-muted fst-italic text-truncate'>{plant.address}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 d-flex px-1 pt-1 text-truncate">
                                                    <Badge pill bg="secondary" className='me-1'>{plant.specie.name}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3 d-flex align-items-center justify-content-center">
                                    <Badge bg="primary"><h5>{annonce.price} €</h5></Badge>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12" style={{ height: '65px' }} >
                                    <p class="lead crop-text-2">
                                        Sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 d-flex flex-column">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-12">
                                                    <Badge pill bg="info">{annonce.date_in}</Badge>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <Badge pill bg="info">{annonce.date_out}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <Button href={'/annonce/' + annonce.id} variant="primary">{labelBouton}</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
export default Annonce;
