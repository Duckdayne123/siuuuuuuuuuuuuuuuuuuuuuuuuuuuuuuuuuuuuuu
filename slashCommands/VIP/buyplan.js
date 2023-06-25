const { MessageEmbed } = require('discord.js');
module['exports'] = {
    name: 'buyplan',
    description: 'Mua Plan DDoS',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`MUA PLAN DDOS DISCORD\``)
            .setDescription(`\n**[ 🔰 PLAN DDOS 🔰 ]**\n
                            \n💭 BASIC : 30K/VINH VIEN\n
                            \n💮 VIP : 59K/VINH VIEN\n
                            


`)
.setColor("RANDOM")
            .setFooter({ text: "© » KaKaShi" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};
