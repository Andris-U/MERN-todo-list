import React, { useContext } from 'react';
import './App.css';
import {Navbar} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

const App = () => {

    return(
        <Container>
          <Navbar bg='dark' variant='dark' expand='sm' className='mt-5'>
              <Navbar.Brand>Todo List</Navbar.Brand>
          </Navbar>
        </Container>
    )
};

export default App;
