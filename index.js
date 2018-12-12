const Discord = require('discord.js');
const client = new Discord.Client();
console.log(client);
/*------------------------------------ARRAYS----------------------------------------------------*/
var hert_replies = ["asdf", "ja scho", "für das das nüd hert isch isch nu gadäche hert", "hiä isch zimli langwilig", "wen ich hiä bi isch gad nümmä", "we wenns ä McGas gäb", "ja wänns nüd äso fleugä hät scho"];
var wm_replies = ["asdf", "heb äisch mini gasmaskärä isch kaputt", "ich frissä ä McLachgas"];
var kilichusch_replies = ["asdf", "näi ich bi am brüälä", "ja muäs nu churz tränäli abbutzä"];
var büchs_replies = ["asdf", "https://www.handball-ktvm.ch/images/personen/1440842730_mu15_mike_gwerder_5.jpg","https://www.handball-ktvm.ch/images/personen/1440842717_mu15_kilian_schelbe.jpg", "https://www.handball-ktvm.ch/images/personen/thumb/1408554064_master_dsc8213.jpg", "https://www.handball-ktvm.ch/images/personen/1440842641_mu15_ralf_brgler_.jpg", "https://www.handball-ktvm.ch/images/personen/1440842688_mu15_janik_heinzer_.jpg", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/Kili.png", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/arno.png", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/beeler.PNG", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/mike.png"  ];
var savedmemesinsta = ["asdf", "https://www.instagram.com/p/BqqNPXXFe_W/", "https://www.instagram.com/p/BqVSgsxAdK8/", "https://www.instagram.com/p/BqcPbOehTKI/", "https://www.instagram.com/p/BqJSoREF3k4/", "https://www.instagram.com/p/Bp-Av1yBeou/", "https://www.instagram.com/p/BpcjeDuB8wI/","https://www.instagram.com/p/BpW65UDnVMA/", "https://www.instagram.com/p/BpE6eOGhWrY/", "https://www.instagram.com/p/BnhGmIyhDGD/", "https://www.instagram.com/p/BnGYuj8AAhM/", "https://www.instagram.com/p/Bmxw4NLgata/", "https://www.instagram.com/p/Bmy6NtKnH4K/", "https://www.instagram.com/p/Bmyeee7H3-ef2r2biv6zmbWKiKw_clIYpsO_jY0/", "https://www.instagram.com/p/BmxMp_8AKq6/", "https://www.instagram.com/p/Bjvg5MTgLUa/", "https://i.redd.it/shxo0cz8o4u11.jpg"]
/*---------------------------------------------------------------------------------------------- */
client.on('ready', () => 
{
    console.log(`Bot ${client.user.tag} online`);
});
/*------------------------------------------MUSIC------------------------------------------------*/
// join voice channel
client.on('message', message => { 
    if (message.content === '!join') 
    {
      const channel = message.member.voiceChannel;
  
      channel.join()
      .then(connection => console.log('Connected!'))
      .catch(console.error);
    }
  });
// play music
  client.on('message', msg => 
{
    if (msg.startsWith('!play')) 
    {
        d
    }
});
/*----------------------------------------------------------------------------------------------*/
/*client.on('message', msg => 
{
    if (msg.content === 'wm') 
    {
        channel.send("hello", { tts: true })
    }
});*/


/*----------------------------------REPLIES----------------------------------------------------*/
client.on('message', msg => 
{
    if (msg.content === 'hert') 
    {
        var rnd = Math.floor((Math.random() * (hert_replies.length - 1)) + 1);
        client.channels.get("CHANNELID").send(hert_replies[rnd]);
    }
});
// wm 
client.on('message', msg => 
{
    if (msg.content === 'wm') 
    {
        var rnd = Math.floor((Math.random() * (wm_replies.length -1)) + 1);
        client.channels.get("CHANNELID").send(wm_replies[rnd]);
    }
});
// kili chusch 
client.on('message', msg => 
{
    if (msg.content === 'kili chusch') 
    {
        var rnd = Math.floor((Math.random() * (kilichusch_replies.length -1)) + 1);
        msg.author.send(kilichusch_replies[rnd]);
    }
});
// !büchs
client.on('message', msg => 
{
    if (msg.content === '!büchs') 
    {
        var rnd = Math.floor((Math.random() * (büchs_replies.length -1)) + 1);
        client.channels.get("CHANNELID").send("Look at this dude", {files: [büchs_replies[rnd]]});
    }
});
// command list
client.on('message', msg =>
{
    if(msg.content === 'kcommands')
    {
        client.channels.get("CHANNELID").send("YOU CAN USE THESE:\nwm\nkili chusch\nhert\nbüchs\nfick dr (mention user)");
    }
});
// kick
client.on("message", message => {
    if (message.content.startsWith("fick dr")) 
    {       
        var member1 = message.mentions.members.first();
        /* message.member1.send("https://discord.gg/4pQrup6"); */
        member1.kick().then((member1) => 
        {            
            message.channel.send(":wave: " + member1.displayName + " isch ä huso ");
           
        }).catch(() => 
        {
            message.channel.send("Gib me admin");
        });
    }
});
// loop joke
    /*client.on('message', msg =>
    {
        if(msg.content === '!loop')
        {
            client.channels.get("CHANNELID").send("!play Hello Nadine Mungo Jerry");
            setTimeout(hert, 1500);       
        }
    });*/
// memepost
client.on('message', msg =>
{
    if(msg.content === '!meme')
    {
        var rnd = Math.floor((Math.random() * (savedmemesinsta.length -1)) + 1);
        client.channels.get("CHANNELID").send(savedmemesinsta[rnd]);
    }
});

/*-----------------------------------------------------------------------------------------------*/
function hert()
{
    client.channels.get("CHANNELID").send("!skip");
}

client.login('TOKEN');

