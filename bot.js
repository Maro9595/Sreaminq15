var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '-'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "533944821228896257") return;

  
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: | The Watching Status Has Been Changed To : ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'lis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: | The Listning Status Has Been Changed To : ${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`:white_check_mark: | The Username Status Has Been Changed To : ${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`:white_check_mark: | The Avatar Status Has Been Changed To : ${argresult}**`);
}

if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: | The Streaming Status Has Been Changed To : ${argresult}`)
} 
if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: | The Playing Status Has Been Changed To : ${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
