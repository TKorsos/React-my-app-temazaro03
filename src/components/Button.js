import React from "react";

export default function Button({ celsius, setCelsius, fahrenheit, setFahrenheit, celFocus, fahFocus }) {
    const celtofah = (celsius) => {
        setFahrenheit(celsius * 1.8 + 32);
    }

    const fahtocel = (fahrenheit) => {
        setCelsius((fahrenheit - 32) / 1.8);
    }

    const handleClick = () => {
        if (celFocus) {
            celtofah(celsius);
        }
        else if (fahFocus) {
            fahtocel(fahrenheit);
        }
    }

    return (
        <button onClick={handleClick}>=</button>
    );
}