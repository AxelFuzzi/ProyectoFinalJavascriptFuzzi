function navbar(){
    const contenedorNavBar = document.querySelector(".contenedor-navbar")
    
    contenedorNavBar.innerHTML =`<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center" >
    <div class="container-fluid">
      <a class="navbar-brand" href="../index.html"><img src="../images/0-Tecaldo-gaming-min.jpg" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse mx-2" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pc de Escritorio</a>  
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="../html/productos.html#gpu">Tarjetas gráficas</a></li>
                  <li><a class="dropdown-item" href="../html/productos.html#cpu">Microprocesadores</a></li>
                  <li><a class="dropdown-item" href="../html/productos.html#ram">Memorias Ram</a></li>
                  <li><a class="dropdown-item" href="../html/productos.html#case">Gabinetes</a></li>
                  <li><a class="dropdown-item" href="../html/productos.html#almacenamiento">Almacenamiento</a></li>
                </ul
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Almacenamiento</a> 
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="../html/productos.html#almacenamiento">SSD</a></li>
                  <li><a class="dropdown-item" href="../html/productos.html#almacenamiento">HDD</a></li>
                </ul>
                </li>
                <li><a class="dropdown-item" href="../html/productos.html#monitores">Monitores</a></li>
                <li><a class="dropdown-item" href="../html/productos.html#notebook">Notebooks</a></li>
                <li><a class="dropdown-item" href="../html/productos.html#mouse&teclados">Perifericos</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../html/nosotros.html">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../html/contacto.html">Contactanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../html/Q&A.html">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>
    </div>
    <button class="boton-carrito"></button>
  </nav>
  `
}

navbar();