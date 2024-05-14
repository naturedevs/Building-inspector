import  { FC, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios'; 
import toast from 'react-hot-toast'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { API_ROUTES } from '../../../utils/constants';

//IMAGE IMPORTS
import img1 from "../../../assets/images/brand-logos/desktop-logo.png";
import img2 from "../../../assets/images/brand-logos/desktop-dark.png";

interface RegisterProps { }

const schema = z.object({
   name: z.string().min(1, { message: 'Required' }),
   age: z.number().min(10),
});

const Register: FC<RegisterProps> = () => {

   const [formData, setFormData] = useState({
      username: 'Jonathan Viera',
      email: 'david@gmail.com',
      password: '123456',
      confirmPassword: '123456'
   });

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
   };

   const handleRegister = async() => {

      console.log("click sign up");
      axios.post(API_ROUTES.REGISTER, formData)
      .then(response => {
         // Handle successful response
         console.log(response.data);
      })
      .catch(error => {
         if (error.response && error.response.status === 400) {
            // Handle 400 error
            console.error('Bad request');
            // You can also access the response data if needed
            console.error(error.response.data);
            
         } else {
            // Handle other errors
            console.error('Server error');
            console.error(error.message);
         }
      });
   }

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
                                    <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Name" />
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Retype-Password" />
                                 </Form.Group>
                                 <div className="form-check text-start mb-4" hidden>
                                    <Form.Check type="checkbox" className="" id="agree_1" />
                                    <Form.Label htmlFor="agree_1" className="form-check-label fw-normal">I Agree With Terms and Conditions</Form.Label>
                                 </div>
                                 <div>
                                    <button onClick={handleRegister} role="button" className="btn btn-success btn-block">Sign Up</button>
                                 </div>
                                 <div className="text-center mt-3">
                                    Do you have account? <Link to={`${import.meta.env.BASE_URL}Login/`} className="text-primary">Login</Link>
                                 </div>
                              </Card.Body>
                           </div>
                        </div>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div> 
      </>
); };

export default Register;
