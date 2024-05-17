import  { useState } from 'react';
import { MENUITEMS } from '../../sidebar/sidemenu';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'


export function Dark(actionfunction: any) {
    // const theme = useAppSelector((state) => state.theme)
    console.log("dark")
    actionfunction({
        // ...theme,
        "dataThemeMode": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark",
        "dataMenuStyles": localStorage.dashlotMenu ? localStorage.dashlotMenu :localStorage.dashlotdarktheme ? "dark" :"dark",
    });
    localStorage.setItem("dashlotdarktheme", "dark");
    localStorage.removeItem("dashlotlighttheme");
    localStorage.removeItem("dashlotMenu");
    localStorage.removeItem("dashlotHeader");
}

export function Light(actionfunction: any) {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataThemeMode": "light",
        "dataHeaderStyles": "light",
        "darkBg":"",
        "bodyBg1" : "",
        "bodyBg2" : "",
        "inputBorder" : "",
    
    });
    localStorage.setItem("dashlotlighttheme", "light");
    localStorage.removeItem("dashlotdarktheme");
    localStorage.removeItem('darkBgRGB1');
    localStorage.removeItem('darkBgRGB2');
    localStorage.removeItem('darkBgRGB3');
    localStorage.removeItem('darkBgRGB4');
}
export function Ltr(actionfunction: any) {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({ dir: "ltr" });
    localStorage.setItem("dashlotltr", "ltr");
    localStorage.removeItem("dashlotrtl");
    // addOrRemoveCss(ltr);
}
export function Rtl(actionfunction: any) {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({ dir: "rtl" });
    localStorage.setItem("dashlotrtl", "rtl");
    localStorage.removeItem("dashlotltr");
    // addOrRemoveCss(rtl);
}
export const HorizontalClick = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "horizontal",
        // "dataMenuStyles":  localStorage.darkBgRGB1 ? 'dark' : localStorage.dashlotMenu ? localStorage.dashlotMenu : "dark" ,
        //  localStorage.dashlotdarktheme ? 'dark' :
        //   : "light",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.dashlotnavstyles ? localStorage.dashlotnavstyles :"menu-click"
    });
    localStorage.setItem("dashlotlayout", "horizontal");
    localStorage.removeItem("dashlotverticalstyles");
    closeMenuFn();
    const Sidebar:any =  document.querySelector(".main-menu");
    if(Sidebar){
    Sidebar.style.marginInline = "0px";
    }
};
export const Vertical = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataMenuStyles": "dark",
        "dataVerticalStyle": "overlay",
        "toggled": "",
        "dataNavStyle": ''
    });
    localStorage.setItem("dashlotlayout", "vertical");
    localStorage.removeItem("dashlotnavstyles");
};

export const Menuclick = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavStyle": "menu-click",
        "dataVerticalStyle": "",
        "toggled": "menu-click-closed",
    });
    localStorage.setItem("dashlotnavstyles", "menu-click");
    localStorage.removeItem("dashlotverticalstyles");
    const Sidebar:any =  document.querySelector(".main-menu");
    if(Sidebar){
    Sidebar.style.marginInline = "0px";
    }
};
export const MenuHover = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "toggled": "menu-hover-closed",
        "horStyle": ""
    });
    localStorage.setItem("dashlotnavstyles", "menu-hover");
    localStorage.removeItem("dashlotverticalstyles");
    const Sidebar:any =  document.querySelector(".main-menu");
    if(Sidebar){
    Sidebar.style.marginInline = "0px";
    }
};
export const IconClick = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavStyle": "icon-click",
        "dataVerticalStyle": "",
        "toggled": "icon-click-closed",
    });
    localStorage.setItem("dashlotnavstyles", "icon-click");
    localStorage.removeItem("dashlotverticalstyles");
    const Sidebar:any =  document.querySelector(".main-menu");
    if(Sidebar){
    Sidebar.style.marginInline = "0px";
    }
};
function closeMenuFn() {
    const closeMenuRecursively = (items: any) => {

        items?.forEach((item: any) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MENUITEMS);
}
export const IconHover = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavStyle": "icon-hover",
        "dataVerticalStyle": "",
        "toggled": "icon-hover-closed"
    });
    localStorage.setItem("dashlotnavstyles", "icon-hover");
    localStorage.removeItem("dashlotverticalstyles");
    const Sidebar:any =  document.querySelector(".main-menu");
    if(Sidebar){
    Sidebar.style.marginInline = "0px";
    }
    closeMenuFn();
};
export const Fullwidth = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("dashlotfullwidth", "Fullwidth");
    localStorage.removeItem("dashlotboxed");

};
export const Boxed = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataWidth": "boxed",
    });
    localStorage.setItem("dashlotboxed", "Boxed");
    localStorage.removeItem("dashlotfullwidth");
};
export const FixedMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("dashlotmenufixed", "MenuFixed");
    localStorage.removeItem("dashlotmenuscrollable");
};
export const scrollMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("dashlotmenuscrollable", "Menuscrolled");
    localStorage.removeItem("dashlotmenufixed");
};
export const Headerpostionfixed = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("dashlotheaderfixed", 'FixedHeader');
    localStorage.removeItem("dashlotheaderscrollable");
};
export const Headerpostionscroll = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("dashlotheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("dashlotheaderfixed");
};
export const Regular = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("dashlotregular", "Regular");
    localStorage.removeItem("dashlotclassic");
    localStorage.removeItem("dashlotmodern");
};
export const Classic = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("dashlotclassic", "Classic");
    localStorage.removeItem("dashlotregular");
    localStorage.removeItem("dashlotmodern");
};
export const Modern = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("dashlotmodern", "Modern");
    localStorage.removeItem("dashlotregular");
    localStorage.removeItem("dashlotclassic");
};

export const Defaultmenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        // "dataVerticalStyle": "default",
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "vertical",
        'toggled':''
    });
    var icon =document.getElementById("switcher-default-menu") as HTMLInputElement;
    if(icon){
        icon.checked=true
    }
    // localStorage.removeItem("dashlotverticalstyles");
    // localStorage.setItem("dashlotverticalstyles", "default");
    localStorage.removeItem("dashlotnavstyles");

};
export const Closedmenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "toggled": "close-menu-close"
    });
    localStorage.setItem("dashlotverticalstyles", "closed");
    localStorage.removeItem("dashlotnavstyles");

};

function icontextOpenFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}
export const iconTextfn = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close"
    });
    localStorage.setItem("dashlotverticalstyles", "icontext");
    localStorage.removeItem("dashlotnavstyles");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });
};
export const iconOverayFn = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "toggled": "icon-overlay-close",
        // "icon-overlay": ""
    });
    localStorage.setItem("dashlotverticalstyles", "overlay");
    localStorage.removeItem("dashlotnavstyles");
    var icon =document.getElementById("switcher-icon-overlay") as HTMLInputElement;
    if(icon){
        icon.checked=true
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn()
    });
    MainContent?.addEventListener("click", () => {
        DetachedCloseFn()
    });
};

function DetachedOpenFn() {
    if (window.innerWidth > 992) {
   
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
    
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "toggled": "detached-close",
    });
    localStorage.setItem("dashlotverticalstyles", "detached");
    localStorage.removeItem("dashlotnavstyles");
    
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn()
    });
    MainContent?.addEventListener("click", () => {
        DetachedCloseFn()
    });
};


export const DoubletFn = (actionfunction: any) => {
    
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "dataNavStyle":"",
        "toggled":"double-menu-open",
    });
    localStorage.setItem("dashlotverticalstyles", "doublemenu");
    localStorage.removeItem("dashlotnavstyles");

    setTimeout(() => {
        if(!document.querySelectorAll(".main-menu .slide.active")[0].querySelector('ul')){
            const theme : any = useAppSelector((state) => state.theme)
            actionfunction(
                {...theme,
                "toggled": "double-menu-close",}
            );
        }
    }, 100);
    // const menuSlideItem = document.querySelectorAll<HTMLElement>(
    //     ".main-menu > li > .side-menu__item"
    // );
    
    // // Create the tooltip element
    // const tooltip = document.createElement("div");
    // tooltip.className = "custome-tooltip";
    // // tooltip.textContent = "This is a tooltip";
    
    // // Set the CSS properties of the tooltip element
    // tooltip.style.setProperty("position", "fixed");
    // tooltip.style.setProperty("display", "none");
    // tooltip.style.setProperty("padding", "0.5rem");
    // tooltip.style.setProperty("font-weight", "500");
    // tooltip.style.setProperty("font-size", "0.75rem");
    // tooltip.style.setProperty("background-color", "rgb(15, 23, 42)");
    // tooltip.style.setProperty("color", "rgb(255, 255, 255)");
    // tooltip.style.setProperty("margin-inline-start", "45px");
    // tooltip.style.setProperty("border-radius", "0.25rem");
    // tooltip.style.setProperty("z-index", "99");
    
    // const sidemenulink: NodeListOf<HTMLElement> = document.querySelectorAll(
    //     '.main-menu li > .side-menu__item'
    // );
    
    // sidemenulink.forEach((ele) =>
    //     ele.removeEventListener("click", doubleClickFn)
    // );
    
    // menuSlideItem.forEach((e) => {
    //     // Add an event listener to the menu slide item to show the tooltip
    //     e.addEventListener("mouseenter", () => {
    //         tooltip.style.setProperty("display", "block");
    //         tooltip.textContent =
    //             e.querySelector(".side-menu__label")!.textContent!;
    //         if (
    //             document
    //                 .querySelector("html")!
    //                 .getAttribute("data-vertical-style") == "doublemenu"
    //         ) {
    //             e.appendChild(tooltip);
    //         }
    //     });
    
    //     // Add an event listener to hide the tooltip
    //     e.addEventListener("mouseleave", () => {
    //         tooltip.style.setProperty("display", "none");
    //         tooltip.textContent =
    //             e.querySelector(".side-menu__label")!.textContent!;
    //         if (
    //             document
    //                 .querySelector("html")!
    //                 .getAttribute("data-vertical-style") == "doublemenu"
    //         ) {
    //             e.removeChild(tooltip);
    //         }
    //     });
    // });
    
    // const html = document.querySelector("html");
    // if (html && !document.querySelector('.double-menu-active')) {
    //     html.setAttribute('data-toggled', 'double-menu-close');
    // }
};
export const bgImage1 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bgImg": "bgimg1"
    });
    localStorage.setItem("bgimage1", "bgimg1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage2 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bgImg": "bgimg2"
    });
    localStorage.setItem("bgimage2", "bgimg2");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage3 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bgImg": "bgimg3"
    });
    localStorage.setItem("bgimage3", "bgimg3");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage4 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bgImg": "bgimg4"
    });
    localStorage.setItem("bgimage4", "bgimg4");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage5");
};
export const bgImage5 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bgImg": "bgimg5"
    });
    localStorage.setItem("bgimage5", "bgimg5");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
};

export const colorMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuStyles": "color",
    });
    localStorage.setItem("dashlotMenu", "color");
    localStorage.removeItem("gradient");
};

export const lightMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuStyles": "light",
    });
    localStorage.setItem("dashlotMenu", "light");
    localStorage.removeItem("dark");
};

export const darkMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuStyles": "dark",
    });
    localStorage.setItem("dashlotMenu", "dark");
    localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuStyles": "gradient",
    });
    localStorage.setItem("dashlotMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataMenuStyles": "transparent",
    });
    localStorage.setItem("dashlotMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderStyles": "light",
    });
    localStorage.setItem("dashlotHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("dashlotHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderStyles": "color",
    });
    localStorage.setItem("dashlotHeader", "color");
    localStorage.removeItem("dark");
};
export const gradientHeader = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderStyles": "gradient",

    });
    localStorage.setItem("dashlotHeader", "gradient");
    localStorage.removeItem("transparent");
};
export const transparentHeader = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "dataHeaderStyles": "transparent",
    });
    localStorage.removeItem("gradient");
    localStorage.setItem("dashlotHeader", "transparent");
};

export const primaryColor1 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "colorPrimaryRgb": "58, 88, 146",
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    
};
export const primaryColor2 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "colorPrimaryRgb": "92, 144, 163",
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
};
export const primaryColor3 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "colorPrimaryRgb": "161, 90, 223",
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
};
export const primaryColor4 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "colorPrimaryRgb": "78, 172, 76",
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
};
export const primaryColor5 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "colorPrimaryRgb": "223, 90, 90",
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
};

export const backgroundColor1 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bodyBg1": "20, 30, 96",
        "bodyBg2": "25, 38, 101",
        "darkBg": "25, 38, 101",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark"
    });
    localStorage.setItem('darkBgRGB1', "20, 30, 96");
    localStorage.setItem('darkBgRGB2', "25, 38, 101");
    localStorage.setItem('darkBgRGB3', "25, 38, 101");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
    
};
export const backgroundColor2 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bodyBg1": "8, 78, 115",
        "bodyBg2": "13, 86, 120",
        "darkBg": "13, 86, 120",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark"
    });
    localStorage.setItem('darkBgRGB1', "8, 78, 115");
    localStorage.setItem('darkBgRGB2', "13, 86, 120");
    localStorage.setItem('darkBgRGB3', "13, 86, 120",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor3 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bodyBg1": "90, 37, 135",
        "bodyBg2": "95, 45, 140",
        "darkBg": "95, 45, 140",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark"
    });
    localStorage.setItem('darkBgRGB1', "90, 37, 135");
    localStorage.setItem('darkBgRGB2', "95, 45, 140");
    localStorage.setItem('darkBgRGB3',  "95, 45, 140",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor4 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bodyBg1": "24, 101, 51",
        "bodyBg2": "29, 109, 56",
        "darkBg": "29, 109, 56",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark"
    });
    localStorage.setItem('darkBgRGB1', "24, 101, 51");
    localStorage.setItem('darkBgRGB2', "29, 109, 56");
    localStorage.setItem('darkBgRGB3', "29, 109, 56");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor5 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    actionfunction({
        // ...theme,
        "bodyBg1": "120, 66, 20",
        "bodyBg2": "125, 74,25",
        "darkBg": "125, 74, 25",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark"
    });
    localStorage.setItem('darkBgRGB1', "120, 66, 20");
    localStorage.setItem('darkBgRGB2', "125, 74,25");
    localStorage.setItem('darkBgRGB3', "125, 74,25");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};

const ColorPicker = (props: any) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex: any) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
const Themeprimarycolor = ({ actionfunction }: any) => {
    // const theme = useAppSelector((state) => state.theme)
    const [state, updateState] = useState("#FFFFFF");

    const handleInput = (e: any) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                "colorPrimaryRgb": `${r} , ${g} , ${b}`,
            });
            localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);
        }
    };

    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }: any) => {
    // const theme = useAppSelector((state) => state.theme)
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e: any) => {
        const { r, g, b }: any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            "bodyBg1": `${r}, ${g}, ${b}`,
            "bodyBg2": `${r+19}, ${g+19}, ${b+19}`,
            "darkBg": `${r+19}, ${g+19}, ${b+19}`,
            "inputBorder":"255, 255, 255, 0.1",
            "dataThemeMode": "dark",
            "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark",
            "dataMenuStyles": "dark"
        });
        localStorage.setItem("darkBgRGB1", `${r}, ${g}, ${b}`);
        localStorage.setItem("darkBgRGB2", `${r+19}, ${g+19}, ${b+19}`);
        localStorage.setItem("darkBgRGB3", `${r+19}, ${g+19}, ${b+19}`);
        localStorage.setItem("darkBgRGB4", "255, 255, 255, 0.1");
        localStorage.removeItem("dashlotMenu");
        localStorage.removeItem("dashlotHeader");

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const Reset = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    Vertical(actionfunction);
    actionfunction({
        // ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        loader: "disable",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bodyBg1: "",
        bodyBg2: "",
        darkBg: "",
        inputBorder: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};
export const Reset1 = (actionfunction: any) => {
    // const theme = useAppSelector((state) => state.theme)
    Vertical(actionfunction);
    actionfunction({
        // ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "",
        dataVerticalStyle: "overlay",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "menu-click",
        dataMenuPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};
export const LocalStorageBackup = (actionfunction: any) => {
    console.log("LocalStorageBackup");
    (localStorage.dashlotltr) ? Ltr(actionfunction) : "";
    (localStorage.dashlotrtl) ? Rtl(actionfunction) : "";
    (localStorage.dashlotdarktheme) ? Dark(actionfunction) : "";
    (localStorage.dashlotlighttheme) ? Light(actionfunction) : "";
    (localStorage.dashlotregular) ? Regular(actionfunction) : "";
    (localStorage.dashlotclassic) ? Classic(actionfunction) : "";
    (localStorage.dashlotmodern) ? Modern(actionfunction) : "";
    (localStorage.dashlotfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.dashlotboxed) ? Boxed(actionfunction) : "";
    (localStorage.dashlotmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.dashlotmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.dashlotheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.dashlotheaderscrollable) ? Headerpostionscroll(actionfunction) : "";


    (localStorage.dashlotnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.dashlotnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.dashlotnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.dashlotnavstyles === "icon-hover") ? IconHover(actionfunction) : '';

    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';
    (localStorage.dashlotlayout == 'horizontal') && HorizontalClick(actionfunction);
    (localStorage.dashlotlayout == 'vertical') && Vertical(actionfunction);
    //primitive 
    if (
        localStorage.getItem("dashlotltr") == null ||
        localStorage.getItem("dashlotltr") == "ltr"
    ) 
    if (localStorage.getItem("dashlotrtl") == "rtl") {
        document.querySelector("body")?.classList.add("rtl");
        document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    }
   

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);

            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);

            break;
        case "161, 90, 223":
            primaryColor3(actionfunction);

            break;
        case "78, 172, 76":
            primaryColor4(actionfunction);

            break;
        case "223, 90, 90":
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB1) {
        case '20, 30, 96':
            backgroundColor1(actionfunction);

            break;
        case '8, 78, 115':
            backgroundColor2(actionfunction);

            break;
        case '90, 37, 135':
            backgroundColor3(actionfunction);

            break;
        case '24, 101, 51':
            backgroundColor4(actionfunction);

            break;
        case '120, 66, 20':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    //layout
    if (localStorage.dashlotverticalstyles) {
        const verticalStyles = localStorage.getItem("dashlotverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction);
                break;
            case "closed":
                Closedmenu(actionfunction);
                break;
            case "icontext":
                iconTextfn(actionfunction);
                break;
            case "overlay":
                iconOverayFn(actionfunction);
                break;
            case "detached":
                DetachedFn(actionfunction);
                break;
            case "doublemenu":
                DoubletFn(actionfunction);
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = useAppSelector((state) => state.theme)
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }
    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = useAppSelector((state) => state.theme)
        actionfunction({
            ...theme,
            "bodyBg1": localStorage.darkBgRGB1,
            "bodyBg2": localStorage.darkBgRGB2,
            "darkBg": localStorage.darkBgRGB3,
            "inputBorder": localStorage.darkBgRGB4,
            "dataThemeMode": "dark",
            "dataHeaderStyles": localStorage.dashlotHeader ? localStorage.dashlotHeader :localStorage.dashlotdarktheme ? "dark" :"dark",
            "dataMenuStyles": "dark",
        });
    }
     // ThemeColor MenuColor Start
     switch (localStorage.dashlotMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.dashlotHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
};
