import { configureStore } from '@reduxjs/toolkit'
import formReducer from './features/form/formSlice'
import msgsReducer from './features/msgs/msgSlice'
import themeReducer from './features/theme/themeSlice'

const store =  configureStore({
  reducer: {
    form  : formReducer,
    msgs  : msgsReducer,
    theme : themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
