import { NextResponse } from "next/server";
import {prisma} from "../../../lib/prismaClient"


export async function GET(req:Request){
    const allTodos = await prisma.todo.findMany();
    return NextResponse.json(allTodos);
}