'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';

const FormSchema = z.object({
    id:z.string(),
    username:z.string({
        invalid_type_error:'Please Enter Username',
    }).min(6,{message:"Username should of min 6 digits"}),
    content: z.string({
        invalid_type_error:'Please Enter Some Content.'
    }).min(10,{message:'Content should be of 10 digits min*'}),
    date:z.string(),
}) 

const CreatePost = FormSchema.omit({id:true,date:true});

export type State = {
    errors?: {
        username?: string[];
        content?: string[];
    };
    message?: string | null;
};

export async function createPost(prevState:State, formData:FormData){
    const validatedFields = CreatePost.safeParse({
        username : formData.get('username'),
        content : formData.get('content'),
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Post.'
        };
    }
    const {content,username} = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try{
        await sql`
        INSERT INTO posts (username,content,date)
         VALUES (${username},${content},${date})
        `;
    }catch(error){
        return {
            message:'Database Error: Failed to Create Post'
        }
    }
    revalidatePath('/posts');
    redirect('/posts');
}

export async function deletePost(id:string) {
    try {
        await sql`DELETE FROM posts WHERE id = ${id}`;
        revalidatePath('/posts');
        return {message:'Deleted Post'}
    } catch (error) {
        return {message:'Database Error: Failed to Delete Invoice'}        
    }
}