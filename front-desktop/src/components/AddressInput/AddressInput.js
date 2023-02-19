import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';


const AddressInput = ({ address, setAddress, latitude, setLatitude, longitude, setLongitude }) => {
  
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setAddress(event.target.value);
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${event.target.value}&limit=6`);
    const data = await response.json();
    setSuggestions(data.features);
  }

  const handleSelect = (suggestion) => {
    setAddress(suggestion.properties.label);
    setLatitude(suggestion.geometry.coordinates[1]);
    setLongitude(suggestion.geometry.coordinates[0]);
    setSuggestions([]);
  }

  const closeSuggestions = (event) => {
    if (event.key === 'Escape' || event.type === 'click') {
      setSuggestions([]);
    }
  };

  return (
  <div>
      <Form.Group>
      <Form.Label>Adresse</Form.Label>
        <Form.Control
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Enter an address"
          onKeyDown={closeSuggestions}
        />
        {suggestions.length > 0 && (
          <ListGroup className='position-absolute' style={{ zIndex:"1000"}}>
            {suggestions.map((suggestion, index) => (
              <ListGroup.Item style={{cursor: 'pointer'}} key={index} onClick={() => handleSelect(suggestion)}>
                {suggestion.properties.label}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Form.Group>
      <Form.Group className='d-none'>
        <Form.Label>Latitude</Form.Label>
        <Form.Control type="text" value={latitude} readOnly />
      </Form.Group>
      <Form.Group className='d-none'>
        <Form.Label>Longitude</Form.Label>
        <Form.Control type="text" value={longitude} readOnly />
      </Form.Group>
  </div>
  );
};

export default AddressInput;