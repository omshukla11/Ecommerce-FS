import React, {useState ,useEffect} from 'react'
import axios from 'axios';
// import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
// import { AddShoppingCart } from '@material-ui/icons'
import useStyles from "./styles"
import { useTheme } from '../../Hooks/useThemeContext'
import { useParams } from 'react-router'

export default function ProductDetail() {
    const token = JSON.parse(localStorage.getItem('token'))?.token
    const id = useParams().id
    const classes = useStyles();

    const [prodinfo, setProdinfo] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/prod/${id}`, {headers: {Authorization: `Token ${token}`}})
          .then(res => {
            setProdinfo(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    }, [id, token])


    let themestyle = {};

    if (useTheme()) {
        themestyle = { background: '#000000', color: '#FFFFFF' }
    }
    else {
        themestyle = { color: '#000000', background: '#FFFFFF' }
    }

    return (
        <>This is Detail Page for </>
    )
}
