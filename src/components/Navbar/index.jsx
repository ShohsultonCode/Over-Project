import React, { useEffect, useState } from "react";
import Server from '../../API/'
import { useDispatch } from 'react-redux'
import { setUserData } from "../../stories/userData";
const index = () => {
    const [data, setData] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {

        const getData = async () => {
            if (data == "") {
                return null
            }
            try {
                const fromData = await Server.overSearch(data)
                dispatch(setUserData(fromData))
            } catch (error) {
                console.log(error);
            }
        }
        getData()

    }, [data])

    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <input
                            class="form-control me-2"
                            type="search" placeholder="Search"
                            aria-label="Search"
                            value={data}
                            onInput={((e) => setData(e.target.value))}
                        />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default index