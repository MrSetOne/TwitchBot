# Twitch Bot

This is a Node.js server written in TypeScript that uses the `tmi.js` library to create a Twitch bot. The bot can join channels and send messages.

## Project Structure

The project has the following file structure:

```
twitch-bot
├── src
│   ├── commands.ts
│   └── index.ts
├── package.json
├── .env
├── tsconfig.json
└── README.md
```

- `src/index.ts`: Es el punto de entrada al servidor y donde se inicia y configura el bot.
- `src/commands.ts`: En este fichero se ejecutan los comandos que son mandados desde `src/index.ts`.
- `tsconfig.json`: Este archivo es el archivo de configuración para TypeScript. Especifica las opciones del compilador y los archivos que se incluirán en la compilación.
- `package.json`: Este es el archivo de configuración de npm, incluye las librerias utilizadas y los scripts.
- `README.md`: Documentación del proyecto.

## Getting Started

1. Clona el repositorio.
2. Instala las dependencias ejecutando `npm install`.
3. Crea un archivo `.env` en el directorio raíz y agrega las siguientes variables de entorno:
   - `TWITCH_CHANNEL`: Tu nombre de usuario de Twitch.
   - `TWITCH_BOT_USERNAME`: Tu nombre de usuario de Twitch.
   - `TWITCH_OAUTH_TOKEN`: Tu token de autenticación de Twitch.
4. Inicia el servidor ejecutando `npm start`.
