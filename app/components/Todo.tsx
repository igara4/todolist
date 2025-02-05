import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoData } from '../types/types';

interface TodoDataProps{
  todoData:TodoData
}


const Todo = ({todoData}:TodoDataProps) => {

  const {id,title,detail,status}=todoData;

  return (
    <div>
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{status}</CardDescription>
      </CardHeader>
      <CardContent>{detail}</CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">削除</Button>
        <Button>編集</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Todo