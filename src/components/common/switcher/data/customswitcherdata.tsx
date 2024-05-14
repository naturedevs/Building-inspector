import  { useState } from 'react';
import store from '../../../../redux/store';
import { MENUITEMS } from '../../sidebar/sidemenu';


export function Dark(actionfunction: any) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataThemeMode": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
    });
    localStorage.setItem("dashlotdarktheme", "dark");
    localStorage.removeItem("dashlotlighttheme");
    localStorage.removeItem("dashlotMenu");
    localStorage.removeItem("dashlotHeader");
}

export function Light(actionfunction: any) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataThemeMode": "light",
        "dataHeaderStyles": "light",
            "darkBg":"",
            "bodyBg1" : "",
            "bodyBg2" : "",
            "inputBorder" : "",
        "dataMenuStyles": theme.dataNavLayout == 'horizontal' ? 'light' : "dark"
    
    });
    localStorage.setItem("dashlotlighttheme", "light");
    localStorage.removeItem("dashlotdarktheme");
    localStorage.removeItem('darkBgRGB1');
    localStorage.removeItem('darkBgRGB2');
    localStorage.removeItem('darkBgRGB3');
    localStorage.removeItem('darkBgRGB4');
}
export function Ltr(actionfunction: any) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "ltr" });
    localStorage.setItem("dashlotltr", "ltr");
    localStorage.removeItem("dashlotrtl");
   
}
export function Rtl(actionfunction: any) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "rtl" });
    localStorage.setItem("dashlotrtl", "rtl");
    localStorage.removeItem("dashlotltr");
}
export const HorizontalClick = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
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
    const theme = store.getState();
    actionfunction({
        ...theme,
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
    const theme = store.getState();
    actionfunction({
        ...theme,
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
    const theme = store.getState();
    actionfunction({
        ...theme,
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
    const theme = store.getState();
    actionfunction({
        ...theme,
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
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-hover",
        // "dataVerticalStyle": "",
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
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("dashlotfullwidth", "Fullwidth");
    localStorage.removeItem("dashlotboxed");

};
export const Boxed = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
    });
    localStorage.setItem("dashlotboxed", "Boxed");
    localStorage.removeItem("dashlotfullwidth");
};
export const FixedMenu = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("dashlotmenufixed", "MenuFixed");
    localStorage.removeItem("dashlotmenuscrollable");
};
export const scrollMenu = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("dashlotmenuscrollable", "Menuscrolled");
    localStorage.removeItem("dashlotmenufixed");
};
export const Headerpostionfixed = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("dashlotheaderfixed", 'FixedHeader');
    localStorage.removeItem("dashlotheaderscrollable");
};
export const Headerpostionscroll = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("dashlotheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("dashlotheaderfixed");
};
export const Regular = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("dashlotregular", "Regular");
    localStorage.removeItem("dashlotclassic");
    localStorage.removeItem("dashlotmodern");
};
export const Classic = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("dashlotclassic", "Classic");
    localStorage.removeItem("dashlotregular");
    localStorage.removeItem("dashlotmodern");
};
export const Modern = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("dashlotmodern", "Modern");
    localStorage.removeItem("dashlotregular");
    localStorage.removeItem("dashlotclassic");
};



export const primaryColor1 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    
};
export const primaryColor2 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
};
export const primaryColor3 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
};
export const primaryColor4 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
};
export const primaryColor5 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
};

export const backgroundColor1 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "20, 30, 96",
        "bodyBg2": "25, 38, 101",
        "darkBg": "25, 38, 101",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "20, 30, 96");
    localStorage.setItem('darkBgRGB2', "25, 38, 101");
    localStorage.setItem('darkBgRGB3', "25, 38, 101");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
    
};
export const backgroundColor2 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "8, 78, 115",
        "bodyBg2": "13, 86, 120",
        "darkBg": "13, 86, 120",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "8, 78, 115");
    localStorage.setItem('darkBgRGB2', "13, 86, 120");
    localStorage.setItem('darkBgRGB3', "13, 86, 120",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor3 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "90, 37, 135",
        "bodyBg2": "95, 45, 140",
        "darkBg": "95, 45, 140",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "90, 37, 135");
    localStorage.setItem('darkBgRGB2', "95, 45, 140");
    localStorage.setItem('darkBgRGB3',  "95, 45, 140",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor4 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "24, 101, 51",
        "bodyBg2": "29, 109, 56",
        "darkBg": "29, 109, 56",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "24, 101, 51");
    localStorage.setItem('darkBgRGB2', "29, 109, 56");
    localStorage.setItem('darkBgRGB3', "29, 109, 56");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
};
export const backgroundColor5 = (actionfunction: any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "120, 66, 20",
        "bodyBg2": "125, 74,25",
        "darkBg": "125, 74, 25",
        "inputBorder":"255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
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
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");

    const handleInput = (e: any) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                ...theme,
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
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e: any) => {
        const { r, g, b }: any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg1": `${r}, ${g}, ${b}`,
            "bodyBg2": `${r+19}, ${g+19}, ${b+19}`,
            "darkBg": `${r+19}, ${g+19}, ${b+19}`,
            "inputBorder":"255, 255, 255, 0.1",
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
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
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
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
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
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


    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }
    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodyBg1": localStorage.darkBgRGB1,
            "bodyBg2": localStorage.darkBgRGB2,
            "darkBg": localStorage.darkBgRGB3,
            "inputBorder": localStorage.darkBgRGB4,
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
    }

};
