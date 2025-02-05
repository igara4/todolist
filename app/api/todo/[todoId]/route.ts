import { NextResponse } from "next/server";
import {prisma} from "../../../../lib/prismaClient"


export async function GET(req:Request,{params}:{params:{todoId:string}}){
    const todoId = params.todoId;
    const todoDetailData = await prisma.todo.findUnique({where:{
        id:parseInt(todoId),
    }});
    return NextResponse.json(todoDetailData);
}