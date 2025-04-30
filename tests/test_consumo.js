// test

import { Calcular } from "../consumo.js";

let power = 90; // potencia en watts
let time = 8; // tiempo en horas

let consumo = Calcular(power, time);
console.info(`El consumo del aparato de ${power} W en ${time} H es:  ${consumo} kWh`);