import React from 'react'

function Buttons({setMode , onButtonClick}) {
  const handlClick = (mode) => {
    setMode(mode); 
    onButtonClick(); 
  }
  return (
 
  <div style={{backgroundColor:'#662549' , height:'50px' , marginTop:'-24px', width:'115%', marginLeft:'-30px'}}>
  <button type="button" className="btn btn-light" style={{borderRadius:'35%' , margin:'0 5px'}} onClick={() => handlClick('casual')}>Casual</button>
  <button type="button" className="btn btn-light"style={{borderRadius:'35%' , margin:'0 5px'}} onClick={() => handlClick('festive')}>Festive</button>
  <button type="button" className="btn btn-light"style={{borderRadius:'35%' , margin:'0 5px'}}onClick={() => handlClick('occassion')}>Occassion</button>
  <button type="button" className="btn btn-light"style={{borderRadius:'35%', margin:'0 5px'}}onClick={() => handlClick('party')}>Party</button>
  <button type="button" className="btn btn-light"style={{borderRadius:'35%', margin:'0 5px'}}onClick={() => handlClick('travel')}>Travel</button>
  </div>
    
  )
}

export default Buttons