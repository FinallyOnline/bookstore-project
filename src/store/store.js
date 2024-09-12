import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
import blogSlice from "../slices/blogSlice"
import bookSlice from "../slices/bookSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: bookSlice,
        blogs: blogSlice
    }
});

export default store