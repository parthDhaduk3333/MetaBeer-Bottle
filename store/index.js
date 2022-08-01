import { configureStore } from '@reduxjs/toolkit'
import account from './account'
export default configureStore({
    reducer: {
        account
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})