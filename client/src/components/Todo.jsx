import React, { useContext } from 'react';
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import {Store} from "../Store";

const Todo = props => {
    const { dispatch } = useContext(Store);

    const handleClick = event => {
        dispatch({ type: 'TOGGLE_CHECKED', payload: props.id })
    };
    const handleClickDelete = () => {
        dispatch({ type: 'DELETE_TODO', payload: props.id })
    };

    return (
        <ListGroupItem
            variant={props.checked ? 'success' : ''}
            onClick={handleClick}
            className="justify-content-between list-item"
        >
            <Row>
                <Col sm={11}>
                    <div>{props.text}</div>
                </Col>
                <Col sm={1}>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={handleClickDelete}
                    >X</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
};

export default Todo;