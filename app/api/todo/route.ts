import { NextResponse } from "next/server";
import {prisma} from "../../../lib/prismaClient"


export const GET =async(req:Request)=>{
    const allTodos = await prisma.todo.findMany();
    return NextResponse.json(allTodos);
}

export const POST =async(req:Request)=>{
    const {title,detail,status} = await req.json();

    const post = await prisma.todo.create({
        data:{
            title,
            detail,
            status,
        }
    });
    return NextResponse.json(post);
}