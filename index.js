import DiscordJS, { Intents, Collection, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config()

const client = new DiscordJS.Client({
  intents:[
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});

client.commands = new Collection;


client.once('ready', async () => {
  console.log('복실이, 준비 완료!'); 
});

client.on('messageCreate', (message)=> {
  if (message.content === '공부하자') {
    message.reply({
      content: 'https://www.youtube.com/watch?v=c00uuV1zPCs'
    })
  }
});

client.login(process.env.TOKEN);