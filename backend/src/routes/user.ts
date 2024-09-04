import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupPostSchema, signinPostSchema } from "@abhiruppann/blog-common";
const userRouter = new Hono<{
    Bindings : {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables : {
          userId: string
      }
  }>()

  userRouter.get('/', async(c)=>{
    return c.text(`This is database url ${c.env.DATABASE_URL} \n This is toke ${c.env.JWT_SECRET}`);  
  })


userRouter.post('signup', async(c)=> {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const {success} = signupPostSchema.safeParse(body);

    try{
    if(!success) return c.json({msg: "Ivalid Credentials!"});
    const user =await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
        name: body.username
      }
    })
  
      const token = await sign({id: user.id},c.env?.JWT_SECRET);
       
      return c.text(token);
    }catch(err){
      //@ts-ignore
      console.log(err.message)
      return c.status(403);
    }
   
    });



  userRouter.post('signin', async(c)=> {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const {success} = signinPostSchema.safeParse(body);
    try{
      if(!success) return c.json({msg: "Ivalid Credentials!"});
      const user = await prisma.user.findUnique({
        where:{
          email: body.email,
          password: body.password
        }
      }
      )
  
      if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
      }
      const token = await sign({id: user.id}, c.env?.JWT_SECRET);
      
      return c.text(token);
    }catch(err){
      //@ts-ignore
      console.log(err.message)
      return c.status(403);
    }
  
  });

//todo: Pagination
userRouter.get('bulk', async(c)=> {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    
    const posts = await prisma.post.findMany();
    return c.json(posts);
  } catch (e: any) {
    console.log(e.message)
    return c.status(403);
  }
  });

export default userRouter;