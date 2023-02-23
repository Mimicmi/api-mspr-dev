import Annonce from '../../Annonce/Annonce';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useContext } from 'react';
import Api from '../../../Api';
import L from 'leaflet';

import { MapContainer, TileLayer, useMap, Marker, Popup, LeafletMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import './AdvertisementMap.css'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function AdvertisementMap({ annonces, mine, clientId }) {

  
    const [isLoaded, setIsLoaded] = useState(true);
    const [cooClient, setCooClientr] = useState([0, 0]);

    useEffect(() => {
        Api.get('/clients/' + clientId)
        .then(res => res.data)
        .then(
            (result) => {
                setCooClientr([result.lat, result.lon])
                setIsLoaded(false)
            },
            (error) => {
            }
        )
    }, [])



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
                        <Marker position={[annonce.plant.latitude, annonce.plant.longitude]}>
                            <Popup className='leaflet-popup-advertisement-card'>
                                <Annonce annonce={annonce} />
                            </Popup>
                        </Marker>
                    )
                } else {
                    return null;
                }
            }))
    }


    
    if (isLoaded) {
        return (<div> En attente du serveur</div>);
    } else {
        return (
            <MapContainer className='leaflet-advertisements m-auto' id='map-container' center={cooClient} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {contentAnnonce()}

            </MapContainer>
        );
    }
}


export default AdvertisementMap;