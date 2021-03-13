const Discord = require ("discord.js");
const client = new Discord.Client;
const config = require ("./config.json");



client.on("ready", () => {
    console.log(`${client.user.username} Estoy listo amor`);
    client.user.setActivity(" |m!help|")
});

client.login('ODE3MTIzMzk0MzUyNzA5Njcz.YEE7dg.s-SFXUVDo2RVhbId2Y1C1AlYFW0');

client.on("message", async message => {
   
    let prefix = "m!"

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const { Client, MessageEmbed  } = require("discord.js");
    const client = new Client();



    
// GIF ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    
let usuario = message.author
    let mencion = message.mentions.members.first()
    var Saludos = [`https://i.kym-cdn.com/photos/images/newsfeed/001/402/477/2ec.gif`, `https://pa1.narvii.com/6534/d0cfcedfb6db756d1e97b3bcfd2482e841f81368_hq.gif`, `https://pa1.narvii.com/6064/1ed38bfcb1230c9745d096b4b261148fa15a5df6_hq.gif`, `https://media1.tenor.com/images/e90d41b53b010dbecf1e25d795ba8987/tenor.gif?itemid=12390384`];
    var aleatorio = Math.floor(Math.random()*(Saludos.length)); 

    var Despedida = [`https://pa1.narvii.com/6153/d5579a164eb335081279838680fd4210253af728_hq.gif`, `https://pa1.narvii.com/6340/2b5b822d8f02634411c31dfb732e81c4687a2002_hq.gif`, `https://pa1.narvii.com/5845/83c77d7aa594a8c57c8a23589e10866ecf29909f_hq.gif`,`https://steamuserimages-a.akamaihd.net/ugc/925920665338183739/DF7DA5E978E5292146CCE211DAF1738286F2D620/`];
    var aleatorioA = Math.floor(Math.random()*(Despedida.length)); 

    var Boom = [`https://cdn.discordapp.com/attachments/817125975791894548/817145027725230121/1530593629_original.gif`, `https://cdn.discordapp.com/attachments/817125975791894548/817145029822906420/7704f544-758e-4bee-bd75-5d2a66c9e3c9.gif`, `https://cdn.discordapp.com/attachments/817125975791894548/817145026769059900/35102faf-8640-4a47-bdf6-d32f1de870bc.gif`,`https://cdn.discordapp.com/attachments/817125975791894548/817145027339223061/qdnlyIr.gif`];
    var aleatorioB = Math.floor(Math.random()*(Boom.length));

    var Abrazo = [`https://i.pinimg.com/originals/d8/5a/18/d85a18cd8178b86fea3e50bfceb5e873.gif`, `https://i1.wp.com/www.techjunkie.com/wp-content/uploads/2018/10/Super-Cute-Anime-Love-Gifs-1.gif?resize=494%2C278&ssl=1`, `https://64.media.tumblr.com/451d6a5bf874c25d1286c28565309a24/tumblr_oijqdxQ2Jv1qa7ud5o2_500.gif`,`https://i.pinimg.com/originals/3a/c9/6f/3ac96f477a690c84d81302c171d51fe1.gif`];
    var aleatorioC = Math.floor(Math.random()*(Abrazo.length));
    
    var Beso = [`https://cdn.discordapp.com/attachments/399448944889036801/664504519572324384/63198070-51aa-4435-8b42-c8078768c9f8.gif`,`https://i.gifer.com/8Sbz.gif`, `https://i.gifer.com/KG70.gif`, `https://i.imgur.com/poxPMvI.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/664505665288536064/9bbd25e3-119f-4870-b486-43802aac222d.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/664504816307011605/02519ee4-af6a-44e7-9840-b0480458de45.gif`];
    var aleatorioDD = Math.floor(Math.random()*(Beso.length));

    var Kill = [`https://cdn.discordapp.com/attachments/399448944889036801/608645883487322112/kill.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/655839363623813150/947bf5ae08f8d48d6eec17dd8324b59f.gif`, `https://cdn.discordapp.com/attachments/604911557276729366/632373542255853587/k2.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/620655855825715219/41b3fa86-0635-4a87-aafd-ff31463ac265.gif`];
    var aleatorioE = Math.floor(Math.random()*(Kill.length));

    var Comida = [`https://media.discordapp.net/attachments/685696108143706193/718482519363813456/2f735d820a8dc469abda7a63d8f539ec.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/743063175141916692/9e309c38-afff-4ed4-9e13-d0f22737f4b3.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/659838213371854854/Omake_Gif_Anime_-_New_Game_-_Episode_3_-_Umiko_Surprises_Shizuku_With_Bite.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/735830621452107816/a5f12dd1-296e-44fa-82d7-bcf139811554.gif`];
    var aleatorioF = Math.floor(Math.random()*(Comida.length));

    var Acaricia = [`https://cdn.discordapp.com/attachments/399448944889036801/722409482742792283/8ea8c63a-6c36-4c68-865c-2c1ab86eebcc.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/729976429684719648/f3564c48-2db6-4f88-89b0-74c112671f5f.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/609460243398918145/S1llNQBmDZ.png`, `https://cdn.discordapp.com/attachments/399448944889036801/628658559512739875/pat3.gif`,];
    var aleatorioG = Math.floor(Math.random()*(Acaricia.length));

    var Cry = [`https://cdn.discordapp.com/attachments/399448944889036801/708362979749396551/1b85c85e1d8f233d3278a0a0bd128c66.gif`, `https://i.imgur.com/jYqY0c3.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/650329447664320512/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/591807194010353664/9e1a4ed5d143da9b66dd5b3faf742a09.gif`];
    var aleatorioH = Math.floor(Math.random()*(Cry.length));

    var slap = [`https://cdn.discordapp.com/attachments/399448944889036801/568134475893178390/unnamed_2.gif`, `https://pa1.narvii.com/6087/647c240c6d824f4e7e9b0826f6c6abaf03659ee2_hq.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/705578432960135219/downloadfile-1.gif`, `https://media.discordyui.net/reactions/slap/6784568.gif`]
    var aleatorioII = Math.floor(Math.random()*(slap.length));

    var jpose = [`https://cdn.discordapp.com/attachments/399448944889036801/714503420039528518/t_pose.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/500050038257614848/unnamed_1.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/725907257879167077/DIO_POSE_PARA_COMANDO.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/500719994309705729/unnamed_5.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/568087609629474817/unnamed_4.gif`];
    var aleatorioJ = Math.floor(Math.random()*(jpose.length));

    var angry = [`https://cdn.discordapp.com/attachments/399448944889036801/752881334313287760/dd0acd63-6c65-4c2a-8501-6042d5dded87.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/747798066462982194/329d7a89-e9dc-4c88-b4c0-692665252ca8.gif`, `https://i.imgur.com/FDfnwlE.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/803306107174780928/2058b90130746e8a4823cad10a24ff6b.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/760863484807348244/2e60eb52d59284833b83a4b4d2717f8c53d9a304_00.gif`];
    var aleatorioK = Math.floor(Math.random()*(angry.length));

    var banghead = [`https://i.imgur.com/ArkAo7a.gif`, `https://i.imgur.com/NoXHZVm.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/674306275139649547/c63c9026-2674-4e58-981b-5ce2a40abf07.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/754302629672386580/51c0c9ac-5002-443f-a614-558225077aeb.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/753521459204194314/d10f1e77-cdfd-44bb-ad6c-ae358d7b137a.gif`];
    var aleatorioL = Math.floor(Math.random()*(banghead.length));

    var blush = [`https://cdn.discordapp.com/attachments/399448944889036801/757762337901117510/54f00ca9a79d3a643207cf1298300e39.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/747839179970576434/b022e321-88bb-4f9d-8b5a-672e337f442a.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/755761262666842112/giphy_1.gif`, `https://i.imgur.com/4Bhtipt.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/803565255560921098/8a3016af26fb1f4c26f32ec71590792d.gif`];
    var aleatorioN = Math.floor(Math.random()*(blush.length));

    var claps = [`https://cdn.discordapp.com/attachments/399448944889036801/596162021117001739/tenor_9.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/576925349938593792/unnamed_16.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/706905968134455416/0aaf63c31a78f06498c342d5e6ad4a30.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/596162020538318859/ClumsyExcellentLeveret-size_restricted.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/576925348655005717/unnamed_14.gif`];
    var aleatorioO = Math.floor(Math.random()*(claps.length));

    var bored = [`https://cdn.discordapp.com/attachments/399448944889036801/689132236272042135/72e83f145c2cf9a405134cd314c134828e17e90b_hq.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/659843482671775754/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/803560192188219422/tumblr_5325a85915695e734bb8e51a681027eb_f7e57429_400.gif`, `https://i.imgur.com/EQ7waOU.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/782331799233757204/Bored.gif`];
    var aleatorioP = Math.floor(Math.random()*(bored.length));

    var confused = [`https://i.imgur.com/zeQAtaF.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/784389055856246825/2bb4fd82311efe3e5c8f4b8790039c91.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/737787313446191184/e.e.gif`, `https://i.imgur.com/k5Sti6v.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/756917853709533235/f4cf2b60-8ef8-43d9-b492-c0714e19d194.gif`];
    var aleatorioQ = Math.floor(Math.random()*(blush.length));

    var dab = [`https://cdn.discordapp.com/attachments/399448944889036801/664507325452779524/tenor.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/664507838617354280/58cba541-babd-4953-bd47-ec466ca0a453.jpg`, `https://cdn.discordapp.com/attachments/399448944889036801/664507355022753792/1494582419_megumin_dabbing.jpg`, `https://cdn.discordapp.com/attachments/399448944889036801/555409463000170516/Rikka_Dab.jpeg`, `https://i.imgur.com/3IF6IBX.gif`];
    var aleatorioR = Math.floor(Math.random()*(dab.length));

    var discouraged = [`https://cdn.discordapp.com/attachments/399448944889036801/803707156499136582/tumblr_nq8knulV1y1s5wiico1_500.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/633334433692385289/95f412c7-8099-43b2-91c8-ad9cd6056da8.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/753367701895774268/ed24a941-cde6-4112-9591-969fbd0eeb70.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/796059036113436722/tumblr_oe8ccinN6J1ub9qlao1_400.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/753564337171595344/7cb4bed3-ef06-46c9-8c2f-9e160355ae89.gif`];
    var aleatorioS = Math.floor(Math.random()*(discouraged.length));

    var disgust = [`https://i.imgur.com/POtfkCu.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/754303904975421443/18cd23e8-19e1-4e11-bd5f-281907abefd9.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/662974336692649984/c9a1e74aef58cbd5eb2b2bc53c6ed3a8.gif`, `https://media.discordapp.net/attachments/399448944889036801/518918126998519808/tenor_2.gif`, `https://i.imgur.com/taWNBF0.gif`];
    var aleatorioT = Math.floor(Math.random()*(disgust.length));

    var facepalm = [`https://cdn.discordapp.com/attachments/399448944889036801/722452395539431454/desconocido.gif`, `https://66.media.tumblr.com/adbe0134565db0b342db98db3aa0f662/tumblr_o0jiegjcTD1uqrfrco1_500.gif`, `https://cdn.discordapp.com/attachments/393558002726338561/464506064088465418/unnamed_5.gif`, `https://cdn.discordapp.com/attachments/393558002726338561/464506062284914699/unnamed_6.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/741937665644953680/tenor_2.gif`];
    var aleatorioY = Math.floor(Math.random()*(facepalm.length));

    var fbi = [`https://cdn.discordapp.com/attachments/399448944889036801/633404185613959199/93b37b5aee9085d904593fc579e80765.gif`, `https://cdn.discordapp.com/attachments/381330993233002496/541869979667005443/unnamed_3.gif`, `https://cdn.discordapp.com/attachments/381330993233002496/541870158445281280/unnamed_8.gif`, `https://cdn.discordapp.com/attachments/451514391951704074/541863738626801676/tenor.gif`, `https://cdn.discordapp.com/attachments/451514391951704074/541863510867443712/1433372630_3pbudSZ.gif`];
    var aleatorioX = Math.floor(Math.random()*(fbi.length));

    var game = [`https://cdn.discordapp.com/attachments/694005107083313252/701490804559970345/15.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/748506277574869062/6039692c-d255-4f2f-b1ec-5b0005f3d70d.gif`, `https://i.imgur.com/0DVtRU9.gif`, `https://cdn.discordapp.com/attachments/694005107083313252/701490699530535376/1.gif`, `https://cdn.discordapp.com/attachments/399448944889036801/746414741114716260/ff1d6128-fa7d-4b56-8694-6b8a62614980.gif`];
    var aleatorioZ = Math.floor(Math.random()*(game.length));

//___comandos personalizados___________________________________
if(command === "blaz"){
    message.delete();
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Blaz joputa`)
    .setImage(`https://cdn.discordapp.com/attachments/399448944889036801/749952024275058728/ezgif.com-video-to-gif_1.gif`)
    .setFooter(`Comando secreto 1/3`);
    message.channel.send(Embed);

} if(command === "darling"){
    message.delete();
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Darling la pervertida`)
    .setImage(`https://cdn.discordapp.com/attachments/763154378634690602/817241749448556545/image0.gif`)
    .setFooter(`Comando secreto 2/3`);
    message.channel.send(Embed);

} if (command== "nobios"){
    message.delete();
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Que vivan los nobiosss :D`)
    .setImage(`https://media.tenor.com/images/64343801a6885bdb952ad339606fa014/tenor.gif`)
    .setFooter(`Comando secreto 3/3`);
    message.channel.send(Embed);
}
//COMANDOS DE INTERRACCION_______________________________________________________________________________________________________________________________________________________________

if(command === "hola"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(` ${message.author.username}  saluda a todos :D`)
    .setImage(Saludos[aleatorio]);
    message.channel.send(Embed); 

} else if(command === "adios"){  //la cosa es poner message.author.username en el titulo, para eso pone dentro del ms ${message.author.username a las comillas tienen que ser etas `}
    const Embed = new Discord.MessageEmbed()

    .setTitle(` ${message.author.username}  se ha ido  :c `)
    .setImage(Despedida[aleatorioA]);
    message.channel.send(Embed);

} else if(command === "hug"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(` ${message.author.username}  le ha dado una abrazo a ${mencion.displayName} <3`) 
    .setImage(Abrazo[aleatorioC])
    message.channel.send(Embed);

} else if(command === "kiss"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(` ${message.author.username}  ha besado a ${mencion.displayName} :///0 `) 
    .setImage(Beso[aleatorioDD])
    message.channel.send(Embed);
    
} else if(command === "kill"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(` ${message.author.username} ha matado a ${mencion.displayName} D:`) 
    .setImage(Kill[aleatorioE])
    message.channel.send(Embed);


}  else if(command === "boom"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`BOOOOOOOOOOOOOOOOM!`) 
    .setImage(Boom[aleatorioB]);
    message.channel.send(Embed);

}  else if(command === "feed"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} le ha dado de comer a ${mencion.displayName} con comida rica :P`) 
    .setImage(Comida[aleatorioF]);
    message.channel.send(Embed);

} else if(command === "pat"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} le ha dado acaricias a ${mencion.displayName} uwu`)
    .setImage(Acaricia[aleatorioG]);
    message.channel.send(Embed);

} else if(command === "cry"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}  llora :c`)
    .setImage(Cry[aleatorioH]);
    message.channel.send(Embed);

} else if (command === "slap"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}  le ha dado una bofetada a ${mencion.displayName} :c`)
    .setImage(slap[aleatorioII]);
    message.channel.send(Embed);

} else if (command === "jpose"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} se puso a posar como los JoJo´s`)
    .setImage(jpose[aleatorioJ]);
    message.channel.send(Embed);

} else if (command === "angry"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Es mejor huir de aqui porque ${message.author.username} se ha enfadado`)
    .setImage(angry[aleatorioK]);
    message.channel.send(Embed);

}else if (command === "banghead"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} se estampa la cabeza contra lo que pueda D':`)
    .setImage(banghead[aleatorioL]);
    message.channel.send(Embed);

} else if (command === "blush"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Parece que ${message.author.username} esta casi del color como un tomate 🍅`)
    .setImage(blush[aleatorioN]);
    message.channel.send(Embed);

} else if (command === "claps"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} aplaude!`)
    .setImage(claps[aleatorioO]);
    message.channel.send(Embed);

} else if (command === "bored"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} se aburre demasiado... Casi para dormirse pero también le aburre...`)
    .setImage(bored[aleatorioP]);
    message.channel.send(Embed);

} else if (command === "confused"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} no entiende absolutamente nada.`)
    .setImage(confused[aleatorioQ]);
    message.channel.send(Embed);

} else if (command === "dab"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} hace un dab en pleno 2021`)
    .setImage(dab[aleatorioR]);
    message.channel.send(Embed);

}  else if (command === "discouraged"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} se siente realmente deprimido`)
    .setImage(discouraged[aleatorioS]);
    message.channel.send(Embed);
    
}  else if (command === "disgust"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} no le parece agradable`)
    .setImage(disgust[aleatorioT]);
    message.channel.send(Embed);
    
}  else if (command === "facepalm"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} se ha decepcionado`)
    .setImage(facepalm [aleatorioY]);
    message.channel.send(Embed);
    
}  else if (command === "fbi"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`La ONU está aquí, ¡escapen!`)
    .setImage(fbi [aleatorioX]);
    message.channel.send(Embed);
    
}  else if (command === "game"){
    const Embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} está jugando algo divertido`)
    .setImage(game [aleatorioZ]);
    message.channel.send(Embed);
    
}




 //Comandos utiles------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 if(command === "help"){
    const Embed = new Discord.MessageEmbed()
    .setColor('#785d7e')
    .setTitle( `▬▬▬▬▬▬▬▬▬▬▬Comandos de Magni▬▬▬▬▬▬▬▬▬▬▬`)
    .setDescription(` Holaa, me llamo Magni OwO, esta es mi lista de comandos, si necesitas ayuda detallada habla con mi creador! @Daank o meciona a un admi con el rol @admi para que te ayuden nwn

    **Comandos ADMIN/MOD**
    m!enviar

    **Comandos de interaccion**
    m!hug  m!kiss  m!kill  m!feed m!pat m!slap 

    **Comandos de Configuración**

    **Comandos Informativos**
    m!serverinfo m!rolelist

    **Comandos NSFW**

    **Comandos Útiles**
     m!avatar m!say

     **Comandos de reaccion**
     m!hola m!adios m!cry m!bored m!boom m!jpose m!angry m!banghead m!blush m!claps m!boom m!dab m!discouraged m!disgust m!facepalm m!fbi   `)
    message.channel.send(Embed);
}

if(command === "avatar"){
    let user = message.mentions.users.first() || message.author; // lo hacemos por mencion y por el mensjae del author xd
    const embed = new Discord.MessageEmbed()// creamos el embed 
    .setTitle(user.id === message.author.id? "Tu avatar " : "Avatar del weon mencionado")//el tirtulo 
    .setImage(user.displayAvatarURL({dynamic: true, size: 4096}))//la imagen xdxd
    message.channel.send(embed)//mandamos el mensjae no hagas c&p
}

if(command === 'say'){
    message.delete();
   if (args.join(" ").length < 1) return message.channel.send(" No has escrito un mensaje");
   let permisos = message.channel.permissionsFor(message.member);
   message.channel.send(args.join(" "), {
       disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"
   });
 }

 if(command === "serverinfo"){
    var server = message.guild;
    const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL({dynamic:true}))
    .setAuthor(server.name, server.iconURL({dynamic:true}))
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.cache.size, true)
    .setColor('#785d7e')
    .setFooter('Pedido por:' +message.member.displayName, message.author.avatarURL());   
    message.channel.send(embed);
    }

    if(command=="enviar"){
        let permisos = message.member.hasPermission("ADMINISTRATOR")
        if(!permisos) return message.reply("No tienes permisos, tienes que ser administrador") 
            const mencionado = message.mentions.users.first();
            if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
            let id = mencionado.id;
            let texto = args.join(" ").slice(22)
                    
         if(!texto) return message.channel.send(`Escriba el contenido a enviar.`);
         mencionado.send(texto)
                
    }

    if(command === 'rolelist'){
        let id = message.guild.id; 
           var server = message.guild;
         const embed = new Discord.MessageEmbed()
         .setTitle('Lista de roles de '+ message.guild.name)
         .addField('Roles:', server.roles.cache.size, true)
         .setColor('RANDOM') //Definir el color del embed
         .setThumbnail(server.iconURL()) //Icono del Servidor
         .setAuthor(server.name, server.iconURL()) 
          .setDescription(server.roles.cache.map(roles => roles.toString()).join("-"))
          .setFooter('Pedido por:' +message.member.displayName, message.author.avatarURL());  
          message.channel.send({embed});
    }





});

