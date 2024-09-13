import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/Index";
import { BlogSkeleton } from "../components/Skeletons";
import AppBar from "../components/AppBar";
import FullBlog from "../components/FullBlog";


function Blog() {

  const {id}= useParams();
  const{data, loading} = useBlog(id || "");
  console.log(data);
  console.log(loading)
  return (
    <div>
      <AppBar searchbar={false}/>

      {loading ? (
        <div><BlogSkeleton/></div>
      ) : data ? (

        <div><FullBlog content={data.content} authorId={data.authorId} author={data.author} id={data.id} published title={data.title}/></div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  )
}

export default Blog
