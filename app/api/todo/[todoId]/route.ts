import { NextResponse } from "next/server";
import {prisma} from "../../../../lib/prismaClient"


export const GET =async(req:Request,{params}:{params:{todoId:string}})=>{
    const todoId = params.todoId;
    const todoDetailData = await prisma.todo.findUnique({where:{
        id:parseInt(todoId),
    }});
    return NextResponse.json(todoDetailData);
}
