import { Calcular, CalcularPeriodo, CalculaTotalPago } from "../consumo.js";

// precios y consumos de un aparato domestico en México

let power = 90; // potencia en watts
let time = 24; // tiempo en horas
let periodo = 60; // periodo en dias
let consumo = Calcular(power, time);
let periodoConsumo = CalcularPeriodo(periodo, consumo);
let precio = 1.075; // precio en $/kWh MXN
console.info(`El consumo del aparato de ${power} W en ${time} H es:  ${consumo} kWh`);
console.info(`El consumo del aparato de ${power} W en ${time} H en ${periodo} dias es:  ${periodoConsumo.toFixed(2)} kWh`);
console.info(`El total a pagar por el consumo de ${periodo} dias es: ~ $${CalculaTotalPago(periodoConsumo, precio).toFixed(2)} MXN`);