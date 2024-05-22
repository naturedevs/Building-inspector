import { User } from "./types";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import * as z from "zod";
import { useEffect, useState } from "react";
import { Role } from "../role/types";
import { API_ROUTES } from '../../utils/constants';
import toast from "react-hot-toast";

const Multipleselectdata=[
    {title:'Choice 1'},
    {title:'Choice 2'},
    {title:'Choice 3'},
    {title:'Choice 4'},
    {title:'Choice 5'},
    {title:'Choice 6'},
];

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

export function UserForm (
{user, modalShow, setModalShow, updateUsers}:
{
    user:User | undefined, 
    modalShow:boolean, 
    setModalShow: (b:boolean) => void,
    updateUsers: () => void,
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        if (user && typeof user === 'object') {
            reset({
                ...user,
                password:"",
            });
        }else{
            reset({
                username:"",
                email:"",
            });
        }
    }, [modalShow]); 

    const handleRegister = async (data:FieldValues) => {
        if(data.password != data.confirmPassword){
            toast.error("The confirmpassword mismatch.");
            return;
        }
        data = {
            ...data,
            roles:roles.map(d => {
                return {
                    title:d.value
                }
            }),
        }
        console.log(data);
        if(user){
            fetch(API_ROUTES.USER_API + `/${user._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The user is successfully updated.");
                updateUsers();
                setModalShow(false);
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    console.error('Bad request');
                    console.error(error.response.data);
                    toast.error(error.response.data);       
                } else {
                    console.error('Server error');
                    console.error(error.message);
                    toast.error(error.message);
                }
            });
        }else{

            fetch(API_ROUTES.USER_API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The user is successfully added.");
                updateUsers();
                setModalShow(false)
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    console.error('Bad request');
                    console.error(error.response.data);
                    toast.error(error.response.data);            
                } else {
                    console.error('Server error');
                    console.error(error.message);
                    toast.error(error.message);
                }
            });
        }
    }
    
    const [roles, setRoles] = useState<Role[]>([]);
    
    return(
    <Modal as="form" centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
        <form onSubmit={handleSubmit((d) => handleRegister(d))}>
            <Modal.Header closeButton className={`bg-success1`}>
                <Modal.Title as="h5">{user?"Update":"Add"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-user-line"></i></InputGroup.Text>
                        <Form.Control type="text" {...register('username')} className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    {errors.username?.message && (
                        <p className="text-danger text-start">{errors.username.message}</p>
                    )}
                </div>           
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-mail-line"></i></InputGroup.Text>
                        <Form.Control type="text" {...register('email')} className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    {errors.email?.message && (
                        <p className="text-danger text-start">{errors.email.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="form-password1" className=" fs-14 text-dark">Enter
                        Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
                        <Form.Control type="password" {...register('password')} className="" id="form-password1" placeholder=""/>
                    </InputGroup>
                    {errors.password?.message && (
                        <p className="text-danger text-start">{errors.password.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="form-password1" className=" fs-14 text-dark">Confirm
                        Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
                        <Form.Control type="password" {...register('confirmPassword')} className="" id="form-password1" placeholder=""/>
                    </InputGroup>
                    {errors.confirmPassword?.message && (
                        <p className="text-danger text-start">{errors.confirmPassword.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="form-password1" className=" fs-14 text-dark">Enter
                        Role</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="bx bx-user-check"></i></InputGroup.Text>                        
                        <Select isMulti name="colors" options={Multipleselectdata.map(d=>{
                            return {
                                value: d.title,
                                label: d.title
                            }
                        })} value={roles} onChange={(d) => setRoles(d)} className="flex-grow-1 flex" id="choices-multiple-default"
                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                        />
                    </InputGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={() => setModalShow(false)}>Cancel</Button>
                <Button className="btn btn-success" type="submit">{user?"Update":"Add"}</Button>
            </Modal.Footer>
        </form>
    </Modal>
)}