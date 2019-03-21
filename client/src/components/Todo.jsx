import React, { useContext } from 'react';
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import {Store} from "../Store";

const Todo = props => {
    const { dispatch } = useContext(Store);

    const handleClick = event => {
        fetch('/api/todos/' + props.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "checked": props.checked })
        })
            .then(() => props.fetchDataAction())
    };

    const handleClickDelete = () => {
        fetch('/api/todos/' + props.id, {
            method: 'DELETE'
        })
            .then(() => props.fetchDataAction())
    };

    return (
        <ListGroupItem
            variant={props.checked ? 'success' : ''}
            onClick={handleClick}
            className="justify-content-between"
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