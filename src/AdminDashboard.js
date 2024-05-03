import React from 'react';
import { Typography, Button, Container, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const viewApproveApplicant = () => {
    navigate('/approve-new-applicant'); // Navigate to Approve New Applicant page
  };

  const viewMidTermVerification = () => {
    navigate('/mid-term'); // Navigate to Mid Term Verification page
  };

  const viewFinalVerification = () => {
    navigate('/final-verification'); // Navigate to Final Verification page
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Regulatory Admin Dashboard</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button onClick={viewApproveApplicant} variant="contained" color="primary" fullWidth>
              Approve New Applicant
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={viewMidTermVerification} variant="contained" color="primary" fullWidth>
              Mid Term Verification
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={viewFinalVerification} variant="contained" color="primary" fullWidth>
              Final Verification
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
