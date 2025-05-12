# 🌎 Aplicación de Gestión de Países Hispanohablantes
# Creador Tapia Lautaro Exequiel 

## 📌 Objetivo
Desarrollar una aplicación web que permita gestionar información de países hispanohablantes. La app consume datos desde la API pública de REST Countries, los filtra, procesa y almacena en una base de datos MongoDB. Luego, permite visualizar, agregar, editar y eliminar países mediante una interfaz web interactiva.

---

## 🚀 Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/) - Motor de plantillas
- [Express Validator](https://express-validator.github.io/docs/) - Validaciones
- [Tailwind](https://tailwindcss.com/) - Estilos para page

---

## 🛠️ Instalación y Ejecución

### Instalar Node.js
Ve a https://nodejs.org y descarga la versión LTS (Long Term Support) para tu sistema operativo.
Al instalar Node.js también se instala npm (Node Package Manager).
node -v
npm -v
#### Crear tu proyecto y configurar Express.js
Crea una carpeta para tu proyecto:
mkdir mi-app && cd mi-app
npm init -y
Instala Express:
npm install express
###  Instalar MongoDB
Ve a https://www.mongodb.com/try/download/community y descarga MongoDB Community Server.
Sigue el instalador (asegúrate de instalar también MongoDB Compass, una GUI opcional).

###  Instalar Mongoose
npm install mongoose

### Instalar EJS
npm install ejs
Y configura tu app para usar EJS como motor de plantillas:
app.set('view engine', 'ejs');

###  Instalar Express EJS Layouts
Primero, instala el paquete express-ejs-layouts:
pm install express-ejs-layouts
Luego, en tu archivo principal (generalmente app.js o server.js), configura express-ejs-layouts:
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Usar express-ejs-layouts
app.use(expressLayouts);

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar el layout por defecto
app.set('layout', 'layouts/main');  // nombre del archivo de layout (puedes cambiarlo)

Crea un archivo de layout (por ejemplo, en la carpeta views/layouts/main.ejs):
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
    <link href="/css/tailwind.css" rel="stylesheet"> <!-- Tailwind -->
</head>
<body>
    <header>
        <!-- Aquí va tu navegación o cabecera -->
    </header>
    <main>
        <%- body %>  <!-- El contenido de las vistas se inyectará aquí -->
    </main>
    <footer>
        <!-- Aquí va tu pie de página -->
    </footer>
</body>
</html>

En tus vistas, solo necesitas establecer la variable title y el contenido se inyectará automáticamente dentro del layout:

html
Copiar
Editar

<%- layout('layouts/main') %>
<h1>Bienvenido a mi aplicación</h1>
<p>Contenido de la página</p>

### Instalar Express Validator
npm install express-validator

### Instalar Tailwind CSS



### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/gestion-paises.git
cd gestion-paises