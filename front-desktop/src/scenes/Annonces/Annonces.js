import Annonce from "../../components/Annonce/Annonce";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useContext } from 'react';
import Api from '../../Api';
import { useParams } from "react-router-dom";
import { UserContext } from '../../services/UserService'

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
      }) )
  }


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

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-0">
          {contentAnnonce()}
        </div>
      </div>
    );
  }
}



export default Annonces;