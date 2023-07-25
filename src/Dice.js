import React  from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { changeIsHeld } from "./Redux/Action";

export default function Dice({item}){

    const dispatch = useDispatch();
    
    return (
        <button style={item.isHeld ? {backgroundColor: "#59E391"} : {backgroundColor: "#FFFFFF"}} onClick={()=>dispatch(changeIsHeld(item.id))}>{item.die}</button>
    )
}