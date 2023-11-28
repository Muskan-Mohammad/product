import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import influencer from './assets/influencer.jpg';
import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import CardList from "./CardList";
import Buttons from "./Buttons";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState('');
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true); // Set button click state to true
  };
  const Circle = () => {
    const circleStyle = {
      width: '400px',
      height: '300px',
      border: '25px solid white',
      borderRadius: '50%',
      marginLeft:'-9rem',
      marginTop:'-5rem',
    };
  
    return <div style={circleStyle}></div>;
  };

  return (
    <div>
      <div className="container-fluid p-4 text-center" style={{ width: '100%', height: '20%', border: '7px solid #662549', padding: '20px 95px', backgroundColor: '#FDCEDF' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
            <Circle />
               <img src={influencer} alt="an influencer image" className="img-fluid mb-3" style={{ borderRadius: '50%', width:'50%' , marginLeft:'-140px'}} />
      
             
              <div className="text-black" style={{ marginLeft: '50px' }}>
                <h3 className="display-4">ARIA</h3>
                <h3 className="mb-4">I'm Your Fashion Icon</h3>
                <h4>Follow Me</h4>

                <div style={{ color: 'white', fontSize: '2.5em' }}>
                  <FaInstagramSquare />
                  <FaYoutube />
                  <Link to="/products" style={{ color: 'white' }}>
                    <h5>Swipe Next ➟</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4 text-center" style={{ width: '100%', height: '20%', border: '7px solid #662549', padding: '10px 95px', backgroundColor: '#FDCEDF' }}>
        <Buttons setMode={setMode} onButtonClick={handleButtonClick} />
        {isButtonClicked ? (
          <CardList mode={mode} />
        ) : (
          <MainPage />
        )}
      </div>
    </div>
  );
}

export default App;

    

