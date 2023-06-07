import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    row: 1,
    col: 1,
    rowSelected: 0,
    colSelected: 0,
};

const gridModalSlice = createSlice({
    name: "grid",
    initialState,
    reducers: {
        setRowColGrid: (state, action) => {
            state.row = action.payload.row;
            state.col = action.payload.col;

            return state;
        },
        setHover: (state, action) => {
            state.rowSelected = action.payload.rowSelected;
            state.colSelected = action.payload.colSelected;

            return state;
        },
    },
});

export const { setRowColGrid, setHover } = gridModalSlice.actions;
export default gridModalSlice.reducer;
