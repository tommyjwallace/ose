import React, { useRef } from "react";

function App() {
  //Fixed Refs
  const roll1d4Ref = useRef()
  const roll1d6Ref = useRef()
  const roll1d8Ref = useRef()
  const roll1d10Ref = useRef()
  const roll1d12Ref = useRef()
  const roll1d20Ref = useRef()

  //Variable Refs
  const amountXd4Ref = useRef()
  const rollXd4Ref = useRef()
  const amountXd6Ref = useRef()
  const rollXd6Ref = useRef()
  const amountXd8Ref = useRef()
  const rollXd8Ref = useRef()
  const amountXd10Ref = useRef()
  const rollXd10Ref = useRef()
  const amountXd12Ref = useRef()
  const rollXd12Ref = useRef()
  const amountXd20Ref = useRef()
  const rollXd20Ref = useRef()

  //RNG
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //Fixed handlers
  function handle1d4() {
    const roll1d4 = randomIntFromInterval(1, 4)
    roll1d4Ref.current.value = roll1d4
  }

  function handle1d6() {
    const roll1d6 = randomIntFromInterval(1, 6)
    roll1d6Ref.current.value = roll1d6
  }

  function handle1d8() {
    const roll1d8 = randomIntFromInterval(1, 8)
    roll1d8Ref.current.value = roll1d8
  }

  function handle1d10() {
    const roll1d10 = randomIntFromInterval(1, 10)
    roll1d10Ref.current.value = roll1d10
  }

  function handle1d12() {
    const roll1d12 = randomIntFromInterval(1, 12)
    roll1d12Ref.current.value = roll1d12
  }

  function handle1d20() {
    const roll1d20 = randomIntFromInterval(1, 20)
    roll1d20Ref.current.value = roll1d20
  }

  function handleRollAll() {
    handle1d4()
    handle1d6()
    handle1d8()
    handle1d10()
    handle1d12()
    handle1d20()
  }

  function handleClearRolls() {
    roll1d4Ref.current.value = null
    roll1d6Ref.current.value = null
    roll1d8Ref.current.value = null
    roll1d10Ref.current.value = null
    roll1d12Ref.current.value = null
    roll1d20Ref.current.value = null
  }

  //Variable handlers
  function handleXd4(amount) {
    let roll1d4 = 0
    let runningTotal = 0

    amount = amountXd4Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d4 = randomIntFromInterval(1, 4)
      console.log("1d4 result = " + roll1d4)
      runningTotal += roll1d4
    }
    rollXd4Ref.current.value = amount + "d4 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleXd6(amount) {
    let roll1d6 = 0
    let runningTotal = 0

    amount = amountXd6Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d6 = randomIntFromInterval(1, 6)
      console.log("1d6 result = " + roll1d6)
      runningTotal += roll1d6
    }
    rollXd6Ref.current.value = amount + "d6 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleXd8(amount) {
    let roll1d8 = 0
    let runningTotal = 0

    amount = amountXd8Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d8 = randomIntFromInterval(1, 8)
      console.log("1d8 result = " + roll1d8)
      runningTotal += roll1d8
    }
    rollXd8Ref.current.value = amount + "d8 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleXd10(amount) {
    let roll1d10 = 0
    let runningTotal = 0

    amount = amountXd10Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d10 = randomIntFromInterval(1, 10)
      console.log("1d10 result = " + roll1d10)
      runningTotal += roll1d10
    }
    rollXd10Ref.current.value = amount + "d10 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleXd12(amount) {
    let roll1d12 = 0
    let runningTotal = 0

    amount = amountXd12Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d12 = randomIntFromInterval(1, 12)
      console.log("1d12 result = " + roll1d12)
      runningTotal += roll1d12
    }
    rollXd12Ref.current.value = amount + "d12 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleXd20(amount) {
    let roll1d20 = 0
    let runningTotal = 0

    amount = amountXd20Ref.current.value
    if (amount == 0) {
      amount = 1
    }

    for (let i = 0; i < amount; i++) {
      roll1d20 = randomIntFromInterval(1, 20)
      console.log("1d20 result = " + roll1d20)
      runningTotal += roll1d20
    }
    rollXd20Ref.current.value = amount + "d20 = " + runningTotal
    console.log("total result = " + runningTotal)
  }

  function handleRollAllXdx() {
    handleXd4()
    handleXd6()
    handleXd8()
    handleXd10()
    handleXd12()
    handleXd20()
  }


  function handleXdxReset() {
    const defaultResult = null
    const defaultAmount = 1

    rollXd4Ref.current.value = defaultResult
    rollXd6Ref.current.value = defaultResult
    rollXd8Ref.current.value = defaultResult
    rollXd10Ref.current.value = defaultResult
    rollXd12Ref.current.value = defaultResult
    rollXd20Ref.current.value = defaultResult

    rollXd10Ref.current.value = defaultResult
    amountXd4Ref.current.value = defaultAmount
    amountXd6Ref.current.value = defaultAmount
    amountXd8Ref.current.value = defaultAmount
    amountXd10Ref.current.value = defaultAmount
    amountXd12Ref.current.value = defaultAmount
    amountXd20Ref.current.value = defaultAmount
  }

  return (
    <>
      <h4>Roll 1dx individually, roll all, and reset:</h4>
      <div>
        <button onClick={handle1d4}>Roll a 1d4!</button>
        <input ref={roll1d4Ref} type="text" />
      </div>
      <div>
        <button onClick={handle1d6}>Roll a 1d6!</button>
        <input ref={roll1d6Ref} type="text" />
      </div>
      <div>
        <button onClick={handle1d8}>Roll a 1d8!</button>
        <input ref={roll1d8Ref} type="text" />
      </div>
      <div>
        <button onClick={handle1d10}>Roll a 1d10!</button>
        <input ref={roll1d10Ref} type="text" />
      </div>
      <div>
        <button onClick={handle1d12}>Roll a 1d12!</button>
        <input ref={roll1d12Ref} type="text" />
      </div>
      <div>
        <button onClick={handle1d20}>Roll a 1d20!</button>
        <input ref={roll1d20Ref} type="text" />
      </div>
      <p></p>
      <div>
        <button onClick={handleRollAll}>Roll All</button>
        <button onClick={handleClearRolls}>Reset</button>
      </div>
      <br></br>
      <hr></hr>
      <h4>Roll xdx individually, roll all, and reset:</h4>
      <div>
        <div>d4 amount: <input ref={amountXd4Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd4}>Roll d4!</button>
          <input ref={rollXd4Ref} type="text" />
        </div>
      </div>
      <div>
        <div>d6 amount: <input ref={amountXd6Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd6}>Roll d6!</button>
          <input ref={rollXd6Ref} type="text" />
        </div>
      </div>
      <div>
        <div>d8 amount: <input ref={amountXd8Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd8}>Roll d8!</button>
          <input ref={rollXd8Ref} type="text" />
        </div>
      </div>
      <div>
        <div>d10 amount: <input ref={amountXd10Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd10}>Roll d10!</button>
          <input ref={rollXd10Ref} type="text" />
        </div>
      </div>
      <div>
        <div>d12 amount: <input ref={amountXd12Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd12}>Roll d12!</button>
          <input ref={rollXd12Ref} type="text" />
        </div>
      </div>
      <div>
        <div>d20 amount: <input ref={amountXd20Ref} type="text" defaultValue={"1"} />
          <button onClick={handleXd20}>Roll d20!</button>
          <input ref={rollXd20Ref} type="text" />
        </div>
      </div>
      <p></p>
      <div>
      <button onClick={handleRollAllXdx}>Roll All</button>
        <button onClick={handleXdxReset}>Reset</button>
      </div>
      <br></br>
      <hr></hr>
    </>
  )
}

export default App;
