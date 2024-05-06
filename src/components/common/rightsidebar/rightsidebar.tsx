import { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Form, InputGroup, ListGroup, ListGroupItem, Nav, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';

import pic1 from "../../../assets/images/users/12.jpg";
import pic2 from "../../../assets/images/users/2.jpg";
import pic3 from "../../../assets/images/users/5.jpg";
import pic4 from "../../../assets/images/users/7.jpg";
import pic5 from "../../../assets/images/users/8.jpg";
import pic6 from "../../../assets/images/users/3.jpg";
import pic7 from "../../../assets/images/users/14.jpg";
import pic8 from "../../../assets/images/users/11.jpg";

interface RightsidebarProps {
}

const Rightsidebar: FC<RightsidebarProps> = () => {

    const demo = [
        { id: 1, src: pic1, name: 'Maryam Naz', contact: '(11)+390-2309' },
        { id: 2, src: pic2, name: 'Sahar Darya', contact: '(21)+326-1254' },
        { id: 3, src: pic3, name: 'Maryam Naz', contact: '(54)+125-7861' },
        { id: 4, src: pic4, name: 'Yolduz Rafi', contact: '(14)+025-5621' },
        { id: 5, src: pic5, name: 'Nargis Hawa', contact: '(11)+458-1205' },
        { id: 6, src: pic6, name: 'Khadija Mehr', contact: '(21)+654-9517' },
        { id: 7, src: pic7, name: 'Petey Cruiser', contact: '(14)+753-4268' },
        { id: 8, src: pic8, name: 'Khadija Mehr', contact: '(10)+111-1611' },

    ];

    const [rightsidebartoogle, setSidebartoogleright] = useState(true); 
    function Outhover(toggle: any) {
        setSidebartoogleright(!toggle);
        document.querySelector(".offcanvas-end1")?.classList.remove("show");
    }
    const Rightsidebarclose = () => {
        if (document.querySelector(".offcanvas-end1")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end1")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }
    };

    return (
        <Fragment>
            <div className="switcher-backdrop d-none" onClick={() => {
                      Rightsidebarclose();
                    }}></div>
             <div className="offcanvas offcanvas-end1" tabIndex={-1} id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
            <div className="sidebar sidebar-right sidebar-animate">
                <div className="p-3 text-end bg-primary-transparent mb-3 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-400">Activity Center</h5>
                    <button className="btn-close" type="button" onClick={() => Outhover(rightsidebartoogle)}></button>
                </div>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                       <Nav as="ul" variant="tabs" id="myTab-4" role="tablist" className="nav-tabs flex-nowrap border-bottom-0 px-3 tabs-style-1">
                            <Nav.Item as="li">
                               <Nav.Link as="a" id="home-tab-4" className="flex-grow-1"  eventKey="first" >Friends</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                               <Nav.Link as="a" eventKey="second" className="flex-grow-1">Activity</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                               <Nav.Link as="a" eventKey="third" className="flex-grow-1">Todo</Nav.Link>
                            </Nav.Item>
                         </Nav>
                    <hr className="my-3" />
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="px-3">
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <Button variant='primary-transparent' id="basic-addon2"><i className="ti ti-search"></i></Button>
                                </InputGroup>
                            </div>

                            <ListGroup className="list-unstyled list-group-flush" as="ul">
                                {demo.map((idx) => (
                                    <ListGroup.Item className='px-3 py-2-5' as="li" key={idx.id}>
                                        <div className="d-flex align-items-start" key={Math.random()}>
                                            <div className="d-flex align-items-center flex-grow-1 position-relative">
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={idx.src} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 fw-500 text-truncate fs-15">{idx.name}</p>
                                                    <span className="fs-13 text-muted text-truncate">{idx.contact}</span>
                                                </div>
                                            </div>
                                            <Dropdown className='ms-2 pt-1'>
                                                <Dropdown.Toggle className='no-caret' as='a' variant="" id="dropdown-basic">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </ListGroup.Item>
                                ))}

                            </ListGroup>
                            <ul className="list-unstyled list-group list-group-flush">

                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ListGroup className="list-unstyled list-group-flush">
                                <ListGroupItem className=" px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-secondary text-fixed-white">CH</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">New website is created</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>30 mins</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-info text-fixed-white">A</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Prepare For the Next Project</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>2 hrs</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-success text-fixed-white">N</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Decide the live Discussion Time</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>3 hrs</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-danger text-fixed-white">HO</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Team Review meeting</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-8-22</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-purple text-fixed-white">N</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-warning text-fixed-white">E</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="px-3 py-2-5">
                                    <Link to="#" className="stretched-link"></Link>
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 min-w-fit-content">
                                            <span className="avatar avatar-md rounded-circle bg-primary text-fixed-white">Y</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>09-08-22</span>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div className="px-3 mb-3">
                                <div className="d-flex align-items-stretch">
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Enter your task" />
                                    </div>
                                    <div className="min-w-fit-content ms-2">
                                        <div className="d-grid">
                                            <Link to="#" className="btn btn-primary-transparent">Add</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ListGroup>
                                <ListGroup.Item className='rounded-0'>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td1" />
                                            <label className="form-check-label d-block" htmlFor="td1">Do Even More</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td2" defaultChecked />
                                            <label className="form-check-label d-block" htmlFor="td2">Find an idea</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td3" />
                                            <label className="form-check-label d-block" htmlFor="td3">Hangout with friends</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td4" />
                                            <label className="form-check-label d-block" htmlFor="td4">Do Something else</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <li className="list-group-item px-3 py-2-5">
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td5" defaultChecked />
                                            <label className="form-check-label d-block" htmlFor="td5">Eat healthy, Eat Fresh</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </li>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td6" defaultChecked />
                                            <label className="form-check-label d-block" htmlFor="td6">Finsh something more</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td7" />
                                            <label className="form-check-label d-block" htmlFor="td7">Do something more</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td8" />
                                            <label className="form-check-label d-block" htmlFor="td8">Updated more files</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td9" defaultChecked />
                                            <label className="form-check-label d-block" htmlFor="td9">System updated</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='rounded-0'>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check m-0 flex-grow-1">
                                            <input className="form-check-input" type="checkbox" id="td10" />
                                            <label className="form-check-label d-block" htmlFor="td10">Settings Changings</label>
                                        </div>
                                        <div className="min-w-fit-content align-self-start ms-2">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                            <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                            <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>
                    </Tab.Content>

                </Tab.Container>


            </div>
            </div>
        </Fragment>
    );
};
export default Rightsidebar;
