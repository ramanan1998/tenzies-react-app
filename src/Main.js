import React from "react";
import Dice from "./Dice";
import Confetti from 'react-confetti';
import { useSelector, useDispatch } from "react-redux";
import { rollDice, setTenzies } from "./Redux/Action";

export default function Main(){

    const dispatch = useDispatch();

    const getDice = useSelector(state => state.dice);
    const getTenzies = useSelector(state => state.tenzies);

    React.useEffect(() => {
        if(getDice.every(dice => getDice[0].die === dice.die) && getDice.every(dice => dice.isHeld === true)){
            dispatch(setTenzies());
        }
    },[getDice])

    return (
        <main className="main">
            {getTenzies && <Confetti></Confetti>}
            <div className="container">
                <h1>{getTenzies ? "You Won!" : "Tenzies"}</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
                <div className="dice">
                    {getDice.map(item => <Dice key={item.id} item={item}/>)}
                </div>
                <button className="roll-btn" onClick={()=>dispatch(rollDice())}>Roll</button>
            </div>
        </main>
    )
} 