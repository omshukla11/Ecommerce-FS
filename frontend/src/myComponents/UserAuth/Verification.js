import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import useStyles from './styles';
import { useTheme } from "../../Hooks/useThemeContext";
import { Link, useHistory } from "react-router-dom";


export default function Verification() {

    const old_token = useParams().token
    console.log(old_token)
    const hist = useHistory()

    const classes = useStyles();
    let themestyle = {};

    if (useTheme()) {
        themestyle = { background: '#000000', color: '#FFFFFF' }
    }
    else {
        themestyle = { color: '#000000', background: '#FFFFFF' }
    }

    async function verify() {
        
        let result = await fetch(`http://127.0.0.1:8000/users/verify/${old_token}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        })
        result = await result.json()

        localStorage.setItem('token', JSON.stringify({'token': result.token}))

        hist.push('/')
    }

    return (
        <center style={{ margin: '100px' }}>
            <h2>To verify your Email click on below button</h2>
            <Button className={classes.buttons} variant="contained" onClick={verify} component={Link} to='/'>Verify</Button>
        </center>
    )
}