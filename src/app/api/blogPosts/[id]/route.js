import { NextResponse } from "next/server"
import connect from "@/utils/db"
import BlogPosts from "@/models/BlogPosts";

export const GET = async (request, {params}) => {
    const {id} = params
    try {
        await connect();

        const posts = await BlogPosts.findById(id);
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }

}

export const DELETE = async (request, {params}) => {
    const {id} = params
    try {
        await connect();

        await BlogPosts.findByIdAndDelete(id);
        return new NextResponse("Post has been deleted", {status: 200})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }

}