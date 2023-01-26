import React from 'react';
import { useSelector } from 'react-redux'

 const Home = () => {
    const {_id,name} =useSelector(state=>state.user)
    return(
        <>
        <h1>Welcom Admin {name}. Your Id is #{_id}</h1>
        </>
    )
 }
 export default Home;