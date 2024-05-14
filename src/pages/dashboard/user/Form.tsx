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