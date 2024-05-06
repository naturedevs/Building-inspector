import { Breadcrumb, Button } from "react-bootstrap";

const PageheaderDB = (props: any) => {

  return (
    <>
      <div className="page-header">
        <nav aria-label="breadcrumb" className="my-auto flex-grow-1 py-2-5">
          <Breadcrumb className="breadcrumb mb-0">
            <Breadcrumb.Item className="text-primary">{props.heading}</Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">{props.active}</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        <div className="min-w-fit-content d-flex align-items-center">
          <div className="flex-grow-1 py-2-5 btn-list">
            <Button className="btn btn-primary mb-sm-0 me-0" role="button"><i className="fe fe-download me-1"></i> Import</Button>
            <Button className="btn btn-secondary mx-2 mb-sm-0" role="button"><i className="fe fe-printer me-1"></i> Print</Button>
            <Button className="btn btn-danger mb-sm-0" role="button"><i className="fe fe-download me-1"></i> Download Report</Button>
          </div>
        </div>
      </div>
    </>
  );    
};

export default PageheaderDB;
