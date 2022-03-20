import React, {useState}                       from 'react';
import PropTypes   from 'prop-types'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";


const CreateTodoForm = ({createTodo}) => {
    const [formValues, setFormValues] = useState({text: '', description: ''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(formValues);
        e.target.reset();
        setFormValues({text: '', description: ''})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter Task</Label>
                <Input
                    placeholder='Do some code'
                    name='text'
                    value={formValues.text}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label>Describe Task</Label>
                <Input
                    type='textarea'
                    placeholder='Write some short description about your task'
                    name='description'
                    value={formValues.description}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type='submit'>Create Task</Button>
        </Form>
    );
};

CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}


export default CreateTodoForm;
