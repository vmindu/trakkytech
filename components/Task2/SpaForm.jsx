// src/components/SpaForm.js
import React from 'react';
import axios from 'axios';
import './SpaForm.css';

const SpaForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const fileList = Array.from(files);

      // Convert images to base64
      Promise.all(fileList.map(file => toBase64(file)))
        .then(base64Images => {
          setFormData({ ...formData, images: base64Images });
        })
        .catch((err) => {
          console.error('Failed to convert images:', err);
        });

    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      spa_name: formData.spa_name,
      city: formData.city,
      area: formData.area,
      price: formData.price,
      timing: formData.timing,
      images: formData.images, // base64 image strings
    };

    try {
      await axios.post('http://localhost:2242/spas', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Submission failed.');
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <label>Spa Name:</label>
      <input name="spa_name" type="text" value={formData.spa_name} onChange={handleChange} required />

      <label>City:</label>
      <input name="city" type="text" value={formData.city} onChange={handleChange} required />

      <label>Area:</label>
      <input name="area" type="text" value={formData.area} onChange={handleChange} required />

      <label>Price:</label>
      <input name="price" type="number" value={formData.price} onChange={handleChange} required />

      <label>Timing:</label>
      <input name="timing" type="time" value={formData.timing} onChange={handleChange} required />

      <label>Images:</label>
      <input name="images" type="file" multiple accept="image/*" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

// Utility: convert File to base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // base64 result
    reader.onerror = reject;
  });
}

export default SpaForm;
