/*import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for navigation bar styling
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import {useNavigate } from 'react-router-dom';
const Navbar = () => {
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
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>
                    {user ? (
                        <Link className="logout-btn" onClick={handleLogout}>Logout</Link>
                    ) : (
                        <Link className="login-link" to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
*/
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import {useNavigate } from 'react-router-dom';

const NavbarMui = () => {
    const StyledToolbar = styled(Toolbar)`
        display: flex;
        justify-content: space-between;
    `;

    const NavLink = styled(Link)`
        color: inherit;
        text-decoration: none;
        padding: 10px;
        &:hover {
            background-color: #555;
        }
    `;

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
        <AppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" component={NavLink} to="/">
                    Green Tracks
                </Typography>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    {user ? (
                        <NavLink onClick={handleLogout}>Logout</NavLink>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
                </div>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavbarMui;
