import React, { useContext, useEffect } from 'react'
import gameContext from "../context/game/gameContext"
import "./css/Start.css";
import { Link, useLocation } from "react-router-dom";
import Play from "../images/play-circle-solid.svg";
function Start() {
    const context = useContext(gameContext);
    const { Totalround, setTotalround, setRound, setUser_score, setAi_score, setDrow_score } = context;
    let location = useLocation();
    function clearsv(){
            setRound(0)
            setDrow_score(0)
            setAi_score(0)
            setUser_score(0)
        }
    useEffect(()=>{
        if(location.pathname==='/'){
            clearsv()
        }
    }, [location])
        return (
        <>
            <h1 id="h1" className="text-dark">Welcome</h1>
                <div className="main-div">
                    <div className="start-div">
                        <h2>How many roundes you play this game</h2>
                        <label htmlFor="#time">Enter Time</label>
                        <input value={Totalround} onChange={(e) => {
                                setTotalround(e.target.value)
                        }} placeholder="Default round : 3" type="number" id="time"></input>
                        <div className="btn-div">
                        <Link className="play-btn" to="/gamestarted"><img id="play-icon" alt="Play" src={Play} /></Link>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Start