import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
    name: "user",
    initialState: { name: null, id: null },
    reducers: {
        setUserData(_, action) {
            return action.payload
        }
    }
})

export const { setUserData } = userData.actions
export default userData.reducer