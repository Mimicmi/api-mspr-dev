import Annonce from '../../Annonce/Annonce';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useContext } from 'react';

import { useParams } from "react-router-dom";


function AdvertisementCard({ annonces, mine, clientId}) {
    const contentAnnonce = () => {
        if (annonces.length == 0) {
            if (mine) {
                return (
                    <h2>Vous n'avez pas encore poster d'annonce</h2>
                )
            } else {
                return (
                    <h2>Pas encore d'annonce poster</h2>
                )
            }
        }

        return (
            annonces.map(annonce => {
                if (mine || annonce.client_id != clientId) {
                    return (
                        <div className="col-md-4 px-0" key={annonce.id}>
                            <Annonce annonce={annonce} />
                        </div>
                    )
                } else {
                    return null;
                }
            }))
    }


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-0">
            {contentAnnonce()}
        </div>
    );
}


export default AdvertisementCard;