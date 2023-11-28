import React from 'react'

function Buttons({setMode , onButtonClick}) {
  const handlClick = (mode) => {
    setMode(mode); 
    onButtonClick(); 
  }
  return (
 
    <div style={{
      backgroundColor: '#662549',
      height: '100px',
      marginTop: '-27px',
      width: '118%', 
      marginLeft: '-30px',
      display: 'flex',
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent: 'center', 
    }}>
      <button type="button" className="btn btn-light" style={{ borderRadius: '35%', margin: '5px' }} onClick={() => handlClick('casual')}>Casual</button>
      <button type="button" className="btn btn-light" style={{ borderRadius: '35%', margin: '5px' }} onClick={() => handlClick('festive')}>Festive</button>
      <button type="button" className="btn btn-light" style={{ borderRadius: '35%', margin: '5px' }} onClick={() => handlClick('occassion')}>Occasion</button>
      <button type="button" className="btn btn-light" style={{ borderRadius: '35%', margin: '5px' }} onClick={() => handlClick('party')}>Party</button>
      <button type="button" className="btn btn-light" style={{ borderRadius: '35%', margin: '5px' }} onClick={() => handlClick('travel')}>Travel</button>
    </div>
    
    
  )
}

export default Buttons