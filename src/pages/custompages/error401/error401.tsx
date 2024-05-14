import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error401Props { }

const Error401: FC<Error401Props> = () => {

   return (
      <>

         <div className="page main-error-page justify-content-center">

            <div className="container text-center">
               <div className="error-template">
                  <h1 className="error-font floating mb-2">401</h1>
                  <h5 className="error-details">
                     Sorry, an error has occured, Requested page not found!
                  </h5>
                  <div className="text-center">
                     <Link className="btn btn-primary  mt-4 mb-4" to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}><i className="fe fe-arrow-left"></i> Back to Home </Link>
                  </div>
               </div>
            </div>

         </div>

      </>
   );
};

export default Error401;
