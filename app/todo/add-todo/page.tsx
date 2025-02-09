"use client";

import { Button } from '@/components/ui/button'
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    title: z
        .string()
        .min(2,{message:"TODOタイトルは2文字以上で入力してください"}),
    detail: z
        .string()
        .max(100,{message:"TODO詳細は100文字以内で入力してください"}),
    status: z
        .string()
        .min(2,{message:"ステータスは2文字以上で入力してください"}),
})


const AddTodoPage = () => {
    const router =useRouter();
    const form =useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title:"",
            detail:"",
            status:"未完了"
        }
    })

async function onSubmit(value:z.infer<typeof formSchema>){
    const {title,detail,status}=value;
    try{
      await fetch("http://localhost:3000/api/todo",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({title,detail,status})
      });

      router.push("/");
      router.refresh();

    }catch(err){
      console.log(err)
    }
}



    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 px-7">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TODOタイトル</FormLabel>
                <FormControl>
                  <Input placeholder="TODOタイトル" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TODO詳細</FormLabel>
                <FormControl>
                  <Input placeholder="TODO詳細" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ステータス</FormLabel>
                <FormControl>
                  <Input placeholder="ステータス" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">登録</Button>
        </form>
      </Form>
    )
}

export default AddTodoPage