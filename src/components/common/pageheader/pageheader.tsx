import { FC } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';

interface PageheaderProps {
  title:string
  heading:string
  active:string
}

const Pageheader: FC<PageheaderProps> = (props:any) => {
    return (
        <>

            <div className="page-header">
					<div className="flex-grow-1 py-2-5">
						<h4 className="page-title mb-1">{props.title}</h4>
						<nav  aria-label="breadcrumb">
							<Breadcrumb as="ol" className="breadcrumb aa mb-0">
								<Breadcrumb.Item  href="#" className="">{props.heading}</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">{props.active}</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</div>
					<div className="min-w-fit-content d-flex align-items-center py-2-5">
					<Button variant='primary' href="#" className="btn">BTC</Button>
						<Button variant='light' href="#" className="btn ms-2">ETH</Button>
						<Button variant='light' href="#" className="btn ms-2">LTC</Button>
						<Button variant='light' href="#" className="btn ms-2">XRP</Button>
					</div>
				</div>
        </>
    );
};

export default Pageheader;
