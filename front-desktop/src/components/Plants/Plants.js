import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PlantPreview from '../Plant/PlantPreview';

import React, { useState, useEffect } from 'react';
import PlantPreviewLoad from '../Plant/PlantLoad/PlantPreviewLoad';
import Api from '../../Api';

import { Navigate } from "react-router-dom";

import Placeholder from 'react-bootstrap/Placeholder';




function Plants() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    Api.get('plants')
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
  }, [])


  if (error) {
    return <Navigate replace to="/403" />

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
      <div>
        <div className='mt-5 mb-2'>
          <Button variant="light" >
            Mes plantes <Badge bg="primary">{items.length}</Badge>
          </Button>

          <Button href='my-plants/add' variant="outline-primary">Ajouter une plante</Button>
        </div>


        {items.map(item => (
          <div className='mb-3'>
            <PlantPreview key={item.id} item={item} ></PlantPreview>
          </div>
        ))}

      </div>
    );
  }
}



export default Plants;