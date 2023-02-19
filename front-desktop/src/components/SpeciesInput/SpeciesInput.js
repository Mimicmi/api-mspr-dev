import Api from '../../Api';
import React, { useState, useEffect } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const SpeciesInput = ({ specie, setSpecie }) => {


    const [species, setSpecies] = useState([]);

    useEffect(() => {
        Api.get('species')
            .then(res => res.data)
            .then(
                (result) => {
                    setSpecies(result);
                }
            )
    }, [])


    return (
        <div>
            <Form.Group>
                <Form.Select value={specie} onChange={(event) => setSpecie(event.target.value)}>
                    <option value="" disabled>Selectionner Espèce</option>
                    {species.map(specieOneByOne => (
                        <option value={specieOneByOne.id}>{specieOneByOne.specie}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );

}

export default SpeciesInput;
