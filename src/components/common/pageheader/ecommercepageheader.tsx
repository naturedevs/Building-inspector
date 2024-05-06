import { FC } from 'react';
import { Breadcrumb } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

interface PageheaderProps {
  title:string
  heading:string
  active:string
}

const Pageheaderecommerce: FC<PageheaderProps> = (props:any) => {
    return (
        <>
              <div className="page-header">
					<div className="flex-grow-1 py-2-5">
						<h4 className="page-title mb-1">{props.title}</h4>
						<nav  aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb mb-0">
								<Breadcrumb.Item href="#"  className="text-primary">
                                    {props.heading}</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">{props.active}</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</div>
					<div className="min-w-fit-content d-flex align-items-center">
						<div className="flex-grow-1 py-2-5">
							<p className="text-muted mb-2">Start Date</p>
							<h6 className="fw-500 mb-0">Aug 08, 2022</h6>
						</div>
						<div className="vr mx-3"></div>
						<div className="flex-grow-1 py-2-5">
							<p className="text-muted mb-2">End Date</p>
							<h6 className="fw-500 mb-0">Nov 05, 2022</h6>
						</div>
						<div className="vr mx-3"></div>
						<div className="flex-grow-1 py-2-5">
							<a href="#" className="btn btn-primary"><i className="ti ti-shopping-cart me-1"></i>Buy Now</a>
						</div>
					</div>
				</div>
        </>
    );
};
export default Pageheaderecommerce;
