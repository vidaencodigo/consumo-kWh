
function FormCalcular() {
    const $form = document.createElement('main');
    $form.classList.add('container');
    $form.innerHTML = `
            
            <p>Calcula el consumo de un aparato electrico en kWh y su costo aproximado.</p>
            <form id="calculator-form">
                <div class="row">
                    <div class="input-field col s12 m6">
                        <input type="number" id="power" required>
                        <label for="power">Poder (W)</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <input type="number" id="time" required>
                        <label for="time">Tiempo de cosumo al dia (Horas)</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <input type="number" id="period" required>
                        <label for="period">Periodo (en dias):</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <input type="number" id="price" step = "any" required>
                        <label for="price">Precio por kWh</label>
                    </div>
                    <button id="calculate" class="btn waves-effect waves-light purple darken-3 btn-large z-depth-3" type="button">Calcular
                        <i class="material-icons right">calculate</i>
                    </button>
                </div>

            </form>

            <div id="result"></div>
    `;


    return $form;
}

export { FormCalcular };