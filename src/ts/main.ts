import SimLocalAnesthesia from "./SimLocalAnesthesia";
require("../css/style.css");

window.onload = () => {
    const sim = new SimLocalAnesthesia();
    sim.start();
};

