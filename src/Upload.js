import React, { useState } from 'react';
import { Typography, Button, styled } from '@mui/material';

const StyledUploadContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const StyledInput = styled('input')({
  display: 'none',
});

const StyledImagePreview = styled('img')({
  maxWidth: '100%',
  maxHeight: '300px',
  margin: '20px 0',
});

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    // Simulate machine learning model recognition process
    // Replace this with actual model integration
    setTimeout(() => {
      setDescription('This is a description of the uploaded image.');
    }, 2000);
  };

  return (
    <StyledUploadContainer>
      <Typography variant="h2">Upload Medicinal Plant Image</Typography>
      <label htmlFor="upload-input">
        <StyledInput id="upload-input" type="file" accept="image/*" onChange={handleFileChange} />
        <Button component="span" variant="contained" color="primary">
          Choose Image
        </Button>
      </label>
      {imagePreview && <StyledImagePreview src={imagePreview} alt="Uploaded Plant" />}
      {selectedFile && (
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload Image
        </Button>
      )}
      {description && <Typography variant="body1">{description}</Typography>}
    </StyledUploadContainer>
  );
};

export default Upload;
