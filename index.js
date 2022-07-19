function generarIndex(){
    const contenedorIndex = document.getElementById("contenedor-index")

    contenedorIndex.innerHTML = `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/banner-slider-min.png" class="d-block w-100" alt="publicidad-Aorus-motherboard-Gigabyte">
      </div>
      <div class="carousel-item">
        <img src="images/banner-slider2-min.jpg" class="d-block w-100" alt="publicidad-Asus-monitores">
      </div>
      <div class="carousel-item">
        <img src="images/banner-slider3-min.jpg" class="d-block w-100" alt="publicidad-Asus-motherboard-serie-z690">
      </div>
      <div class="carousel-item">
        <img src="images/banner-slider4-min.png" class="d-block w-100" alt="publicidad-procesadores-ryzen">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container-fluid pt-3 about">
    <div class="container about-amd px-0">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="images/AMD-Ryzen-5000-min.jpg" class="img-fluid rounded-start" alt="publicidad-AMD-Ryzen-5000">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">Ryzen 5000 series</h2>
              <p class="card-text">Los procesadores para juegos mejor valorados del mundo se llaman AMD Ryzen serie 5000, Junto con la gran potencia de procesamiento, llegan las últimas tecnologías que la respaldan. Todos los procesadores AMD Ryzen™ serie 5000 cuentan con un conjunto completo de tecnologías diseñadas para elevar la potencia de procesamiento de tu PC, incluidas Precision Boost 26, Precision Boost Overdrive7, PCIe® 4,0 (en procesadores seleccionados) y BARRA redimensionable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container about-nvidia px-0 pt-3">
      <div class="card">
        <div class="row g-0">  
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">Gforce RTX 3090</h2>
              <p class="card-text">La GeForce RTX™ 3090 es increíblemente potente en todas las formas, por lo que te brinda un nivel de rendimiento completamente nuevo. Está impulsada por Ampere, la arquitectura de segunda generación de NVIDIA RTX, que duplica el rendimiento de IA y de ray tracing gracias a los Núcleos RT y Núcleos Tensor mejorados y los nuevos multiprocesadores de transmisión. Además, cuenta con 24 GB de memoria G6X para brindar la experiencia de juego definitiva.</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="images/rtx-3090.jfif" class="img-fluid rounded-start" alt="publicidad-rtx-3090">
          </div>
        </div>
      </div>
    </div>  
  </div>
  `
}
generarIndex();