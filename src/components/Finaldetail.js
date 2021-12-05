import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import GameContext from "../context/game/gameContext"
import "./css/Finaldetail.css";

function Finaldetail() {
    const context = useContext(GameContext);
    const { Round, Totalround, User_score, Replay, Ai_score, } = context;
    let RemaingRound = Totalround - Round;
    const Defeat = "Ops You Defeate This Game"
    const Victory = "Congratulation! You Win This Game"
    const mDrow = User_score === Ai_score ? true : false;
    const mWindrow = User_score > Ai_score ? true : false
    const Drow = "Oops Match Has Been Drow"
    return (
        <>
            <div className={` modal main-Final-div `} style={{ visibility: RemaingRound === 0 ? "visible" : "hidden", width: RemaingRound === 0 ? "100vw" : "0", height: RemaingRound === 0 ? "100vh" : "0" }}>
                <div className={`Final-d-div `}>
                    <div className="heading">
                        <h1>{mDrow ? Drow : mWindrow ? Victory : Defeat}</h1>
                    </div>
                    <div className="detail-d">
                        <p id="totalround-p">Total Round {Totalround}</p>
                        <p className="text-muted text-center" id="score-p">Your Score is {User_score}</p>
                        <p className="text-muted text-center" id="score-p">Ai Score is {Ai_score}</p>
                    </div>
                    <div className="btn-d">
                        <Link className="btn my-2 btn-outline-primary btn-sm mx-2" to="/">Home</Link>
                        <button onClick={Replay} className="btn btn-outline-primary btn-sm mx-2 my-1">Replay</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finaldetail
