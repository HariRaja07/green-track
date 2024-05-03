import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
                console.log('Signed out successfully');
            })
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    };

    return (
        <>
            <nav>
                <p>Welcome to your Profile</p>
                <div>
                    {user ? (
                        <>
                            <p>User Email: {user.email}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <button onClick={() => navigate('/login')}>Login</button>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Profile;
