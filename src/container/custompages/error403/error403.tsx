import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error403Props { }

const Error403: FC<Error403Props> = () => {

   return (
      <>

         <div className=" main-content page main-error-page justify-content-center">

            <div className="container text-center">
               <div className="error-font mb-4">403</div>
               <h1 className="h2  mb-3">Page Not Found :(</h1>
               <p className="h5 font-weight-normal mb-4 leading-normal">oops! Looks like you got lost.</p>
               <Link className="btn btn-primary rounded-pill" to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}>
                  <i className="fe fe-arrow-left"></i> Back To Home
               </Link>
            </div>

         </div>
      </>
   );
};

export default Error403;
