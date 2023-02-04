import React from 'react';
import '../cssFile/cardpage.css'
import img from '../img/firefighter.jpg'
import img1 from '../img/firefighter1.jpg'
import img2 from '../img/firefighter2.jpg'
import img3 from '../img/firefighter3.png'
import img4 from '../img/firefighter4.jpg'

const CardPage = () => {
return(
  <>
  
    <div className="container1">
      <div className="card1">
        <div className="circle1">
          <img src={img} className='img1'/>
        </div>
        <div className="content1">
          <p className='p1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <a href="" className='a1'>READ MORE</a>
        </div>
      </div>
      <div className="card1">
        <div className="circle1">
          <img src={img1} className='img1'/>
        </div>
        <div className="content1">
          <p className='p1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <a href="" className='a1'>READ MORE</a>
        </div>
      </div>
      <div className="card1">
        <div className="circle1">
          <img src={img2} className='img1'/>
        </div>
        <div className="content1">
          <p className='p1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <a href="" className='a1'>READ MORE</a>
        </div>
      </div>
      <div className="card1">
        <div className="circle1">
          <img src={img3} className='img1'/>
        </div>
        <div className="content1">
          <p className='p1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <a href="" className='a1'>READ MORE</a>
        </div>
      </div>
      <div className="card1">
        <div className="circle1">
          <img src={img4} className='img1'/>
        </div>
        <div className="content1">
          <p className='p1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500
          </p>
          <a href="" className='a1'>READ MORE</a>
        </div>
      </div>
    </div> 

  </>

)}
export default CardPage;