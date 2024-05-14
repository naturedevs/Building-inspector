import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Row } from 'react-bootstrap';

import img1 from "../../../assets/images/brand-logos/desktop-logo.png";
import img2 from "../../../assets/images/brand-logos/desktop-dark.png";
import img3 from "../../../assets/images/users/1.jpg";

interface LockScreenProps { }

const LockScreen: FC<LockScreenProps> = () => {

   return (
      <>
         <div className="page main-error-page justify-content-center">

            <div className="col-login mx-auto">
               <div className="text-center">
                  <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}>
                     <img src={img1} className="header-brand-img custom-logo-dark mb-4" alt="Dashlot logo" />
                  </Link>
                  <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}>
                     <img src={img2} className="header-brand-img custom-logo-light mb-4 " alt="Dashlot logo" />
                  </Link>
               </div>
            </div>

            <div className="container">
               <Row>
                  <Col md={6} xl={5} className="justify-content-center mx-auto text-center">
                     <Card className="overflow-hidden">
                        <div className="row g-0 h-100">
                           <div className="col-12 my-auto">
                              <Card.Body>
                                 <Card.Title className="fw-500 text-center mb-3">Lock Screen</Card.Title>
                                 <div className="text-center mb-3">
                                    <img src={img3} alt="lockscreen image" className="avatar avatar-xxl rounded-circle mb-1" />
                                    <div className="fw-500">Jacob Allan</div>
                                 </div>
                                 <div className="form-group">
                                    <Form.Control type="password" id="exampleInputPassword1" placeholder="Password" />
                                 </div>
                                 <div>
                                    <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`} role="button" className="btn btn-success btn-block">Unlock</Link>
                                 </div>
                              </Card.Body>
                           </div>
                        </div>
                     </Card>
                  </Col>
               </Row>
            </div>

         </div> </>
   );
};

export default LockScreen;
