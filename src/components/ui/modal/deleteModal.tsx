import { Modal, Button } from "react-bootstrap";

export function DeleteModal (
    {handleDelete, setVisible, visible}:
    {
        visible:boolean, 
        handleDelete: () => void,
        setVisible: (b:boolean) => void,
    }) {
    return(
    <>
        <Modal centered show={visible} onHide={() => setVisible(false)} keyboard={false} className="modal fade">
            <Modal.Header closeButton>
                <Modal.Title as="h6">Confirm delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this item ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={() => setVisible(false)}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>
    </>
)}