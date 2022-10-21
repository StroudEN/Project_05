import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import MyPosts from "./MyPosts";

const Settings = () => {
// -----------------Variable Declaration for Form---------------------------
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(true)

    const [posts, setPosts] = useOutletContext();
// -----------------Functions for Form Submission-----------------------
    function updateTitleState(event) {
        setTitle(event.target.value)
    }

    function updateLocationState(event) {
        setLocation(event.target.value)
    }    
    function updateDescriptionState(event) {
        setDescription(event.target.value)
    }

    function updatePriceState(event) {
        setPrice(event.target.value)
    }

    function updateWillDeliverState() {
        setWillDeliver(!willDeliver)
        console.log(willDeliver)
    }

    function logout() {
        localStorage.removeItem('token')
    }
// ------------------Wake up API wagie you have work to do---------------------
async function submitHandler (event) {
    event.preventDefault();
    try{
        const postResponse = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    location: location,
                    price: price,
                    willDeliver: willDeliver
                }
            })
        })
        const postData = await postResponse.json();
        console.log('post successful, ', postData)
        // ... spread operator copies the posts array and adds the second newly created posts
        setPosts([...posts, postData.data.post])
    } catch (error) {
        console.log(error)
    }
}
    return(
        <div>
            {localStorage.getItem('token') && localStorage.getItem('token').length ?
                
                <div>
                    <p>Account information</p>
                
                    <MyPosts />
                
                    <p>Make a Listing!</p>
                    <form onSubmit={submitHandler}>
                        <label>What are you trying to sell?</label>
                        <input type= 'text' value= {title} onChange= {updateTitleState}></input>

                        <br/>

                        <label>Location: </label>
                        <input type= 'text' value= {location} onChange= {updateLocationState}></input>
                        
                        <br/>

                        <label>Description: </label>
                        <input type= 'text' value= {description} onChange= {updateDescriptionState}></input>

                        <br/>

                        <label>Price: </label>
                        <input type= 'text' value= {price} onChange= {updatePriceState}></input>
                        
                        <br/>

                        <label>Are you able to deliver this item?</label>
                        <input type='checkbox' id= 'delivery' value= {willDeliver} onChange= {updateWillDeliverState}></input>
                        <button type= 'submit'>Submit Posting</button>
                    </form>
                    <button onClick= {logout}>Log out</button>
                </div>

                :<p>Please Log in first.</p>
            }
            </div>

)}

export default Settings