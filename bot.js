require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [  // https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ],
  partials: [ //https://discord.js.org/#/docs/discord.js/14.0.3/typedef/Partials
    Partials.Message,
    Partials.User,
    Partials.Channel,
    Partials.GuildMember
  ]
});

const BOT_PREFIX = '!';
const MOD_COMMAND = 'hello-world';
const reaction1 = '你從桃園新竹';
const reaction2 = '晚安';
const reaction3 = '7414';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'I love NTU GDSC') {
    msg.reply('I love U 2 💕');
    msg.react('😳');
  }
  if (msg.content === `${BOT_PREFIX}${MOD_COMMAND}`) {
    modUser(msg.member);
  }
  if (msg.content === `${reaction1}`) {
    msg.reply('喔是喔55555');
  }
  if (msg.content === `${reaction2}`) {
    msg.reply('那我也要睡啦！');
  }
  if (msg.content === `${reaction3}`) {
    msg.reply('好了拉特哥椅子哥');
  }
});

client.on('messageDelete', msg => {
  msg.channel.send('偷刪訊息 抓 🤬');
});

function modUser(member) {
  member.roles.add('1013732881442545787');
};

client.login(process.env.BOT_TOKEN || 5000);
