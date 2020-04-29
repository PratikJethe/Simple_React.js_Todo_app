import React from 'react'


const Todos = ({ todos, deleteTodo }) => {
    console.log(todos.length)

    const todolist = todos.length ? todos.map(todo => {
        return (
            <div className='collection-item todo' key={todo.id}>
                <li>{todo.content}</li>
                <button onClick={() => { deleteTodo(todo.id) }} className='waves-effect waves-light btn'>Delete</button>
            </div>
        )
    }) : (<p className='center'>
        No Todos to Do
    </p>)


    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
}
export default Todos;