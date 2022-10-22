import React, {useState} from "react";
import { useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {

    
    const posts= useOutletContext()
    const {idx}=useParams()

    const [message, setMessage] = useState('')

    function updateMessageState(event) {
        setMessage(event.target.value)
    }

    async function messageHandler (postId) {
        postId.preventDefault();
        try{
            const messageResponse = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts${postId}/messages`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application.json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    message:{
                        content:`${message}`
                    }
                })
            })
            const messReturn = await messageResponse.json()
            console.log('message returned: ', messReturn)
        } catch (error) {
            console.log(error)
        }}
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
            <form onSubmit={messageHandler}>
                <p>Message {post.author.username}, don't forget to include contact information!</p>
                <input type='text' value= {message} onChange={updateMessageState}></input>
                <button type= 'submit'>Send</button>
            </form>
        </div>

    )
}

export default PostDetails