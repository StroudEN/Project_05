import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom'


const ThatsBazaar = () => {

// -------Grabbing information from API
    const [products, setProducts] = useState([])
    // const [posts, setPosts] = useState([])

    useEffect(() => {
        
        async function fetchProducts () {
            try{
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
                const info = await response.json();

                console.log(info.data.posts)
                setProducts(info.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    },[])

    return(
        <div>
            <h1>That's Bazaar!</h1>

            <NavBar />
{/* ==========================Main View Window================================== */}
            <Outlet context= {products}/>
        </div>
    )
}

export default ThatsBazaar