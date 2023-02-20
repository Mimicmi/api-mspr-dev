import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import AddressInput from '../../components/AddressInput/AddressInput';
import Api from '../../Api';
import SpeciesInput from '../../components/SpeciesInput/SpeciesInput';

import { UserContext } from '../../services/UserService'
import { useNavigate } from 'react-router-dom';

const CreatePlant = () => {

  const navigate = useNavigate();


  const { clientId } = useContext(UserContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [specie, setSpecie] = useState('');

  const handleSubmit = async (event) => {

    const data = {
      "client": {
          "id": clientId
      },
      "specie": {
          "id": specie
      },
      "address": address,
      "profil_photo": "pic2",
      "longitude": latitude,
      "latitude": longitude
  };

    Api.post('plants', data)
      .then(res => res.data)
      .then(
        (result) => {
          navigate("/my-plants")
        },
        (error) => {
          
        }
      )

  };

  return (

    <div className="mt-5 px-5 py-2 col-12 col-md-8 col-lg-6 col-xl-4 m-auto">
      <h3>Enregrister une nouvelle plante</h3>

    <Form onSubmit={handleSubmit}>
      <Form.Group className='mt-3'>
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mt-3'>
        <AddressInput
          address={address}
          setAddress={setAddress}
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      </Form.Group>
      <Form.Group  className='mt-3'>
        <Form.Label>Espèce</Form.Label>
        <SpeciesInput specie={specie} setSpecie={setSpecie}></SpeciesInput>
      </Form.Group>
      <Form.Group  className='mt-5'>
        <Form.Control type="submit" value="Submit" />
      </Form.Group>
    </Form>
    </div>
  );
};

export default CreatePlant;