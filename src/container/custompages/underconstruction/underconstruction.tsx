import { FC } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import {  Card, Row } from 'react-bootstrap';

interface UnderConstructionProps { }

const UnderConstruction: FC<UnderConstructionProps> = () => {

  //  const AfterCompletion = () => <span>You are good to go!</span>;
   
   const AfterComplete = () => <span>You are good to go!</span>;

     // Renderer callback with condition
  const rendering = ({ days, hours, minutes, seconds, completed }) => {
   if (completed) {
     // Render a complete state
     return <AfterComplete />;
   } else {
     // Render a countdown
     return (
       <Row>
         <Card.Body className="text-center">
           <div className="under-countdown row">
             <div className="col-lg-3 mb-2">
                <div className="under-countdownNumber">{days}</div>
                <div className='under-countdownText'>Days</div>
             </div>
             <div className="col-lg-3 mb-2">
                <div className="under-countdownNumber">{hours}</div>
                <div className='under-countdownText'>Hours</div>
             </div>
             <div className="col-lg-3 mb-2">
                <div className="under-countdownNumber">{minutes}</div>
                <div className='under-countdownText'>Minutes</div>
             </div>
             <div className="col-lg-3 mb-2">
                <div className="under-countdownNumber">{seconds}</div>
                <div className='under-countdownText'>Seconds</div>
             </div>
           </div>
         </Card.Body>
       </Row>
     );
   }
 };
   return (
      <>
         <div className="page main-error-page justify-content-center">
            <div className="container text-center">
               <div className="error-template">
                  <h3 className="display-5 mt-5 fw-medium mb-3">We Are Working On This Site</h3>
                  <h4>Get Back to you at 9.00pm</h4>
                  <div id="launch_date-1">
                  <Countdown date={Date.now() + 30278000000} renderer={rendering} />

                  </div>
                  <div>
                     Copyright © 2023 <Link to="#" className="fs-14 text-primary">Dashlot</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="https://spruko.com/" className="fs-14 text-primary">Spruko</Link> All rights reserved.
                  </div>
               </div>
            </div>

         </div> </>
   );
};

export default UnderConstruction;
