import { FC } from 'react';
import pic1 from "../../../assets/images/media/loader.svg";

interface LoaderProps {
}

const Loader: FC<LoaderProps> = () => {
    return (
        <div>
            <div id="loader">
                <img src={pic1} className="loader-img" alt="Loader" />
            </div>
        </div>
    );
};
export default Loader;
