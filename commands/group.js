
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.some(r => r.name === "Group 1") ||message.member.roles.cache.some(r => r.name === "Group 2")
    || message.member.roles.cache.some(r=>r.name === "Group 3") || message.member.roles.cache.some(r=>r.name === "Group 4") || 
    message.member.roles.cache.some(r=>r.name === "Group 5") || message.member.roles.cache.some(r=>r.name === "Group 6") ||
    message.member.roles.cache.some(r=>r.name === "Group 7") || message.member.roles.cache.some(r=>r.name === "Group 8") || message.member.roles.cache.some(r=>r.name === "Group 9")){
       return message.channel.send("175 Grand Street'teki lab'ımda gördüğüm verilere göre senin bir grubun zaten var. Yeni bir grup seçemezsin.");
    }
    else if(message.member.roles.cache.some(r=>r.name === "Kodluyoruz")){
        return message.channel.send("Sevgili Profesör, hali hazırda siz çoktan bir ekibe dahil olmaktan çıkmışsınız. Sizi bir gruba atayamam.")
    }
    else{
        var rand = Math.floor((Math.random() * 2) + 1);
        var maxGroupNumber = 4;
        if (rand == 1) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#3d9cad')
                .setTitle('Group 8!')
                .setAuthor('Grubuna hoşgeldin çaylak!')
                .setDescription('Tebrikler, senin ekibin 8! Şimdi kendinize bir isim seçin.')
                .addFields(
                    { name: 'Group 8', value: 'Ekip arkadaşlarınla text kanallarında tanışabilirsin. Çabuk ol, bir prototip geliştirmek için üç haftan var ve şşş sessiz ol. Edisonun duyması an meselesi' },
                )
                .setImage('https://33.media.tumblr.com/df43c5341db1f2c9b8314db6907c5fbf/tumblr_nahigwzu991ry46hlo1_500.gif')
                .setFooter('Kodluyoruz Bot');
            message.member.roles.add("752173604765958184");
            message.channel.send(exampleEmbed);
        }
        else if (rand == 2) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#3d9cad')
                .setTitle('Group 9!')
                .setAuthor('Grubuna hoşgeldin çaylak!')
                .setDescription('Tebrikler, senin ekibin 9! Şimdi kendinize bir isim seçin.')
                .addFields(
                    { name: 'Group 9', value: 'Ekip arkadaşlarınla text kanallarında tanışabilirsin. Çabuk ol, bir prototip geliştirmek için üç haftan var ve şşş sessiz ol. Edisonun duyması an meselesi' },
                )
                .setImage('https://33.media.tumblr.com/df43c5341db1f2c9b8314db6907c5fbf/tumblr_nahigwzu991ry46hlo1_500.gif')
                .setFooter('Kodluyoruz Bot');
            message.member.roles.add("752207503177154570");
            message.channel.send(exampleEmbed);
        }
    }
   
};

exports.help = {
    name: 'group',
    aliases: ['group', 'grp'],
    description: 'group komutu',

}