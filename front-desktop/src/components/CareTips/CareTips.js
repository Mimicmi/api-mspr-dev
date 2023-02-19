import React, { useState } from 'react';

import { Table, Button, Form } from 'react-bootstrap';

const CareTips = ({ currentSpecies, setCurrentSpecies, isCreateSpecie = false }) => {

  if (isCreateSpecie) {
    var startTips = [];
  } else {
    var startTips = JSON.parse(currentSpecies.advice);
  }

  const [tips, setTips] = useState(startTips);

  const [newTip, setNewTip] = useState("");

  const handleAddTip = () => {
    setTips([...tips, newTip]);
    setCurrentSpecies({ ...currentSpecies, advice: JSON.stringify([...tips, newTip]) });
    setNewTip("");
  }

  const handleRemoveTip = (index) => {
    setTips(tips.filter((tip, i) => i !== index));
    setCurrentSpecies({ ...currentSpecies, advice: JSON.stringify(tips.filter((tip, i) => i !== index)) });
  }

  return (
    <div>
      <Form.Group>
        <Form.Label>Conseils d'entretien : </Form.Label>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='col-10'>Conseil</th>
              <th className='col-2'>Action</th>
            </tr>
          </thead>
          <tbody>

            {tips.length > 0 &&
              tips.map((tip, index) => (
                <tr key={index}>
                  <td>{tip}</td>
                  <td><Button onClick={() => handleRemoveTip(index)}><span class="material-symbols-outlined">
                    delete
                  </span></Button></td>
                </tr>
              ))
            }

          </tbody>
        </Table>
      </Form.Group>

      <Form.Group className='d-flex'>
        <Form.Control
          type="text"
          name="newTip"
          placeholder="Ajouter un conseil d'entretien"
          value={newTip}
          onChange={e => setNewTip(e.target.value)}
          className="w-75"
        />

        <Button onClick={handleAddTip} className="w-25 mx-3">Ajouter</Button>

      </Form.Group>

    </div>
  );
}

export default CareTips;