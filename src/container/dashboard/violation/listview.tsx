import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import { useState } from 'react';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

interface ViolationListViewProps { }
const data = [
   { id: 1, name: "Admin"},
   { id: 2, name: "Vadett Summers", position: "UI Developer", office: "Japan", age: 28, salary: "$270,750" },
   { id: 3, name: "Lisbon Mox", position: "Junior Lecturer", office: "San Deigo", age: 45, salary: "$286,000" },
   { id: 4, name: "Medric Belly", position: "Javascript Developer", office: "Eden Gards", age: 25, salary: "$1,060" },
   { id: 5, name: "Ayri Satovu", position: "Senior Engineer", office: "Elitr stet", age: 25, salary: "$262,700" },
   { id: 6, name: "Billie William", position: "Software Engineer", office: "Paris", age: 52, salary: "$472,000" },
   { id: 7, name: "Merrod Sailor", position: "Sales Assosiative", office: "Sydney", age: 35, salary: "$237,500" },
];

const columns:any= [
   { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
   { title: "Name", field: "name", sorter: "string"}
];

const ViolationListView: FC<ViolationListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);

	const handlePageChange = (page:any) => {
      console.log("asdf")
      console.log(page)
		setCurrentPage(page);
	};
   return (
   <div className='main-container container-fluid'>
      <div className="page-header">
         <div className="flex-grow-1 py-2-5">
            <h4 className="page-title mb-1">Violations</h4>
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to={`${import.meta.env.BASE_URL}dashboard/`} className="text-primary">CRM</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Violations</li>
               </ol>
            </nav>
         </div>
      </div>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                     Violations
                     </Card.Title>
                  </Card.Header>
                  <Card.Body>
                  <div className="table-responsive  ">
                     <ReactTabulator className="table-hover table-bordered"
                              data={data}
                              columns={columns} 
                              options={{pagination: 'local',
                                 paginationSize: pageSize,
                                 paginationSizeSelector: [20, 50, 100], // Define available page sizes
                                 paginationInitialPage: currentPage,
                                 paginationButtonCount: 5, // Number of pagination buttons to display
                                 paginationDataReceived: { last_page: totalPages },
                                 paginationDataSent: { page: currentPage, size: pageSize }}}
                                 onPageChange={(data:any) => handlePageChange(data.page)} />
                     </div>
                  </Card.Body>
            </Card>
         </Col>
      </Row>
   </div>
)
};

export default ViolationListView;
