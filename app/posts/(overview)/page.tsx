import React from 'react'
import { fetchPosts } from '@/app/lib/data'
import { Button } from '@/components/ui/button';
import { DeletePost } from '@/app/ui/posts/buttons';
import Search from '@/app/ui/posts/search';
import Posts from '@/app/ui/posts/posts';

export default async function page({searchParams}:{searchParams?:{
  query?:string;
}}) {
  const query = searchParams?.query || '';
  return (
    <main className='p-4 space-y-2'>
      <div>
        <Search placeholder='Search Posts...'/>
      </div>
      <div className=''>
        <Posts query={query}/>
      </div>
    </main>
  )
}
