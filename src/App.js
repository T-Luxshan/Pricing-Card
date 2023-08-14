import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import './App.css'; // Your own CSS file if needed

function App() {
  return (
    <div className='App'>
        <h1 className='page-head'>Choose a plan</h1>
        <p className="page-sub-head">Billed monthly/ Billed Annualy</p>
        <div className="container wrapper">
          <div className="row">
            <div className="col-md-4 ">
              <div className="pricing-card cardBody">
                <h2 className='cardHead'>Basic</h2>
                <h1 className='cardValue'>$0</h1>
                    <ul className="cardList">
                        <li className="cardList-item">500 MAUs</li>
                        <li className="cardList-item">3 projects</li>
                        <li className="cardList-item"><s>Unlimited guides</s></li>
                        <li className="cardList-item"><s>Unlimited flows</s></li>
                        <li className="cardList-item"><s>Unlimited branded themes</s></li>
                        <li className="cardList-item">Email support</li>
                    </ul>
                <button className="btn .btn-outline-* choosePlanBtn">Choose Plan</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card cardBody">
                <h2 className='cardHead'>Pro</h2>
                <h1 className='cardValue'>$19<span className='cardValue-sub'>/mo</span></h1>
                  
                  <select className='dropDown' name="MAU" id="MAU"> 
                      <option className='dropdownItem' value="2500MAU">2500MAU</option> 
                      <option className='dropdownItem' value="300MAU">300MAU</option> 
                      <option className='dropdownItem' value="4500MAU">4500MAU</option> 
                      <option className='dropdownItem' value="5000MAU">5000MAU</option> 
                  </select>
                    <ul className="cardList">
                        <li className="cardList-item">All starter features, plus:</li>
                        <li className="cardList-item">Unlimited projects</li>
                        <li className="cardList-item">Unlimited fully customizable themes</li>
                        <li className="cardList-item">A dedicated Customer Manager</li>
                    </ul>
                <button className="btn .btn-outline-* choosePlanBtn">Choose Plan</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card cardBody">
                <h2 className='cardHead'>Enterprise</h2>
                <h1 className='cardValue'>$79<span className='cardValue-sub'>/mo</span></h1>
                <ul className="cardList">
               
                        <li className="cardList-item">All Pro features, plus:</li>
                        <li className="cardList-item">Unlimited MAUs</li>
                        <li className="cardList-item">Dedicated environment</li>
                        <li className="cardList-item">Enterprise account administration</li>
                        <li className="cardList-item">Unlimited branded themes</li>
                        <li className="cardList-item">Premium support and services</li>
                    </ul>
                <button className="btn .btn-outline-* choosePlanBtn">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
