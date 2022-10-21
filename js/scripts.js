
const productos = [];
const carrito = [];
let contenedorTarjeta = document.querySelector('.contenedorTarjeta');
let btnAgregarCarrito = document.getElementsByClassName('agregarCarrito');

class Producto {
  constructor(nombre, precio, src, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.src = src;
    this.id = id;
  }
}

productos.push(new Producto('Tiramisú', '$ 60.00', 'src="../assets/tiramisu.webp"', '1'));
productos.push(new Producto('Tarta Coco y DDL', '$ 120.00', 'src="../assets/Coco-y-DDL.webp"', '2'));
productos.push(new Producto('Cheesecake', '$ 100.00', 'src="./assets/Cheesecake.webp"', '3'));
productos.push(new Producto('Tarta de Ricota', '$ 150.00', 'src="./assets/Tarta de Ricota.webp"', '4'));
productos.push(new Producto('Budín Inglés', '$ 80.00', 'src="./assets/budin-inglés.webp"', '5'));
productos.push(new Producto('Tarta Cabsha', '$ 140.00', 'src="./assets/tarta cabsha.webp"', '6'));


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
            <button class="agregarCarrito btn btn-outline-dark mt-auto">
              Agregar al Carrito
            </button>
          </div>
      </div>
    </div>
  </div>`

  contenedorTarjeta.appendChild(divProducto);
});

// crearTarjeta(productos);

// const cargarCarrito = (prodId) => {
//   let item = productos.find ((prodId) => prodId === id)

//   carrito.push(item);
//   console.log(carrito);
// };

// btnAgregarCarrito.onclick = () => {
//   carrito.push({
//     nombre: producto.nombre,
//     img: producto.src,
//     precio: producto.precio,
//     id: producto.id
//   });
//   console.log(carrito);
// };

btnAgregarCarrito.onclick = () => {
  console.log('Hiciste click')
};