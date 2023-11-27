const form = document.querySelector("form");

function agregarTarea(e) {
  e.preventDefault();
  const input = document.getElementById("listaTarea");
  const lista = document.querySelector("ul");
  const nuevaTarea = document.createElement("li");
  nuevaTarea.innerHTML = `${input.value} <button type="button" class="eliminar btn btn-danger ms-2 my-2"><i class="bi bi-trash"></i></button>`;
  lista.appendChild(nuevaTarea);
  form.reset();
}

form.addEventListener("submit", agregarTarea);

// Delegación de eventos al elemento padre (ul)
document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.classList.contains("eliminar")) {
    const tareaAEliminar = e.target.parentElement;
    tareaAEliminar.remove();
  }
});
