import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducer/modalslice";
import gridModalSlice from "../reducer/gridModalSlice";

const reducers: any = {
    modal: modalSlice,
    grid: gridModalSlice,
};

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
