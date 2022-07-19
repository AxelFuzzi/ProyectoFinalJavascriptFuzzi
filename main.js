const contenedorMonitor = document.getElementById("contenedor-monitor")

const contenedorNotebook = document.getElementById("contenedor-notebook")

const contenedorCpu = document.getElementById("contenedor-cpu")

const contenedorGpu = document.getElementById("contenedor-gpu")

const contenedorRam = document.getElementById("contenedor-ram")

const contenedorCase = document.getElementById("contenedor-case")

const contenedorAlmacenamiento = document.getElementById("contenedor-almacenamiento")

const contenedorPeriferico = document.getElementById("contenedor-periferico")

const contenedorCarrito = document.querySelector(".carrito-contenedor")

const contadorCarrito = document.querySelector(".contadorCarrito")

const precioTotal = document.querySelector(".precioTotal")

const botonVaciar = document.querySelector(".vaciar-carrito")

const div = document.createElement("div")


botonVaciar.addEventListener("click", () =>{

    Toastify({
        text: "Carrito vacio",
        duration: 2000,
        gravity: "bottom",
        position: "center",
        style:{
            background: "#1572A1", 
        }   
    }).showToast();

    carrito.length = 0
    actualizarCarrito()
})

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('carrito') && (carrito = JSON.parse(localStorage.getItem('carrito')))        
        actualizarCarrito()   
})

/*------------------------------------obtencion de datos de archivo json mediante GET----------------------------*/
fetch("../json/monitores.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorMonitor.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/notebook.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorNotebook.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/ram.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorRam.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/cpu.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorCpu.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/gpu.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorGpu.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/case.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorCase.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/memoria.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorAlmacenamiento.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

    fetch("../json/periferico.json")
    .then((resp) => resp.json() )
    .then(dato => {
        dato.forEach(producto => {
            const {id, nombre, precio, cantidad, img} = producto

            const div = document.createElement("div")

            div.classList.add("col")

            div.innerHTML = `
                <div class="card h-100 product-container">
                    <img src=${img} class="card-img-top product-photo">
                    <h3>${nombre}</h3>
                    <p>$${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
                `
            contenedorPeriferico.appendChild(div)

            const boton = document.getElementById(`agregar${id}`)

            boton.addEventListener("click",() => {
                agregarAlCarrito(id)
            })
        });
    });

const agregarAlCarrito = async (prodId) => {

    Toastify({
        text: "Agregado al carrito",
        duration: 1500,
        gravity: "bottom",
        style:{
            background: "#1572A1", 
        },   
    }).showToast();

    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map (prod =>{
             (prod.id === prodId) && prod.cantidad++
        })
    }else {
        const resp = await fetch("../json/stock.json")
        const dato = await resp.json()  
        const item = dato.find((prod) => prod.id === prodId)     

        carrito.push(item)
        console.log(carrito)

        actualizarCarrito()
    }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {

    Toastify({
        text: "Eliminado del carrito",
        duration: 1500,
        gravity: "bottom"
    }).showToast();

    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const {id, nombre, precio, cantidad, img} = prod
        const div = document.createElement("div")
        div.className = ("productoEnCarrito") 
        div.innerHTML = `
        <p>${nombre}</p>
        <p>Precio:$${precio}</p>
        <p>Cantidad: <span id="cantidad">${cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

