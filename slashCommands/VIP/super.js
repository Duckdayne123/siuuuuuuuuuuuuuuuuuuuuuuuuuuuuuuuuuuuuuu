const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'super',
    description: 'NUKER SPAM SMS !',
    type: 'CHAT_INPUT',
    cooldown: 120,
    options: [
    {
      name: "phone",
      description: "NUKER SPAM SMS",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này \n Liên Hệ VIOLATION#1111 Để Mua Nhé !`)
            .setFooter({ text: "© Developer: VIOLATION#1111" })
            .setTimestamp(),
        ],
      });   

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`python sms.py ${phone} 100`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .setImage("https://media4.giphy.com/media/q217GUnfKAmJlFcjBX/giphy.gif","https://media2.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gì")
        .addFields(
          {
            name: "`𝗦𝗣𝗔𝗠 𝗣𝗛𝗢𝗡𝗘 𝗗𝗢𝗡𝗘𝗘`",
            value: ` ***[ ${interaction.user.username} ]*** `,
            inline: true,
          },
          {
            name: "`💥 𝑃ℎ𝑜𝑛𝑒 𝑁𝑢𝑘𝑒𝑟:`",
            value: ` ***[ ${phone} ]*** `,
            inline: true,
          },
          {
            name:  "      `💀 𝑃𝑙𝑎𝑛:`",
            value: ` ***[ 𝙉𝙪𝙠𝙚𝙧 𝑆𝑚𝑆 ]*** `,
            inline: true,
          })
          .setFooter('© Developer: VIOLATION#1111', img)
          .setTimestamp();
            const countdownEmbed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(version)
              .setDescription("WAIT LOAD CHECK PHONE NUKER...")
              .setImage("https://media4.giphy.com/media/Y5wlazC8lSVuU/giphy.gif")
              .setFooter('© Developer: VIOLATION#1111', img)
              .setTimestamp()
            interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
                setTimeout(function () {
                  interaction.editReply({ embeds: [embed] });
                }, 1)
              })
      }
  }