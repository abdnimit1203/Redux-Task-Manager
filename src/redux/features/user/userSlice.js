import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "Mr. User",
    email: 'me@user.com',
    userTasks: []
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{

    }
})

export default userSlice.reducer;