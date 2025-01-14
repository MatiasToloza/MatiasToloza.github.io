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
// ... (código para el filtrado de categorías - SIN CAMBIOS)

const form = document.getElementById('mi-formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    fetch('http://localhost:3000/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {throw new Error(`${response.status} ${response.statusText}: ${text}`)})
        }
        return response.text();
    })
    .then(data => {
        alert(data);
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    });
});