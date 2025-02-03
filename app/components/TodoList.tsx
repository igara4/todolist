import React from 'react'
import Todo from './Todo';

const TodoList = () => {
  return (
    <div  className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        <Todo/>
        <Todo/>
        <Todo/>
    </div>
  )
}

export default TodoList