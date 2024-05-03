import React, { useEffect, useState } from 'react';
import { Typography, Button, Table, TableHead, TableBody, TableCell, TableRow, Container, Paper } from '@mui/material';
import { db } from './firebase'; // Import your Firebase database
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const Midterm = () => {
  const [midTermVerification, setMidtermApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const querySnapshot = await getDocs(collection(db, 'midTermVerification'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMidtermApplications(data);
    };
    fetchApplications();
  }, []);

  const approveMidtermApplication = async (id) => {
    try {
      await updateDoc(doc(db, 'midTermVerification', id), { approved: true });
      console.log('Midterm application approved successfully!');
    } catch (error) {
      console.error('Error approving midterm application: ', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>Midterm Verification</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Crop Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {midTermVerification.map((application) => (
              <TableRow key={application.id}>
                <TableCell>{application.cropName}</TableCell>
                <TableCell>
                  {!application.approved && (
                    <Button variant="contained" color="primary" onClick={() => approveMidtermApplication(application.id)}>
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

export default Midterm;
