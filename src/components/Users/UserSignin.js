import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {useGlobalContext, UserContext} from '../context'

function UserSignin() {
    const [user, setUser] = useState([]);
    const {isloggedIn,accessKey,signIn, signOut} = useGlobalContext(UserContext);

    const [login, setLogin] = useState({
        email: "",
        pass: "",
    });
    const history = useHistory();
    const handleBlur = (e) => {
        const value = e.target.value
        setLogin({
            ...login,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        fetch("http://localhost:5550/users")
            .then((res) => res.json())
            .then((users) => {
                setUser(users);
            });
    }, []);
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        user.map((item)=>{
                if (login.email === item.email && login.pass === item.password) {
                    alert("success");
                        signIn(login.email)
                        // setLoggedinUser(login)
                        // console.log("context info : ", loggedinUser)
                        history.push("/post");
                    }
                })
                
                // console.log(login);
                setLogin({
                    email: "",
                    pass: "",
                });
            }
            
            console.log(isloggedIn,accessKey);
    return (
        <div>
            <div>
                {/* <h1>{email}</h1> */}
            </div>
            <form>
                <input
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={handleBlur}
                />
                <input
                    type="password"
                    name="pass"
                    value={login.pass}
                    onChange={handleBlur}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default UserSignin
