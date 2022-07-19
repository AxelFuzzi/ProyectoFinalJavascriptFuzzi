/*----------------------------------------formulario---------------------------------------------*/ 
function contacto(){

  const contenedorFormulario = document.getElementById("contenedor-formulario");

  const div = document.createElement("div")

  div.classList.add("container")
  div.classList.add("pb-lg-5")
  div.classList.add("bg-white")

  div.innerHTML = `<h1 class="title_h1">Contactanos</h1>
        <div class="mb-3">
          <label for="nombreApellido" class="form-label">Nombre y apellido</label>
          <input type="text" class="form-control" name="nombreApellido">
        </div>
        <div class="mb-3">
          <label for="correo" class="form-label">Email</label>
          <input type="email" class="form-control" name="correo">
        </div>
        <div class="mb-3">
          <label for="texto" class="form-label">Consulta</label>
          <textarea class="form-control" name="texto" rows="2"></textarea>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn" type="submit">enviar</button>
          <button class="btn" type="reset">borrar</button>
        </div>
        `
  contenedorFormulario.appendChild(div)
    
  contenedorFormulario.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
      swal.fire({
        icon:"success",
        title:"Consulta enviada con éxito!",
        text:"nos pondremos en contacto contigo",
        confirmButtonColor:"#1572A1",
        confirm:"Ok"
        })
    })
}

contacto();








