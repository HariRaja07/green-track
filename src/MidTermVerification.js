import React from 'react';
import { Typography, Button, TextField, Container, Paper, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { db } from './firebase'; // Import your Firebase database
import { addDoc, collection } from 'firebase/firestore';

const MidtermVerification = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitMidtermVerification = (data) => {
    // Implement submission logic here
    addDoc(collection(db, 'midTermVerification'), data) // Save mid-term verification data to Firebase
      .then(() => {
        reset(); // Reset form after submission
        window.alert('Application for midterm verification applied successfully!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Midterm Verification</Typography>

        <form onSubmit={handleSubmit(onSubmitMidtermVerification)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField {...register('cropName')} label="Crop name" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('monthsTillHarvest')} label="Months remaining till harvest" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('progress')} label="Progress" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('requirements')} label="Further requirements" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('queries')} label="Queries" multiline rows={4} fullWidth />
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

export default MidtermVerification;
