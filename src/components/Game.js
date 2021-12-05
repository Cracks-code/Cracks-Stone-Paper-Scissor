import React, { useContext } from 'react'
import GameContext from "../context/game/gameContext"
import Finaldetail from './Finaldetail';
import "./css/Game.css";
import Gamecontrol from './Gamecontrol';


function Game() {
    const context = useContext(GameContext);

    return (
        <>
            <Gamecontrol />
            <Finaldetail/>
        </>
    )
}

export default Game
