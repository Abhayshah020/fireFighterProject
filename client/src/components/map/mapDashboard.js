import React from 'react';
import Footer from '../footer/footer';
import Map from './map';

 const MapDashboard = () => {
    return(
        <>
        <Map isRegister={false}/>
        <Footer/>
        </>
    )
 }
 export default MapDashboard;