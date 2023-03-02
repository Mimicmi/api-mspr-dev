import Api from '../../Api';
import React, { useState, useEffect, useContext } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

import { UserContext } from '../../services/UserService'


const PlantsInput = ({ plant, setPlant }) => {

    const { clientId } = useContext(UserContext);


    const [plants, setPlants] = useState([]);

    useEffect(() => {
        Api.get('plants/client/' + clientId)
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
                <Form.Select value={plant} onChange={(event) => setPlant(event.target.value)}>
                    <option value="" disabled>Selectionner plante(s)</option>
                    {plants.map(specieOneByOne => (
                        <option value={specieOneByOne.id}>{specieOneByOne.label}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );

}

export default PlantsInput;
