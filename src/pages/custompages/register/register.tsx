import  { FC, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios'; 
import toast from 'react-hot-toast'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import * as z from "zod";

import { API_ROUTES } from '../../../utils/constants';

//IMAGE IMPORTS
import img1 from "../../../assets/images/brand-logos/desktop-logo.png";
import img2 from "../../../assets/images/brand-logos/desktop-dark.png";

interface RegisterProps { }

const schema = z.object({
   username: z.string().min(1, { 
      message: 'Required' 
   }).min(4, { 
      message: 'Must be 4 or more characters long.' 
   }),
   email: z.string().min(1, {
      message: 'Required'
   }).email({       
      message: 'Must be an email address' 
   }),
   password: z.string().min(1, {
      message: 'Required'
   }).min(4, {
     message: "Must be 4 or more characters long.",
   }),
   confirmPassword: z.string(),
});

const Register: FC<RegisterProps> = () => {

   const [formData, setFormData] = useState({
      username: 'Jonathan Viera',
      email: 'david@gmail.com',
      password: '123456',
      confirmPassword: '123456'
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(schema),
   });

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
   };

   const handleRegister = async (data:FieldValues) => {

      console.log("click sign up");
      console.log(data);
      if(data.password != data.confirmPassword){
         toast.error("The confirmpassword mismatch.");
         return;
      }
      axios.post(API_ROUTES.REGISTER, formData)
      .then(response => {
         // Handle successful response
         console.log(response.data);
         toast.success("You are successfully registered.");
      })
      .catch(error => {
         if (error.response && error.response.status === 400) {
            // Handle 400 error
            console.error('Bad request');
            // You can also access the response data if needed
            console.error(error.response.data);
            toast.error(error.response.data);            
         } else {
            // Handle other errors
            console.error('Server error');
            console.error(error.message);
            toast.error(error.message);
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
            <form className="container" onSubmit={handleSubmit((d) => handleRegister(d))}>
               <Row>
                  <Col md={6} xl={5} className="justify-content-center mx-auto text-center">
                     <Card className="overflow-hidden">
                        <div className="row g-0">
                           <div className="col-12">
                              <Card.Body>
                                 <Card.Title className="text-center fw-500 mb-3">SIGN UP</Card.Title>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="text" {...register('username')} placeholder="Name" />
                                    {errors.username?.message && (
                                       <p className="text-danger text-start">{errors.username.message}</p>
                                    )}
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="email" {...register('email')} placeholder="Email" />
                                    {errors.email?.message && (
                                       <p className="text-danger  text-start">{errors.email.message}</p>
                                    )}
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" {...register('password')} placeholder="Password"/>
                                    {errors.password?.message && (
                                       <p className="text-danger  text-start">{errors.password.message}</p>
                                    )}
                                 </Form.Group>
                                 <Form.Group className='form-group'>
                                    <Form.Control type="password" {...register('confirmPassword')} placeholder="Retype-Password" />
                                    {errors.confirmPassword?.message && (
                                       <p className="text-danger  text-start">{errors.confirmPassword.message}</p>
                                    )}
                                 </Form.Group>
                                 <div className="form-check text-start mb-4" hidden>
                                    <Form.Check type="checkbox" className="" id="agree_1" />
                                    <Form.Label htmlFor="agree_1" className="form-check-label fw-normal">I Agree With Terms and Conditions</Form.Label>
                                 </div>
                                 <div>
                                    <button type="submit" role="button" className="btn btn-success btn-block">Sign Up</button>
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
            </form>
         </div> 
      </>
); };

export default Register;
