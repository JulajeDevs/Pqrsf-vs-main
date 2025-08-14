# 📌 Pqrsf-vs-main

Sistema para la gestión de **PQRSF** (Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones), desarrollado con **Node.js** y **Express**, con vistas dinámicas y arquitectura modular.

---

## 📂 Estructura del proyecto
Pqrsf-vs-main/
├── node_modules/ # Dependencias instaladas de Node.js
├── private/ # Archivos internos y configuraciones privadas
├── public/ # Archivos estáticos (CSS, JS, imágenes)
├── views/ # Vistas renderizadas por el servidor (HTML/EJS/Pug)
├── package.json # Configuración del proyecto y dependencias
├── server.js # Punto de entrada de la aplicación
└── README.md # Documentación del proyecto

## ⚙️ Requisitos previos

Asegúrate de tener instalado:

- **Node.js** (v14 o superior) → [Descargar Node.js](https://nodejs.org/)
- **npm** (gestor de paquetes incluido en Node.js)

---

## 📥 Instalación

 1. Clona este repositorio:
```bash
git clone https://github.com/JulajeDevs/Pqrsf-vs-main.git
```

 2. Accede a la carpeta del proyecto:
```bash
cd Pqrsf-vs-main
```

3. Instala las dependencias:
````bash
npm install
```
---

## 🚀 Ejecución
Para iniciar el servidor en modo desarrollo:
````bash
npm start
```
Si el script no está configurado en package.json, usa:
````bash
node server.js
```


## 🗂 Descripción de carpetas

node_modules/ → Contiene todas las dependencias instaladas.

private/ → Archivos internos y configuraciones que no deben ser públicos.

public/ → Archivos estáticos como hojas de estilo, JavaScript del lado del cliente e imágenes.

views/ → Plantillas para el renderizado dinámico de la interfaz.

server.js → Archivo principal que levanta el servidor y gestiona las rutas.

## 🛠 Tecnologías usadas

Node.js → Entorno de ejecución JavaScript.

Express.js → Framework para crear el servidor y manejar rutas.

EJS / Pug / HTML → Motor de plantillas (dependiendo de la configuración real).

Bootstrap / CSS → Estilos de la interfaz.

JavaScript → Lógica del lado del cliente y servidor.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
Puedes usarlo, modificarlo y distribuirlo libremente, siempre citando al autor original.