import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import AddressInput from '../../components/AddressInput/AddressInput';
import PlantsInput from '../../components/PlantsInput/PlantsInput'


const CreateAnnonce = () => {

    const [plant, setPlant] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [date_in, setDate_in] = useState(new Date());
    const [date_out, setDate_out] = useState(new Date());
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
    };

    return (

        <div className="mt-5 px-5 py-2 col-12 col-md-8 col-lg-6 col-xl-4 m-auto">
            <h3>Enregrister une nouvelle annonce</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className='mt-3'>
                    <Form.Label>Ma/Mes Plantes</Form.Label>

                    <PlantsInput plant={plant} setPlant={setPlant}></PlantsInput>
                    
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label>Dates : </Form.Label>
                    <div className='d-flex'>
                        <Form.Control
                            type="date"
                            value={date_in.toISOString().substr(0, 10)}
                            onChange={(e) => setDate_in(new Date(e.target.value))} />
                        <p className='col-1 text-center'>To</p>

                        <Form.Control
                            type="date"
                            value={date_out.toISOString().substr(0, 10)}
                            onChange={(e) => setDate_out(new Date(e.target.value))} />
                    </div>
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

                <Form.Group className='mt-3'>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mt-5'>
                    <Form.Control type="submit" value="Submit" />
                </Form.Group>
            </Form>

        </div>
    )

}

export default CreateAnnonce;
