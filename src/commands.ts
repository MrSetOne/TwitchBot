import axios from "axios";
import bot from ".";
import { Events } from 'tmi.js'

const botName = 'mrsetoSETA1 =>'

interface ICommands {
  [commandName:string]:Events['message']
}

const getAllCommands = (commands:ICommands) => {
  return Object.keys(commands).filter((item)=>item !== 'help').map((item)=>`!${item}`).join(', ')
}

const commands:ICommands = {
  help: (channel) => {
    bot.say(channel, `${botName} Los comandos disponibles son: ${getAllCommands(commands)} `)
  },
  ping:()=>{
    bot.say('MrSetOne', 'pong')
  },
  pokemon: async (channel, tags) => {
    try {
      const id = Math.floor(Math.random() * 151) + 1;
      const lvl = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await response.json();
      bot.say(channel, `${botName} ${tags.username} pidió el pokemon ${pokemon.name} de nivel ${lvl}`);
    } catch (e) {
      console.log(e);
      bot.say(channel, `${botName}, siento decirte que han habido problemas para encontrar tu pokemon :(`);
    }
  },
  valorant: async(channel, tags, message, self) => {
    try {
      const agents = await axios.get('https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true');
      const agent1 = agents.data.data[Math.floor(Math.random() * agents.data.data.length)];
      console.log(agent1);
      agents.data.data.splice(agents.data.data.indexOf(agent1), 1);
      const agent2 = agents.data.data[Math.floor(Math.random() * agents.data.data.length)];
      bot.say(channel, `${botName} Definitivamente la pareja perfecta de valorant son ${agent1.displayName} y ${agent2.displayName}`)
    } catch (error) {
      
    }
  },
  github: async(channel, tags, message, self) => {
    bot.say(channel, `${botName} https://github.com/MrSetOne`);
  },
  avadakedavra:(channel, tags)=>{
    if(tags.username === 'imwaleesito'){
      bot.say(channel, `${botName} ${tags.username} es un puto manco y no puede lanzar ni una misera piedra!`);
      return;
    }
    if(tags.subscriber){
      bot.say(channel, `${botName} ${tags.username} ha usado la maldición avada kedavra!`);
    }
    else{
      bot.say(channel, `${botName} ${tags.username} no es sub y no puede usar la maldición avada kedavra!`);
    }
  },
}

export default commands;
