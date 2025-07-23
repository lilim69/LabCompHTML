let votosWeb = 0;
let votosJS = 0;
let votosBD = 0;
let totalVotos = 0;

function votar(opcion) {
  if (opcion === 'web') {
    votosWeb++;
    document.getElementById('votos-web').textContent = votosWeb;
  } else if (opcion === 'js') {
    votosJS++;
    document.getElementById('votos-js').textContent = votosJS;
  } else if (opcion === 'bd') {
    votosBD++;
    document.getElementById('votos-bd').textContent = votosBD;
  }

  totalVotos++;
  alert("¡Gracias por tu voto!");

  if (totalVotos % 5 === 0) {
    console.log("Total de votos acumulados: " + totalVotos);
  }
}

let totalItems = 0;
let totalPrecio = 0;
let productosAgregados = [];

function agregarAlCarrito(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosAgregados.push(nombre);

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-precio').textContent = totalPrecio;

  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  console.log("Productos en el carrito: ", productosAgregados);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosAgregados = [];

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-precio').textContent = totalPrecio;

  alert("Carrito vaciado");
}
