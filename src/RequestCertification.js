import React from 'react';
import { Typography, Button, TextField, Container, Paper, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { db } from './firebase'; // Import your Firebase database
import { addDoc, collection } from 'firebase/firestore';

const RequestCertification = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitRequestCertification = (data) => {
    // Implement submission logic here
    addDoc(collection(db, 'certificationRequests'), data) // Save certification request data to Firebase
      .then(() => {
        reset(); // Reset form after submission
        window.alert('Request for crop certification applied successfully!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Request Certification</Typography>

        <form onSubmit={handleSubmit(onSubmitRequestCertification)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField {...register('cropName')} label="Crop name" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('quality')} label="Quality" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('quantity')} label="Quantity" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('desiredPrice')} label="Desired price" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('description')} label="Description" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RequestCertification;
