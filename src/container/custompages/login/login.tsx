import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Card, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

//IMAGE IMPORTS
import img1 from "../../../assets/images/brand-logos/desktop-logo.png";
import img2 from "../../../assets/images/brand-logos/desktop-dark.png";

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../config/authcontext';
import { useState, ChangeEvent } from 'react';

interface LoginProps { }

const Login: FC<LoginProps> = () => {
   const { isLoggedIn, login } = useAuth();
   const [user, setUser] = useState({
      username:"",
      password:"",
   });

   const handleLogin = () => {
      const res = login(user);
      if(res == "success"){
         toast.success("You are successfully logged in");
         return;
      }
      toast.error(res);
   };

   if (isLoggedIn) {
      return <Navigate to="/dashboard" />;
   }

   const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
      // console.log(`${event.target.id} - ${event.target.value}`);
      setUser({
         ...user,
         [event.target.id]:event.target.value,
      });
    };

   return (
      <>
         <div className="main-content page main-error-page justify-content-center">

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
                                 <Card.Title className="text-center fw-500 mb-3">LOGIN</Card.Title>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="text" placeholder="Name" id="username" value={user.username} onChange={handleUserChange}/>
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" id="password" placeholder="Password" value={user.password} onChange={handleUserChange}/>
                                 </Form.Group>
                                 {/* <Form.Group >
                                    <label className="custom-control custom-checkbox">
                                       <Link to={`${import.meta.env.BASE_URL}forgotpassword/`} className="float-end small text-info">Forgot password?</Link>
                                    </label>
                                 </Form.Group> */}
                                 <div>
                                    <button onClick={handleLogin} role="button" className="btn btn-success btn-block">SignIn</button>
                                 </div>
                                 <div className="text-center fs-15 mt-4">
                                    Don't have account yet? <Link to={`${import.meta.env.BASE_URL}register/`} className="text-primary">Register</Link>
                                 </div>
                                 {/* <hr className="divider" />
                                 <div className="mt-2">
                                    <div className="btn-list">
                                       <Link to="https://www.facebook.com/" target="_blank" role="button" className="btn btn-facebook btn-block">SignIn via Facebook</Link>
                                       <Link to="https://www.google.com/gmail/" target="_blank" role="button" className="btn btn-google btn-block">SignIn via Google</Link>
                                    </div>
                                 </div> */}
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

export default Login;
