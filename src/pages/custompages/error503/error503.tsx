import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error503Props { }

const Error503: FC<Error503Props> = () => {
   return (
      <>
         <div className="page main-error-page justify-content-center">

            <div className="container">
               <div>
                  <div className="error-content mt-0 mx-auto">
                     <div className="display-2 mb-3 ">503</div>
                     <h1 className="h2 mb-3">Server Not Found...</h1>
                     <p className="h4 font-weight-normal mb-4 leading-normal ">Oops! Something goes Wrong.</p>
                     <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`} className="btn btn-primary rounded-pill zindex2">
                        <i className="fe fe-arrow-left"></i> Back to Home
                     </Link>
                  </div>
               </div>
            </div>

         </div> </>
   );
};

export default Error503;
