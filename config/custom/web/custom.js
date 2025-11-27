// custom.js
function changeWelcomeText() {
    // Cambia il <title>
    document.title = "Rob Meet";

    // Cambia l'H1 della welcome page
    const h1 = document.querySelector("h1.header-text-title");
    if (h1) {
        h1.textContent = "Rob Meet";
    } else {
        // Se non c'è ancora, riprova dopo 100ms
        setTimeout(changeWelcomeText, 100);
    }
}

// Avvia dopo che il DOM è pronto
document.addEventListener("DOMContentLoaded", changeWelcomeText);
