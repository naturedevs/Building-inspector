import { User } from "./types";
import { Button, Modal, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';

export function UserForm (
{user, modalShow, setModalShow}:
{
    user:User | undefined, 
    modalShow:boolean, 
    setModalShow: (b:boolean) => void,
}) {
    console.log(user);
    return(
    <>
        <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
            <Modal.Header closeButton className={`bg-info`}>
                <Modal.Title as="h6">{user?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>                
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-user-line"></i></InputGroup.Text>
                        <Form.Control type="text" className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    </div>
                    <div className="mb-3">
                    <Form.Label htmlFor="form-password1" className=" fs-14 text-dark">Enter
                        Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
                        <Form.Control type="password" className="" id="form-password1" placeholder=""/>
                    </InputGroup>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
                No
            </Button>
            <Button variant="primary" onClick={() => console.log("here")}>Yes</Button>
            </Modal.Footer>
        </Modal>
    </>
)}