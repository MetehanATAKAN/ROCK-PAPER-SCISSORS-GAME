import { configureStore } from "@reduxjs/toolkit";
import RpsSlice from "./slice/RpsSlice";

export const store=configureStore({
    reducer:{
        rps: RpsSlice,
    },
})