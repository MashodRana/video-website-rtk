import React from 'react'
import Search from './Search'
import logoImage from "../../assets/lws.svg"

export default function Navbar() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    <img
                        className="h-10"
                        src={logoImage}
                        alt="Learn with Sumit"
                    />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search />
                </div>
            </div>
        </nav>
    )
}
