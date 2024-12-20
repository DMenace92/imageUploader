import React, { useState, useEffect } from 'react';
import './App.css';
import ImageStore from './Store/ImageStore';
import CarracelComponent from './Component/CarracelComponent';


function App() {
  const { data, isLoading, error, fetchData,uploadData } = ImageStore();
  const [imageFile, setFile] = useState(null);

  // console.log(fetchData)
  useEffect(() => {
    fetchData();
  }, []);

   const handleFileChange = (e) => {
    setFile(e.target.files[0]);

  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
        alert('Please select a file!');
        return;
    }
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
        await uploadData(formData); 
        alert('Image uploaded successfully!');
    } catch (err) {
        alert('Failed to upload image. Please try again.');
    }
};

  return (
    
    <div className="App">
      <div>
        <h2>image form</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" onChange={handleFileChange} placeholder="Image uploader" />
          <button type="submit">Upload</button>
        </form>

      </div>
      <h2>image uploader</h2>
      {data && data.map((image) => (
        <img
          key={image._id}
          src={`data:${image.contentType};base64,${btoa(
            new Uint8Array(image.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          )}`}
          alt="Uploaded"
          style={{ width: '200px', height: '200px', margin: '10px' }}
        />
      ))}
      <CarracelComponent/>

    </div>
  );
}

export default App;
