import "./App.css";
import Users from "./components/Users/Users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
// import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    const [loggedinUser, setLoggedinUser] = useState({});
    console.log(loggedinUser);
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute path="/post">
                        <Posts />
                    </PrivateRoute>
                    <PrivateRoute path="/comments">
                        <Comments />
                    </PrivateRoute>
                </Switch>
                <Route path="/login">
                    <Users />
                </Route>
            </Router>
        </>
    );
}

export default App;
