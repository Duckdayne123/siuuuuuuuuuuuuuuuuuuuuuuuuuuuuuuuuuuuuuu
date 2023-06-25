const { MessageEmbed } = require('discord.js');
module['exports'] = {
    name: 'help',
    description: 'Cách Sài Ddos Bot',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`Cách Sài\``)
            .setDescription(`\n**[ 🔰 HƯỚNG DẪN SỬ DỤNG LỆNH DDOS 🔰 ]**\n
                        


\nXin chào ${interaction.user.username} ! tôi là 𝙑𝙄𝙊𝙇𝘼𝙏𝙄𝙊𝙉 𝙏𝙐𝙍𝙏𝘼𝙇⚡.
• Lệnh DDoS - /attack (METHODS) (HOST) (TIME))

• Lưu ý: 
Methods: tùy thuộc vào PLAN của bạn
Host định dạng: https://www.example.com/\n



`)
.setColor("RANDOM")
            .setFooter({ text: "© » KaKaShi" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};
