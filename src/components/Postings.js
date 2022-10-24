import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';


const Postings = () => {

    const posts = useOutletContext();
    console.log('We are in the post component: ', posts)

    // const { id } = useParams();

    // console.log('this is the params object: ', useParams())
    // console.log('this is our parameter: ', id)

    // const post = posts[id];

    return(
        <div id='postContainer'>
            
                {posts.map((post, idx) => {
                    return(
                    <div key={idx} className='postItem'>
                        <p>{post.title}</p>
                        <Link to={`/postings/${idx}`}>Details</Link>
                    </div>
                    
                    )
                })}   
            
        </div>
    )
}

export default Postings