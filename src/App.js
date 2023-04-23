import React, { useState } from "react";
import './styles/App.css';
import Celsius from "./components/Celsius";
import Fahrenheit from "./components/Fahrenheit";
import Button from "./components/Button";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celFocus, setCelFocus] = useState(false);
  const [fahFocus, setFahFocus] = useState(false);

  return (
    <main>
      <p>°C és °F Kalkulátor</p>
      <section id="kijelzo">
        <Celsius celsius={celsius} setCelsius={setCelsius} fahrenheit={fahrenheit} setCelFocus={setCelFocus} setFahFocus={setFahFocus} />
        <Button celsius={celsius} setCelsius={setCelsius} fahrenheit={fahrenheit} setFahrenheit={setFahrenheit} celFocus={celFocus} fahFocus={fahFocus} />
        <Fahrenheit fahrenheit={fahrenheit} setFahrenheit={setFahrenheit} celsius={celsius} setFahFocus={setFahFocus} setCelFocus={setCelFocus} />
      </section>
      <section id="szamitas">
        <p>Átszámítás °C és °F között</p>
        <div>[°C] = ([°F] - 32) : 1,8</div>
        <div>[°F] = [°C] <span>.</span> 1,8 + 32</div>
      </section>
    </main>
  );
}
