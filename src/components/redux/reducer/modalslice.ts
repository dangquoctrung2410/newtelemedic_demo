import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModal, defaultModal } from "../controller/modalslice.modal";

const initialState: IModal = defaultModal;
export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (state: IModal, action: PayloadAction<IModal>) => {
            state = action.payload;

            return state;
        },
    },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
