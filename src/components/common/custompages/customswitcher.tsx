import  { Fragment, useEffect } from 'react';
import Themeprimarycolor, * as customswitcherdata from "../switcher/data/customswitcherdata";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Button, Nav, Tab } from 'react-bootstrap';

const Customswitcher = ({ local_varaiable, ThemeChanger }: any) => {
    useEffect(() => {
        customswitcherdata.LocalStorageBackup(ThemeChanger);

    }, []);
    
    const customStyles: any = ` ${local_varaiable.colorPrimaryRgb != '' ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ''};
    ${local_varaiable.bodyBg1 != '' ? `--body-bg-rgb:${local_varaiable.bodyBg1}` : ''};
    ${local_varaiable.bodyBg2 != '' ? `--body-bg-rgb2:${local_varaiable.bodyBg2}` : ''};
    ${local_varaiable.darkBg != '' ? `--light-rgb:${local_varaiable.darkBg}` : ''};
    ${local_varaiable.darkBg != '' ? `--form-control-bg:rgb(${local_varaiable.darkBg})` : ''};
    ${local_varaiable.inputBorder != '' ? `--input-border:rgb(${local_varaiable.inputBorder})` : ''};`;
    return (
        <Fragment>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <Helmet>    
                    <html dir={local_varaiable.dir}
                        data-theme-mode={local_varaiable.dataThemeMode}
                        data-header-styles={local_varaiable.dataHeaderStyles}
                        data-vertical-style={local_varaiable.dataVerticalStyle}
                        data-nav-layout={local_varaiable.dataNavLayout}
                        data-menu-styles={local_varaiable.dataMenuStyles}
                        data-toggled={local_varaiable.toggled}
                        data-nav-style={local_varaiable.dataNavStyle}
                        data-page-style={local_varaiable.dataPageStyle}
                        data-menu-position={local_varaiable.dataMenuPosition}
                        data-header-position={local_varaiable.dataHeaderPosition}
                        data-bg-img={local_varaiable.bgImg}
                        data-loader={local_varaiable.loader}
                         style={customStyles}
                    >

                    </html>

                </Helmet>
                <div className="offcanvas-body">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                        <nav className="border-bottom border-block-end-dashed">
                            <Nav variant="pills" className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                                <Nav.Item>
                                    <Nav.Link eventKey="react"> <button className="nav-link" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home"
                                        type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="firebase"> <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile"
                                        type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button></Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </nav>
                        <Tab.Content className="tab-content" id="nav-tabContent">
                            <Tab.Pane eventKey="react">
                                <div className="">
                                    <p className="switcher-style-head">Theme Color Mode:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-light-theme">
                                                    Light
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                                    checked={local_varaiable.dataThemeMode !== 'dark'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Light(ThemeChanger)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                    Dark
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                                    checked={local_varaiable.dataThemeMode == 'dark'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Dark(ThemeChanger)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Directions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-ltr">
                                                    LTR
                                                </label>
                                                <input className="form-check-input" type="radio" name="direction" id="switcher-ltr"
                                                    checked={local_varaiable.dir == 'ltr'} onChange={(_e)=>{}}
                                                    onClick={() => { customswitcherdata.Ltr(ThemeChanger); }} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-rtl">
                                                    RTL
                                                </label>
                                                <input className="form-check-input" type="radio" name="direction" id="switcher-rtl"
                                                    checked={local_varaiable.dir == 'rtl'} onChange={(_e)=>{}}
                                                    onClick={() => { customswitcherdata.Rtl(ThemeChanger); }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Page Styles:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-regular">
                                                    Regular
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                                    checked={local_varaiable.dataPageStyle == 'regular'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Regular(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-classic">
                                                    Classic
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic"
                                                    checked={local_varaiable.dataPageStyle == 'classic'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Classic(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-modern">
                                                    Modern
                                                </label>
                                                <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern"
                                                    checked={local_varaiable.dataPageStyle == 'modern'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Modern(ThemeChanger)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Menu Positions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                    Fixed
                                                </label>
                                                <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                                    checked={local_varaiable.dataMenuPosition == 'fixed'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.FixedMenu(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                                    Scrollable
                                                </label>
                                                <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll"
                                                    checked={local_varaiable.dataMenuPosition == 'scrollable'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.scrollMenu(ThemeChanger)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="switcher-style-head">Header Positions:</p>
                                    <div className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                    Fixed
                                                </label>
                                                <input className="form-check-input" type="radio" name="header-positions"
                                                    id="switcher-header-fixed"
                                                    checked={local_varaiable.dataHeaderPosition == 'fixed'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Headerpostionfixed(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-header-scroll">
                                                    Scrollable
                                                </label>
                                                <input className="form-check-input" type="radio" name="header-positions"
                                                    checked={local_varaiable.dataHeaderPosition == 'scrollable'} onChange={(_e)=>{}}
                                                    onClick={() => customswitcherdata.Headerpostionscroll(ThemeChanger)}
                                                    id="switcher-header-scroll" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="firebase">
                                <div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Theme Primary:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-1" type="radio"
                                                    onClick={() => customswitcherdata.primaryColor1(ThemeChanger)}
                                                    name="theme-primary" id="switcher-primary" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-2" type="radio"
                                                    onClick={() => customswitcherdata.primaryColor2(ThemeChanger)}
                                                    name="theme-primary" id="switcher-primary1" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                                    onClick={() => customswitcherdata.primaryColor3(ThemeChanger)}
                                                    id="switcher-primary2" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                                    onClick={() => customswitcherdata.primaryColor4(ThemeChanger)}
                                                    id="switcher-primary3" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                                    onClick={() => customswitcherdata.primaryColor5(ThemeChanger)}
                                                    id="switcher-primary4" />
                                            </div>
                                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                                <div className='theme-container-primary'>
                                                <button className="">nano</button>
                                                </div>
                                                <div className='pickr-container-primary'>
                                                    <div className='pickr'>
                                                        <Button className='pcr-button' onClick={(ele:any)=>{
                                                            if(ele.target.querySelector("input")){
                                                                ele.target.querySelector("input").click();
                                                            }
                                                            }}>
                                                    <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                                        </Button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Theme Background:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-1" type="radio"
                                                    onClick={() => customswitcherdata.backgroundColor1(ThemeChanger)}
                                                    name="theme-background" id="switcher-background"
                                                />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-2" type="radio"
                                                    onClick={() => customswitcherdata.backgroundColor2(ThemeChanger)}
                                                    name="theme-background" id="switcher-background1" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                                    onClick={() => customswitcherdata.backgroundColor3(ThemeChanger)}
                                                    id="switcher-background2" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-4" type="radio"
                                                    onClick={() => customswitcherdata.backgroundColor4(ThemeChanger)}
                                                    name="theme-background" id="switcher-background3" />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-bg-5" type="radio"
                                                    onClick={() => customswitcherdata.backgroundColor5(ThemeChanger)}
                                                    name="theme-background" id="switcher-background4" />
                                            </div>
                                            <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                            <div className='theme-container-primary' >
                                                <button className="">nano</button>
                                                </div>
                                                <div className='pickr-container-primary'>
                                                    <div className='pickr'>
                                                        <Button className='pcr-button' onClick={(ele:any)=>{
                                                            if(ele.target.querySelector("input")){
                                                                ele.target.querySelector("input").click();
                                                            }
                                                            }}>
                                                <customswitcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                                        </Button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <div className="d-grid canvas-footer">
                                <Link to="#" id="reset-all" className="btn btn-danger m-1"
                                    onClick={() => customswitcherdata.Reset(ThemeChanger)}>Reset</Link>
                            </div>
                        </Tab.Content>
                    </Tab.Container>
                </div>

            </div>
        </Fragment>
    );
};
Customswitcher.defaultProps = {};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Customswitcher);
