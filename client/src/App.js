import React, { useContext } from 'react';
import './App.css';
import {ListGroupItem, ListGroup, Navbar} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Store} from "./Store";

const App = () => {
    const { state } = useContext(Store);

    const todos = state.todos.map( todo => {
       return <ListGroupItem>{todo.text}</ListGroupItem>
    });

    return(
        <Container>
          <Navbar bg='dark' variant='dark' expand='sm' className='mt-5'>
              <Navbar.Brand>Todo List</Navbar.Brand>
          </Navbar>
          <ListGroup>
            {todos}
          </ListGroup>
        </Container>
    )
};

export default App;
