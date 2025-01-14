const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Importante para permitir solicitudes desde otros orígenes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/enviar-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mensajespanafer@gmail.com', // Tu correo electrónico (RECUERDA LA CONTRASEÑA DE APLICACIÓN)
            pass: 'mensajespanafer03' // Tu contraseña de APLICACIÓN (¡NO LA CONTRASEÑA PRINCIPAL!)
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
            console.error("Error al enviar correo:", error);
            res.status(500).send('Error al enviar el mensaje.'); // Código 500 para errores del servidor
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Mensaje enviado correctamente.'); // Código 200 para éxito
        }
    });
});

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));