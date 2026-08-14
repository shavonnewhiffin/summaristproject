import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './contextSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
