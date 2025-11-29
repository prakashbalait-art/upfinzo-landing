import { createSlice } from "@reduxjs/toolkit";
import { section2Thunk, section3Thunk, section5Thunk } from "../services/sectionsService";


const sectionsSlice = createSlice({
    name:'sections',
    initialState:{
        section3:{
            section3Items: [],
            status: "idle",
            error: null,
            activeItemId: null
        },
        section2:{
            section2Items: [],
            status: "idle",
            error: null,
            activeItemId: null
        },
        section5:{
            section5Items: [],
            status: "idle",
            error: null,
            activeItemId: null
        }
    },
    reducers:{},
    extraReducers: (builders)=>{
        builders
            // Section 3 //
            .addCase(section3Thunk.pending,(state,action)=>{
                state.section3.status = "loading";
            })
            .addCase(section3Thunk.fulfilled,(state,action)=>{
                state.section3.status = "succeeded";
                state.section3.section3Items = action.payload;
            })
            .addCase(section3Thunk.rejected,(state,action)=>{
                state.section3.status = "failed";
                state.section3.error = action.payload || "Error Occured";
            })
            // Section 2 //
            .addCase(section2Thunk.pending,(state,action)=>{
                state.section2.status = "loading";
            })
            .addCase(section2Thunk.fulfilled,(state,action)=>{
                state.section2.status = "succeeded";
                state.section2.section2Items = action.payload;
            })
            .addCase(section2Thunk.rejected,(state,action)=>{
                state.section2.status = "failed";
                state.section2.error = action.payload || "Error Occured";
            })
            // Section 5 //
            .addCase(section5Thunk.pending,(state,action)=>{
                state.section5.status = "loading";
            })
            .addCase(section5Thunk.fulfilled,(state,action)=>{
                state.section5.status = "succeeded";
                state.section5.section5Items = action.payload;
            })
            .addCase(section5Thunk.rejected,(state,action)=>{
                state.section5.status = "failed";
                state.section5.error = action.payload || "Error Occured";
            })
    }
});

export default sectionsSlice.reducer;

export {section3Thunk,section2Thunk,section5Thunk};

