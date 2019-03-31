/*
  UI Component
*/
import React from 'react';

const Todos = ({todos, deletetodo})=> {
    
    const todolist = todos.length ? (
        todos.map(todo=>{
            return(
                <div onClick={()=>{deletetodo(todo.id)}} className="collection-item" key={todo.id}>
                    <span >{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have to todo's left</p>
    )

    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}
export default Todos;