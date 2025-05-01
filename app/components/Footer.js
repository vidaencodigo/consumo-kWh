function Footer() {
    const $content = `
    
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Calculadora de consumo electrico</h5>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2025Copyright <a class="grey-text text-lighten-3" href="http://github.com/vidaencodigo"
                    target="_blank">Emmanuel</a>
            </div>
        </div>
    
    `;

    const $footer = document.createElement("footer");
    $footer.classList.add("page-footer", "pink", "darken-1");
    $footer.innerHTML = $content;
    return $footer;
}

export { Footer };