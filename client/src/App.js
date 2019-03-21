import React, { useContext } from 'react';
import { Store } from "./Store";

import './App.css';
import {ListGroup, Navbar, Container, Button, Form, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from "./components/Todo";

const App = () => {
    const { state, dispatch } = useContext(Store);

    const todos = state.todos.map( todo => {
      return <Todo checked={todo.checked} text={todo.text} id={todo.id}/>
    });

    const handleSubmit = event => {
        event.preventDefault();
        const text = event.target.todoText.value;
        dispatch({ type: "ADD_TODO", payload: text })
        event.target.todoText.value = '';
    };

    return(
        <Container>
          <Navbar
              bg='dark'
              variant='dark'
              expand='sm'
              className='mt-5 justify-content-between'
          >
              <Navbar.Brand>Todo List</Navbar.Brand>
              <Form
                  onSubmit={handleSubmit}
                  inline
              >
                      <FormControl
                          type="text"
                          placeholder="New todo..."
                          className=" mr-sm-2"
                          name='todoText'
                      />
                      <Button type="submit">Submit</Button>
              </Form>
          </Navbar>
          <ListGroup>
            {todos}
          </ListGroup>
        </Container>
    )
};

export default App;
