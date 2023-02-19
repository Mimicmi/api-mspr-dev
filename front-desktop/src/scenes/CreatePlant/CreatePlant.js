import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import AddressInput from '../../components/AddressInput/AddressInput';
import axios from 'axios';
import SpeciesInput from '../../components/SpeciesInput/SpeciesInput';

const CreatePlant = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [specie, setSpecie] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, address, latitude, longitude, specie };
    try {
      const response = await axios.post('https://your-api-endpoint.com', data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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