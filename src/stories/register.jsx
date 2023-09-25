import { createSlice } from "@reduxjs/toolkit";

const registerData = createSlice({
    name: "register",
    initialState: { auth_success: null },
    reducers: {
        setregisterData(_, action) {
            return action.payload
        }
    }
})

export const { setregisterData } = registerData.actions
export default registerData.reducer