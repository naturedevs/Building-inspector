import  { FC } from 'react';
import { Link } from 'react-router-dom';

interface ModalsearchProps {
}

const Modalsearch: FC<ModalsearchProps> = () => {
    return (
        <div>
            <div className="modal fade header-search-modal" id="searchModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <div className="input-group">
                                <input type="search" className="form-control border-0 py-3 ps-4" placeholder="Search anything..." />
                                <Link to="#" className="input-group-text bg-transparent border-0 justify-content-center pe-4"><i className="ti ti-search"></i></Link>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="mb-2 h6 text-muted">Recent Searches</p>
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action text-truncate">
                                    <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                    <span>Spruha Admin Dashboard - Themeforest</span>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action text-truncate">
                                    <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                    <span>Bootstrap 5 Latest - Bootstrap</span>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action text-truncate">
                                    <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                    <span>Slica – Bootstrap Responsive Flat Admin Dashboard HTML5 Template</span>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action text-truncate">
                                    <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                    <span>Xia Admin Template - Themeforest</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modalsearch;
