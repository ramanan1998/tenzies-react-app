export const rollDice = () => {
    return {
        type : "ROLL_DICE"
    }
}

export const changeIsHeld = (id) => {
    return {
        type : "CHANGE_IS_HELD",
        payload : id
    }
}

export const setTenzies = () => {
    return {
        type : "SET_TENZIES"
    }
}