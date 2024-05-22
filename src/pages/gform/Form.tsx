import { Button, Modal, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import * as z from "zod";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GFormI } from "./types";

import { API_ROUTES } from '../../utils/constants';

const schema = z.object({
    name: z.string().min(1, { 
       message: 'Required' 
    })
});

export function GForm (
{item, modalShow, setModalShow, updateItems}:
{
    item:GFormI | undefined, 
    modalShow:boolean, 
    setModalShow: (b:boolean) => void,
    updateItems: () => void,
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
        if (item && typeof item === 'object') {
            reset({
                ...item,
            });
        }else{
            reset({
                title:"",
            });
        }
    }, [modalShow]); 

    const handleRegister = async (data:FieldValues) => {
        data = {
            ...data,
        }
        console.log(data);
        if(item){//update
            
            fetch(API_ROUTES.FORM_API + `/${item._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The item is successfully updated.");
                updateItems();
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

            fetch(API_ROUTES.FORM_API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("The item is successfully added.");
                updateItems();
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
    const [items, setItems] = useState<GFormI[]>([]);
    return(
    <Modal as="form" centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
        <form onSubmit={handleSubmit((d) => handleRegister(d))}>
            <Modal.Header closeButton>
                <Modal.Title as="h5">{item?"Update":"Add"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">title</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="bi bi-card-checklist"></i></InputGroup.Text>
                        <Form.Control type="text" {...register('name')} className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    {errors.name?.message && (
                        <p className="text-danger text-start">{errors.name.message}</p>
                    )}
                </div>    
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={() => setModalShow(false)}>Cancel</Button>
                <Button variant="primary" type="submit">{item?"Update":"Add"}</Button>
            </Modal.Footer>
        </form>
    </Modal>
)}