import Annonce from "../../components/Annonce/Annonce";
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';
import Api from '../../Api';

function Annonces() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    Api.get('advertisements')
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
      <div>
        <div className='mt-5 mb-2'>
          <Button variant="light" >Les annonces</Button>
          <Button href='my-plants/add' variant="outline-primary">Ajouter une annonces</Button>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-0">
          {annonces.map(annonce => (
            <div className="col-md-4 px-0">
              <Annonce key={annonce.id} annonce={annonce}></Annonce>
            </div>
          ))}
        </div>
      </div>
    );
  }
}



export default Annonces;