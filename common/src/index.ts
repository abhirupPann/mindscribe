import {z} from "zod"


export const blogPostSchema = z.object({
    "title": z.string(),
    "content": z.string(),
    "published": z.boolean(),
  })


export const blogPutSchema = z.object({
    "id": z.string(),
    "title": z.string(),
    "content": z.string(),
  })


export const signupPostSchema = z.object({
    "email": z.string().email(),
    "password": z.string().min(4),
    "name": z.string().optional()
  })


export const signinPostSchema = z.object({
    "email": z.string().email(),
    "password": z.string().min(4),
  })



//type inference using zod
export type blogPostType = z.infer<typeof blogPostSchema>
export type blogPutType = z.infer<typeof blogPutSchema>
export type signupPostType = z.infer<typeof signupPostSchema>
export type singinPostType = z.infer<typeof signinPostSchema>
