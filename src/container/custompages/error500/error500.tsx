import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error500Props { }

const Error500: FC<Error500Props> = () => {

   return (
      <>
         <div className="page main-error-page justify-content-center">

            <div className="container">
               <div className="d-md-flex align-items-center justify-content-center g-0">
                  <div className="min-w-fit-content">
                     <h1 className="error-font floating mb-0 ">500</h1>
                  </div>
                  <div className="vr mx-2"></div>
                  <div className="min-w-fit-content">
                     <h2>SORRY !</h2>
                     <h4 className="font-weight-normal">Oops!!!! you tried to access a page which is not available..</h4>
                     <Link className="text-fixed btn btn-primary mt-2" to={`${import.meta.env.BASE_URL}crm/crmdashboard/`}><i className="fe fe-arrow-left"></i> Back to home</Link>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};

export default Error500;
