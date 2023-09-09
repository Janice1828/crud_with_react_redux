import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice=createSlice({
    name:"users",
    initialState:userList,
    reducers:{

    }
})
// console.log("test");
// console.log(userList);
// console.log("userSlice");
// console.log(userSlice);
// console.log(userSlice.reducer);
export default userSlice.reducer;