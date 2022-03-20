import React     from 'react';
import PropTypes from 'prop-types'

import {Button, Input} from "reactstrap";

const RowItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <tr>
            <td scope='row'>
                <Input
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />

            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td><h5>{todo.text}</h5></td>
            <td className={`text-end`}>
                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Complete' : 'Running'}
                </Button>
            </td>
        </tr>
    );
};

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default RowItem;
