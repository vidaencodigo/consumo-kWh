import { FormCalcular } from "./FormCalular.js";

function Main(){
    const $main = document.createElement('main');
    $main.appendChild(FormCalcular());
    return $main;
}


export { Main };