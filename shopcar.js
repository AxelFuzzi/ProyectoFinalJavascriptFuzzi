function shopCar(){
    botonCarrito = document.querySelector(".boton-carrito")

    botonCarrito.innerHTML = `<i class="fa-solid fa-cart-shopping"></i><span class="contadorCarrito">0</span>`
}
shopCar();