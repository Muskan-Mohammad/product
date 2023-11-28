import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data';

function SeperateCard() {
    const { id } = useParams();
    const dataIndex = parseInt(id, 10);
    const item = data[dataIndex];
    console.log("Items data" , item)
  return (
    <>
    <h1 style={{textAlign:'center' , margin:'20px'}}>{item.name}</h1>
    <div style={{width:'350px' , margin:'10px 10px' , height:'100%'}}>
    <div className="card h-100">
    <b style={{marginLeft:'50px'}}>{item.hashtag}</b>
    <video src={item.vedio} autoPlay muted  loop style={{height:'400px' , width:'340px' , position:'relative', top:'-30px', left:'5px'}}/>
    <div style={{ display: 'flex' }}>
  {[1, 2].map((index) => (
    <img
      key={index}
      src={item.image}
      style={{ height: '250px', width: '200px', margin: '-100px 2px' }}
      alt="..."
    />
  ))}
</div>
      <div className="card-body" style={{marginTop:'80px'}}>
      <button type="button" style={{backgroundColor:'#2D9596',  margin:'10px' , borderRadius:'10px'}}>Code : {item.code}</button>
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price : {item.money}</p>
        <p className="card-text">Wear : {item.mode}</p>
      </div>
    </div>
  </div>
  </>
  )
}

export default SeperateCard