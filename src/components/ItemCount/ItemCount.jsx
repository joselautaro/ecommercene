import React, { useState } from "react";

export const ItemCount = () => {

    const [counter, setCounter] = useState(0);

    const decrementar = () =>{
        if( counter > 0 ){
            setCounter( counter - 1)
        }
    }

    const sumar = () =>{
        setCounter( counter + 1)
    }

    const resetear = () =>{
        setCounter(0)
    }
    return (
        <>
            <div>Cuenta en: {counter}</div>
            <button onClick={decrementar}>restar</button>
            <button onClick={sumar}>sumar</button>
            <button onClick={resetear}>resetar</button>
        </>
    )
}