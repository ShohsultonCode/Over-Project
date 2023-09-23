import React, { useState } from "react";
import { useSelector } from 'react-redux'

const index = () => {

    const usersdata = useSelector((e) => e.userData)

    return (
        <>
            <h1>Redux</h1>
        </>
    )
}

export default index