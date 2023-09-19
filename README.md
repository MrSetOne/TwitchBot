# Twitch Bot

This is a Node.js server written in TypeScript that uses the `tmi.js` library to create a Twitch bot. The bot can join channels and send messages.

## Project Structure

The project has the following file structure:

```
twitch-bot
├── src
│   ├── bot.ts
│   ├── config.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

- `src/bot.ts`: This file exports a class `Bot` which has methods for joining a channel, sending messages, and handling incoming messages.
- `src/config.ts`: This file exports an interface `Config` which defines the configuration options for the bot, including the Twitch username, OAuth token, and channels to join.
- `src/index.ts`: This file is the entry point of the application. It creates an instance of the `Bot` class and starts the bot by calling its `connect` method.
- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.
- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.
- `README.md`: This file contains the documentation for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:
   - `TWITCH_USERNAME`: Your Twitch username.
   - `TWITCH_OAUTH_TOKEN`: Your Twitch OAuth token.
   - `TWITCH_CHANNELS`: A comma-separated list of channels to join.
4. Start the server by running `npm start`.

## Usage

Once the server is running, the bot will automatically join the specified channels and listen for incoming messages. To send a message, use the `send` method of the `Bot` class:

```typescript
import { Bot } from './bot';

const bot = new Bot();
bot.connect();

bot.send('hello world');
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.# TwitchBot
