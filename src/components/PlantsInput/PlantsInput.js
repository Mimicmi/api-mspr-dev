import Api from '../../Api';
import React, { useState, useEffect } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const SpeciesInput = ({ plant, setPlant }) => {


    const [plants, setPlants] = useState([]);

    useEffect(() => {
        Api.get('plants')
            .then(res => res.data)
            .then(
                (result) => {
                    setPlants(result);
                }
            )
    }, [])


    return (
        <div>
            <Form.Group>
                <Form.Select multiple value={plant} onChange={(event) => setPlant(event.target.value)}>
                    <option value="" disabled>Selectionner plante(s)</option>
                    {plants.map(specieOneByOne => (
                        <option value={specieOneByOne.id}>{specieOneByOne.address}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );

}

export default SpeciesInput;
