
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const {prefix, token } = require ('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err);

	let jsfile = files.filter( f=> f.split(".").pop() === "js");
	if(jsfile.length <= 0){
		return console.log("Komut bulunmadı");
	}

	jsfile.forEach((f) =>{
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded`);
		client.commands.set(props.help.name, props);

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		})
	})
})

client.on('ready', async() => {
	console.log(`${client.user.username} is online`);
	client.user.setActivity(`with AC/DC!`);
})





client.on('message', async message => {

	if (!message.content.startsWith(prefix)) return;
	let args = message.content.slice(prefix.length).trim().split(/ +/);
	let cmd = args.shift().toLowerCase();
	let command;

	if(client.commands.has(cmd)){
		command = client.commands.get(cmd);
	}
	else if(client.aliases.has(cmd)){
		command = client.commands.get(client.aliases.get(cmd));
	}


	try {
		command.run(client, message, args);
	} catch (e) {
		return;
	}
});



client.login(token);
