const express = require('express');
const mysql = require('mysql');


const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_registro',
    password: 'tu_contraseña_mysql',
    database: 'tu_base_de_datos'
});

// Conectar a la base de datos MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = { username, password };

    // Insertar usuario en la base de datos
    db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            res.status(500).send('Error al registrar usuario');
        } else {
            res.status(200).send('Usuario registrado correctamente');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:3001/User`);
});
