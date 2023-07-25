import { nanoid } from "nanoid";

function generateRandomDice(){
    let arr = [];
    for(let i = 1; i <= 10; i++){
        let randomNum = Math.ceil(Math.random() * 6);
        arr.push({id : nanoid(), die : randomNum, isHeld : false});
    }
    return arr;
}

export const DiceReducer = (state = generateRandomDice(), action) => {
    switch(action.type){
        case "ROLL_DICE" :
            return state.map(die => {
                return die.isHeld ? die : {...die, die : Math.ceil(Math.random() * 6)}
            })
        case "CHANGE_IS_HELD" :
            return state.map(die => {
                return die.id === action.payload ? {...die, isHeld : !die.isHeld} : die
            })
        default :
            return state;
    }
}

export const tenziesReducer = (state = false, action) => {
    switch(action.type){
        case "SET_TENZIES" :
            return !state;
        default :
            return state;
    }
}