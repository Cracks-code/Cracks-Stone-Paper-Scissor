import React, { useContext } from 'react'
import GameContext from "../context/game/gameContext"
import rock from "../images/hand-rock-regular.svg"
import paper from "../images/hand-paper-regular.svg"
import scissor from "../images/hand-scissors-regular.svg"
import "./css/Gamecontrol.css";

function Gamecontrol() {
    const context = useContext(GameContext);
    const { WlDtext, onClick, Replay, Round, User_score, Ai_score, Drow_score, User_choose, Ai_choose } = context;
    return (
        <>
            {Round === 0 ? <div className="container mb-4"><h1 style={{fontFamily:"cursive"}} className="text-center text-muted">Choose Any One</h1></div> : <><div className="score-div">
                <div className="my-4 text-center">
                    <span className="text-muted style-text">Win</span>
                    <br />
                    <span className="score-text">{User_score}</span>
                </div>
                <div className="my-4 text-center">
                    <span className="text-muted style-text">Drow</span>
                    <br />
                    <span className="score-text">{Drow_score}</span>
                </div>
                <div className="my-4 text-center">
                    <span className="text-muted style-text">Win</span>
                    <br />
                    <span className="score-text">{Ai_score}</span>
                </div>
            </div>
                <div className="detail-div">
                    <div className="detail-box">
                        <span className="text-muted text-center style2-text">You</span>
                        <div className="d-image-div">
                            <img style={{ visibility: Round === 0 ? "hidden" : "visible" }} className="d-image-img" alt="..." src={User_choose === "ROCK" ? rock : User_choose === "PAPER" ? paper : scissor} />
                        </div>
                        <span className="text-muted style2-text">{User_choose}</span>
                    </div>
                    <div className="detail-box">
                        <button onClick={Replay} className="btn btn-outline-danger">Reset Game</button>
                        <span id="round-spa" className="style-text text-muted">Round</span><span id="round-spa" className="style2-text">{Round}</span>
                        <div style={{ outline: WlDtext === "Win" ? "1px solid green" : WlDtext === "Defeat" ? "1px solid red" : "1px solid darkgray", backgroundColor: WlDtext === "Win" ? "lightgreen" : WlDtext === "Defeat" ? "#ff00005e" : "lightgray", visibility: Round === 0 ? "hidden" : "visible" }} className="match-info-div my-2">
                            <span style={{ color: WlDtext === "Win" ? "green" : WlDtext === "Defeat" ? "red" : "darkgray", fontSize: "3vw" }} className="style-text">{WlDtext}</span>
                        </div>
                    </div>
                    <div className="detail-box">
                        <span className="text-muted text-center style2-text">A.I</span>
                        <div className="d-image-div">
                            <img style={{ visibility: Round === 0 ? "hidden" : "visible" }} className="d-image-img" alt="Choose" src={Ai_choose === "ROCK" ? rock : Ai_choose === "PAPER" ? paper : scissor} />
                        </div>
                        <span className="text-muted style2-text">{Ai_choose}</span>
                    </div>
                </div></>}
            <div className="Choose-div">
                <div className="choose-btn-div">
                    <button onClick={() => onClick("rock")} name="Rock" className="btn btn-warning ch-btn ">
                        <img className="ico" alt="choose" src={rock} /></button>
                    <button onClick={() => onClick("paper")} name="Paper" className="btn btn-warning ch-btn "><img className="ico" alt="choose" src={paper} /></button>
                    <button onClick={() => onClick("scissor")} name="Scissor" className="btn btn-warning ch-btn "><img className="ico" alt="choose" src={scissor} /></button>
                </div>
            </div>
        </>
    )
}

export default Gamecontrol
