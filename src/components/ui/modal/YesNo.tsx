import { Modal, Button } from "react-bootstrap";

export function YesNoModal (
    {title, content, handleOK, setModalShow, modalShow, type}:
    {
        title:string, 
        content:string, 
        type:string, 
        modalShow:boolean, 
        handleOK: () => void,
        setModalShow: (b:boolean) => void,
    }) {   
    return(
    <>
        <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
            <Modal.Header closeButton className={`bg-${type}`}>
                <Modal.Title as="h6">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>{content}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
                No
            </Button>
            <Button variant="primary" onClick={handleOK}>Yes</Button>
            </Modal.Footer>
        </Modal>
    </>
)}