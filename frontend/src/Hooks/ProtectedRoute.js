import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Protected({component: Component, token: Token ,...rest}) {

    const token = JSON.parse(localStorage.getItem('token'))?.token

    return (
        <Route {...rest} render={
            (props) => {
                if(!token){
                    return <Redirect to={
                        {
                            pathname: '/login/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
                else {
                    return <Component token={Token} {...props} />
                }
            }
        } />
    )
}