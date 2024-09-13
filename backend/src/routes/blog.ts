import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { blogPostSchema, blogPutSchema } from "@abhiruppann/blog-common";

const blogRouter = new Hono<{
    Bindings : {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables : {
          userId: string
      }
  }>()
  //middleware
  blogRouter.use('/*', async (c, next) => {
    try{
      const jwt = c.req.header("Authorization");
      if(!jwt){
        console.log("Unauthorized");
        return c.json(401);
      }
      const token =  jwt.split(" ")[1];
    
      const user  = await verify(token,c.env?.JWT_SECRET);
      if(user){
        c.set("jwtPayload", user.id);
        await next()
      }else{
          console.log("Unauthorized");
          return c.json(401);
        }
    }catch(e: any){
      return c.text("Unauthorized")
    }

     
   
  })

 
  //protected route
blogRouter.post('/', async(c)=> {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())    
    const body = await c.req.json();
    const {success} = blogPostSchema.safeParse(body);
    const authorId = c.get("jwtPayload");
    try {
      if(!success) return c.json({msg: "Ivalid Credentials !"});
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                published: body.published,
                authorId
            }
        })
        return c.json({id: blog.id});
    } catch (e:any) {
        console.log(e.message)
        return c.status(411);
        
    }
    });


  

  //protected route
  //todo : pagination
  blogRouter.put('/', async(c)=> {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const {success} = blogPutSchema.safeParse(body);
    const authorId = c.get("userId");
    try{
      if(!success) return c.json({msg: "Ivalid Credentials!"});
      
      await prisma.post.update({
        where: {
          id: body.id,
          authorId
        },
        data: {
          title: body.title,
          content: body.content
        }
      });
      return c.text("Post Updated Successfully!")

    }catch(e: any){
        console.log(e.message)
        return c.status(411);
    }
    
});


  //protected route
  blogRouter.get('/:id', async(c)=> {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
      const post = await prisma.post.findUnique({
        where:{
          id
        },
        include:{
          author: true
        }
      })
      return c.json(post);
    } catch (e: any) {
      console.log(e.message)
      return c.status(411);
    }
   })



// blogRouter.get('/notbulk',async(c)=> {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env?.DATABASE_URL,
//   }).$extends(withAccelerate())
//   const id = "0b50a930-0e2e-4e81-9083-20a5475683f0"
//   try{
//      const posts =  await prisma.post.findUnique({
//       where:{
//         id
//       }
//      });
//      return c.json(posts);
//   }catch(e){
//     console.log(e);
//   }
// })
//todo: Pagination

// {
//   select: {
//     content: true,
//     title: true,
//     id: true,
//     author: {
//       select: {
//         name: true
//       }
//     }
//   }
// }
//todo: pagination

export default blogRouter;