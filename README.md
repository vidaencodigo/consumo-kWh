# Calculadora de consumo electrico

Una calculadora simple implementada en JavaScript que permite calcular el consumo en horas de un aparato electrico.

## Características

- Operaciones disponibles: `calculo x hora`
- Código limpio y modular
- Listo para extenderse con interfaz web o CLI

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/calculadora-js.git
cd calculadora-js
```

## Modo de uso

Exporta la funciòn

Calcula consumo

```js

import { Calcular } from "../consumo.js";

let power = 90; // potencia en watts
let time = 8; // tiempo en horas

let consumo = Calcular(power, time);
console.info(`El consumo del aparato de ${power} W en ${time} H es:  ${consumo} kWh`);

// se imprime en consola:
// El consumo del aparato de 90 W en 8 H es:  0.72 kWh
```

Calculo de periodo con costo 

```js
import { Calcular, CalcularPeriodo } from "../consumo.js";

let power = 90; // potencia en watts
let time = 8; // tiempo en horas
let periodo = 60; // periodo en dias
let consumo = Calcular(power, time);
let periodoConsumo = CalcularPeriodo(periodo, consumo);
console.info(`El consumo del aparato de ${power} W en ${time} H es:  ${consumo} kWh`);
console.info(`El consumo del aparato de ${power} W en ${time} H en ${periodo} dias es:  ${periodoConsumo.toFixed(2)} kWh`);

/*
 * Salida
 * El consumo del aparato de 90 W en 24 H es:  2.16 kWh
 * El consumo del aparato de 90 W en 24 H en 60 dias es:  129.60 kWh
 * El total a pagar por el consumo de 60 dias es: ~ $139.32 MXN
*/
```
