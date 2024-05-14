import { Fragment, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/common/header/header';
import Sidebar from '../components/common/sidebar/sidebar';
import Switcher from '../components/common/switcher/switcher';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";
import Modalsearch from '../components/common/modalsearch/modalsearch';
import Footer from '../components/common/footer/footer';
// import TabToTop from '../components/common/backtotop/backtotop';
import store from '../redux/store';
import { useAuth } from '../config/authcontext';

function App() {
  const [MyclassName, setMyClass] = useState("");
  const { isLoggedIn } = useAuth();

  const Bodyclickk = () => {
    if (localStorage.getItem("dashlotverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      const html = document.documentElement;
      if (html.getAttribute('data-icon-overlay') === 'open') {
          html.setAttribute('data-icon-overlay' ,"");
      }
    }
  }

  if(!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet
            htmlAttributes={{
              lang: "en",
              dir: "ltr",
              "data-menu-styles": "dark",
              "data-theme-mode": "light",
              "data-nav-layout": "vertical",
              "data-header-styles": "light",
              "data-loader": "disable",
              "data-icon-text": MyclassName,
            }}
          />
          <Switcher />
          <div className='page'>
            <Header />
            <Sidebar />
            <div className='main-content app-content' onClick={Bodyclickk}>
              <Outlet />
            </div>
            <Footer />
          </div>
          <Modalsearch />
          {/* <TabToTop /> */}
        </HelmetProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
