import { Calcular, CalcularPeriodo, CalculaTotalPago } from "./consumo.js";

function calcular() {
    const $power = document.querySelector("#power");
    const $time = document.querySelector("#time");
    const $price = document.querySelector("#price");
    const $period = document.querySelector("#period");
    // @periodo en dias ej. 30 - 60 - 90 - 120 - 180 - 365
    let response = {
        "power": $power.value,
        "time": $time.value,
        "period": $period.value,
        "total_costo": CalculaTotalPago(CalcularPeriodo($period.value, Calcular($power.value, $time.value)), $price.value)
    }
    return response;
}


document.addEventListener("DOMContentLoaded", () => {
    const $calcular = document.querySelector("#calculate");
    const $result = document.querySelector("#result");
    const $div = document.createElement("div");
    $div.classList.add("card-panel", "purple", "darken-1", "white-text", "center-align");

    $calcular.addEventListener("click", (e) => {
        e.preventDefault();
        let res = calcular();
        $div.innerHTML = `
            <p>Un aparato de ${res.power} W encedido ${res.time} horas por ${res.period} dias
            <br>
            tiene un costo aproximado de <strong> $${res.total_costo.toFixed(2)}</strong>.
            </p>
            
        `;
        $result.innerHTML = "";
        $result.appendChild($div);
        
    });
})

