import React from "react";
import {useState} from "react";
import s from './Counter.module.css'
import Button from "../Button/Button";

function Counter() {
    let [countValue, setCountValue] = useState(0)
    function incButton() {
        countValue === 5 ? countValue = 5 : ++countValue;
        setCountValue(countValue)
    }
    function resetButton() {
        setCountValue(0)
    }

    return (
    <div className={s.counterWrapper}>
        <div className={s.countNumberBlock}>
            <span className={countValue === 5 ? s.countMax : ""}>{countValue}</span>
        </div>
        <button
            className={`${s.button} ${countValue === 5 ? s.buttonNotActive : ""}`}
            onClick={incButton}>
            inc
        </button>
        <button
            className={s.button}
            onClick={resetButton}>
            reset
        </button>
    </div>)
}
export default Counter
