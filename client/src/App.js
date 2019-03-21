import React, { useContext, useEffect } from 'react';
import { Store } from "./Store";

import './App.css';
import {ListGroup, Navbar, Container, Button, Form, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from "./components/Todo";


const App = () => {
    const { state, dispatch } = useContext(Store);

    const fetchDataAction = async () => {
        const data = await fetch('/api/todos');
        const dataJSON = await data.json();
        return  dispatch({ type: 'PULL_TODOS', payload: dataJSON })
    };

    useEffect(() => {
        fetchDataAction()
            .catch(err => console.log(err));
    }, []);

    const todos = state.todos.map( todo => {
      return (
          <Todo
              checked={todo.checked}
              text={todo.text}
              id={todo._id}
              fetchDataAction={fetchDataAction}
          />
      )
    });

    const handleSubmit = event => {
        event.preventDefault();
        const text = { text: event.target.todoText.value };
        fetch('/api/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(text)
        })
            .then( res => {
                fetchDataAction();
            })
            .catch(err => console.log(err));
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
