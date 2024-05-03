import React, { useEffect, useState } from 'react';
import { Typography, Button, Table, TableHead, TableBody, TableCell, TableRow, Container, Paper } from '@mui/material';
import { db } from './firebase'; // Import your Firebase database
import { addDoc, collection, getDocs } from 'firebase/firestore';

const ApproveNewApplicant = () => {
  const [newApplicants, setNewApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'newApplicants')); // Fetch from 'newApplicants' collection
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNewApplicants(data);
    };
    fetchData();
  }, []);

  const approveApplicant = async (id, cropId) => {
    const applicant = newApplicants.find((applicant) => applicant.id === id);
    try {
      const docRef = await addDoc(collection(db, 'crops'), { ...applicant, status: 'Approved' }); // Move approved applicants to 'crops' collection with status 'Approved'
      console.log('Document written with ID: ', docRef.id);
      await db.collection('newApplicants').doc(id).delete(); // Remove from 'newApplicants' collection
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h3" gutterBottom>New Applicants</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crop Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newApplicants.map((applicant) => (
              <TableRow key={applicant.id}>
                <TableCell>{applicant.cropName}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => approveApplicant(applicant.id)}>
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ApproveNewApplicant;
