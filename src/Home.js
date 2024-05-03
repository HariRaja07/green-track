


import React from 'react';
import { Typography, Button, styled, Container, Paper } from '@mui/material';
import logo from './assets/herbal-medicine-icon.png';
import { Link } from 'react-router-dom';

const StyledHomeContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const StyledHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const StyledContent = styled(Paper)({
  textAlign: 'center',
  padding: '20px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Home = () => {
  return (
    <StyledHomeContainer maxWidth="md">
      <StyledHeader>
        <img src={logo} alt="Green Tracks Logo" style={{ width: '100px', marginBottom: '10px' }} />
        <Typography variant="h1" component="h1">Green Tracks</Typography>
      </StyledHeader>
      <StyledContent elevation={3}>
        <Typography variant="h2" gutterBottom>Enhancing Authenticity in Medicinal Plant Identification</Typography>
        <Typography variant="body1" paragraph>
          Welcome to Green Tracks, where we revolutionize the medicinal plant industry through cutting-edge image processing software powered by machine learning. Our mission is to ensure authenticity and integrity in the medicinal plant supply chain, providing accurate identification of plant species for a transparent and trustworthy marketplace.
        </Typography>
        <Typography variant="h3">Our Solution</Typography>
        <Typography variant="body1">
          <strong>Identifying Medicinal Plants</strong><br />
          Our software is designed to accurately identify different species of medicinal plants based on images. With advanced machine learning algorithms, we can swiftly and accurately categorize plants to streamline the identification process.
        </Typography>
        <StyledButton component={Link} to="/upload">Upload Image</StyledButton>
        <StyledButton component={Link} to="/admindashboard">Admin Dashboard</StyledButton>
        <StyledButton component={Link} to="/farmerdashboard">Farmer Dashboard</StyledButton>
        <StyledButton component={Link} to="/cutomerdashboard">Customer Dashboard</StyledButton>
        <Typography variant="body1">
          <strong>Enhancing Authenticity</strong><br />
          At Green Tracks, authenticity is our top priority. By verifying the plant species with precision, we prevent misidentification and fraudulent practices, ensuring that consumers receive genuine products every time.
        </Typography>
        <Typography variant="body1">
          <strong>Ensuring Integrity</strong><br />
          Maintaining the integrity of the medicinal plant supply chain is crucial for sustainable sourcing. Our software contributes to this by tracking and verifying the origin, quality, and handling of plants throughout the supply chain, promoting transparency and trust.
        </Typography>
        <Typography variant="h3">Our Impact</Typography>
        <Typography variant="body1">
          <strong>For Consumers</strong><br />
          Benefit from guaranteed accurate and safe medicinal products, knowing that the plants used are authentic and of the highest quality.
        </Typography>
        <Typography variant="body1">
          <strong>For Farmers & Collectors</strong><br />
          Access increased market opportunities and fair pricing, empowering agriculture communities to thrive in the medicinal plant industry.
        </Typography>
        <Typography variant="body1">
          <strong>For Pharmaceutical Companies</strong><br />
          Source high-quality ingredients reliably, meeting regulatory standards and delivering safe and effective products to consumers.
        </Typography>
        <Typography variant="body1">
          <strong>For Government & Regulatory Agencies</strong><br />
          Enhance monitoring and control of the medicinal plant trade, ensuring compliance and sustainability in the marketplace.
        </Typography>
        <Typography variant="body1">
          Join us at Green Tracks and experience the future of medicinal plant identification – reliable, authentic, and sustainable. Together, let's shape a greener and healthier world.
        </Typography>
      </StyledContent>
    </StyledHomeContainer>
  );
};

export default Home;
