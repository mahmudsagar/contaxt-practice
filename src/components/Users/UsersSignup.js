import React, { useContext, useState } from 'react'
// import { UserContext } from '../../App';

function UsersSignup() {
    const [user, setUser] = useState([]);
    // const loginInfo = useContext(UserContext);
    // console.log(loginInfo);
    const handleBlur = (e) =>{
        const userInfo = {...user}
        userInfo[e.target.name] = e.target.value
        setUser(userInfo) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // setLoggedinUser(user)
        const userDetails = {...user}
        fetch('http://localhost:5550/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert('user added successfully');
          }
        })
    }
    // console.log(loggedinUser);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onBlur={handleBlur}/>
                <input type="password" name="password" onBlur={handleBlur}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default UsersSignup
