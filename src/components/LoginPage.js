import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Register from './RegisterPage';

const Login = () => {
// ------------------Wake up API wagie you have work to do---------------------    const [username, setUsername] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function accountHandler (event) {
        event.preventDefault();
        try{
            const accountResponse = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    }
                })
            })
            const accountData = await accountResponse.json();
            console.log('this is our translated data: ', accountData)
            localStorage.setItem('token', accountData.data.token)
        } catch (error) {
            console.log(error)
        }
    }
    // -------Functions for updating USERNAME and PASSWORD variables from input tags

    function updateUsernameState(event) {
        setUsername(event.target.value)
    }

    function updatePasswordState(event) {
        setPassword(event.target.value)
    }

    return(

        <div>
            <form onSubmit={accountHandler}>

                <label>Enter Username Here</label>
                <input type= 'text' value= {username} onChange= {updateUsernameState}></input>

                <br/>

                <label>Enter Password Here</label>
                <input type= 'password' value= {password} onChange= {updatePasswordState}></input>

                <br/>

                <button type= "submit">Login</button>
            </form>

            <Link to='Register'>Register</Link>
            < Outlet />
        </div>
    )
}

export default Login