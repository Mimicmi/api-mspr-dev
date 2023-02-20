import { Image, Table} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import Api from '../../Api';
import Plant from "../../scenes/Plant/Plant";



function ResumePlant({plant}) {

    return (
        <div class="container-fluid rounded">
            <div class="row">
                <div class="col-md-4">
                <Image rounded className='w-100' style={{height:"120px", objectFit: 'cover'}} src='https://i0.wp.com/osezplantercapousse.com/wp-content/uploads/2019/12/img_1144.jpg?resize=955%2C1536&ssl=1'></Image>
                </div>
                <div class="col-md-8">

                <Table hover>
                    <tbody>
                        <tr>
                            <td>Nom</td>
                            <td>Votre Plante {plant.id}</td>
                        </tr>
                        <tr>
                            <td>Adresse</td>
                            <td>{plant.address}</td>
                        </tr>
                        <tr>
                            <td>Espece</td>
                            <td>{plant?.specie?.name}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )

}

export default ResumePlant;
