import { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import face9 from "../../../assets/images/faces/9.jpg";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import us from '../../../assets/images/flags/us_flag.jpg';
import french from '../../../assets/images/flags/french_flag.jpg';
import germany from '../../../assets/images/flags/germany_flag.jpg';
import italy from '../../../assets/images/flags/italy_flag.jpg';
import russia from '../../../assets/images/flags/russia_flag.jpg';
import spain from '../../../assets/images/flags/spain_flag.jpg';
import media4 from "../../../assets/images/media/4.jpg";
import media6 from "../../../assets/images/media/6.jpg";
import media10 from "../../../assets/images/media/10.jpg";
import media12 from "../../../assets/images/media/12.jpg";
import media13 from "../../../assets/images/media/13.jpg";
import media15 from "../../../assets/images/media/15.jpg";
import user6 from "../../../assets/images/users/6.jpg";
import user7 from "../../../assets/images/users/7.jpg";
import user10 from "../../../assets/images/users/10.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import user13 from "../../../assets/images/users/13.jpg";
import {  Button, Dropdown, Form, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Offcanvas, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import pic1 from "../../../assets/images/users/12.jpg";
import pic2 from "../../../assets/images/users/2.jpg";
import pic3 from "../../../assets/images/users/5.jpg";
import pic5 from "../../../assets/images/users/8.jpg";
import pic6 from "../../../assets/images/users/3.jpg";
import pic7 from "../../../assets/images/users/14.jpg";
import store from '../../../redux/store';
import { useAuth } from '../../../config/authcontext';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { themeChanger} from '../../../redux/features/theme/themeSlice'

const Header = () => {
    console.log('header')
    const { logout, getUser } = useAuth();
    const user = getUser();
    const dispatch = useAppDispatch()
    const local_varaiable = useAppSelector((state) => state.theme)
    //offcanvas
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    //Modal search
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //


    const demo = [
        { id: 1, src: pic1, name: 'Maryam Naz', contact: '(11)+390-2309' },
        { id: 2, src: pic2, name: 'Sahar Darya', contact: '(21)+326-1254' },
        { id: 3, src: pic3, name: 'Maryam Naz', contact: '(54)+125-7861' },
        { id: 4, src: pic3, name: 'Yolduz Rafi', contact: '(14)+025-5621' },
        { id: 5, src: pic5, name: 'Nargis Hawa', contact: '(11)+458-1205' },
        { id: 6, src: pic6, name: 'Khadija Mehr', contact: '(21)+654-9517' },
        { id: 7, src: pic7, name: 'Petey Cruiser', contact: '(14)+753-4268' },
        { id: 8, src: pic7, name: 'Khadija Mehr', contact: '(10)+111-1611' },

    ];
    // FullScreen
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
      const elem = document.documentElement;
  
      if (!document.fullscreenElement) {
        elem.requestFullscreen().then(() => setFullScreen(true));
      } else {
        document.exitFullscreen().then(() => setFullScreen(false));
      }
    };
  
    const handleFullscreenChange = () => {
      setFullScreen(!!document.fullscreenElement);
    };
  
    useEffect(() => {
      document.addEventListener('fullscreenchange', handleFullscreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }, []);

    const cartProduct = [
        {
            id: 1,
            src: media10,
            name: 'Mens Solid Bomber jacket',
            text1: '2 x $12',
            text2: '$24',
            // text: '6gb Ram'
        },
        {
            id: 2,
            src: media6,
            name: 'Handbag',
            text1: '3 x $20',
            text2: '$60',
            // text: 'Free shipping'
        },
        {
            id: 3,
            src: media12,
            name: 'Head Phones',
            text1: '1 x $116',
            text2: '$116',
            // text: '$999'
        },
        {
            id: 4,
            src: media13,
            name: 'College bag',
            text1: '1 x $57',
            text2: '$57',
            // text: '50MM'
        },
        {
            id: 5,
            src: media15,
            name: 'Soft Toy',
            text1: '1 x $20',
            text2: '$20',
            // text: 'Sports'
        },
        {
            id: 6,
            src: media4,
            name: 'Smart Watch',
            text1: '2 x $49',
            text2: '$98',
            // text: 'Sports'
        },
    ];

    const [cartItems, setCartItems] = useState([...cartProduct]);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

    const handleRemove = (itemId:any) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };
   
    const ToggleDark = () => {
        console.log('Toggle dark');
        dispatch(themeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ? local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark' : "dark"

        }));
        const theme = local_varaiable
        // const theme = useAppSelector((state) => state.theme)

        if (theme.dataThemeMode == 'dark') {

            // dispatch(themeChanger({
            //     ...theme, 
            //     "bodyBg1": '',
            //     "bodyBg2": '',
            //     "darkBg": '',
            //     "inputBorder": '',
            // }));
            // localStorage.setItem("dashlotlighttheme", "light");
            localStorage.removeItem("dashlotdarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
            localStorage.removeItem("dashlotMenu");
            localStorage.removeItem("dashlotHeader");
        }
        else {
            localStorage.setItem("dashlotdarktheme", "dark");
            localStorage.removeItem("dashlotHeader");
            localStorage.removeItem("dashlotlighttheme");
            localStorage.removeItem("dashlotMenu");
        }

    };
    //Modal search
    function menuClose() {
        const theme = local_varaiable
        dispatch(themeChanger({ ...theme, "toggled": "close" }));
    }
    const swichermainright = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        // const Rightside: any = document.querySelector(".offcanvas-end");
        // Rightside.style.insetInlineEnd = "0px";
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };
    const toggleSidebar = () => {
        const theme = local_varaiable
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        dispatch(themeChanger({ ...theme, "dataNavStyle": "" }));
                        if (theme.toggled === "close-menu-close") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "close-menu-close" }));
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        dispatch(themeChanger({ ...theme, "dataNavStyle": "" }));
                        if (theme.toggled === "icon-overlay-close") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            if (window.innerWidth >= 992) {
                                dispatch(themeChanger({ ...theme, "toggled": "icon-overlay-close" }));
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        dispatch(themeChanger({ ...theme, "dataNavStyle": "" }));
                        if (theme.toggled === "icon-text-close") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "icon-text-close" }));
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        dispatch(themeChanger({ ...theme, "dataNavStyle": "" }));
                        if (theme.toggled === "double-menu-open") {
                            dispatch(themeChanger({ ...theme, "toggled": "double-menu-close" }));
                        } else {
                            const sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                    dispatch(themeChanger({ ...theme, "toggled": "double-menu-open" }));
                                } else {

                                    dispatch(themeChanger({ ...theme, "toggled": "double-menu-close" }));
                                }
                            }
                        }

                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "detached-close" }));
                        }
                        break;
                    // default
                    case "default":
                        dispatch(themeChanger({ ...theme, "toggled": "" }));

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        }
                        else {
                            dispatch(themeChanger({ ...theme, "toggled": "menu-click-closed" }));
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "menu-hover-closed" }));

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "icon-click-closed" }));

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            dispatch(themeChanger({ ...theme, "toggled": "" }));
                        } else {
                            dispatch(themeChanger({ ...theme, "toggled": "icon-hover-closed" }));

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                dispatch(themeChanger({ ...theme, "toggled": "open" }));

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        const overlay = document.querySelector("#responsive-overlay");

                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = document.querySelector("#responsive-overlay");

                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            const overlay = document.querySelector("#responsive-overlay");

                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                dispatch(themeChanger({ ...theme, "toggled": "close" }));
            }
        }
    };
    return (
        <Fragment>
            <header className="app-header">
                <div className="main-header-container container-fluid">

                    <div className="header-content-left">

                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}crm/crmdashboard/`} className="header-logo">
                                    <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                                    <img src={desktopdark} alt="logo" className="desktop-dark" />
                                    <img src={toggledark} alt="logo" className="toggle-dark" />
                                    <img src={desktopdark} alt="logo" className="desktop-white" />
                                    <img src={desktopdark} alt="logo" className="toggle-white" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link aria-label="Hide Sidebar"
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle p-1" onClick={() => toggleSidebar()} data-bs-toggle="sidebar"
                                 to="#">
                                <span></span></Link>
                        </div>

                    </div>
                    <div className="header-content-right">

                        <div className="header-element header-theme-mode">
                            <Link to="#" className="header-link layout-setting" onClick={() => ToggleDark()}>
                                <span className="light-layout">
                                    <i className="bi bi-cloud-moon header-link-icon"></i>
                                </span>
                                <span className="dark-layout">
                                    <i className="bi bi-cloud-sun header-link-icon"></i>
                                </span>
                            </Link>
                        </div>
                       

                        <div className="header-element header-fullscreen">
                            <Link onClick={toggleFullScreen} to="#" className="header-link">
                                    {fullScreen ? (
                                <i className="bi bi-fullscreen-exit full-screen-close header-link-icon"></i>
                            ) : (
                                <i className="bi bi-fullscreen header-link-icon"></i>
                            )}
                            </Link>
                        </div>

                        <Dropdown className="header-element header-profile">
                            <Dropdown.Toggle variant='' className="header-link dropdown-toggle no-caret border-0" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="me-sm-2 me-0">
                                        <img src={face9} alt="img" width="32" height="32" className="rounded-circle" />
                                    </div>
                                    <div className="d-sm-block d-none">
                                        <p className="mb-0 lh-1">{user.username}</p>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                                {/* <Dropdown.Item  className="d-flex" href="#"><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</Dropdown.Item> */}
                                <Dropdown.Item  className="d-flex" onClick={logout}><i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        {/* <div className="header-element">
                            <Link to="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"
                                onClick={() => swichermainright()}
                            >
                                <i className="bi bi-gear header-link-icon"></i>
                            </Link>
                        </div> */}

                    </div>
                </div>
            </header>
        </Fragment >

    );
};

export default Header;
