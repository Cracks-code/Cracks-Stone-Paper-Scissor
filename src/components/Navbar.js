import React, { useContext } from 'react'
import gameContext from "../context/game/gameContext"
import "./css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const context = useContext(gameContext);
    const { Totalround } = context;
    let location = useLocation();
    return (
        <>
            <div className="container nav-container">
                <nav className="navbar my-2 sticky-top navbar-light bg-light navbar-m">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand brand-m">Cracks-Rock Paper Scissor</Link>
                        <span style={{ visibility: location.pathname === "/gamestarted" ? "" : "hidden" }} className="text-light navbar-brand brand-m">Total Round {Totalround}</span>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
