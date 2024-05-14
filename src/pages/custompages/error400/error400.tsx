import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error400Props { }

const Error400: FC<Error400Props> = () => {
  
   return (
      <>
         <div className="page main-error-page justify-content-center">
           
            <div className="container text-center">
               <div className="error-template">
                  <h1 className="error-font floating mb-2">400<span className="fs-20">error</span></h1>
                  <h5 className="error-details ">
                     Sorry, An Error Occured, Requested Page Not Found!!!
                  </h5>
                  <div className="text-center">
                     <Link className="btn btn-primary my-4" to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}> <i className="fe fe-arrow-left"></i> Back to Home </Link>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};

export default Error400;
