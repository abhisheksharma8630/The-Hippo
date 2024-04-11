import { fetchFilteredPosts } from '@/app/lib/data';
import React from 'react'
import { DeletePost } from './buttons';

export default async function Posts({query}:{query:string}) {
    const posts = await fetchFilteredPosts(query);
    return (
    <div className='p-4 overflow-y-auto h-[70vh] w-1/2'>{
        posts.map((post)=>(
            <div key={post.id} className='border-slate-500 border-2 p-4 mb-2 rounded-lg max-w-[400px]'>
                <p><b>Username</b>{post.username}</p>
                <p><b>Content</b>{post.content}</p>
                <DeletePost id={post.id}/>
            </div>
        ))
    }</div>
  )
}
