const Discord = require('discord.js');
const client = new Discord.Client();
console.log(client);

require('events').EventEmitter.defaultMaxListeners = Infinity;

/*------------------------------------ARRAYS----------------------------------------------------*/
var hert_replies = ["asdf", "ja scho", "für das das nüd hert isch isch nu gadäche hert", "hiä isch zimli langwilig", "wen ich hiä bi isch gad nümmä", "we wenns ä McGas gäb", "ja wänns nüd äso fleugä hät scho"];
var wm_replies = ["asdf", "heb äisch mini gasmaskärä isch kaputt", "ich frissä ä McLachgas", "bi am brüälä", ":cucumber: :milk: gönnen"];
var kilichusch_replies = ["asdf", "näi ich bi am brüälä", "ja muäs nu churz tränäli abbutzä", "Näi ich ha zu viele games und muäs hungergames gwinnä", "Ja machmr grad ä Mcgurkäglas", ];
var büchs_replies = ["asdf", "https://www.handball-ktvm.ch/images/personen/1440842730_mu15_mike_gwerder_5.jpg","https://www.handball-ktvm.ch/images/personen/1440842717_mu15_kilian_schelbe.jpg", "https://www.handball-ktvm.ch/images/personen/thumb/1408554064_master_dsc8213.jpg", "https://www.handball-ktvm.ch/images/personen/1440842641_mu15_ralf_brgler_.jpg", "https://www.handball-ktvm.ch/images/personen/1440842688_mu15_janik_heinzer_.jpg", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/Kili.png", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/arno.png", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/beeler.PNG", "https://raw.githubusercontent.com/iKilipeesy/Bilder/master/mike.png"  ];
var savedmemesinsta = ["asdf", "https://www.instagram.com/p/BqqNPXXFe_W/", "https://www.instagram.com/p/BqVSgsxAdK8/", "https://www.instagram.com/p/BqcPbOehTKI/", "https://www.instagram.com/p/BqJSoREF3k4/", "https://www.instagram.com/p/Bp-Av1yBeou/", "https://www.instagram.com/p/BpcjeDuB8wI/","https://www.instagram.com/p/BpW65UDnVMA/", "https://www.instagram.com/p/BpE6eOGhWrY/", "https://www.instagram.com/p/BnhGmIyhDGD/", "https://www.instagram.com/p/BnGYuj8AAhM/", "https://www.instagram.com/p/Bmxw4NLgata/", "https://www.instagram.com/p/Bmy6NtKnH4K/", "https://www.instagram.com/p/Bmyeee7H3-ef2r2biv6zmbWKiKw_clIYpsO_jY0/", "https://www.instagram.com/p/BmxMp_8AKq6/", "https://www.instagram.com/p/Bjvg5MTgLUa/", "https://i.redd.it/shxo0cz8o4u11.jpg"]
var userids = ["asdf", "303973013076836355", "355022589439246336", "305759765546532866", "305041127919190018",]

/*---------------------------------------------------------------------------------------------- */
client.on('ready', () => 
{
    console.log(`Bot ${client.user.tag} online`);
});
/*------------------------------------------MUSIC------------------------------------------------*/
// join voice channel
client.on('message', message => { 
    if (message.content == '!join') 
    {
      const channel = message.member.voiceChannel;
  
      channel.join()
      .then(connection => console.log('Connected!'))
      .catch(console.error);
    }
  });
// play music
/*
  client.on('message', msg => 
{
    if (msg.startsWith('!play')) 
    {
        
    }
});*/

/*----------------------------------------------------------------------------------------------*/
/*client.on('message', msg => 
{
    if (msg.content == 'wm') 
    {
        channel.send("hello", { tts: true })
    }
});*/


/*----------------------------------REPLIES----------------------------------------------------*/
client.on('message', msg => 
{
    if (msg.content == 'hert') 
    {
        var rnd = Math.floor((Math.random() * (hert_replies.length - 1)) + 1);
        client.channels.get("ID").send(hert_replies[rnd]);
    }
});
// wm 
client.on('message', msg => 
{
    if (msg.content == 'kili wm' || msg.content == 'wm kili') 
    {
        var rnd = Math.floor((Math.random() * (wm_replies.length -1)) + 1);
        client.channels.get("iD").send(wm_replies[rnd]);
    }
});
// kili chusch 
client.on('message', msg => 
{
    if (msg.content == 'kili chusch') 
    {
        var rnd = Math.floor((Math.random() * (kilichusch_replies.length -1)) + 1);
        msg.author.send(kilichusch_replies[rnd]);
    }
});
// !büchs
client.on('message', msg => 
{
    if (msg.content == '!büchs') 
    {
        var rnd = Math.floor((Math.random() * (büchs_replies.length -1)) + 1);
        client.channels.get("ID").send("Look at this dude", {files: [büchs_replies[rnd]]});
    }
});
// command list
client.on('message', msg =>
{
    if(msg.content == 'kcommands')
    {
        client.channels.get("ID").send("YOU CAN USE THESE:\nwm\nkili chusch\nhert\nbüchs\nfick dr (mention user)");
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
        if(msg.content == '!loop')
        {
            client.channels.get("ID").send("!play Hello Nadine Mungo Jerry");
            setTimeout(hert, 1500);       
        }
    });*/
// memepost
client.on('message', msg =>
{
    if(msg.content == '!meme')
    {
        var rnd = Math.floor((Math.random() * (savedmemesinsta.length -1)) + 1);
        client.channels.get("ID").send(savedmemesinsta[rnd]);
    }
});
// i just fucking shot myself
client.on('message', msg => 
{
    if (msg.content == 'wer hesch abgschossä') 
    {
        client.channels.get("ID").send("https://www.youtube.com/watch?v=paxk_LPmdMI");
    }
});
// message random
client.on('message', msg =>
{
    if(msg.content == 'random dude')
    {
        var rnd = Math.floor((Math.random() * (userids.length -1)) + 1);
        client.users.get(userids[rnd]).send("OOOOKKKEEEE");
    }
});
client.on('message', msg => 
{
    if (msg.content == 'theinixbot') 
    {
        client.on('message', msg2 => 
        {
            var message =msg2.content;
            client.users.get("ID").client.user.setGame(message)
        });
        
    }
});

client.on('message', msg => 
{
    if(msg.content == 'kilijoin')
    {
        client.channels.get("ID").send("!joinmeier");
    }
});

/*--------------MEIER-------------------MEIER---------------------MEIER----------------------*/
var meierstarted = false;
var messagesent = false;
var playerIDtmp = 0;
var playerIds = [];
var playerNametmp = "";
var playerNames = [];
var playersjoined = 0;
var playeramount = 0;
var ableToRoll = false;
var oldRollNumber = 0;
var rollNumber = 0;
var liedNumber = 0;
var scndChanceNumber = 0;
var secndChanceUsed =false;
var turnNumber =  2;

// start Meier
client.on('message', msg=>
{
    if(msg.content == '!startmeier')
    {
        if(meierstarted == false)
        {
            client.channels.get("ID").send("Meier starting...")
            meierstarted = true;  
            playerIdtmp = msg.member.user.id;
            playerIds.push(playerIdtmp);  
            playerNametmp = msg.member.user.username;
            playerNames.push(playerNametmp);
            playersjoined += 1;       
        }
    }
});
// Save User id in array
client.on('message', msg=>
{
    if(meierstarted == true)
    {
        if(msg.content == '!joinmeier')
        {
            playerNametmp = msg.member.user.username;
            playerNames.push(playerNametmp);
            playerIdtmp = msg.member.user.id;
            playerIds.push(playerIdtmp);
            playersjoined += 1;
        }

        if(playersjoined == 2)
        {
            client.users.get(playerIds[0]).send("It's your turn to roll\nuse: !roll");
            playeramount = playersjoined;
            playersjoined += 1;
            ableToRoll = true;
        }
    }
});

client.on('message', msg=>
{
    if(ableToRoll == true)
    {
        if(msg.content == '!roll')
        {
            var firstNumber = Math.floor((Math.random() * 6) + 1);
            var secondNumber = Math.floor((Math.random() * 6) + 1);

            if(firstNumber>secondNumber)
            {
                rollNumber =  firstNumber * 10 + secondNumber;
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("You rolled a: "+ rollNumber + "\nDo you want to: !lie (number), !send or !2chance (number)");
                    ableToRoll = false;             
                }
                else 
                {
                    client.users.get(playerIds[1]).send("You rolled a: "+ rollNumber + "\nDo you want to: !lie (number), !send or !2chance (number)");
                    ableToRoll = false;
                }
            }

            else
            {
                rollNumber = secondNumber * 10 + firstNumber;
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("You rolled a: "+ rollNumber + "\nDo you want to: !lie (number), !send or !2chance (number)");
                    ableToRoll = false;
                }
                else 
                {
                    client.users.get(playerIds[1]).send("You rolled a: "+ rollNumber + "\nDo you want to: !lie (number), !send or !2chance (number)");
                    ableToRoll = false;
                }
            }
            
            
        }
    }

    if(ableToRoll == false) 
    {
        // lying
        if(msg.content.startsWith('!lie'))
        {
            liedNumber = msg.content.split(' ')[1];
            if(liedNumber>oldRollNumber)
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[1]).send(playerNames[0] + " rolled " + liedNumber);
                    client.users.get(playerIds[1]).send("Do you believe him?\n!yes, !no");
                }
                else
                {
                    client.users.get(playerIds[0]).send(playerNames[1] + " rolled " + liedNumber);
                    client.users.get(playerIds[0]).send("Do you believe him?\n!yes, !no");
                }
                oldRollNumber = liedNumber;
                messagesent = true;
                turnNumber++;
            }

            if(liedNumber<=oldRollNumber)
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("You have to choose a number higher than "+oldRollNumber );
                }
                else
                {
                    client.users.get(playerIds[1]).send("You have to choose a number higher than "+oldRollNumber );
                }
            }
        }

        // send
        if(msg.content.startsWith('!send'))
        {
            if(rollNumber>oldRollNumber)
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[1]).send(playerNames[0] + " rolled " + rollNumber);
                    client.users.get(playerIds[1]).send("Do you believe him?\n!yes, !no");
                    messagesent = true;
                    turnNumber++;
                }
                else
                {
                    client.users.get(playerIds[0]).send(playerNames[1] + " rolled " + rollNumber);
                    client.users.get(playerIds[0]).send("Do you believe him?\n!yes, !no");
                    messagesent = true;
                    turnNumber++;
                }
                oldRollNumber = rollNumber;
            }   
            if(rollNumber<=oldRollNumber)
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("You can't send a lower number than "+oldRollNumber );
                }
                else
                {
                    client.users.get(playerIds[1]).send("You can't send a lower number than "+oldRollNumber );
                }
            }
        }

        // 2chance
        if(msg.content.startsWith('!2chance'))
        {
            scndChanceNumber=msg.content.split(' ')[1];
            var firstNumber = Math.floor((Math.random() * 6) + 1);
            var secondNumber = Math.floor((Math.random() * 6) + 1);

            if(scndChanceNumber>oldRollNumber)
            {
                if(firstNumber>secondNumber)
                {
                    rollNumber =  firstNumber * 10 + secondNumber;
                    if(turnNumber % 2 == 0)
                    {
                        client.users.get(playerIds[1]).send(playerNames[0] + " rolled " + scndChanceNumber);
                        client.users.get(playerIds[1]).send("Do you believe him?\n!yes, !no");
                    }
                    else
                    {
                        client.users.get(playerIds[0]).send(playerNames[1] + " rolled " + scndChanceNumber);
                        client.users.get(playerIds[0]).send("Do you believe him?\n!yes, !no");
                    }
                }
                

                else
                {
                    rollNumber = secondNumber * 10 + firstNumber;
                    if(turnNumber % 2 == 0)
                    {
                        client.users.get(playerIds[1]).send(playerNames[0] + " rolled " + scndChanceNumber);
                        client.users.get(playerIds[1]).send("Do you believe him?\n!yes, !no");
                    }
                    else
                    {
                        client.users.get(playerIds[0]).send(playerNames[1] + " rolled " + scndChanceNumber);
                        client.users.get(playerIds[0]).send("Do you believe him?\n!yes, !no");
                    }
                }
                secndChanceUsed = true;
                messagesent = true;
                turnNumber++;
                oldRollNumber = scndChanceNumber;
            }
            if(scndChanceNumber<=oldRollNumber)
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("You have to choose a number higher than "+oldRollNumber );
                }
                else
                {
                    client.users.get(playerIds[1]).send("You have to choose a number higher than "+oldRollNumber );
                }
            }
        }
    }
});

client.on('message', msg=>
{
    if(messagesent == true)
    {
        if(rollNumber == 11 || rollNumber == 22 || rollNumber == 33 || rollNumber == 44 || rollNumber == 55 || rollNumber == 66 )
        {
            rollNumber *= 10;
        }
        if(rollNumber == 21)
        {
            rollNumber = 2000;
        }
       

        if(msg.content == '!no')
        {
            if(liedNumber == 0 || (rollNumber >= scndChanceNumber&&secndChanceUsed))
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("He didn't lie");
                    messagesent = false;
                }
                else
                {
                    client.users.get(playerIds[1]).send("He didn't lie");
                    messagesent = false;
                }
            }
            else
            {
                if(turnNumber % 2 == 0)
                {
                    client.users.get(playerIds[0]).send("He lied\nYOU WON");
                    client.users.get(playerIds[1]).send("YOU LOST");
                    messagesent = false;
                }
                else
                {
                client.users.get(playerIds[1]).send("He lied\nYOU WON");
                client.users.get(playerIds[0]).send("YOU LOST");
                messagesent = false;
                }
            }
            secndChanceUsed = false;
        }

        if(msg.content == '!yes')
        {
            if(turnNumber % 2 == 0)
            {
                ableToRoll = true;
                messagesent = false;
                client.users.get(playerIds[0]).send("It's your turn to !roll");
            }
            else
            {
                ableToRoll = true;
                messagesent = false;
                client.users.get(playerIds[1]).send("It's your turn to !roll");
            }
        }
        secndChanceUsed = false;
    }
});

/*-----------------------------------------------------------------------------------------------*/

client.login('TOKEN');

