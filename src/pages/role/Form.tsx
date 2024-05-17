import { User } from "./types";
import { Button, Modal, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import Select from 'react-select';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import * as z from "zod";
import { useEffect, useState } from "react";
import axios from "axios";
import { Role } from "../role/types";
import { API_ROUTES } from '../../utils/constants';
import toast from "react-hot-toast";

const schema = z.object({
    name: z.string().min(1, { 
       message: 'Required' 
    })
});

export function RoleForm (
{role, modalShow, setModalShow, updateRoles}:
{
    role:Role | undefined, 
    modalShow:boolean, 
    setModalShow: (b:boolean) => void,
    updateRoles: () => void,
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
        if (role && typeof role === 'object') {
            reset({
                ...role,
            });
        }else{
            reset({
                title:"",
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
        }
        console.log(data);
        if(role){//update
            
            fetch(API_ROUTES.ROLE_API + `/${role._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The role is successfully updated.");
                updateRoles();
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

        }else{//New

            fetch(API_ROUTES.ROLE_API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The role is successfully added.");
                updateRoles();
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
                <Modal.Title as="h6">{role?.name?role.name:"New Role"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter title</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="bx bx-user-check"></i></InputGroup.Text>
                        <Form.Control type="text" {...register('name')} className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    {errors.title?.message && (
                        <p className="text-danger text-start">{errors.title.message}</p>
                    )}
                </div>    
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
                Cancel
            </Button>
            <button className="btn btn-success" type="submit">{role?"Update":"Add"}</button>
            </Modal.Footer>
        </form>
    </Modal>
)}