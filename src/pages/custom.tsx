import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Customswitcher from '../components/common/custompages/customswitcher';
import store from '../redux/store';

export const Custom = () => {
  return (
    <Fragment>
      <Provider store={store}>
          <div className='page'>
            <Outlet />
            <Customswitcher/>
        </div>
        </Provider>
    </Fragment>
  );
};
