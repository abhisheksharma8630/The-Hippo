import { cache } from "react";
import db from "./drizzle";

export const getArticles = cache(async()=>{
    const data = await db.query.articles.findMany({
        with:{
            author:true
        }
    });
    return data;
})