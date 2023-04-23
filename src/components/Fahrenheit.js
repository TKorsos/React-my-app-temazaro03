import React from "react";

export default function Fahrenheit({ fahrenheit, setFahrenheit, setFahFocus, setCelFocus }) {
    const handleChange = e => {
        setFahrenheit(e.target.value);
    }

    const handleFocus = () => {
        setFahFocus(true);
        setCelFocus(false);
    }

    return (
        <>
            <input type="number" value={fahrenheit} onChange={handleChange} onFocus={handleFocus} tabIndex='2' />
        </>
    );
}