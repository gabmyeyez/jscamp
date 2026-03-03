// Make Dynamic buttons
const results = document.querySelector(".results-section");

results.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton-apply")) {
    const boton = event.target;
    boton.style.backgroundColor = "#22c55e";
    boton.textContent = "¡Aplicado!";
    boton.disabled = true;
  }
});
