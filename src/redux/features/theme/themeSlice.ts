import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeSlice {
    lang: string,
    dir: string,
    dataThemeMode: string,
    dataMenuStyles: string,
    dataNavLayout: string,
    dataHeaderStyles: string,
    dataVerticalStyle: string,
    StylebodyBg:string,
    StyleDarkBg:string,
    toggled:string,
    dataNavStyle:string,
    horStyle:string,
    dataPageStyle:string,
    dataWidth:string,
    dataMenuPosition:string,
    dataHeaderPosition:string,
    iconOverlay:string,
    colorPrimaryRgb:string,
    bodyBg1:string,
    bodyBg2:string,
    darkBg:string,
    inputBorder:string,
    bgImg:string,
    iconText:string,
    body:{
      class:string
    },
}

const initialState = {
    lang: "en",
    dir: "ltr",
    dataThemeMode: "light",
    dataMenuStyles: "dark",
    dataNavLayout: "vertical",
    dataHeaderStyles: "light",
    dataVerticalStyle: "overlay",
    StylebodyBg:"107 64 64",
    StyleDarkBg:"93 50 50",
    toggled:"",
    dataNavStyle:"",
    horStyle:"",
    dataPageStyle:"regular",
    dataWidth:"fullwidth",
    dataMenuPosition:"fixed",
    dataHeaderPosition:"fixed",
    iconOverlay:"",
    colorPrimaryRgb:"",
    bodyBg1:"",
    bodyBg2:"",
    darkBg:"",
    inputBorder:"",
    bgImg:"",
    iconText:"",
    body:{
      class:""
    },
};

export const themeSlice = createSlice({
    name : 'msgs',
    initialState,
    reducers : {
        themeChanger : (state,  action: PayloadAction<ThemeSlice>) => {
            console.log("themeChanger")
            // console.log(action.payload)
            // console.log(state)
            // console.log(state.dataThemeMode)
            // console.log(action.payload.dataThemeMode)
            Object.keys(action.payload).forEach(key=>{
                // console.log(state[key])
                state[key] = action.payload[key];
            })
            // console.log(state.dataThemeMode)
        },
    }
})

export const { themeChanger } = themeSlice.actions
export const theme = (state : ThemeSlice) => state

export default themeSlice.reducer