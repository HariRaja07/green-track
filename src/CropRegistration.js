import React from 'react';
import { Typography, Button, TextField, Checkbox, FormControlLabel, Container, Grid, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { db } from './firebase'; // Import your Firebase database
import { addDoc, collection } from 'firebase/firestore';

const CropRegistration = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitCropRegistration = (data) => {
    // Generate a unique cropId for each crop
    const cropId = `crop-${Date.now()}`;

    // Implement validation and submission logic here
    addDoc(collection(db, 'newApplicants'), { ...data, approved: false, cropId: cropId, status: 'Registered' }) // Save crop registration data to Firebase
      .then(() => {
        reset(); // Reset form after submission
        window.alert('Crop registration submitted for approval!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Crop Registration</Typography>

        <form onSubmit={handleSubmit(onSubmitCropRegistration)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField {...register('cropName')} label="Enter the crop name" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('plotAddress')} label="Plot address" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('areaOfCultivation')} label="Area of cultivation" fullWidth required />
            </Grid>
            <Grid item xs={6}>
              <TextField {...register('timeToHarvest')} label="Time required till harvest" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox {...register('isSelfSufficient')} />}
                label="Is the cultivation self-sufficient"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField {...register('additionalInfo')} label="Additional info" multiline rows={4} fullWidth />
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

export default CropRegistration;
