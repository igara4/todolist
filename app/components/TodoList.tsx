import React from 'react'
import Todo from './Todo';
import { TodoData } from '../types/types';

interface TodoAllDataProps{
  todoAllData:TodoData[];
}


const TodoList = ({todoAllData}:TodoAllDataProps) => {
  return (
    <div  className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        {todoAllData.map((todoData:TodoData)=>(
        <Todo key={todoData.id} todoData={todoData}/>
        ))}
    </div>
  )
}

export default TodoList