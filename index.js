// --------- Basic Variables ---------

const { Collection, Client, Discord, RichPresenceAssets } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
const path = require('path')
const fs = require('fs')
const config = require('./config.json');


// --------- Mongoose Connected ---------

const mongoose = require('mongoose') 
mongoose.connect('mongodb+srv://BiizoNinja:cEB7RAtGE9tkMU9P@cluster0.th9eb.mongodb.net/data',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}),

// --------- Collections ---------

module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('Commands'));

["command"].forEach(handler => {
    require(path.resolve(`handlers/${handler}`))(client);
}); 


// --------- Logging in to the bot ---------
//client.login(process.env.token)

client.login(config.token);


