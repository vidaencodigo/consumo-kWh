function Calcular(power, time) {
    // Calcular o consumo en kWh
    let consumo = 0;
    consumo = (power * time) / 1000;
    return consumo;
}

export { Calcular };

