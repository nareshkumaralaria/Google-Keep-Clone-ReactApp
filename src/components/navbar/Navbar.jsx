import React from 'react'
import './navbar.css'

import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <>
            <div className="navDiv">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <a className="title" href="/">Notepad</a>
                    </div>
                    <a href="/about" className="about">About</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
