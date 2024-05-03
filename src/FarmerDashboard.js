import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  const navigate = useNavigate();

  const handleCropRegistration = () => {
    navigate('/crop-registration');
  };

  const handleMidTermVerification = () => {
    navigate('/mid-term-verification');
  };

  const handleRequestCertification = () => {
    navigate('/request-certification');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ marginBottom: 4 }}>Farmer Dashboard</Typography>

      <Button variant="contained" onClick={handleCropRegistration} sx={{ marginBottom: 2 }}>
        Crop Registration
      </Button>
      <Button variant="contained" onClick={handleMidTermVerification} sx={{ marginBottom: 2 }}>
        Apply Mid-Term Verification
      </Button>
      <Button variant="contained" onClick={handleRequestCertification}>
        Request Certification
      </Button>
    </Box>
  );
};

export default FarmerDashboard;
