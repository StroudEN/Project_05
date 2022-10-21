import React, { useState, useEffect } from "react";


const MyPosts = () => {

    const [myInfo, setMyInfo] = useState([])

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

                console.log(info.data.posts)
                setMyInfo(info.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[])

    return(
        <div>
            {myInfo && myInfo.length ? myInfo.map((event, idx) => {
                
                return(
                    <div key={idx}>
                        {console.log(event)}
                        
                    </div>
                )
            }):null
            }
        </div>
    )
}

export default MyPosts