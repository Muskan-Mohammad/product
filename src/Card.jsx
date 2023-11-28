import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

function Card() {
  console.log(data)
  return (
    <>
    <Link to='/'>
    <h2 style={{textAlign:'center' , margin:'20px'}}>PRODUCTS</h2>
    </Link>
       <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:'0 20px 40px 50px'}}>
        {data.map((item) => (    
  <div className="col">
    <div className="card h-100">
    <b style={{marginLeft:'50px'}}>Get this look{item.hashtag} by Aria @{item.money}</b>
      <img src={item.image} style={{height:'250px' , width:'250px', margin:'20px 50px'}} alt="..." />
      <video src={item.vedio} autoPlay muted  loop style={{height:'300px' , width:'270px' , position:'relative', top:'-90px', left:'50px'}}/>
      <div className="card-body" style={{marginTop:'-180px'}}>
      <button type="button" style={{backgroundColor:'#2D9596',  margin:'10px' , borderRadius:'10px'}}>Code : {item.code}</button>
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price : {item.money}</p>
        <p className="card-text">Wear : {item.mode.toUpperCase()}</p>
      </div>
    </div>
  </div>

        ))}
</div>
</>
  )
}

export default Card