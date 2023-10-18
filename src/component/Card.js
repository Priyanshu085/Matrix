import React, { useState, useEffect } from 'react';
import "./style.css";
import img from '../images/card_bg.png';

export default function Card() {
    const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup);
    };
    const closePopup=()=>{
        setPop(false);
    };
        const [stationA, setStationA] = useState('');
        const [stationB, setStationB] = useState('');
        const [fare, setFare] = useState(0);
          useEffect(()=>{
              calculateFare();
          },[stationA,stationB]);
        const calculateFare = () => {
          const distance = Math.abs(stationA - stationB);
          const fare = distance * 10; // calculating fare as 10rs per km
          setFare(fare);
        };
  return (
    <div class="body" src={img}>
    <section id="card-container" class="section-p1">
        <div class="card">
            <img src="images\QR-code.png" alt="f1"/>
            <a href="#">Scan QR-Code </a>
        </div >
        <div class="card-p">
        <p id='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, adipisci? Atque repellat, totam repellendus at iure omnis magni aspernatur consectetur saepe ab possimus blanditiis ducimus pariatur consequatur? Iure, delectus atque quod magnam quo soluta?</p>
          </div>  
    </section>
    <section id="card-container" class="section-p1">
        <div class='card-p'>
        <p id='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, adipisci? Atque repellat, totam repellendus at iure omnis magni aspernatur consectetur saepe ab possimus blanditiis ducimus pariatur consequatur? Iure, delectus atque quod magnam quo soluta?</p>
        </div>
        <div class="card">
            <img src="images\Wallet.png" alt="f1"/>
            <a href="#">Current Balance</a>
        </div>  
    </section>
    <section id='calculator'>
    <button class="normal" onClick={handleClickOpen}>Calculate Fair</button>
       <div>
       {popup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-header">
                <h3>Total Fare</h3>
                <h3 onClick={closePopup}>X</h3>
              </div>
              <div className="input-container">
                <label>
                  Station A:
                  <input type="text" value={stationA} onChange={(e) => setStationA(e.target.value)} />
                </label>
                <label>
                  Station B:
                  <input type="text" value={stationB} onChange={(e) => setStationB(e.target.value)} />
                </label>
              </div>
              <div className="fare-container">
                <h3>Fare: ₹{fare}</h3>
              </div>
              <button className="payment">Pay Now</button>
            </div>
          </div>
        )}
     </div>
    </section>

    
    <section id="footer" class="section-p1">
     <div class="col">
        
        <h4>Contacts</h4>
        <p><strong>Address:</strong>GCET,Gautam Buddha Nagar,UP,201310</p>
        <p><strong>Phone:</strong>(+91) 0117367398</p>
        <p><strong>Hours:</strong> 10:00-18:00,Mon-sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
     </div>
     <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
     </div>
     <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">Wallet</a>
        <a href="#">Recent journey</a>
        <a href="#">Help</a>
     </div>
     <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="images/appstore.jpg" alt=""/>
            <img src="images/playstore.jpg" alt=""/>
        </div>
        <p>Secured Payment Gateways</p>
        <img src="images/pay.png" alt=""/>
     </div>
     <div class="copywright">
        <p>@ 2023, Matrix</p>
     </div>
   </section>
    </div>
  );;
}
