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
import { connect } from "react-redux";
import { ThemeChanger } from '../../../redux/action';
import PerfectScrollbar from 'react-perfect-scrollbar';
import pic1 from "../../../assets/images/users/12.jpg";
import pic2 from "../../../assets/images/users/2.jpg";
import pic3 from "../../../assets/images/users/5.jpg";
import pic5 from "../../../assets/images/users/8.jpg";
import pic6 from "../../../assets/images/users/3.jpg";
import pic7 from "../../../assets/images/users/14.jpg";
import store from '../../../redux/store';
import { useAuth } from '../../../config/authcontext';

const Header = ({ local_varaiable, ThemeChanger }: any) => {
    const { logout } = useAuth();
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

        ThemeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ? local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark' : "dark"

        });
        const theme = store.getState();

        if (theme.dataThemeMode != 'dark') {

            ThemeChanger({
                ...theme, 
                "bodyBg1": '',
                "bodyBg2": '',
                "darkBg": '',
                "inputBorder": '',
            });
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
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
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
        const theme = store.getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            const sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                    ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                                } else {

                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                }
                            }
                        }

                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close" });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

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
                ThemeChanger({ ...theme, "toggled": "close" });
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

                        <div className="header-element header-search">
                            <Link to="#" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handleShow()}>
                                <i className="bi bi-search header-link-icon"></i>
                            </Link>
                            <Modal
                                show={show}
                                onHide={() => handleClose()}
                                keyboard={false}
                                size='lg'
                              
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Search anything..."
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                              
                                    <p className="my-2 h6 text-muted">Recent Searches</p>
                                    <ListGroup className="list-group">
                                        <ListGroup.Item className="list-group-item-action text-truncate">
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Spruha Admin Dashboard - Themeforest</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate">
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Bootstrap 5 Latest - Bootstrap</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate">
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Slica – Bootstrap Responsive Flat Admin Dashboard HTML5 Template</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate">
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Xia Admin Template - Themeforest</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose}>
                                        Search
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <Dropdown className="header-element country-selector">
                            <Dropdown.Toggle variant='' className="header-link dropdown-toggle no-caret border-0" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                <img src={us} alt="img" className="rounded-circle header-link-icon" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={us} alt="img" />
                                        </span>
                                        English
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={spain} alt="img" />
                                        </span>
                                        Spanish
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={french} alt="img" />
                                        </span>
                                        French
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={germany} alt="img" />
                                        </span>
                                        German
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={italy} alt="img" />
                                        </span>
                                        Italian
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={russia} alt="img" />
                                        </span>
                                        Russian
                                    </Link>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
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
                       
                            <Dropdown className="header-element cart-dropdown" autoClose="outside">
                                <Dropdown.Toggle variant='' className="header-link no-caret border-0" data-bs-auto-close="outside" data-bs-toggle="dropdown" >
                                <i className="bi bi-cart-check header-link-icon" ></i>
                                <span className="badge bg-danger rounded-pill header-icon-badge" id="cart-icon-badge">{cartItemCount}</span>
                            
                            </Dropdown.Toggle>
                            <Dropdown.Menu  className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3 dropdown-header bg-header-image p-3 text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Shopping Cart</h5>
                                            <span className="fs-12" id="cart-data">  {cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}</span>
                                        </div>
                                        <div>
                                            <Button variant=''
                                             href="#"
                                              className="min-w-fit-content btn btn-sm btn-white ms-2 my-auto">Checkout</Button>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                    <PerfectScrollbar id="header-dropdown-scroll1" options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                                        <div>
                                    {cartItems.map((idx) => (
                                    <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center position-relative" key={idx.id}
                                     >
                                    <div className="me-2 min-w-fit-content">
                                        <img src={idx.src} alt="img" className="avatar avatar-md rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <Link to="#" className="mb-0 text-truncate flex-grow-1 h6">
                                            {idx.name}
                                            </Link>
                                            <div className="align-self-start text-danger ms-3 fs-15 z-3 dropdown-item-close" 
                                            onClick={() => handleRemove(idx.id)}>
                                            <i className="ti ti-trash"></i>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-12 text-gray-600 flex-grow-1 text-truncate">{idx.text1}</span>
                                            <span className="h6 ms-3 mb-0">{idx.text2}</span>
                                        </div>
                                    </div>
                                    </Dropdown.Item>
                                    ))}
                                    </div>
                                    </PerfectScrollbar>
                                <div className={`p-5 empty-item1 ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-shopping-cart-2-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold mt-3">Your Cart is Empty</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="header-element notifications-dropdown">
                            <Dropdown.Toggle variant='' className="header-link dropdown-toggle no-caret border-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                                <i className="bi bi-bell header-link-icon"  ></i>

                                <span className="badge bg-success rounded-pill header-icon-badge">6</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none" >
                                <Dropdown.Header className="p-3 dropdown-header bg-header-image p-3 text-fixed-white">
                                    <div className="d-flex align-items-end justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Notifications</h5>
                                            <span className="fs-12">2 Unread</span>
                                        </div>
                                        <div>
                                            <Link to="#"className="min-w-fit-content btn btn-white btn-sm ms-2">View All</Link>
                                        </div>
                                    </div>
                                </Dropdown.Header>
                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <div >
                                    <PerfectScrollbar id="header-dropdown-scroll2" options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                               
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-primary-transparent text-primary fs-5"><i className="ti ti-circle-check"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">One task completed.</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Consetetur amet invidunt magna takimata sea.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">15:00</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                                
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-secondary-transparent text-secondary fs-5"><i className="ti ti-server-2"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Server Rebooted</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Voluptua takimata lorem est et.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                                
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-success-transparent text-success fs-5"><i className="ti ti-circle"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">3 new comments</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">someone commented.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">11:35</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                                
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-purple-transparent text-purple fs-5"><i className="ti ti-thumb-up"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Anna liked your post.</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Sea voluptua at sanctus.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">07:03</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                                
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-info-transparent text-info fs-5"><i className="ti ti-file-alert"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Application error.</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Sed et at.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">09-08-22</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                              
                                                <div className="me-2 min-w-fit-content">
                                                    <span className="avatar avatar-md rounded-circle bg-secondary-transparent text-secondary fs-5"><i className="ti ti-server-2"></i></span>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Server Rebooted</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Voluptua takimata lorem est et.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                    </PerfectScrollbar>
                                </div>
                                <div className="p-5 empty-item1 d-none">
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-notification-off-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="header-element header-shortcuts-dropdown">
                            <Dropdown.Toggle variant='' className="header-link dropdown-toggle no-caret border-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                                <i className="bi bi-chat-dots header-link-icon" ></i>
                                <span className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" >6</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end">
                                <div className="p-3 dropdown-header bg-header-image text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Messages</h5>
                                            <span className="fs-12">3 Unread</span>
                                        </div>
                                        <div>
                                            <Link to="#" className="min-w-fit-content btn btn-sm btn-white ms-2">View All</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider mb-0"></div>
                                <div >
                                    <PerfectScrollbar id="header-dropdown-scroll3" options={{ suppressScrollX: true, useBothWheelAxes: false }}>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                             
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user6} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Madeleine</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">I'm sorry but i'm not sure how to help you with that</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">15:00</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                           
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user7} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Nargis Hawa</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">All set! Now, time to get to you now</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                             
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user10} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Sahar Darya</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Here are some products i found for you form database.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">11:35</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                              
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user11} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Khadija Mehr</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Are you ready to pickup your Delivery.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">07:03</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                             
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user13} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Naruto Uzumaki</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">One day I'll become Hokage.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">09-08-22</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" href="#">
                                               
                                                <div className="me-2 min-w-fit-content">
                                                    <img src={user7} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Nargis Hawa</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">All set! Now, time to get to you now</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                    </PerfectScrollbar>

                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
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
                                        <p className="mb-0 lh-1">Jonathan Mills </p>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                                <Dropdown.Item  className="d-flex" href="#"><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</Dropdown.Item>
                                <Dropdown.Item  className="d-flex" href="#"><i className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox <span className="badge bg-success-transparent ms-auto">25</span></Dropdown.Item>
                                <Dropdown.Item  className="d-flex" href="#"><i className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</Dropdown.Item>
                                <Dropdown.Item  className="d-flex border-block-end" href="#"><i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</Dropdown.Item>
                                <Dropdown.Item  className="d-flex" href="#"><i className="ti ti-headset fs-18 me-2 op-7"></i>Support</Dropdown.Item>
                                <Dropdown.Item  className="d-flex" onClick={logout}><i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="header-element header-dropdown-toggle">
                            <Link to="#" className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1"
                                onClick={handleShow3}
                                aria-controls="offcanvasRight"> <i className="bi bi-justify-right header-link-icon" ></i></Link>
                        </div>
                        <Offcanvas placement='end' show={show3} onHide={handleClose3} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                            <div className="sidebar sidebar-right sidebar-animate">
                                <Offcanvas.Header closeButton className='bg-primary-transparent p-3 text-end mb-3 d-flex justify-content-between align-items-center'>
                                 
                                    <h5 className="mb-0 fw-400 ">Activity Center</h5>
                                </Offcanvas.Header>

                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav as="ul" variant="tabs" id="myTab-4" role="tablist" className="nav-tabs flex-nowrap border-bottom-0 px-3 tabs-style-1">
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" id="home-tab-4" className="flex-grow-1" eventKey="first" >Friends</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="second" className="flex-grow-1">Activity</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="third" className="flex-grow-1">Todo</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <hr className="my-3" />
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="px-3">
                                                <InputGroup className="mb-3">
                                                    <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <Button variant='primary-transparent' id="basic-addon2"><i className="ti ti-search"></i></Button>
                                                </InputGroup>
                                            </div>

                                            <ListGroup className="list-unstyled list-group-flush" as="ul">
                                                {demo.map((idx) => (
                                                    <ListGroup.Item className='px-3 py-2-5' as="li" key={idx.id}>
                                                        <div className="d-flex align-items-start" key={Math.random()}>
                                                            <div className="d-flex align-items-center flex-grow-1 position-relative">
                                                                <div className="me-2 min-w-fit-content">
                                                                    <img src={idx.src} alt="img" className="avatar avatar-md rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <p className="mb-0 fw-500 text-truncate fs-15">{idx.name}</p>
                                                                    <span className="fs-13 text-muted text-truncate">{idx.contact}</span>
                                                                </div>
                                                            </div>
                                                            <Dropdown className='ms-2 pt-1'>
                                                                <Dropdown.Toggle className='no-caret' as='a' variant="" id="dropdown-basic">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </ListGroup.Item>
                                                ))}

                                            </ListGroup>
                                            <ul className="list-unstyled list-group list-group-flush">

                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <ListGroup className="list-unstyled list-group-flush">
                                                <ListGroupItem className=" px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-secondary text-fixed-white">CH</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">New website is created</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>30 mins</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-info text-fixed-white">A</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare For the Next Project</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>2 hrs</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-success text-fixed-white">N</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Decide the live Discussion Time</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>3 hrs</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-danger text-fixed-white">HO</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Team Review meeting</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-8-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-purple text-fixed-white">N</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-warning text-fixed-white">E</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link to="#" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-primary text-fixed-white">Y</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>09-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="px-3 mb-3">
                                                <div className="d-flex align-items-stretch">
                                                    <div className="flex-grow-1">
                                                        <input type="text" className="form-control" placeholder="Enter your task" />
                                                    </div>
                                                    <div className="min-w-fit-content ms-2">
                                                        <div className="d-grid">
                                                            <Link to="#" className="btn btn-primary-transparent">Add</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ListGroup>
                                                <ListGroup.Item className='rounded-0'>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td1" />
                                                            <label className="form-check-label d-block" htmlFor="td1">Do Even More</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item >
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td2" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td2">Find an idea</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td3" />
                                                            <label className="form-check-label d-block" htmlFor="td3">Hangout with friends</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td4" />
                                                            <label className="form-check-label d-block" htmlFor="td4">Do Something else</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <li className="list-group-item px-3 py-2-5">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td5" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td5">Eat healthy, Eat Fresh</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </li>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td6" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td6">Finsh something more</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td7" />
                                                            <label className="form-check-label d-block" htmlFor="td7">Do something more</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td8" />
                                                            <label className="form-check-label d-block" htmlFor="td8">Updated more files</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td9" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td9">System updated</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item className='rounded-0'>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td10" />
                                                            <label className="form-check-label d-block" htmlFor="td10">Settings Changings</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link to="#" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link to="#" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Tab.Container>

                            </div>
                        </Offcanvas>
                        <div className="header-element">
                            <Link to="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"
                                onClick={() => swichermainright()}
                            >
                                <i className="bi bi-gear header-link-icon"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
        </Fragment >

    );
};
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Header);
