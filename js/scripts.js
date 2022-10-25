
const productos = [];
const carrito = [];
let contenedorTarjeta = document.querySelector('.contenedorTarjeta');
let contenedorCarrito = document.getElementById('contenedorCarrito');

class Producto {
  constructor(nombre, precio, src, id, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.src = src;
    this.id = id;
    this.cantidad = cantidad;
  }
}

productos.push(new Producto('Tiramisú', '$ 60.00', 'src="../assets/tiramisu.webp"', 1, 1));
productos.push(new Producto('Tarta Coco y DDL', '$ 120.00', 'src="../assets/Coco-y-DDL.webp"', 2, 1));
productos.push(new Producto('Cheesecake', '$ 100.00', 'src="./assets/Cheesecake.webp"', 3, 1));
productos.push(new Producto('Tarta de Ricota', '$ 150.00', 'src="./assets/Tarta de Ricota.webp"', 4, 1));
productos.push(new Producto('Budín Inglés', '$ 80.00', 'src="./assets/budin-inglés.webp"', 5, 1));
productos.push(new Producto('Tarta Cabsha', '$ 140.00', 'src="./assets/tarta cabsha.webp"', 6, 1));


//Función creadora de las tarjetas de productos

productos.forEach((producto) => {

  let divProducto = document.createElement(`div`);

  divProducto.innerHTML = `
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Product image-->
      <img class="card-img-top" ${producto.src}/>
      <!-- Product details-->
      <div class="card-body p-4 contenedorTarjeta">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">${producto.nombre}</h5>
          <div class="d-flex justify-content-center small text-warning mb-2">
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
          </div>
          <!-- Product price-->
          ${producto.precio}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <button class="agregarCarrito btn btn-outline-dark mt-auto" id = "agregar${producto.id}">
              Agregar al Carrito
            </button>
          </div>
      </div>
    </div>
  </div>`

  contenedorTarjeta.appendChild(divProducto);

  let btnCarrito = document.getElementById(`agregar${producto.id}`);

  btnCarrito.addEventListener('click',() => {
    agregarCarrito(producto.id);
  });

});

//Función para cargar el carrito
const agregarCarrito = (prodId) => {
  let item = productos.find((prod) => prod.id === prodId);
  carrito.push(item);
  actualizarCarrito();
  console.log(carrito);
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((productos) => {

    let divCarrito = document.createElement('div');
    divCarrito.className = ('bi-cart-fill');
    divCarrito.innerHTML = `
    <p>${productos.nombre}</p>
    <p>Precio: ${productos.precio}</p>
    <p>Cantidad: <span id="cantidad">${productos.cantidad}</span></p>
    <button onclick = "eliminarCarrito(${productos.id})" class=""btnEliminar><i class="fas fa-trash-alt"></button>`

    contenedorCarrito.appendChild(divCarrito);
  });
}


// let nodeCarritoLista = document.querySelectorAll('.agregarCarrito');


// //Spread a la colección HTML del carrito
// const btnCarrito = [...nodeCarritoLista];

// btnCarrito.forEach(btnCarrito => {
//   btnCarrito.addEventListener('click', () => {
//     carrito.push(productos.Producto.nombre);
//     console.log(carrito);
//   });
// });

// console.log(productos);