import { FC } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/images/png/04.png";

interface Error404Props { }

const Error404: FC<Error404Props> = () => {

   return (
      <>

         <div className="page main-error-page justify-content-center">

            <div className="container text-center">
               <img src={img} className="floating h-200" alt="img" />
               <h1 className="h2 mt-4 mb-4">Oops! Page Not Found</h1>
               <Link className="btn btn-outline-primary" to={`${import.meta.env.BASE_URL}dashboard/`}>
                  <i className="fe fe-arrow-left"></i> Back To Home
               </Link>
            </div>

         </div>

      </>
   );
};

export default Error404;
