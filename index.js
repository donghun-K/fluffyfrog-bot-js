import DiscordJS, { Intents, Collection, Interaction } from 'discord.js';
import dotenv from 'dotenv';
// import fs from 'fs';

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
    name: 'study',
    description: 'study with',
    options: [
      {
        name: 'with',
        description: 'select',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
      }
    ]
  });  
});

client.on('interactionCreate', async (interaction)=>{
  if(!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction;
  // destructuring

  switch (commandName){
    case 'study' :
      const selected = options.getString('with');
      switch (selected){
        case 'rapping ame' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=q0vAwGB1OUY\n외힙 원탑 아메~',
          })
          break;
        case 'vibing ame' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=qUZYrGFh26Q\n 흔들 아메~',
          })
          break;
        case 'ame' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=cIpWpEoD60s\n 아멜리아~ 왓슨~~~',
          })
          break;
        case 'ina' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=inTzDQ1zQ10\n 무너~',
          })
          break;
        case 'kronii' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=XNGXUPmY3Jw\n 시계눈나~',
          })
          break;
        case 'gura' : 
          interaction.reply({
            content: 'https://www.youtube.com/watch?v=XohhaT18ja4\n 상어~',
          })
          break;
        default :
          interaction.reply({
            content: 'You can study with \n - ame\n - rapping ame\n - vibing ame\n - ina\n - kronii\n - gura]',
            ephemeral: true
          })
      }
      break;          
  }
});

client.login(process.env.TOKEN);