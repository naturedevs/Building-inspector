import { Button, Modal, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from "react";

export function ImageUploadModal (
    {UpdateImgLink, setModalShow, modalShow}:
    {
        modalShow:boolean, 
        UpdateImgLink: () => void,
        setModalShow: (b:boolean) => void,
    }) {   
    const [imgFileName, setImgFileName] = useState("");
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleUpload = () => {
        console.log("handleUpload");
    }
    const handleChangeImage = (event: any) => {
        if (event.target.files.length > 0) {
          const imgUrl = URL.createObjectURL(event.target.files[0]);
          setImgFile(event.target.files[0]);
          setPreviewUrl(imgUrl);
          setImgFileName(event.target.value);
        } else {
          setImgFile(null);
          setPreviewUrl("");
          setImgFileName("");
        }
      };
    return(
    <>
        <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
            <Modal.Header closeButton>
                <Modal.Title as="h6">Upload Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter title</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className=""><i className="bx bx-user-check"></i></InputGroup.Text>
                        <Form.Control type="file" value={imgFileName} onChange={handleChangeImage} className="" id="form-text1" placeholder=""/>
                    </InputGroup>
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt={previewUrl.split("/").pop()}
                            width={500}
                            height={100}
                        />
                    )}
                </div>  
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleUpload}>Upload</Button>
            </Modal.Footer>
        </Modal>
    </>
)}