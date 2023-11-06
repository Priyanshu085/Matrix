import React from 'react';
import './home.css';
import img from '../images/aboutus.png';
const About = () => {
  return (
    <> <div className='about_container'>
    <div className='about_card'>
      <img src={img} alt='ABOUT_IMG'/>
    </div>
    
    < div className='about_card '>
    <h2>ABOUT OUR WEBSITE</h2>
  <div className='about_sec'>
    Matrix is here to transform the way you travel on the metro. Say goodbye to the hassle of physical tickets and cards, and welcome a seamless, ticketless, and cardless journey. Our website is dedicated to providing a convenient and efficient metro experience by harnessing the power of advanced technologies such as location-based charging and contactless payments.

We understand the frustrations of waiting in long queues and dealing with the inconvenience of traditional ticketing systems. With Marix, all you need is your smartphone or any contactless payment device. Simply register on our website, and you'll gain access to a world of effortless metro travel.
    </div>
     </div>
    </div>
    </>
  );
};

export default About;
