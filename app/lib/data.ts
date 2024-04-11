import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPosts() {
    noStore();
    try {
      const data = await sql`
        SELECT id,username,content FROM posts
        ORDER BY date desc 
        `;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest invoices.');
    }
  }

export async function fetchFilteredPosts(query:string){
  noStore();
  try{
    const posts = await sql`
      SELECT 
        id,
        username,
        content
      FROM posts WHERE
       username ILIKE ${`%${query}%`} OR
      content ILIKE ${`%${query}%`}
    `
    return posts.rows;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch posts.');
  }
}