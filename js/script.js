const botonesCategoria = document.querySelectorAll('.categoria-btn');
const contenedoresProductos = document.querySelectorAll('.productos-container');

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesCategoria.forEach(btn => btn.classList.remove('active'));
        contenedoresProductos.forEach(contenedor => contenedor.classList.remove('active'));

        boton.classList.add('active');
        const categoria = boton.dataset.categoria;
        const contenedorActivo = document.getElementById(categoria);

        if (contenedorActivo) {
            contenedorActivo.classList.add('active');
        } else {
            console.error("No se encontró el contenedor con ID:", categoria);
        }
    });
});