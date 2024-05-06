import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error501Props { }

const Error501: FC<Error501Props> = () => {

   return (

      <>
         <div className="page main-error-page justify-content-center">

            <div className="container">
               <div className="page-content">
                  <div className="container text-center">
                     <div className="display-1 mb-4 floating">Oops!</div>
                     <h1 className="h2  mb-4">Error 501: Internal Server Error</h1>
                     <Link className="btn btn-outline-primary box-shadow-0" to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}>
                        <i className="fe fe-arrow-left"></i> Back To Home
                     </Link>
                  </div>
               </div>
            </div>

         </div>

      </>
   );
};

export default Error501;
