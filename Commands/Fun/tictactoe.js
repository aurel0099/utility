const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    description: "Plays a game to tictactoe",
    usage: "+tictactoe <@mention>",
    aliases: ["ttt"],
    run: async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member to play with!')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
    
}