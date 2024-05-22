import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { ReactTabulator, reactFormatter } from "react-tabulator";
import toast from 'react-hot-toast';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { YesNoModal } from '../../components/ui/modal/YesNo';
import { ActionColumn } from '../../components/ui/tabulator/ActionColumn';
import { Role } from './types';
import { RoleForm } from './Form';
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

import { API_ROUTES } from "../../utils/constants"

interface RoleListViewProps { }

const RoleListView: FC<RoleListViewProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);
   const [roles, setRoles] = useState<Role[]>([]);   
   const [selectedRole, setSelectedRole] = useState<Role>();
   const [loading, setLoading] = useState(false);  
   const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
   const [showRoleFormModal, setShowRoleFormModal] = useState(false);
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      fetchRoles();
   },[])

   const fetchRoles = async () => {
      setLoading(true);
      fetch(API_ROUTES.ROLE_API, {
         method: "GET"
      })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setRoles(data);
         setLoading(false);
      })
      .catch((error) => {
         console.log(error);
         setLoading(false);
         toast.error(error.message);
      });
   };

   const handleAction = (type:string, data:any) => {
      console.log("handleStateChange");
      setSelectedRole(data);
      if(type == "delete"){
         setShowDeleteAlertModal(true);
      }else if(type == "edit"){
         setShowRoleFormModal(true);
      }
   };

   const handleDeleteAlertModalOK = () => {
      console.log("handleDeleteAlertModalOK");
      console.log(selectedRole?._id);
      setDeleting(true);
      if(!selectedRole){
         toast.error("Something went wrong, none user is selected");
         return;
      }

      fetch(API_ROUTES.ROLE_API + `/${selectedRole._id}`, {
         method: "DELETE",
      })
      .then((res) => res.json())
      .then((result) => {
         console.log(result);
         fetchRoles();
         setDeleting(false);
         setShowDeleteAlertModal(false);
      })
      .catch((error) => {
         console.log(error);
         toast.error(error.message);
         setDeleting(false);
      });
   }

   const handleAddRole = () => {
      setSelectedRole(undefined);
      setShowRoleFormModal(true);
   }

   const columns:any= [
      { title:"No", field:"No", width:80, formatter:"rownum", headerSort:false},
      { title: "Title", field: "name", minWidth:200, sorter: "string"},
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
                     <div className="input-group mb-3 flex flex-row-reverse">
                        <Button className="btn btn-primary rounded-1" onClick={handleAddRole}>
                           Add Role
                        </Button>
                     </div>
                     <div className="table-responsive  " >
                        <ReactTabulator className="table-hover table-bordered"
                           data={roles}
                           columns={columns} 
                           options={{pagination: 'local',
                              paginationSize: pageSize,
                              paginationSizeSelector: [ 20, 50, 100], // Define available page sizes
                              paginationInitialPage: currentPage,
                              paginationButtonCount: 5, // Number of pagination buttons to display
                              paginationDataReceived: { last_page: totalPages },
                              paginationDataSent: { page: currentPage, size: pageSize }}}
                        />
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
         content={`Are you sure to delete ${selectedRole?.title}?`} 
         handleOK={handleDeleteAlertModalOK}
      />
      <RoleForm 
         modalShow={showRoleFormModal}
         setModalShow={setShowRoleFormModal}
         role={selectedRole}
         updateRoles={fetchRoles}
      />
   </div>
)
};

export default RoleListView;
