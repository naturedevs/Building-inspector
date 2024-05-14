import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col,  OverlayTrigger, ProgressBar, Row, Table, Tooltip } from 'react-bootstrap';
import { Projectschart, RevenueMain, Revenuechart, Saleschart, Spark1, Totaldeals } from './data/dashboarddata';
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img5 from "../../assets/images/users/5.jpg";
import img11 from "../../assets/images/users/11.jpg";
import img12 from "../../assets/images/users/12.jpg";
import img14 from "../../assets/images/users/14.jpg";
import img16 from "../../assets/images/users/16.jpg";
import crmDash from '../../assets/images/svg/email-marketing.svg';

interface DashboardProps { }

const CrmDashboard: FC<DashboardProps> = () => {
   return (

         <>

            <div className="page-header">
               <div className="flex-grow-1 py-2-5">
                  <h4 className="page-title mb-1">Dashboard</h4>
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link to={`${import.meta.env.BASE_URL}dashboard/`} className="text-primary">CRM</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                     </ol>
                  </nav>
               </div>
            </div>

            <div className="main-container container-fluid">
               <Row>
                  <Col xl={12}>
                     <Card className=" border-0 onsale Shadow">
                        <Link to="#" id="skip"><i className="fe fe-x"></i></Link>
                        <Card.Body className="p-3">
                           <Row>
                              <Col xl={8}>
                                 <div className="d-flex align-items-center">
                                    <img src={crmDash} alt="image" className="min-w-fit-content me-3 banner-img" />
                                    <div className="flex-grow-1">
                                       <h3 className="mb-2">Welcome back! Dashlot</h3>
                                       <p className="mb-0 fs-13">Want to be the first to know about Dashlot updates? Subscribe Now !</p>
                                    </div>
                                 </div>
                              </Col>
                              <div className="col-xl-4 align-self-center text-sm-end position-relative">
                                 <Link to="#" className="btn btn-orange">Upgrade Account</Link>
                              </div>
                           </Row>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>

               <Row>
                  <Col xl={12}>
                     <Row className="row-cols-xxl-5 row-cols-xl-3 row-cols-md-2">
                        <Col>
                           <Card>
                              <Card.Body>
                                 <Row>
                                    <Col xl={8}>
                                       <div className="d-flex">
                                          <div className="small-cards avatar rounded-circle bg-primary-transparent">
                                             <i className="bi bi-people fs-20"></i>
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                             <p className="mb-1 text-gray-600 h6">Active Clients</p>
                                             <h2 className="mb-0">25K</h2>
                                          </div>
                                       </div>
                                       <p className="mb-0 text-muted fs-13 mt-3">
                                          <span className="text-success fw-500"><i className="ti ti-trending-up me-1"></i>0.35%</span>
                                          <span className="ms-2 d-inline-flex">Since Last Month</span>
                                       </p>
                                    </Col>
                                    <Col xl={4} className="align-self-center">
                                       <div id="clientsChart">
                                          <Spark1 />
                                       </div>
                                    </Col>
                                 </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                        <Col>
                           <Card>
                              <Card.Body>
                                 <Row>
                                    <Col xl={8}>
                                       <div className="d-flex">
                                          <div className="small-cards avatar bg-secondary-transparent rounded-circle">
                                             <i className="bi bi-currency-dollar fs-20"></i>
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                             <p className="mb-1 text-gray-600 h6">Total Revenue</p>
                                             <h2 className="mb-0">$365</h2>
                                          </div>
                                       </div>
                                       <p className="mb-0 text-muted fs-13 mt-3">
                                          <span className="text-danger fw-500"><i className="ti ti-trending-down me-1"></i>0.54%</span>
                                          <span className="ms-2 d-inline-flex">Since Last Month</span>
                                       </p>
                                    </Col>
                                    <Col xl={4} className="align-self-center">
                                       <div id="revenueChart">
                                          <Revenuechart />
                                       </div>
                                    </Col>
                                 </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                        <Col>
                           <Card>
                              <Card.Body>
                                 <Row>
                                    <Col xl={8}>
                                       <div className="d-flex">
                                          <div className="small-cards avatar bg-success-transparent rounded-circle">
                                             <i className="bi bi-cart-check fs-20"></i>
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                             <p className="mb-1 text-gray-600 h6">Total Sales</p>
                                             <h2 className="mb-0">1,589</h2>
                                          </div>
                                       </div>
                                       <p className="mb-0 text-muted fs-13 mt-3">
                                          <span className="text-success fw-500"><i className="ti ti-trending-up me-1"></i>0.96%</span>
                                          <span className="ms-2 d-inline-flex">Since Last Month</span>
                                       </p>
                                    </Col>
                                    <Col xl={4} className="align-self-center">
                                       <div id="salesChart">
                                          <Saleschart />
                                       </div>
                                    </Col>
                                 </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                        <Col>
                           <Card>
                              <Card.Body>
                                 <Row>
                                    <Col xl={8}>
                                       <div className="d-flex">
                                          <div className="small-cards avatar bg-danger-transparent rounded-circle">
                                             <i className="bi bi-hand-thumbs-up fs-20"></i>
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                             <p className="mb-1 text-gray-600 h6">Total Deals</p>
                                             <h2 className="mb-0">256</h2>
                                          </div>
                                       </div>
                                       <p className="mb-0 text-muted fs-13 mt-3">
                                          <span className="text-danger fw-500"><i className="ti ti-trending-down me-1"></i>0.42%</span>
                                          <span className="ms-2 d-inline-flex">Since Last Month</span>
                                       </p>
                                    </Col>
                                    <Col xl={4} className="align-self-center">
                                       <div id="totaldeals">
                                          <Totaldeals />
                                       </div>
                                    </Col>
                                 </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                        <Col>
                           <Card>
                              <Card.Body>
                                 <Row>
                                    <Col xl={8}>
                                       <div className="d-flex">
                                          <div className="small-cards avatar bg-info-transparent rounded-circle">
                                             <i className="bi bi-folder-symlink fs-20"></i>
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                             <p className="mb-1 text-gray-600 h6">Total Projects</p>
                                             <h2 className="mb-0">46</h2>
                                          </div>
                                       </div>
                                       <p className="mb-0 text-muted fs-13 mt-3">
                                          <span className="text-success fw-500"><i className="ti ti-trending-up me-1"></i>0.42%</span>
                                          <span className="ms-1 d-inline-flex">Since Last Month</span>
                                       </p>
                                    </Col>
                                    <Col xl={4} className="align-self-center">
                                       <div id="projectsChart">
                                          <Projectschart />
                                       </div>
                                    </Col>
                                 </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                     </Row>
                  </Col>
               </Row>

               <Row>
                  <Col xl={9}>
                     <Card>
                        <Card.Header className="d-block d-sm-flex justify-content-between">
                           <Card.Title as="h6">Revenue Statistics</Card.Title>
                           <div className="d-inline-flex mt-1 mt-sm-0">
                              <Button variant="" className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-cloud-arrow-down-fill me-1"></i> Export</Button>
                              <Button className="btn btn-sm btn-primary"><i className="bi bi-share-fill me-1"></i> Share</Button>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <div id="totalRevenueChart">
                              <RevenueMain />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col lg={12} xl={3} md={12} sm={12}>
                     <Card>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                           <Card.Title as="h6">Upcoming Events</Card.Title>
                           <Button variant='' className="btn btn-sm btn-primary-transparent">Show All</Button>
                        </Card.Header>
                        <Card.Body>
                           <ul className="list-unstyled mb-0 upcoming-events">
                              <li className="list-item">
                                 <div className="d-flex align-items-center">
                                    <div className="min-w-fit-content text-center me-3 rounded-1 overflow-hidden">
                                       <div className="px-2 py-1 fs-10 bg-primary text-fixed-white">Tue</div>
                                       <div className="px-2 py-1 fs-12 bg-primary-transparent text-primary">16 Aug</div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                       <Link to="#" className="fs-15 fw-500 text-truncate">Strategy Planning</Link>
                                       <p className="mb-0 fs-13 text-muted text-truncate">Duo et et rebum kasd takimata.</p>
                                    </div>
                                    <Link to="#" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link>
                                 </div>
                              </li>
                              <li className="list-item">
                                 <div className="d-flex align-items-center">
                                    <div className="min-w-fit-content text-center me-3 rounded-1 overflow-hidden">
                                       <div className="px-2 py-1 fs-10 bg-secondary text-fixed-white">Thu</div>
                                       <div className="px-2 py-1 fs-12 bg-secondary-transparent text-secondary">18 Aug</div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                       <Link to="#" className="fs-15 fw-500 text-truncate">Hiring Employees</Link>
                                       <p className="mb-0 fs-13 text-muted text-truncate">Accusam diam est vero no at sit sea. Tempor est.</p>
                                    </div>
                                    <Link to="#" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link>
                                 </div>
                              </li>
                              <li className="list-item">
                                 <div className="d-flex align-items-center">
                                    <div className="min-w-fit-content text-center me-3 rounded-1 overflow-hidden">
                                       <div className="px-2 py-1 fs-10 bg-success text-fixed-white">Mon</div>
                                       <div className="px-2 py-1 fs-12 bg-success-transparent text-success">22 Aug</div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                       <Link to="#" className="fs-15 fw-500 text-truncate">Traning</Link>
                                       <p className="mb-0 fs-13 text-muted text-truncate">Stet lorem rebum elitr sea et.</p>
                                    </div>
                                    <Link to="#" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link>
                                 </div>
                              </li>
                              <li className="list-item">
                                 <div className="d-flex align-items-center">
                                    <div className="min-w-fit-content text-center me-3 rounded-1 overflow-hidden">
                                       <div className="px-2 py-1 fs-10 bg-info text-fixed-white">Wed</div>
                                       <div className="px-2 py-1 fs-12 bg-info-transparent text-info">31 Aug</div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                       <Link to="#" className="fs-15 fw-500 text-truncate">Finance policy</Link>
                                       <p className="mb-0 fs-13 text-muted text-truncate">Aliquyam rebum dolor ea vero clita eirmod.</p>
                                    </div>
                                    <Link to="#" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link>
                                 </div>
                              </li>
                              <li className="list-item">
                                 <div className="d-flex align-items-center">
                                    <div className="min-w-fit-content text-center me-3 rounded-1 overflow-hidden">
                                       <div className="px-2 py-1 fs-10 bg-danger text-fixed-white">Fri</div>
                                       <div className="px-2 py-1 fs-12 bg-danger-transparent text-danger">06 Sep</div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                       <Link to="#" className="fs-15 fw-500 text-truncate">Marketing Policy</Link>
                                       <p className="mb-0 fs-13 text-muted text-truncate">Et at lorem eos sit diam aliquyam voluptua, elitr sea.</p>
                                    </div>
                                    <Link to="#" className="min-w-fit-content align-self-start view-arrow my-auto ms-2 fs-13 text-gray-600"><i className="fe fe-arrow-right bg-light p-2 rounded-circle"></i></Link>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>

               <Row>
                  <Col xl={4}>
                     <Card>
                        <Card.Header>
                           <Card.Title as="h6">Recent Activity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                           <ul className="list-unstyled activity-list mb-0">
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <span className="avatar avatar-md rounded-circle text-bg-primary"><i className="bi bi-check2-square fs-18"></i></span>
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">Task finished</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap">Adam Berry finished task on<Link to="#" className="text-primary fw-500 ms-1">Project Management</Link></p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex"><i className="bi bi-stopwatch fs-12 me-1"></i>14:15</span>
                                 </div>
                              </li>
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <span className="avatar avatar-md rounded-circle text-bg-secondary"><i className="bi bi-chat-dots fs-18"></i></span>
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">New Comment</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap">Victoria commented on<Link to="#" className="text-primary fw-500 ms-1">Angular Template</Link></p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex"><i className="bi bi-stopwatch fs-12 me-1"></i>12:01</span>
                                 </div>
                              </li>
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <span className="avatar avatar-md rounded-circle text-bg-danger"><i className="bi bi-bug fs-18"></i></span>
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">Task overdue</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap"><Link to="#" className="text-primary fw-500 me-1">Wordpress Project</Link>is on hold and takes longer than usual.</p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex"><i className="bi bi-stopwatch fs-12 me-1"></i>09:43</span>
                                 </div>
                              </li>
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <img src={img3} className="avatar avatar-md rounded-circle" alt="image" />
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">New Lead Manger</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap">Manuel Labor finished task<Link to="#" className="text-primary fw-500 ms-1">Program management</Link></p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex align-items-center"><i className="bi bi-calendar-check fs-11 me-1"></i>10-08-22</span>
                                 </div>
                              </li>
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <span className="avatar avatar-md rounded-circle text-bg-pink"><i className="bi bi-person-plus fs-18"></i></span>
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">New contact added</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap"><Link to="#" className="text-primary fw-500 me-1">Adam Ava</Link>contact has been added to your contact list.</p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex align-items-center"><i className="bi bi-calendar-check fs-11 me-1"></i>10-08-22</span>
                                 </div>
                              </li>
                              <li className="list-item   ">
                                 <div className="d-flex align-items-start">
                                    <div className="me-2 min-w-fit-content">
                                       <img src={img16} className="avatar avatar-md rounded-circle" alt="image" />
                                    </div>
                                    <div className="flex-grow-1">
                                       <Link to="#" className="d-block fw-500 fs-15">Someone followed</Link>
                                       <p className="fs-13 text-gray-600 mb-0 d-inline-flex flex-wrap">Genni commented on<Link to="#" className="text-primary fw-500 ms-1">Instgram Profile</Link></p>
                                    </div>
                                    <span className="ms-3 min-w-fit-content align-self-start fs-13 text-muted text-end d-inline-flex"><i className="bi bi-stopwatch fs-12 me-1"></i>12:01</span>
                                 </div>
                              </li>
                           </ul>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col xl={4}>
                     <Card>
                        <Card.Header>
                           <Card.Title as="h6">Recent Leads</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                           <div className="table-responsive">
                              <div className="table-responsive">
                                 <Table className="text-nowrap table-hover mb-0">
                                    <thead>
                                       <tr>
                                          <th scope="col" className="ps-4">Name</th>
                                          <th scope="col">Points</th>
                                          <th scope="col">Department</th>
                                          <th scope="col">Growth</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td className="w-2 ps-4">
                                             <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                   <img src={img2} className="avatar avatar-md rounded-circle" alt="image" />
                                                </div>
                                                <div className="lh-1">
                                                   <p className="mb-1 fw-500">Robert anii</p>
                                                   <span className="fs-11 text-muted">web developer</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>25</td>
                                          <td>
                                             <span className="badge badge-primary-light">Front-end Developer</span>
                                          </td>

                                          <td className="pe-3">
                                             <p className="text-default fs-12 mb-1 text-end">90%<i className="ri-arrow-up-line text-primary"></i></p>
                                             <ProgressBar now={90} className="progress progress-xs " animated/>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td className="w-2 ps-4">
                                             <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                   <img src={img11} className="avatar avatar-md rounded-circle" alt="image" />
                                                </div>
                                                <div className="lh-1">
                                                   <p className="mb-1 fw-500">Rubi manscho</p>
                                                   <span className="fs-10 text-muted">UI/UX Designer</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>14</td>
                                          <td>
                                             <span className="badge badge-success-light">Manufacturing</span>
                                          </td>
                                          <td className="pe-3">
                                             <p className="text-default fs-12 mb-1 text-end">80%<i className="ri-arrow-up-line text-secondary"></i></p>
                                            
                                             <ProgressBar now={80} variant='secondary' className="progress progress-xs" animated />

                                          </td>
                                       </tr>
                                       <tr>
                                          <td className="w-2 ps-4">
                                             <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                   <img src={img5} className="avatar avatar-md rounded-circle" alt="image" />
                                                </div>
                                                <div className="lh-1">
                                                   <p className="mb-1 fw-500">Marckh Roz</p>
                                                   <span className="fs-11 text-muted">Graphic Designer</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>18</td>
                                          <td>
                                             <span className="badge badge-danger-light">Marketing</span>
                                          </td>
                                          <td className="pe-3">
                                             <p className="text-default fs-12 mb-1 text-end">60%<i className="ri-arrow-up-line text-info"></i></p>
                                             
                                             <ProgressBar now={60} variant='info' className="progress progress-xs" animated/>

                                          </td>
                                       </tr>
                                       <tr>
                                          <td className="w-2 ps-4">
                                             <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                   <img src={img12} className="avatar avatar-md rounded-circle" alt="image" />
                                                </div>
                                                <div className="lh-1">
                                                   <p className="mb-1 fw-500">Jackson Mach</p>
                                                   <span className="fs-11 text-muted">senior. Developer</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>10</td>
                                          <td>
                                             <span className="badge badge-info-light">Front-end Developer</span>
                                          </td>
                                          <td className="pe-3">
                                             <p className="text-default fs-12 mb-1 text-end">35%<i className="ri-arrow-up-line text-purple"></i></p>
                                            
                                             <ProgressBar now={35} variant='purple' className="progress progress-xs" animated/>

                                          </td>
                                       </tr>
                                       <tr>
                                          <td className="w-2 ps-4">
                                             <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                   <img src={img14} className="avatar avatar-md rounded-circle" alt="image" />
                                                </div>
                                                <div className="lh-1">
                                                   <p className="mb-1 fw-500">Rubi manscho</p>
                                                   <span className="fs-10 text-muted">UI/UX Designer</span>
                                                </div>
                                             </div>
                                          </td>
                                          <td>14</td>
                                          <td>
                                             <span className="badge badge-success-light">Manufacturing</span>
                                          </td>
                                          <td className="pe-3">
                                             <p className="text-default fs-12 mb-1 text-end">80%<i className="ri-arrow-up-line text-pink"></i></p>
                                            
                                             <ProgressBar now={80} variant='pink' className="progress progress-xs" animated/>

                                          </td>
                                       </tr>
                                    </tbody>
                                 </Table>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col xl={4}>
                     <Card className="custom-card overflow-hidden">
                        <Card.Header className="d-flex justify-content-between">
                           <Card.Title as="h6">Monthly Projects</Card.Title>
                           <Link to="#" className="btn btn-sm btn-primary-transparent"><i className="ri-sound-module-fill"></i></Link>
                        </Card.Header>
                        <Card.Body className="p-2">
                           <div className="table-responsive">
                              <Table className="text-nowrap table-hover">
                                 <tbody>
                                    <tr>
                                       <td className="w-50 border-bottom-0">
                                          <div className="d-flex align-items-center">
                                             <div className="avatar avatar-md bg-primary-transparent text-primary rounded-circle p-2 me-2">
                                                <i className="bi bi-filetype-psd fs-18"></i>
                                             </div>
                                             <div className="lh-1">
                                                <p className="fw-500 mb-1">PSD Projects</p>
                                                <span className="text-muted fs-11">Pdf format</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="w-30 border-bottom-0 text-end">
                                          <div className="btn-list">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Delete" >
                                                   <i className="ri-delete-bin-4-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Download" >
                                                   <i className="ri-download-2-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="w-50 border-bottom-0">
                                          <div className="d-flex align-items-center">
                                             <div className="avatar avatar-md bg-secondary-transparent text-secondary rounded-circle p-2 me-2">
                                                <i className="bi bi-wordpress fs-18"></i>
                                             </div>
                                             <div className="lh-1">
                                                <p className="fw-500 mb-1">Wordpress Projects</p>
                                                <span className="text-muted fs-11">Word format</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="w-30 border-bottom-0 text-end">
                                          <div className="btn-list">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Delete" >
                                                   <i className="ri-delete-bin-4-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Download" >
                                                   <i className="ri-download-2-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="w-50 border-bottom-0">
                                          <div className="d-flex align-items-center">
                                             <div className="avatar avatar-md bg-success-transparent text-success rounded-circle p-2 me-2">
                                                <i className="bi bi-filetype-html fs-18"></i>
                                             </div>
                                             <div className="lh-1">
                                                <p className="fw-500 mb-1">HTML & CSS3 Projects</p>
                                                <span className="text-muted fs-11">HTML format</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="w-30 border-bottom-0 text-end">
                                          <div className="btn-list">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Delete">
                                                   <i className="ri-delete-bin-4-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Download" >
                                                   <i className="ri-download-2-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="w-50 border-bottom-0">
                                          <div className="d-flex align-items-center">
                                             <div className="avatar avatar-md bg-info-transparent text-info rounded-circle p-2 me-2">
                                                <i className="bi bi-filetype-java fs-18"></i>
                                             </div>
                                             <div className="lh-1">
                                                <p className="fw-500 mb-1">Java Projects</p>
                                                <span className="text-muted fs-11">Pdf format</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="w-30 border-bottom-0 text-end">
                                          <div className="btn-list">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Delete" >
                                                   <i className="ri-delete-bin-4-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Download" >
                                                   <i className="ri-download-2-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td className="w-50 border-bottom-0">
                                          <div className="d-flex align-items-center">
                                             <div className="avatar avatar-md bg-pink-transparent text-pink rounded-circle p-2 me-2">
                                                <i className="bi bi-filetype-doc fs-18"></i>
                                             </div>
                                             <div className="lh-1">
                                                <p className="fw-500 mb-1">Backend Projects</p>
                                                <span className="text-muted fs-11">Doc format</span>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="w-30 border-bottom-0 text-end">
                                          <div className="btn-list">
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Delete">
                                                   <i className="ri-delete-bin-4-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Download</Tooltip>}>
                                                <Link to="#" className="btn btn-sm btn-outline-default" data-bs-toggle="tooltip" title="Download" >
                                                   <i className="ri-download-2-line"></i>
                                                </Link>
                                             </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </Table>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </div>
         </>
   );
};
export default CrmDashboard;
