import { Footer } from "./components/Footer.js";
import { Main } from "./components/Main.js";


function App() {    
    const d = document.getElementById("app");
  
    d.appendChild(Main());
    d.appendChild(Footer());
}

export { App };