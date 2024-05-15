import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { Role } from './types';
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

import { API_ROUTES } from "../../utils/constants"

interface RoleListViewProps { }
const data = [
   { id: 1, name: "Admin"},
   { id: 2, name: "Vadett Summers", position: "UI Developer", office: "Japan", age: 28, salary: "$270,750" },
   { id: 3, name: "Lisbon Mox", position: "Junior Lecturer", office: "San Deigo", age: 45, salary: "$286,000" },
   { id: 4, name: "Medric Belly", position: "Javascript Developer", office: "Eden Gards", age: 25, salary: "$1,060" },
   { id: 5, name: "Ayri Satovu", position: "Senior Engineer", office: "Elitr stet", age: 25, salary: "$262,700" },
   { id: 6, name: "Billie William", position: "Software Engineer", office: "Paris", age: 52, salary: "$472,000" },
   { id: 7, name: "Merrod Sailor", position: "Sales Assosiative", office: "Sydney", age: 35, salary: "$237,500" },
];

const RoleListView: FC<RoleListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   // const [selectedUser, setSelectedUser] = useState<User>();
   const [selectedRole, setSelectedRole] = useState<Role>();
   const [loading, setLoading] = useState(false);  
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showUserFormModal, setShowUserFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      setSelectedRole(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowUserFormModal(true);
      }
   };

   const handleDeleteAlertModalOK = () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedRole?.id);
      setDeleting(true);
      if(!selectedRole){
         toast.error("Something went wrong, none user is selected");
         return;
      }
   }

	const handlePageChange = (page:any) => {
      console.log("asdf")
      console.log(page)
		setCurrentPage(page);
	};

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Name", field: "name", sorter: "string"},
      { title: 'Actions', width:120, field: 'action', hozAlign: 'center',headerSort:false, formatter: reactFormatter(<ActionColumn handleAction={handleAction}/>) }
   ];
   return (
   <div className='main-container container-fluid mt-3'>
      <Row>
         <Col xl={12}>
            <Card className="custom-card">
                  <Card.Header>
                     <Card.Title>
                     Roles
                     </Card.Title>
                  </Card.Header>
                  <Card.Body>
                  <div className="table-responsive  ">
                     <ReactTabulator className="table-hover table-bordered"
                        data={data}
                        columns={columns} 
                        options={{pagination: 'local',
                           paginationSize: pageSize,
                           paginationSizeSelector: [ 20, 50, 100], // Define available page sizes
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
      <YesNoModal 
         modalShow={showDeleteAlertModal} 
         setModalShow={setShowDeleteAlertModal} 
         title={"Confirm"} 
         type={"danger"}
         content={'Are you sure to delete this user?'} 
         handleOK={handleDeleteAlertModalOK}
      />
   </div>
)
};

export default RoleListView;
