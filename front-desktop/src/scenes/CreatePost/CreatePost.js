import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Api from '../../Api';
import { useNavigate } from 'react-router-dom';


import PlantsInput from '../../components/PlantsInput/PlantsInput';

const CreatePost = () => {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [plant, setPlant] = useState('');

    
    function handleFileInput(event) {
        setSelectedFile(event.target.files[0]);
    }

    const uploadImage = async () => {

        const formData = new FormData();
        formData.append('image', selectedFile);
        const result = await Api.post('/uploads/photo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return result.data;
      };

      const createdPost = async (profilPhoto) => {
        const data = {
            "plant": {
                "id": plant
            },
            "image": profilPhoto
        };
        const result = await Api.post('photos', data);
        return result.data;
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const profilPhoto = await uploadImage();
        const result = await createdPost(profilPhoto);
        navigate("/post");
      };


    return (
        <div className="mt-5 px-5 py-2 col-12 col-md-8 col-lg-6 col-xl-4 m-auto">
            <h3>Nouvelle Publication</h3>

            <Form onSubmit={handleSubmit} encType="multipart/form-data" >


                <Form.Group className='mt-3'>
                    <Form.Label>Ma Plantes</Form.Label>

                    <PlantsInput plant={plant} setPlant={setPlant}></PlantsInput>

                </Form.Group>



                <Form.Group className='mt-3'>
                    <Form.Label>Ma photo</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileInput}
                        required
                    />
                </Form.Group>

                <Form.Group className='mt-5'>
                    <Form.Control type="submit" value="Poster" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default CreatePost;