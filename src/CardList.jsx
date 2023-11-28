import React from 'react'
import data from './data';

function CardList({mode}) {
    const filteredData = data.filter(item => item.mode === mode);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
       
    {filteredData.map((item) => (
        
      <div key={item.id} className="col" style={{margin:'70px 10px' , width:'350px'}}>
       <h2 style={{textAlign:'center'}}> {item.mode.toUpperCase()}</h2> 
      <div className="card h-100" style={{ backgroundColor: '#FDCEDF'  }}>
        <b style={{ marginLeft: '50px' }}>{item.hashtag}</b>
       
        <video src={item.vedio} autoPlay loop style={{ height: '250px', width: '300px', position: 'relative', top: '-10px', left: '10px' }} />
        <div style={{ display: 'flex' }}>
  {[1, 2].map((index) => (
    <img
      key={index}
      src={item.image}
      style={{ height: '200px', width: '150px', margin: '-15px 5px' , marginLeft:'10px' }}
      alt="..."
    />
  ))}
</div>
        <div className="card-body" style={{ marginTop: '20px' }}>
          <button type="button" style={{ backgroundColor: '#2D9596', margin: '10px', borderRadius: '10px' }}>Code : {item.code}</button>
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price : {item.money}</p>
          <p className="card-text">Wear : {item.mode.toUpperCase()}</p>
        </div>
      </div>
    </div>
    ))}
  </div>
  
  )
}

export default CardList