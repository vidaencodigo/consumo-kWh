function Nav(){
    const nav = document.createElement('nav');
    nav.classList.add('purple', 'darken-3');
    nav.innerHTML = `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Calculadora de consumo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      
      </ul>
    </div>
    `;
    return nav;
}

export { Nav };
