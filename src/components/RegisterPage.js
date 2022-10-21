import React, {useState} from 'react'

const Register = () => {
    // ------Passing Account information into API state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function accountHandler (event) {
        event.preventDefault();
        try{
            const accountResponse = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register',
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
        set/home/preston_howell/course_work/Week_4/Day_2Password(event.target.value)
    }

    return(

        <div>
            <form onSubmit={accountHandler}>

                <label>Enter Username Here</label>
                <input type= 'text' value= {username} onChange= {updateUsernameState}></input>

                <br/>

                <label>Enter Password Here</label>
                <input type= 'text' value= {password} onChange= {updatePasswordState}></input>

                <br/>

                <button type= "submit">Register for a New Account</button>
            </form>
        </div>
    )
}

export default Register