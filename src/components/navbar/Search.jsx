import React from 'react'

import searchIcon from "../../assets/search.svg"

export default function Search() {
    return (
        <>
            <form>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
            </form>
            <img
                className="inline h-4 cursor-pointer"
                src={searchIcon}
                alt="Search"
            />
        </>
    )
}
