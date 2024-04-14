import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const articles = pgTable("articles",{
    id:serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    authorId: integer("author_id"),
})

export const articlesRelations = relations(articles,({one})=>({
    author: one(users,{
        fields:[articles.authorId],
        references:[users.userId],
    })
}))

export const users = pgTable("users",{
    userId:serial("user_id").primaryKey(),
    userName:text("user_name").notNull().default("User"),
})

export const usersRelations = relations(users,({many})=>({
    articles:many(articles)
}))