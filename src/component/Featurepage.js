import React from 'react';
import './home.css';
import img from '../images/features.png';

const Featurepage = () => {
  return (
    <>
    <div className='feature_container'>  
    <div className='feature_card feature_img'>
      <img src={img} alt='LOGO' />
    </div>
      
    <div className='feature_card '>
    <ul>
      <h3> Ticketless and Cardless Access:</h3>
      <li className='feature_card1'>
 Say goodbye to physical tickets and cards. With Marix, all you need is your smartphone or any contactless payment device to access the metro system. Simply register on our platform, and you'll have instant access to a ticketless and cardless metro experience.
    </li>
    <h3> Location-Based Charging: </h3>
    <li className='feature_card1'>
    Fare calculation has never been easier. Marix utilizes advanced location tracking technology to accurately determine fares based on the distance traveled. Our location-based charging ensures that you pay only for the exact distance covered, ensuring fairness and transparency in fare collection.
    </li>
    <h3> Seamless User Experience: </h3>
    <li className='feature_card1'>
    
    Marix prioritizes simplicity and user-friendliness. Our intuitive interface and seamless website navigation make your metro journey a breeze. Easily plan your routes, check fare details, and manage your account with just a few clicks.
    </li>
  
    </ul>
    </div></div>
    </>
  );
};

export default Featurepage;