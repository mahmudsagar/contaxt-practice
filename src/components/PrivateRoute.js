import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { useGlobalContext, UserContext } from './context';
// import jwt_decode from "jwt-decode";

const PrivateRoute = ({children, ...rest}) => {
    const [user, setUser] = useState([]);
    const {isloggedIn,accessKey,signIn, signOut} = useGlobalContext(UserContext);

    
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (isloggedIn) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;