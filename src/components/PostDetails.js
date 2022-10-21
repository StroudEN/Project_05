import React from "react";
import { useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {

    const posts= useOutletContext()
    const {idx}=useParams()

    const post = posts[idx]
    console.dir(post)
    return(
        <div>
            <h2>{post.title}</h2>
            <p>posted by: {post.author.username}</p>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>Location: {post.location}</p>
            {/* add message input and submit */}
        </div>

    )
}

export default PostDetails