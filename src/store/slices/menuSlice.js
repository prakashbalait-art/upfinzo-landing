import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "../services/menuService";


const menuSlice = createSlice({
    name:'menu',
    initialState:{
        items: [],
        status: "idle",
        error: null,
        activeItemId: null
    },
    reducers:{
        setActiveItem(state, action) {
            state.activeItemId = action.payload;
        }
    },
    extraReducers: (builders)=>{
        builders
            .addCase(fetchMenu.pending,(state,action)=>{
                state.status = "loading";
            })
            .addCase(fetchMenu.fulfilled,(state,action)=>{
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchMenu.rejected,(state,action)=>{
                state.status = "failed";
                state.error = action.payload || "Error Occured";
            })
    }
});

export const {setActiveItem} = menuSlice.actions;
export default menuSlice.reducer;

