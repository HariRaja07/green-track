import React, { useEffect, useState } from 'react';
import { Typography, Button, Table, TableHead, TableBody, TableCell, TableRow, Container, Paper } from '@mui/material';
import { db } from './firebase'; // Import your Firebase database
import { collection, getDocs, updateDoc, doc, addDoc } from 'firebase/firestore';

const FinalVerification = () => {
  const [certificationRequests, setCertificationRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const querySnapshot = await getDocs(collection(db, 'certificationRequests'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCertificationRequests(data);
    };
    fetchRequests();
  }, []);

  const approveCertificationRequest = async (id, cropId) => {
    try {
      await updateDoc(doc(db, 'certificationRequests', id), { approved: true }); // Update certification request status to 'Approved'
      console.log('Certification request approved successfully!');
      // Add logic to update crop status and post the approved crop to the customer portal
      // For example:
      const approvedRequest = certificationRequests.find((request) => request.id === id);
      await addDoc(collection(db, 'customerPortal'), { ...approvedRequest, status: 'Final Verification Approved' });
      await db.collection('crops').doc(cropId).update({ status: 'Final Verification Approved' }); // Update crop status in 'crops' collection
    } catch (error) {
      console.error('Error approving certification request: ', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Final Verification</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crop Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificationRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.cropName}</TableCell>
                <TableCell>
                  {!request.approved && (
                    <Button variant="contained" color="primary" onClick={() => approveCertificationRequest(request.id, request.cropId)}>
                      Approve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default FinalVerification;
