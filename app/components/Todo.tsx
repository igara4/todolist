import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


const Todo = () => {
  return (
    <div>
           <Card>
      <CardHeader>
        <CardTitle>TODO1</CardTitle>
        <CardDescription>TODO Detail</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">削除</Button>
        <Button>編集</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Todo