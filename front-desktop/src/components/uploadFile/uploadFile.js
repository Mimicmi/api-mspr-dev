import React, { useState } from 'react';
import Api from '../../Api';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInput(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);

    Api.post('/uploads/plant', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => res.data)
    .then(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error)
      }
    )

    setSelectedFile(null);
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" onChange={handleFileInput} />
      <button type="submit">Télécharger</button>
    </form>
  );
}

export default FileUpload;