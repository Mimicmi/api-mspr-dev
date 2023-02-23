import Annonce from "../../components/Annonce/Annonce";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useContext } from 'react';
import Api from '../../Api';
import { useParams } from "react-router-dom";
import { UserContext } from '../../services/UserService'

import AdvertisementCard from "../../components/Advertisements/Card/AdvertisementCard";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdvertisementMap from "../../components/Advertisements/Map/AdvertisementMap";

function Annonces() {
  const { mine } = useParams();
  const { clientId } = useContext(UserContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [annonces, setAnnonces] = useState([]);

  const [title, setTitle] = useState('');

  useEffect(() => {
    let query;
    if (mine) {
      query = 'advertisements/client/' + clientId
      setTitle('Mes annonnces')
    } else {
      query = 'advertisements'
      setTitle('Les annonnces')
    }
    Api.get(query)
      .then(res => res.data)
      .then(
        (result) => {
          setIsLoaded(true);
          setAnnonces(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])




  if (error) {
    return (<div>Erreur : {error.message}</div>);

  } else if (!isLoaded) {
    return (<div>
      Loding ...
    </div>)
  } else {
    return (
      <div className="text-center">
        <div className='mt-5 mb-2'>
          <Button variant="light" >{title}</Button>
          <Button href='/annonce/add' variant="outline-primary">Ajouter une annonces</Button>
        </div>


        <Tabs
          defaultActiveKey="card"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="card" title="Card">
            <AdvertisementCard annonces={annonces} mine={mine} clientId={clientId}></AdvertisementCard>
          </Tab>
          <Tab eventKey="carte" title="Carte">
            <AdvertisementMap annonces={annonces} mine={mine} clientId={clientId}></AdvertisementMap>
          </Tab>

        </Tabs>


      </div>
    );
  }
}



export default Annonces;