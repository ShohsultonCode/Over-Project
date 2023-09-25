import { createSlice } from "@reduxjs/toolkit";

const postData = createSlice({
    name: "post",
    initialState: { post_name: null, post_creared: null },
    reducers: {
        setPostData(_, action) {
            return action.payload
        }
    }
})

export const { setPostData } = postData.actions
export default postData.reducer