import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents:[
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.on('ready', ()=> {
  console.log('복실이, 준비 완료!');
});

client.on('messageCreate', msg=>{
  if(msg.content === "복실아"){
    msg.reply({
      content: '왜 불러?'
    })
  }
})

client.login(process.env.TOKEN);