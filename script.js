const popup = document.getElementById("cookie-popup");
const btnAceptar = document.getElementById("aceptar-cookie");
const btnCerrar = document.getElementById("cerrar-cookie");

// Mostrar popup al cargar la página
window.addEventListener("load", () => {
    popup.classList.add("show");
});

// Botón "Me gustan las cookies"
btnAceptar.addEventListener("click", () => {
    popup.classList.remove("show");
});

// Botón "X"
btnCerrar.addEventListener("click", () => {
    popup.classList.remove("show");
});