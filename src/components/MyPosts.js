import React, { useState, useEffect } from "react";


const MyPosts = () => {

    const [myPosts, setMyPosts] = useState([])
    const [myMessages, setMyMessages] = useState([])
    const [myID, setMyID] = useState('')
    const [myName, setMyName] = useState('')
   
// -----------------Delete Functions------------------------
    
    async function deletePost(id){
        try{
        const deleteVar = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`,{
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const deletePass= await deleteVar.json()
        console.log('delete success', deletePass)
    } catch (error) {
        console.log(error)
    }}
// ----------------OnBoot Profile Get-----------------------------
    useEffect(() => {
        
        async function fetchProducts () {
            try{
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':`Bearer ${localStorage.getItem('token')}`
                    }
                })
                const info = await response.json();

                console.log(info.data)
                setMyPosts(info.data.posts)
                setMyMessages(info.data.messages)
                setMyID(info.data._id)
                setMyName(info.data.username)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[])


    return(
        <div>
            {myName.length ? <p className='welcomeBack'>Welcome back, {myName}!</p>: <p className='welcomeBack'>Welcome back, friend</p>}
            <div className="messageBoard">
                <p className='postHeader'>Your Messages:</p>
                {myMessages && myMessages.length ? myMessages.map((msgevent, idx) => {
                    
                    return(
                        <div key={idx} className='postItem'>
                            {/* {console.log(msgevent)} */}
                            <p>{msgevent.title}</p>
                        </div>
                    )
                }):<p className='postItem'>No active messages</p>
                }
                <p className='postHeader'>Your Posts:</p>
                {myPosts && myPosts.length ? myPosts.map((event, idx) => {
                    if (event.active==false){
                    return null 
                } else {
                    
                    return(
                        <div key={idx} className='postItem'>
                            
                            <p>{event.title}</p>
                            <button onClick={()=>{deletePost(event._id)}}>Delete</button>
                        </div>
                    )}
                }):<p className='postItem'>No active posts</p>
                }
            </div>
        </div>
    )
}

export default MyPosts