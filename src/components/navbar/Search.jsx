import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import searchIcon from "../../assets/search.svg"
import { setSearchString } from '../../features/filter/filterSlice';

export default function Search() {
    const dispatch = useDispatch();
    const { searchString } = useSelector(state => state.filter);
    const [searchText, setSearchText] = useState(searchString);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
        dispatch(setSearchString(searchText));
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    className="outline-none border-none mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type='submit'>
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchIcon}
                        alt="Search"

                    />
                </button>
            </form>

        </>
    )
}
