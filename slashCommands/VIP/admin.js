const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'admin',
    description: 'Thông Tin ADMIN BOT !',
    type: 'CHAT_INPUT',
    cooldown: 200,
    options: [
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này.`)
            .setFooter({ text: "© Developer: Bood#1111" })
            .setTimestamp(),
        ],
      });
    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`py sms.py ${phone} 100`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "`👨‍💻 Facebook:`",
            value: `\`\`\`css\n [ trankha1122/ ] \n\`\`\``,
            inline: true,
          },
          {
            name: "`💥 Zalo:`",
            value: `\`\`\`css\n [ 0000000 ] \n\`\`\``,
            inline: true,
          },
          {
            name: "`🕒 Telegram:`",
            value: `\`\`\`css\n [ @boodtcp ] \n\`\`\``,
            inline: true,
          },
          {
            name: "**`💀 Github:`**",
            value: `\`\`\`css\n[ khadz]\n\`\`\``,
            inline: true,
          },
          {
            name: "`👾 Discord:`",
            value: `\`\`\`css\n [ Kakashi#7857 ] \n\`\`\``,
            inline: true,
          },
          {
            name: "**`🎃 TikTok:`**",
            value: `\`\`\`css\n[ @kha16709 ]\n\`\`\``,
            inline: true,
          })
        .setFooter('© Developer: KAKASHI#1111', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG LOAD COOLDOWN...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: KaKASHI#1111', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 3000)
            })
    }
          }