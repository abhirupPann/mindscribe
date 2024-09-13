import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar';
import { useBlogs } from '../hooks/Index';
import { BlogsSkeleton } from '../components/Skeletons';

const values={
    avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    author: "Author",
    date: "Dec 3, 2023",
    title: "How a ugly looking website makes $5000 a month without affiliate",
    content:  "This is the description",
    img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*kXaqBRhkkPB_zd0m.png"
}

function Blogs() {
  const {data, loading} = useBlogs();
  return (
    <div className=' mx-[10vw]'> 
     <div>
     <AppBar searchbar/>
     {loading ? (
      <BlogsSkeleton/>
      ) : data ? (
        <div>{data.map((val: any, i: any )=>(
          <BlogCard key={i} avatar={values.avatar} author={val.authorId} date={values.date} title={val.title} content={val.content} img={values.img} id={val.id}/>))}</div>
      ) : (
        <div>No data available</div>
      )}
          
     </div>
 
      
    </div>
  )
}

export default Blogs
