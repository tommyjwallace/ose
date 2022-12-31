import React, { useRef } from "react";

export default function Roll() {

    //Refs
    const amountRef = useRef()
    const typeRef = useRef()
    const resultRef = useRef()

    //RNG
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //Roll Handler
    function handleRoll(amount, type) {
        let roll = 0
        let runningTotal = 0

        amount = amountRef.current.value
        if (amount == 0) {
            amount = 1
            amountRef.current.value = amount
        }

        type = typeRef.current.value
        if (type == 0) {
            type = 4
            typeRef.current.value = type
        }

        for (let i = 0; i < amount; i++) {
            roll = randomIntFromInterval(1, type)
            console.log(amount + "d" + type + " result = " + roll)
            runningTotal += roll
        }
        resultRef.current.value = amount + "d" + type + " = " + runningTotal
        console.log("total result = " + runningTotal)

        function onChange(e){
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                this.setState({ value: e.target.value })
            }
        }
    }

    return (
        <>
            <div>
                amount: <input ref={amountRef} type="text" defaultValue={"1"} />
            </div>
            <div>
                type: <input ref={typeRef} type="text" defaultValue={"4"} />
            </div>
            <div>
                <button onClick={handleRoll}>Roll!</button>
                <input ref={resultRef} type="text" />
            </div>
        </>
    )
}

