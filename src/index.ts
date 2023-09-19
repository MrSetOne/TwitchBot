import tmi, { client } from 'tmi.js';
import dotenv from 'dotenv';
import commands from './commands';

dotenv.config();

const config = {
  options: { debug: true },
  identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
  channels: ['MrSetOne']
};

export const bot = new tmi.Client(config);

bot.connect();

bot.on('connecting', (address, port) => console.log('Conectando...'));
bot.on('connected', () => console.log('Conectado!'));

bot.on('message', async(channel, tags, message, self) => {
  try {
    if(tags['first-msg'] === true) {
      await bot.say(channel, `Bienvenido ${tags.username}!`);
    }
    if(self || !message.startsWith('!')) return;
    const command = message.slice(1);
    if(!commands[command]) {
      await bot.say(channel, 'No conozco ese comando');
      return;
    };
    commands[command](channel, tags, message, self);
  } catch (e) {
    console.log(e);
  }
});

export default bot;