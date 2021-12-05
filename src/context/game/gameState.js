import GameContext from "./gameContext";
import { useState } from "react";

const GameState = (props) => {
    const [Totalround, setTotalround] = useState(3);
    const [Round, setRound] = useState(0);
    const [User_choose, setUser_choose] = useState("")
    const [Ai_choose, setAi_choose] = useState("")
    const [User_score, setUser_score] = useState(0);
    const [Ai_score, setAi_score] = useState(0)
    const [Drow_score, setDrow_score] = useState(0)
    const [WlDtext, setWlDtext] = useState("Choose any one")

    let remaingRound = Totalround - Round;
    let Userwin = false;
    let Aiwin = false;
    let Drow = false;
    let Gameover = false;

    let choices_object = {
        rock: {
            rock: "draw",
            scissor: "win",
            paper: "lose",
        },
        scissor: {
            rock: "lose",
            scissor: "draw",
            paper: "win",
        },
        paper: {
            rock: "win",
            scissor: "lose",
            paper: "draw",
        },
    };

    const Replay = ()=>{
        setRound(0)
        setWlDtext(0)
        setAi_score(0)
        setDrow_score(0)
        setUser_score(0)
    }


    const check = (input) => {
        if (remaingRound === 0) {
            Gameover = true;
            if (User_score < Ai_score) {
                Userwin = false;
                Aiwin = true;
                console.log("Computer Win this Game" + Aiwin);
            } else if (User_score > Ai_score) {
                Aiwin = false;
                Userwin = true;
                console.log("You Win this Game" + Userwin);
            } else {
                Userwin = false;
                Aiwin = false;
                Drow = true;
                console.log("Match has been drow" + Drow);
            }
        }
        else if (Gameover === false) {
            setUser_choose(input.toUpperCase());
            var choices = ["rock", "paper", "scissor"];
            var num = Math.floor(Math.random() * 3);

            let computer_choice = choices[num];
            setAi_choose(choices[num].toUpperCase());

            switch (choices_object[input][computer_choice]) {
                case "win":
                    setUser_score(User_score + 1);
                    setRound(Round + 1)
                    setWlDtext("Win")
                    console.log("userscore" + User_score + ", aiscore" + Ai_score + ", drow" + Drow_score)
                    break;
                case "lose":
                    setAi_score(Ai_score + 1);
                    setWlDtext("Defeat")
                    setRound(Round + 1);
                    console.log("userscore" + User_score + ", aiscore" + Ai_score + ", drow" + Drow_score)
                    break;
                default:
                    setDrow_score(Drow_score + 1)
                    setWlDtext("Drow")
                    setRound(Round + 1);
                    console.log("userscore" + User_score + ", aiscore" + Ai_score + ", drow" + Drow_score)
                    break;
            }
        }

    }

    const value = {
        Totalround,
        setRound,
        setTotalround,
        User_choose,
        User_score,
        Drow_score,
        Ai_score,
        WlDtext,
        setAi_score,
        setDrow_score,
        setUser_score,
        Replay,
        Ai_choose,
        onClick: (c) => check(c),
        Round,
    };

    return (
        <GameContext.Provider value={value}>
            {props.children}
        </GameContext.Provider>
    )

}
export default GameState;
