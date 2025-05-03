import { Footer } from "./components/Footer.js";
import { Main } from "./components/Main.js";
import { Nav } from "./components/Nav.js";

function App() {    
    const d = document.getElementById("app");
    d.appendChild(Nav());
    d.appendChild(Main());
    d.appendChild(Footer());
}

export { App };