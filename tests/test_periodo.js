import { Calcular, CalcularPeriodo } from "../consumo.js";

let power = 90; // potencia en watts
let time = 8; // tiempo en horas
let periodo = 60; // periodo en dias
let consumo = Calcular(power, time);
let periodoConsumo = CalcularPeriodo(periodo, consumo);
console.info(`El consumo del aparato de ${power} W en ${time} H es:  ${consumo} kWh`);
console.info(`El consumo del aparato de ${power} W en ${time} H en ${periodo} dias es:  ${periodoConsumo.toFixed(2)} kWh`);

