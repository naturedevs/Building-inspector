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

interface UserListViewProps { }
const data = [
   { id: 1, name: "Tiger Jackson", created_at: '10/05/1985', role:['a','b'] },
   { id: 2, name: "Vadett Summers", position: "UI Developer", office: "Japan", age: 28, salary: "$270,750" },
   { id: 3, name: "Lisbon Mox", position: "Junior Lecturer", office: "San Deigo", age: 45, salary: "$286,000" },
   { id: 4, name: "Medric Belly", position: "Javascript Developer", office: "Eden Gards", age: 25, salary: "$1,060" },
   { id: 5, name: "Ayri Satovu", position: "Senior Engineer", office: "Elitr stet", age: 25, salary: "$262,700" },
   { id: 6, name: "Billie William", position: "Software Engineer", office: "Paris", age: 52, salary: "$472,000" },
   { id: 7, name: "Merrod Sailor", position: "Sales Assosiative", office: "Sydney", age: 35, salary: "$237,500" },
   { id: 8, name: "Khona David", position: "DBMS Engineer", office: "France", age: 25, salary: "$427,900" },
   { id: 9, name: "Coolio Hornet", position: "Angular Developer", office: "Stet stet", age: 39, salary: "$205,500" },
   { id: 10, name: "Sonia Fraust", position: "Software Developer", office: "Magna lorem", age: 32, salary: "$303,600" },
   { id: 11, name: "Jennie Lora", position: "Bank Manager", office: "UK", age: 45, salary: "590,560" },
   { id: 12, name: "Flynn Hank", position: "Cloud Developer", office: "Mexico", age: 25, salary: "$442,000" },
   { id: 13, name: "Ricky Martin", position: "React Developer", office: "Sed sit", age: 48, salary: "$870,600" },
   { id: 14, name: "Halsey Kep", position: "Marketing Executive", office: "Takimata sit", age: 26, salary: "$513,500" },
   { id: 15, name: "Alaric Saltzman", position: "History Teacher", office: "Mystic Falls", age: 32, salary: "$385,750" },
   { id: 16, name: "Katherina Kat", position: "Event Planner", office: "Accusam est", age: 57, salary: "$98,500" },
   { id: 17, name: "Paulson Pal", position: "Data Analyst", office: "Manchester", age: 23, salary: "$325,000" },
   { id: 18, name: "Glory Sam", position: "System Administrator", office: "Sit Invidunt", age: 32, salary: "$337,500" },
   { id: 19, name: "Bradley Cooper", position: "Civil Engineer", office: "Aliquyam", age: 26, salary: "$332,000" },
   { id: 20, name: "Keera Dsoa", position: "Cloud Developer", office: "Sylvia", age: 53, salary: "$717,500" },
   { id: 21, name: "Alia Max", position: "Project Manager", office: "Old York", age: 26, salary: "$435,000" },
   { id: 22, name: "Yuri Gagarin", position: "Data Scientist", office: "Sun", age: 42, salary: "$989,900" },
   { id: 23, name: "cisaro Pals", position: "Sales Executive", office: "Kambodia", age: 25, salary: "$706,450" },
   { id: 24, name: "Amberson Pet", position: "Sales Manager", office: "Kidney", age: 25, salary: "$185,600" },
   { id: 25, name: "peter Parker", position: "Piolet", office: "Web Spal", age: 24, salary: "$900,000" },
];

const columns:any= [
   { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
   { title: "Name", field: "name", sorter: "string"},
   { title: "Role", field: "role", 
      sorter: (a: string[], b: string[]) => a.toString().localeCompare(b.toString()),      
      formatter: MultiValueFormatter,
      formatterParams: { style: 'PILL' }
   },
   { title: "Created_at", field: "created_at", sorter:'string' }
];

const UserListView: FC<UserListViewProps> = () => {
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
            <h4 className="page-title mb-1">Users</h4>
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to={`${import.meta.env.BASE_URL}dashboard/`} className="text-primary">CRM</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Users</li>
               </ol>
            </nav>
         </div>
      </div>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                     Users
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

export default UserListView;
