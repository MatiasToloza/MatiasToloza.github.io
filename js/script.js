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

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.urlencoded({ extended: true })); // Para procesar datos del formulario

app.post('/enviar-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Configurar el transportador de correo (usando un servicio como Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mensajespanafer@gmail.com',
            pass: 'mensajespanafer03' // ¡Cuidado! No expongas tu contraseña directamente en el código.
        }
    });

    const mailOptions = {
        from: 'mensajespanafer@gmail.com',
        to: 'matiastoloza7@gmail.com',
        subject: 'Nuevo mensaje del formulario de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error al enviar el mensaje.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Mensaje enviado correctamente.');
        }
    });
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));