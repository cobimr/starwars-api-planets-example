// Instanciar las clases
const planetas = new Planetas();
const ui = new Interfaz();

// Seleccionar nodos
const contentPlanets = document.getElementById('content-planets');
const startBtn = document.getElementById('start');

// Listeners
startBtn.addEventListener('click', () => {

  // Agregar clases para desvancer el boton
  startBtn.classList.add('animated', 'fadeOut');
  

  // Eliminar boton luego de 1 seg
  setTimeout(() => {
    document.querySelector('.center-item').style.height = "auto";
    startBtn.remove();
  }, 1000);

  // Llamar a la clase Planetas para obtener la data de la API, luego en el promise de respuesta pasarle el metodo para mostrar el resultado desde la clase Interfaz
  planetas.obtenerPlanetas()
    .then(data => {
      ui.mostrarPlanetas(data);
    })
  
});