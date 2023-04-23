import React from "react";

export default function Celsius({ celsius, setCelsius, setCelFocus, setFahFocus }) {
    const handlChange = e => {
        setCelsius(e.target.value);
    }

    const handleFocus = () => {
        setCelFocus(true);
        setFahFocus(false);
    }

    return (
        <>
            <input type="number" value={celsius} onChange={handlChange} onFocus={handleFocus} tabIndex='1' />
        </>
    );
}