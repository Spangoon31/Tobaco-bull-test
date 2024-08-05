window.addEventListener('load', () => {
    const minWidth = 1024; // Anchura mínima para permitir el acceso
  
    if (window.innerWidth < minWidth) {
      document.getElementById('contenido').style.display = 'none';
      document.getElementById('denegado').style.display = 'block';
    } else {
      document.getElementById('denegado').style.display = 'none';
      document.getElementById('contenido').style.display = 'block';
    }
  });
  