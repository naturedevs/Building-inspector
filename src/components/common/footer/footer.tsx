import  { FC } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
    return (
        <>
             <footer className="footer mt-auto bg-white text-center">
            <div className="container">
                <div className="mt-2 mb-2 text-center">
                    Copyright © <span id="year">2024</span> <Link to="#" className="fs-14 text-primary">Dashlot</Link>. Designed with <span
                        className="fa fa-heart text-danger"></span> by <Link to="https://spruko.com/"
                        className="fs-14 text-primary">Spruko</Link> All rights reserved.
                </div>
            </div>
        </footer>
        </>
    );
};
export default Footer;
