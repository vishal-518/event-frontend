import { createSlice } from "@reduxjs/toolkit";

const loader=createSlice({
    name:"loader",
    initialState:{
        loading:false,
    },
    reducers:{
        showloader:(state)=>{
            state.loading=true;
        },
        hideloader:(state)=>{
            state.loading=false;
        }
    }
})

export const {showloader,hideloader}=loader.actions;
export default loader.reducer;