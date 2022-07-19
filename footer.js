function footer(){
    const contenedorFooter = document.querySelector(".contenedor-footer")

    contenedorFooter.innerHTML=`<hr> 
    <section>
      <div class="container text-center text-md-start mt-2">
        <div class="row">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h3><a href="../index.html" class="text-dark text-uppercase fw-bold h6">Inicio</a></h3>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h3 class="text-uppercase fw-bold h6">Acerca de nosotros</h3>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>      
            <p><a href="../html/nosotros.html" class="text-dark">Quienes somos</a></p>
            <p><a href="../html/Q&A.html" class="text-dark">Q&A</a></p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h3 class="text-uppercase fw-bold h6">Seguinos en nuestras redes!</h3>
            <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
            <div class="social-icons">
              <img src="../images/bxl-instagram.svg" alt="instagram logo" width="50">
              <img src="../images/bxl-facebook-square.svg" alt="facebook logo" width="50">
              <img src="../images/bxl-gmail.svg" alt="Gmail logo" width="50">
            </div>     
          </div>
        </div>
      </div>
    </section>   
    <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.2)">    
      <p>2022 &copy; Axel fuzzi</p>  
    </div>
    `
}
footer();