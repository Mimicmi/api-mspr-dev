import { Image, Table} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import Api from '../../Api';
import Plant from "../../scenes/Plant/Plant";



function ResumePlant({plant}) {

    const urlPhoto = () => {
        if(plant.profil_photo) {
          return "http://localhost:8090/upload/" + plant.profil_photo
        } else {
          return "https://cdn.shopify.com/s/files/1/0004/2654/1108/products/LIVRAISON_PLANTE_GRANDE_MONSTERA_DELICIOSA_2_800x.jpg?v=1622459168"
        }
      }

    return (
        <div class="container-fluid rounded">
            <div class="row">
                <div class="col-md-4">
                <Image rounded className='w-100' style={{height:"120px", objectFit: 'cover'}} src={urlPhoto()}></Image>
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
