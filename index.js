import DiscordJS, { Intents, Collection, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config()

const client = new DiscordJS.Client({
  intents:[
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.on('ready', ()=>{
  console.log('복실이, 준비 완료!');
  
  const guildId = '';
  const guild = client.guilds.cache.get(guildId);
  let commands;

  if(guild){
    commands = guild.commands;
  } else{
    commands = client.application?.commands;
    // optional chaining
  }

  commands?.create({
    name: 'ame',
    description: 'Ame Love'
  });

  commands?.create({
    name: 'add',
    description: 'Adds two numbers.',
    options: [
      {
        name: 'num1',
        description: 'The first number.',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      },
      {
        name: 'num2',
        description: 'The second number.',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      }
    ]
  })
});

client.on('interactionCreate', async (interaction)=>{
  if(!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction;
  // destructuring

  if (commandName === 'ame'){
    interaction.reply({
      content: 'https://www.youtube.com/watch?v=c00uuV1zPCs\n흔들 아메~'
    });
  } else if (commandName  === 'add') {
    const num1 = options.getNumber('num1');
    const num2 = options.getNumber('num2');

    interaction.reply({
      content: `계산 결과는 ${num1 + num2}!`,
      ephemeral: true
    });
  }
});

client.login(process.env.TOKEN);