function preguntasRespuestas(){
    const contenedorQyA = document.getElementById("contenedor-q&a")

    contenedorQyA.innerHTML = `<h1 class="title_h1">Preguntas frecuentes</h1>
    <div class="container qanda-container">
        <h2 class="title_h2">¿Cuales son las formas de pago?</h2>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>Aceptamos tarjetas de debito y credito Mastercard o Visa, con cuotas de 3 +20% sobre el precio publicado y plan de 12 +25% sobre el precio publicado.
          Aceptamos tranferencia bancaria en banco xxxxx con el cbu:xxxxxxxxxxx.
          Tambien aceptamos tranferencia en Mercado Pago al cbu:xxxxxxxxxxxx y claro en efectivo.</p><br>
        <h2 class="title_h2">¿los productos se ecuentran en stock?</h2>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>Sí, todos los productos publicados se encuentran en existencia en nuestra tienda, si estan publicados es porque hay stock!</p><br>
        <h2 class="title_h2">¿Hacen envios?</h2>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>Sí, por medio de OCA. El costo del envío se ve al finalizar el pedido, puede ser a domicilio o a la sucursal mas cercana de Oca.</p><br>
        <h2 class="title_h2">¿Son precios finales?</h2>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>Todos los precios son finales con IVA incluído a exepción del coste de envio.</p>
        <h2 class="title_h2">¿Entregan factura y garantia?</h2>
        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 150px; background-color: #1572A1; height: 2px"/>
        <p>En todas las ventas que realizamos se entrega factura electrónica fiscal. Bajo ningún concepto ni excepción realizamos ventas sin factura.
          La garantía de todos los productos es de 12 meses, salvo los siguientes: Procesadores, Mothers 36 meses de garantía. Perifericos 3 meses.</p><br>
    </div>`
}

preguntasRespuestas();