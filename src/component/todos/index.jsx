import React, {useState}               from 'react';
import ListView                        from "../listview";
import TableView                       from "../table";
import Controller                      from "../controllers";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import CreateTodoForm                  from "../create-todo-form";
import shortid                         from "shortid";

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            id         : '1',
            text       : 'New text',
            description: 'description',
            time       : new Date(),
            isComplete : false,
            isSelect   : false
        },
        {
            id         : '2',
            text       : 'New text 2',
            description: 'description 2',
            time       : new Date(),
            isComplete : false,
            isSelect   : false
        },
    ]);

    const [isOpenTodoForm, setIsOpenTodoForm] = useState(false);
    const [searchTerm, setSearchTerm]         = useState('');
    const [view, setView]                     = useState('list');
    const [filter, setFilter]                 = useState('all');

    const toggleSelect   = todoId => {
        const newTodos = [...todos];
        const todo     = todos.find(t => t.id === todoId);
        todo.isSelect  = !todo.isSelect;
        setTodos(newTodos)
    }
    const toggleComplete = todoId => {
        const newTodos  = [...todos];
        const todo      = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;
        setTodos(newTodos)
    }
    const toggleForm     = () => {
        setIsOpenTodoForm(!isOpenTodoForm)
    }
    const handleSearch   = (value) => {
        setSearchTerm(value)
    }
    const createTodo     = (todo) => {
        todo.id         = shortid.generate();
        todo.time       = new Date();
        todo.isComplete = false;
        todo.isSelect   = false;

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        toggleForm()
    }
    const handleFilter   = (filter) => {
        setFilter(filter)
    }
    const changeView     = (e) => {
        setView(e.target.value)
    }
    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.isComplete)
        setTodos(newTodos);
    }
    const clearSelected  = () => {
        const newTodos = todos.filter(todo => !todo.isSelect)
        setTodos(newTodos);
    }
    const reset          = () => {
        setFilter('all');
        setSearchTerm('');
        setView('list');
        setIsOpenTodoForm(false);
    }

    const performSearch = () => {
        return todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    const performFilter = (todos) => {
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }

    const getView = () => {
        let todos = performSearch();
        todos     = performFilter(todos)
        return view === 'list' ? (
            <ListView
                todos={todos}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />

        ) : (
                   <TableView
                       todos={todos}
                       toggleSelect={toggleSelect}
                       toggleComplete={toggleComplete}
                   />
               )
    }

    return (
        <>
            <h1 className='display-4 text-center mb-5'>Coder todos</h1>
            <Controller
                term={searchTerm}
                view={view}
                toggleForm={toggleForm}
                handleSearch={handleSearch}
                handleFilter={handleFilter}
                changeView={changeView}
                clearCompleted={clearCompleted}
                clearSelected={clearSelected}
                reset={reset}
            />
            <div>{getView()}</div>
            <Modal
                isOpen={isOpenTodoForm}
                toggle={toggleForm}
            >
                <ModalHeader toggle={toggleForm}>
                    Create New Todo Item
                </ModalHeader>
                <ModalBody>
                    <CreateTodoForm createTodo={createTodo}/>
                </ModalBody>
            </Modal>
        </>
    );
};

export default Todos;
