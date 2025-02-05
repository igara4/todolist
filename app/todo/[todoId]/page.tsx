import { TodoData } from '@/app/types/types';
import React from 'react'

async function getDetailTodoData(id:number){
  const response= await fetch(`http://localhost:3000/api/todo/${id}`,{
    cache:"no-store", 
});

  const  todoAllData:TodoData[] = await response.json();

  return todoAllData;
}


const TodoDetailPage = () => {
  return (
    <div>TodoDetailPage</div>
  )
}

export default TodoDetailPage