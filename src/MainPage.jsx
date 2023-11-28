import React from 'react'
import data from './data'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function MainPage() {
  const Circle = () => {
    const circleStyle = {
      width: '250px',
      height: '250px',
      border: '25px solid white',
      borderRadius: '50%',
      position:'relative',
      top:'-150px',
      left:'320px',
      bottom:'-20px'
     
    };
  
    return <div style={circleStyle}></div>;
  };
  const BoxWithShadow = () => {
    const boxStyle = {
      width: '300px',
      height: '50px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
      backgroundColor: '#FED9ED', 
      margin: '20px',
      borderRadius:'10px',
      marginTop:'-29rem',
       
    };
  
    return <div style={boxStyle}></div>;
  };
  const BoxWithShadow1 = () => {
    const boxStyle = {
      width: '350px',
      height: '90px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#FED9ED', 
      margin: '20px',
      borderRadius:'10px',
      marginTop:'-21rem',
       
    };
  
    return <div style={boxStyle}></div>;
  };
  return (
    <div>
     
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px 0 20px 10px' }}>
      {data.map((item, index) => (
        <div key={index} style={{ border: '3px solid #FDCEDF', backgroundColor: index % 2 === 0 ? '#D77FA1' : '#FFF9F9', height: '100px', width: '100px', margin:'20px 15px', borderRadius: '20%', zIndex:"1" }}>
          <div style={{ color: index % 2 === 0 ? '#DA0C81' : '#CD1818', fontSize: '2.5em'  }}>
            {index % 2 === 0 ? <FaInstagramSquare /> : <FaYoutube />}
          </div>
          <Link to={`/details/${index}`} style={{textDecoration:'none' , color:'black'}}>
        <b style={{fontSize:'15px', position:'relative',top:'30px'}}>  {item.hashtag} <br /> {item.money}</b>
        </Link>
        </div>
      ))}
     <BoxWithShadow />
     <BoxWithShadow1 />
     <div style={{marginTop:'10px'}}>
      <BoxWithShadow1 />
  
     </div>
    </div>
    
    <Circle />
    <h6 style={{marginTop:'-190px' , marginLeft:'-200px'}}>@SHOPWITHSTORECODE</h6>
    </div>
  )
}

export default MainPage