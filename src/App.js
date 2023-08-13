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
                        <li className="cardList-item">Unlimited guides</li>
                        <li className="cardList-item">Unlimited flows</li>
                        <li className="cardList-item">Unlimited branded themes</li>
                        <li className="cardList-item">Email support</li>
                    </ul>
                <button className="btn .btn-outline-* choosePlanBtn">Choose Plan</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card cardBody">
                <h2 className='cardHead'>Pro</h2>
                <h1 className='cardValue'>$19<span className='cardValue-sub'>/mo</span></h1>
                    <ul className="cardList">
                        <li className="cardList-item">500 MAUs</li>
                        <li className="cardList-item">3 projects</li>
                        <li className="cardList-item">Unlimited guides</li>
                        <li className="cardList-item">Unlimited flows</li>
                        <li className="cardList-item">Unlimited branded themes</li>
                        <li className="cardList-item">Email support</li>
                    </ul>
                <button className="btn .btn-outline-* choosePlanBtn">Choose Plan</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pricing-card cardBody">
                <h2 className='cardHead'>Enterprise</h2>
                <h1 className='cardValue'>$79<span className='cardValue-sub'>/mo</span></h1>
                <ul className="cardList">
                        <li className="cardList-item">500 MAUs</li>
                        <li className="cardList-item">3 projects</li>
                        <li className="cardList-item">Unlimited guides</li>
                        <li className="cardList-item">Unlimited flows</li>
                        <li className="cardList-item">Unlimited branded themes</li>
                        <li className="cardList-item">Email support</li>
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
