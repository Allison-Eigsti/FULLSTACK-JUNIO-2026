import { useLoaderData } from "react-router-dom";

function Post() {
    const post = useLoaderData()

    console.log(post)

    return (
        <p>Post: {post.title} 
        Id: {post.id}
        </p>
    )
}

export default Post
