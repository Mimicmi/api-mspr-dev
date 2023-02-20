import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PlantPreview from '../Plant/PlantPreview';

import React, { useState, useEffect, useContext } from 'react';
import PlantPreviewLoad from '../Plant/PlantLoad/PlantPreviewLoad';
import Api from '../../Api';

import Placeholder from 'react-bootstrap/Placeholder';
import ErrorServer from '../../scenes/Error/ErrorServer';


import { UserContext } from '../../services/UserService'


function Plants() {

  const { clientId } = useContext(UserContext);


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const getPlantsClient = () => {
    Api.get('plants/client/' + clientId)
    .then(res => res.data)
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  const removePlant = (plantID) => {
    console.log("hello")
    Api.delete('plants/' + plantID)
      .then(res => {
        getPlantsClient()
      })
      .catch(error => {
        console.log(error)
      });
  }

  

  useEffect(() => {
    getPlantsClient()
  }, [])


  const contentPlant = () => {
    if (items.length <= 0) {
      return <h3>Vous n'avez pas encore ajouté de plante</h3>
    } else {
      return (
        items.map(item => (
          <div className='mb-3'>
            <PlantPreview key={item.id} item={item} onRemovePlant={removePlant}></PlantPreview>
          </div>
        ))
      )
    }
  }


  if (error) {
    return <ErrorServer></ErrorServer>

  } else if (!isLoaded) {
    return (<div>
      <Placeholder as={'div'} animation='wave' className="mt-5 mb-2">
        <Placeholder.Button xs={2} variant="light">
          <Placeholder xs={6} /> <Placeholder xs={3} bg="primary" />
        </Placeholder.Button>

        <Placeholder.Button xs={2} variant='outline-primary'><Placeholder xs={12} /></Placeholder.Button>

      </Placeholder>

      <PlantPreviewLoad></PlantPreviewLoad>
      <PlantPreviewLoad></PlantPreviewLoad>
      <PlantPreviewLoad></PlantPreviewLoad>
    </div>)
  } else {

    return (
      <div className='text-center'>
        <div className='mt-5 mb-2'>
          <Button variant="light" >
            Mes plantes <Badge bg="primary">{items.length}</Badge>
          </Button>

          <Button href='my-plants/add' variant="outline-primary">Ajouter une plante</Button>
        </div>

        {contentPlant()}
      </div>
    );
  }
}



export default Plants;