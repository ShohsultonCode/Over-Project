import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import postData from "./postData";
import registerData from "./register";

const attemts = configureStore({
    reducer: {
        userData: userData,
        postData: postData,
        registerData: registerData

    }
})

export default attemts