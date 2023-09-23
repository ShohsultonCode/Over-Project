import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";

const hello = configureStore({
    reducer: {
        userData
    }
})

export default hello