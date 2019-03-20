const express = require('express');
const router = express.Router();

// Todo Model
const Todo = require('../../models/Todo');

// @route GET api/todos
// @desc  Get All Todos
router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
});

// @route POST api/todos
// @desc  Creates new todo
router.post('/', (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then(todo => res.json(todo))
        .catch(err => res.json({err}))
});

module.exports = router;