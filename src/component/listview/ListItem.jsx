import React                          from 'react';
import PropTypes from 'prop-types'
import {Button, Input, ListGroupItem} from "reactstrap";


const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <Input
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
                className='ms-auto'
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Complete' : 'Running'}
            </Button>
        </ListGroupItem>
    );
};

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListItem;
