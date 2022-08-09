import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import firebaseConfig from '../Login/firebase.config';
import './Header.css';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const Home = () => {
    const navigate=useNavigate()
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const classes = useStyles();
    const handleLogin=()=>{
        firebase.auth().signOut().then(() => {
                navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    console.log(`ass ${loggedInUser.img}`)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Link className='link' to="/">RUET ETE</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <div className={classes.root}>
                            {loggedInUser.email?<Button className='log-out' onClick={handleLogin} >LogOut</Button>:<Button color="secondary"><Link className='log-in' to="/login">Log In</Link></Button>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Home;