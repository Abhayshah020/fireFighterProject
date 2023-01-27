import React from 'react';
import { useSelector } from 'react-redux'
const Home = () => {
    const { _id } = useSelector(state => state.user)
    const { name, role } = useSelector(state => state.user)
    return (
        <>
            <h1>Welcom Admin {name}. Your Id is #{_id}</h1>
        </>
    )
}
export default Home;