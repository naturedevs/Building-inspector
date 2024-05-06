import  { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Row } from 'react-bootstrap';

//IMAGE IMPORTS
import img1 from "../../../assets/images/brand-logos/desktop-logo.png";
import img2 from "../../../assets/images/brand-logos/desktop-dark.png";

interface RegisterProps { }

const Register: FC<RegisterProps> = () => {

   return(
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
                     <div className="row g-0">
                        <div className="col-12">
                           <Card.Body>
                              <Card.Title className="text-center fw-500 mb-3">SIGN UP</Card.Title>
                              <Form.Group className='form-group'>
                                 <Form.Control type="text" placeholder="Name" />
                              </Form.Group>
                              <Form.Group className='form-group'>
                                 <Form.Control type="email" className="form-control" placeholder="Email" />
                              </Form.Group>
                              <Form.Group className='form-group'>
                                 <Form.Control type="password" id="exampleInputPassword1" placeholder="Password" />
                              </Form.Group>
                              <Form.Group className='form-group'>
                                 <Form.Control type="password" id="exampleInputPassword2" placeholder="Retype-Password" />
                              </Form.Group>
                              <div className="form-check text-start mb-4">
                                 <Form.Check type="checkbox" className="" id="agree_1" />
                                 <Form.Label htmlFor="agree_1" className="form-check-label fw-normal">I Agree With Terms and Conditions</Form.Label>
                              </div>
                              <div>
                                 <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`} role="button" className="btn btn-success btn-block">Sign Up</Link>
                              </div>
                              <div className="text-center mt-3">
                                 Don't have account? <Link to={`${import.meta.env.BASE_URL}CustomPages/Login/`} className="text-primary">Login</Link>
                              </div>
                           </Card.Body>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </div>

      </div> </>
); };

export default Register;
