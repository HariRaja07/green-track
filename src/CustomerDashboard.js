import React, { useEffect, useState } from 'react';
import { Typography, Table, TableHead, TableBody, TableCell, TableRow, Container, Paper } from '@mui/material';
import { db } from './firebase'; // Import your Firebase database
import { getDocs, collection } from 'firebase/firestore';

const CustomerDashboard = () => {
  const [availablePlants, setAvailablePlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'customerPortal'));
      setAvailablePlants(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Customer Dashboard</Typography>

        <Typography variant="h3" gutterBottom>Available Plants for Sale</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crop Name</TableCell>
              {/* Add other table headers if needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {availablePlants.map((plant, index) => (
              <TableRow key={index}>
                <TableCell>{plant.cropName}</TableCell>
                {/* Add other table cells as per the data structure */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default CustomerDashboard;
