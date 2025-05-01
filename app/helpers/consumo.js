function Calcular(power, time) {
    // Calcular o consumo en kWh
    let consumo = 0;
    consumo = (power * time) / 1000;
    return consumo;
}

function CalcularPeriodo(period, consumo){
    // @periodo en dias ej. 30 - 60 - 90 - 120 - 180 - 365
    // @consumo en kWh Calcular(power, time)
    let periodo = 0;
    periodo = consumo * period;

    return periodo;
}

function CalculaTotalPago(TotalPeriodo, Precio){
    // @TotalPeriodo en kWh CalcularPeriodo(period, consumo)
    // @Precio en $/kWh
    let total = 0;
    total = TotalPeriodo * Precio;
    return total;
}

export { Calcular, CalcularPeriodo, CalculaTotalPago };

