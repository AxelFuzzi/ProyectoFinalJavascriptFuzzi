/*----------------------------------------nosotros---------------------------------------------*/ 
function nosotros(){
    
    const contenedorNosotros = document.getElementById("contenedor-nosotros");

    const div = document.createElement("div")

    div.classList.add("container")

    div.innerHTML = `<h1 class="title_h1">Quienes somos</h1>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>Somos una empresa familiar fundada en la ciudad de rosario que surgio como un proyecto de tienda online y se volvio real.
            Apoyados en alianzas estratégicas con las principales marcas tecnológicas nos fuimos volviendo referentes
            del mercado, ampliando nuestra oferta a mas de 2.000 productos de última generación, los cuales mantenemos
            y renovamos día a día con el objetivo de trasladar a nuestros clientes la excelencia, calidad, innovación
            y vanguardia que nos exigimos en cada paso que damos.
        </p>
        `
    contenedorNosotros.appendChild(div)
}

nosotros();