import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useTokenCon } from "./useTokenContext";


export default function ReverseProtected({component: Component,  ...rest}) {

    const token = useTokenCon()

    return (
        <Route {...rest} render={
            (props) => {
                if(!token){
                    return <Component {...props} />   
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        } />
    )
}