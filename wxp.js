/*
     TOTAL FITUR REST API LOLHUMAN YANG ADA DI SC INI :
     100+ FITUR
     TOTAL FITUR REST API ZENZ YANG ADA DI SC INI : 
     34 FITUR
     TOTAL FITUR REST API XCODERS :
     4 FITUR
     TOTAL FITUR YANG TIDAK PAKAI APIKEY :
     GA KE ITUNG, BANYAK BANGET

          
      untuk ganti owner dan lain lain, ada di config.js
      untuk ganti menu ada di language -> menunya.js
   * Beberapa fitur yang saya tidak munculkan di All menu :
     -Hackfb ( cuman fake hack )
     -spamwa ( spam otp wa )
     -spamsms ( spam otp sms biasa )
     -call ( spam telepon )
     -hdin ( buat hd in gambar (tapi ga tau berubah apa ga) )
     -culik ( buat nyulik member lain ke grup kamu (tapi ga tau berhasil apa ga) )
   * Beberapa Fitur yang sering error :
     - Ig Downloader
     - Fb Downloader

     - Twitter Downloader     
   * Create By Dika Ardnt.
      Contact Me on wa.me/6288292024190


      Follow https://github.com/DikaArdnt
   * Update By : Ridwan Salman  
      Contact Me on wa : wa.me/6285692672176
      Follow My github : https://github.com/RidwanGans    



*/



//━━━━━━━━━━━━━━━[ MODULE ]━━━━━━━━━━━━━━━\\


require('./config')


const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, MessageType, prepareWAMessageMedia, prepareWAMessage, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')


const fs = require('fs')


const util = require('util')


const chalk = require('chalk')


const { exec, spawn, execSync } = require("child_process")


const axios = require('axios')


const path = require('path')


let fetch = require('node-fetch')
const hx = require('hxz-api')


const brainly = require('brainly-scraper')


const xa = require('xfarr-api')


const os = require('os')
const toHur = require('@develoka/angka-terbilang-js')

let { EmojiAPI } = require("emoji-api");
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const moment = require('moment-timezone')


let emoji = new EmojiAPI();
const { JSDOM } = require('jsdom')
		
const speed = require('performance-now')


const { nuklirkode } = require('./lib/nuklir.js')
const { performance } = require('perf_hooks')


const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()


const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')


let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")


const speedofbot = require("performance-now")


const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
//Gambar


wxp = fs.readFileSync('./media/wxp.jpg')
wxp2 = fs.readFileSync('./media/wxp2.jpg')
fun = fs.readFileSync('./media/fun.jpg')
// Language
const  { ind } = require(`./language`)
lang = ind // Language
scnya = `Script ori : https://github.com/DikaArdnt/Hisoka-Morou\n\nDont Forget Give Star\n\nDonate : \nSaweria : ${saweria}\n\n Dont Forget Donate`

//Database


const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antipager = JSON.parse(fs.readFileSync('./database/antipager.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const autokick = JSON.parse(fs.readFileSync('./database/autokick.json'))
//const sto = JSON.parse(fs.readFileSync('./database/bot/store.json'))
//const antibadword = JSON.parse(fs.readFileSync('./database/badword.json'))

global.db = JSON.parse(fs.readFileSync('./src/database.json'))


if (global.db) global.db = {


    sticker: {},


    database: {},


    game: {},


    others: {},


    users: {},
    toko: {},
    chats: {},


    ...(global.db || {})


}
let tebaklagu = db.game.tebaklagu = []


let _family100 = db.game.family100 = []


let kuismath = db.game.math = []


let tebakgambar = db.game.tebakgambar = []


let tebakkata = db.game.tebakkata = []


let caklontong = db.game.lontong = []


let caklontong_desk = db.game.lontong_desk = []


let tebakkalimat = db.game.kalimat = []


let tebaklirik = db.game.lirik = []


let tebaktebakan = db.game.tebakan = []


let vote = db.others.vote = []


	


module.exports = wxp = async (wxp, m, chatUpdate, store) => {


    try {


        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''


        var budy = (typeof m.text == 'string' ? m.text : '')


        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)


        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()


        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"


        const botNumber = await wxp.decodeJid(wxp.user.id)


        const isCreator = [botNumber, ...global.pemilik].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)


        const itsMe = m.sender == botNumber ? true : false


        const text = q = args.join(" ")


        const quoted = m.quoted ? m.quoted : m


        const mime = (quoted.msg || quoted).mimetype || ''


	    const isMedia = /image|video|sticker|document|audio/.test(mime)




const sendFile = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return wxp.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return wxp.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "video"){
return wxp.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "audio"){
return wxp.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
} else {
return wxp.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
}
}
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━\\


        const groupMetadata = m.isGroup ? await wxp.groupMetadata(m.chat).catch(e => {}) : ''


        const groupName = m.isGroup ? groupMetadata.subject : ''


//        const isAntibadword = m.isGroup ? badword.includes(m.chat) : false
        const isAutokick = m.isGroup ? autokick.includes(m.chat) : false                
        const isAntivirtex = m.isGroup ? antivirtex.includes(m.chat) : false        
        const isAntipager = m.isGroup ? antipager.includes(m.chat) : false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false        
        const participants = m.isGroup ? await groupMetadata.participants : ''


        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''


        const groupOwner = m.isGroup ? groupMetadata.owner : ''


    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false


    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false


    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


	


//━━━━━━━━━━━━━━━[ TIME ]━━━━━━━━━━━━━━━\\


        moment.tz.setDefault("Asia/Jakarta").locale("id");





let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')


const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	


//Func Runtime


const runtime = function (seconds) {


seconds = Number(seconds);


var d = Math.floor(seconds / (3600 * 24));


var h = Math.floor((seconds % (3600 * 24)) / 3600);


var m = Math.floor((seconds % 3600) / 60);


var s = Math.floor(seconds % 60);


var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";


var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";


var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";


var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";


return dDisplay + hDisplay + mDisplay + sDisplay;


}


//━━━━━━━━━━━━━━━[ FAKE LOC ]━━━━━━━━━━━━━━━\\


	async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {


        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }


        return wxp.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)


        } 


        var sendButloc = (from, title, text, desc, button, sen, men, file) => {


        return wxp.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})


        }       


//━━━━━━━━━━━━━━━[ FAKE REPLY ]━━━━━━━━━━━━━━━\\


	const reply = (teks) => {


wxp.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `GROUP BOT`,"body": `Join GC BOT`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./media/wxp.jpg'),"sourceUrl": "https://chat.whatsapp.com/GPirbzqLVG1FrA25zcFAIG"}}}, { quoted: m})


        }
        


        const reply1 = (teks) => {


wxp.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Website`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./media/wxp.jpg'),"sourceUrl": `${website}`}}}, { quoted: m})


        }


        const reply2 = (teks) => {
wxp.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SIMI - SIMI`,"body": `Asisten Chattan`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./media/wxp.jpg'),"sourceUrl": "https://Jangan baper.co.id"}}}, { quoted: m})
        }
        const reply3 = (teks) => {
wxp.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SEWA BOT`,"body": ``, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./media/sewa.jpg'),"sourceUrl": `${website}`}}}, { quoted: m})


        }
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '6281319868981@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fun, surface: 200, message: `• Command : ${command}\n• Text : ${text}`, orderTitle: `${ownername}`, sellerJid: '0@s.whatsapp.net'} } }    
        const troli1 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 15000, status: 200, thumbnail: wxp, surface: 200, message: `• Command : ${command}`, orderTitle: `${ownername}`, sellerJid: '62813198689818@s.whatsapp.net'} } }    
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${ownername}`,jpegThumbnail: wxp }}}
        const fdoc2 = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `List Premium`,jpegThumbnail: wxp2 }}}       
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6281319868981-120363023401893123@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999999999999999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6281319868981-120363023401893123@g.us" } : {})},message: {"videoMessage": { "title":`${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Command : ${command}\nBy ${ownername}`, 'jpegThumbnail': wxp}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6281319868981-120363023401893123@g.us" } : {}) },message: { "videoMessage": { "title":`${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `${ownername}`, 'jpegThumbnail': wxp}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6281319868981-120363023401893123@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': wxp, thumbnail: wxp,sendEphemeral: true}}}
		
		// BUG BY : Ridwan
		const troli2 =  {key: { fromMe: false,remoteJid: "BUG BY : RidwanGans", participant: 'BUG BY : RidwanGans'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fun, surface: 200, message: `BUG BY : RidwanGans`, orderTitle: `${ownername}`, sellerJid: '0@s.whatsapp.net'} } }    
        const fdoc3 = {key : {participant : 'BUG BY : RidwanGans'},message: {documentMessage: {title: `${ownername}`,jpegThumbnail: wxp }}}
        const fvn1 = {key: {participant: `BUG BY : RidwanGans`, ...(m.chat ? { remoteJid: "BUG BY : RidwanGans" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999999999999999,"ptt": "true"}} } 
        const fgif1 = {key: {participant: `BUG BY : RidwanGans`, ...(m.chat ? { remoteJid: "BUG BY : RidwanGans" } : {})},message: {"videoMessage": { "title":`${ownername}`, "h": `Hmm`,'seconds': '999999999999', 'gifPlayback': 'true', 'caption': `BUG BY : RidwanGans`, 'jpegThumbnail': wxp}}}
		const fvideo1 = {key: { fromMe: false,participant: `BUG BY : RidwanGans`, ...(m.chat ? { remoteJid: "BUG BY : RidwanGans" } : {}) },message: { "videoMessage": { "title":`BUG BY : RidwanGans`, "h": `Hmm`,'seconds': '9999999999', 'caption': `BUG BY : RidwanGans`, 'jpegThumbnail': wxp}}}
		const fkontak1 = { key: {participant: `BUG BY : RidwanGans`, ...(m.chat ? { remoteJid: `BUG BY : RidwanGans` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': wxp, thumbnail: wxp,sendEphemeral: true}}}

//━━━━━━━━━━━━━━━[ AKHIR DARI FAKE REPLY ]━━━━━━━━━━━━━━━\\


		
try {


let isNumber = x => typeof x === 'number' && !isNaN(x)


let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free


let dailyUser = isPremium ? global.dailyawal.premium : global.dailyawal.free


let user = global.db.users[m.sender]


if (typeof user !== 'object') global.db.users[m.sender] = {}


if (user) {


    if (!isNumber(user.afkTime)) user.afkTime = -1


    if (!('afkReason' in user)) user.afkReason = ''


    if (!isNumber(user.limit)) user.limit = limitUser
    if (!isNumber(user.daily)) user.daily = dailyUser 
} else global.db.users[m.sender] = {


    afkTime: -1,


    afkReason: '',


    limit: limitUser,
    daily: dailyUser,
}


let chats = global.db.chats[m.chat]


    if (typeof chats !== 'object') global.db.chats[m.chat] = {}


    if (chats) {


    if (!('mute' in chats)) chats.mute = false


    if (!('wame' in chats)) chats.wame = false


 } else global.db.chats[m.chat] = {


    mute: false,


    wame: false,


        }


        } catch (err) {


console.error(err)


        }


	    


//━━━━━━━━━━━━━━━[ MODE BOT ]━━━━━━━━━━━━━━━\\


        if (!wxp.public) {


if (!m.key.fromMe) return


        }


        


//━━━━━━━━━━━━━━━[ BAGIAN CONSOLE ]━━━━━━━━━━━━━━━\\


        if (m.message) {


wxp.readMessages(m.chat, m.sender, [m.key.id])


console.log(chalk.green(chalk.bgBlack('[ COMMAND ]')), chalk.white(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))


        }


	


//━━━━━━━━━━━━━━━[ LEVELLING BOT ]━━━━━━━━━━━━━━━\\


const levelRole = getLevelingLevel(m.sender)


        var role = 'Warrior III'


        if (levelRole <= 5) {


role = 'Warrior II'


        } else if (levelRole <= 10) {


role = 'Warrior I'


        } else if (levelRole <= 15) {


role = 'Elite III'


        } else if (levelRole <= 20) {


role = 'Elite II'


        } else if (levelRole <= 25) {


role = 'Elite I'


        } else if (levelRole <= 30) {


role = 'Master III'


        } else if (levelRole <= 35) {


role = 'Master II'


        } else if (levelRole <= 40) {


role = 'Master I'


        } else if (levelRole <= 45) {


role = 'GrandMaster III'


        } else if (levelRole <= 50) {


role = 'GrandMaster II'


        } else if (levelRole <= 55) {


role = 'GrandMaster I'


        } else if (levelRole <= 60) {


role = 'Epic III'


        } else if (levelRole <= 65) {


role = 'Epic II'


        } else if (levelRole <= 70) {


role = 'Epic I'


        } else if (levelRole <= 75) {


role = 'Legend III'


        } else if (levelRole <= 80) {


role = 'Legend II'


        } else if (levelRole <= 85) {


role = 'Legend I'


        } else if (levelRole <= 90) {


role = 'Mythic'


        } else if (levelRole <= 95) {


role = 'Mythical Glory'


        } else if (levelRole >= 100) {


role = 'Immortal'


        } 





//━━━━━━━━━━━━━━━[ DETECTED LINK GROUP ]━━━━━━━━━━━━━━━\\


/*
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
   }
if (isCmd) {
   yakali = ["⚡️", "🤖", "💤", "🔥", "👻", "✅"]
   coba = pickRandom(yakali)
   const reactionMessage = {
			react: {
				text: coba,
				key: m.key,
			},
		};
		await wxp.sendMessage(m.chat, reactionMessage);
 }
	*/	
 if (m.isGroup && isAntiLink && !mek.key.fromMe) 


if (budy.includes('https://chat.whatsapp.com/')) {


   if (!m.key.fromMe)
   m.reply(`*${atas}LINK DETECTED${kanan}*\nMaaf Anda Akan Di Kick Karena Antilink Di Group Ini Aktif`)
   await sleep(100)
      {


        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await wxp.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)      
   if (isAdmins) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna kamu admin, jadi ga akan ku kick`)


   if (isCreator) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna Kamu Owner ku, jadi ga akan ku kick`)
 
   let sianj = m.sender


   await wxp.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


   }


	  }
	if (m.isGroup && isAntipager && !mek.key.fromMe) 
if (budy.includes('#')) {
               if (!m.key.fromMe) 
               m.reply(`*${atas}PAGAR DETECTED${kanan}*\nMaaf Anda Akan Di Kick Karena Anti Pagar Di Group Ini Aktif`)
               await sleep(100)
                 {
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                if (isAdmins) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna kamu admin, jadi ga akan ku kick`)


                if (isCreator) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna Kamu Owner ku, jadi ga akan ku kick`)
 
                let sianj = m.sender
               await wxp.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
	  if (m.isGroup && isAntivirtex && !m.key.fromMe) {
      if (budy.length > 3500) {
        m.reply(`*${atas}VIRTEX DETECTED${kanan}*\nMaaf Anda Akan Di Kick Karena Anda mengirimkan terlalu banyak pesan`);
                       await sleep(1000)          
         if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                if (isAdmins) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna kamu admin, jadi ga akan ku kick`)


                if (isCreator) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna Kamu Owner ku, jadi ga akan ku kick`)
                 
        let sianj = m.sender
               await wxp.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
	  	  if (m.isGroup && isAutokick && !m.key.fromMe ) {
      if (budy.length > 1) {
        m.reply(`*${atas}AUTO KICK DETECTED${kanan}*\nMaaf Anda Akan Di Kick Karena Auto kick Aktif`);
                       await sleep(1000)                
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                if (isAdmins) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna kamu admin, jadi ga akan ku kick`)


                if (isCreator) return m.reply(`Eeh maaf, aku ga jadi ngekick kamu, karna Kamu Owner ku, jadi ga akan ku kick`)
                 
        let sianj = m.sender
               await wxp.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
	if (db.chats[m.chat].wame) {


        if (budy.match(`wa.me/`)) {


        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)


          if (!isBotAdmins) return m.reply(`Bot must be admin first`)


        let gclink = (`https://wa.me/`)


        let isLinkThisGc = new RegExp(gclink, 'i')


        let isgclink = isLinkThisGc.test(m.text)


        if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)


        if (isAdmins) return m.reply(`Ehh sorry you admin`)


        if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)


        wxp.groupParticipantsUpdate(m.chat, [m.sender], 'remove')


        }


        }


//━━━━━━━━━━━━━━━[ MUTE CHAT BOT ]━━━━━━━━━━━━━━━\\


      if (db.chats[m.chat].mute && !isAdmins && !isCreator) {


      return


      }


//━━━━━━━━━━━━━━━[ READING DATABASE ]━━━━━━━━━━━━━━━\\


	setInterval(() => {


fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))


        }, 10 * 1000)



setInterval(() => {


console.log('biar ga stuck')
        }, 1 *5000)
//━━━━━━━━━━━━━━━[ AUTOMATIC RESET LIMIT ]━━━━━━━━━━━━━━━\\


        let cron = require('node-cron')


        cron.schedule('00 12 * * *', () => {


let user = Object.keys(global.db.users)


let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let dailyUser = isPremium ? global.dailyawal.premium : global.dailyawal.free


for (let jid of user)
global.db.users[jid].limit = limitUser
global.db.users[jid].daily = dailyUser
console.log('Reseted Limit')


        }, {


scheduled: true,


timezone: "Asia/Jakarta"


        })


	    


//━━━━━━━━━━━━━━━[ RESPOND FROM MEDIA ]━━━━━━━━━━━━━━━\\


        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {


        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]


        let { text, mentionedJid } = hash


        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {


userJid: wxp.user.id,


quoted: m.quoted && m.quoted.fakeObj


        })


        messages.key.fromMe = areJidsSameUser(m.sender, wxp.user.id)


        messages.key.id = m.key.id


        messages.pushName = m.pushName


        if (m.isGroup) messages.participant = m.sender


        let msg = {


...chatUpdate,


messages: [proto.WebMessageInfo.fromObject(messages)],


type: 'append'


        }


        wxp.ev.emit('messages.upsert', msg)


        }





//━━━━━━━━━━━━━━━[ GAME ]━━━━━━━━━━━━━━━\\	    


	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            wxp.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }




        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wxp.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wxp.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await wxp.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await wxp.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    wxp.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    wxp.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) wxp.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) wxp.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) wxp.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    wxp.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) wxp.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) wxp.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    wxp.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    wrongFormat = `Perintah Salah!!\nSertakan Link ${command} setelah Command`
//━━━━━━━━━━━━━━━[ AKHIR GAME ]━━━━━━━━━━━━━━━\\	    


	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


	    for (let jid of mentionUser) {


let user = global.db.users[jid]


if (!user) continue


let afkTime = user.afkTime


if (!afkTime || afkTime < 0) continue


let reason = user.afkReason || ''


m.reply(`


Jangan tag dia!


Dia Sedang Offline/AFK, ${reason ? 'Dengan Alasan ' + reason : 'Gaada Alasan'}


Its been ${clockString(new Date - afkTime)}


`.trim())


        }





        if (db.users[m.sender].afkTime > -1) {


let user = global.db.users[m.sender]


m.reply(`


Anda kembali online dari AFK${user.afkReason ? ' after ' + user.afkReason : ''}


In ${clockString(new Date - user.afkTime)}


`.trim())


user.afkTime = -1


user.afkReason = ''


        }


	    


        switch(command) {


	    case 'afk': {


//	if (!m.isGroup) throw mess.group
    let user = global.db.users[m.sender]


    user.afkTime = + new Date


    user.afkReason = text


    m.reply(`${m.pushName} sedang Afk dengan alasan ${text ? ': ' + text : ': *Tidak ada alasan*'}`)


}


break	


        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await wxp.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await wxp.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            wxp.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await wxp.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) wxp.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break

//━━━━━━━━━━━━━━━[ FITUR DARI REST API XCODERS ]━━━━━━━━━━━━━━━\\
            
case 'instagramstory': case 'igs': case 'igstory': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                if (!text) throw 'Masukkan username'

                m.reply(mess.wait)

                let anu = await fetchJson(`https://api-xcoders.xyz/api/download/igstory?username=${text}&apikey=5S3epf7hC2`)

                wxp.sendMessage(m.chat, { video: { url: anu.result[0].downloadUrl }, caption: `${sp} Type : ${anu.result[0].type}`}, { quoted: m })

            }

            break
                  case 'gore': {


      	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


	        	db.users[m.sender].limit -= 1 // -1 limit


                m.reply(mess.wait)
                fetch = await getBuffer(`https://api-xcoders.xyz/api/random/gore?apikey=Ao9UiKVzaM`)
                wxp.sendMessage(m.chat, { video: fetch, caption: `Result from command : *${command}*\n\n${kata}`}, { quoted: m })
                }
            break
            case 'bokep': {


      	             if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)


                fetch = await fetchJson(`https://api-xcoders.xyz/api/random/bokep?apikey=Ao9UiKVzaM`)
                koz = await getBuffer(`${fetch.result.thumb}`)
                wxp.sendMessage(m.chat, { image: koz, caption: `Result from command : *${command} ${fetch.result.title}*\n\nTitle : ${fetch.result.title}\nViews : ${fetch.result.views}\nLink : ${fetch.result.url}\nsilahkan klick link di atas jika ingin menonton.\n*Note : Dosa tanggung sendiri*\n\n${kata}`}, { quoted: m })
                }
            break
            
            
            
//━━━━━━━━━━━━━━━[ AKHIR FITUR DARI REST API XCODERS ]━━━━━━━━━━━━━━━\\
                        
            



//━━━━━━━━━━━━━━━[ LIST FITUR ]━━━━━━━━━━━━━━━\\



case 'hackfb':
if (!isCreator) throw mess.owner
const hekfb = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "METODE","footerText": "SILAHKAN PILIH METODE","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`brute`,`fakedata2`]


   listmenuu = [`Brute Force [TARGET]`,`BULE [RANDOM]`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: ``,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   hekfb(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break


case 'command': case 'listmenu':


          const kontolmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "LIST MENU","footerText": "SILAHKAN PILIH LIST MENU","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`mainmenu`,`groupmenu`,`downloadmenu`,`searchmenu`,`allmenu`,`randomfitur`,`funmenu`,`audiomenu`,`islammenu`,`horoscopemenu`,`convertmenu`,`databasemenu`,`ownermenu`,`premiumfitur`,`stalkmenu`,`gamemenu`,`webzone`,`randomgif`,`makermenu`]


   listmenuu = [`Main Menu`,`Group Menu`,`Download Menu`,`Search Menu`,`All Menu`,`Random Menu`,`Fun Menu`,`Audio Menu`,`Islam Menu`,`HoroScope Menu`,`convert Menu`,`Database Menu`,`Owner Menu`,`Premium Menu`,`Stalker Menu`,`Game Menu`,`Webzone Menu`,`Random GIF Menu`,`Maker Menu`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   kontolmsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break
case 'randomimage':
          const ramsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK DISINI","footerText": "INI LIST MENU YANG ADA DI RANDOM IMAGE","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`ppcouple`,`kopi`,`waifu`,`husbu`,`shinobu`,`megumin`,`shota`,`husbu`,`sagiri`,`elf`,`loli`]


   listmenuu = [`Random PPCouple`,`Random Kopi`,`Random Waifu ( SFW )`,`Random Husbu ( SFW )`,`Random Shinobu ( SFW )`,`Random Megumin ( SFW )`,`Random Shota ( SFW )`,`Random Husbu ( SFW )`,`Random Sagiri ( SFW )`,`Random Elf ( SFW )`,`Random Loli ( SFW )`]
   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   ramsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break
case 'randomgif':
          const gifmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "LIST MENU","footerText": "SILAHKAN PILIH LIST MENU","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`cry`,`kill`,`hug`,`pat`,`lick`,`kiss`,`bite`,`yeet`,`bully`,`bonk`,`wink`,`poke`,`nom`,`slap`,`smile`,`wave`,`awoo`,`blush`,`smu`,`glomp`,`happy`,`dance`,`cringe`,`cuddle`,`highfive`,`handhold`]


   listmenuu = [`GIF CRY`,`GIF KILL`,`GIF HUG`,`GIF PAT`,`GIF LICK`,`GIF KISS`,`GIF BITE`,`GIF YEET`,`GIF BULLY`,`GIF BONK`,`GIF WINK`,`GIF POKE`,`GIF NOM`,`GIF SLAP`,`GIF SMILE`,`GIF WAVE`,`GIF AWOO`,`GIF BLUSH`,`GIF SMUG`,`GIF GLOMP`,`GIF HAPPY`,`GIF DANCE`,`GIF CRINGE`,`GIF CUDDLE`,`GIF HIGH FIVE`,`GIF HANDHOLD`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   gifmsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break					
case 'premiumfitur':          
          const premimsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK DISINI","footerText": "INI LIST MENU YANG ADA DI PREMIUM FITUR","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`bokep`,`asupan`,`chiisaihentai`,`trap`,`blowjob`,`yaoi`,`ecchi`,`hentai`,`ahegao`,`hololewd`,`sideoppai`,`animefeets`,`animebooty`,`animethighss`,`hentaiparadise`,`animearmpits`,`hentaifemdom`,`lewdanimegirls`,`biganimetiddies`,`animebellybutton`,`hentai4everyone`,`bj`,`ero`,`cum`,`feet`,`yuri`,`trap`,`lewd`,`feed`,`eron`,`solo`,`gasm`,`poke`,`anal`,`holo`,`tits`,`kuni`,`kiss`,`erok`,`smug`,`baka`,`solog`,`feetg`,`lewdk`,`pussy`,`femdom`,`cuddle`,`hentai`,`eroyuri`,`cum_jpg`,`blowjob`,`erofeet`,`holoero`,`classic`,`erokemo`,`fox_girl`,`futanari`,`lewdkemo`,`wallpaper`,`pussy_jpg`,`kemonomimi`,`nsfw_avatar`]


   listmenuu = [`Bokep`,`Asupan`,`Chiisaihentai`,`Trap`,`Blowjob`,`Yaoi`,`Ecchi`,`Hentai`,`Ahegao`,`Hololewd`,`Sideoppai`,`Animefeets`,`Animebooty`,`Animethighss`,`Hentaiparadise`,`Animearmpits`,`Hentaifemdom`,`Lewdanimegirls`,`Biganimetiddies`,`Animebellybutton`,`Hentai4everyone`,`BJ`,`Ero`,`Cum`,`Feet`,`Yuri`,`Trap`,`Lewd`,`Feed`,`Eron`,`Solo`,`Gasm`,`Poke`,`Anal`,`Holo`,`Tits`,`Kuni`,`Kiss`,`Erok`,`Smug`,`Baka`,`Solog`,`Feetg`,`Lewdk`,`Pussy`,`Femdom`,`Cuddle`,`Hentai`,`Eroyuri`,`Cum_jpg`,`Blowjob`,`Erofeet`,`Holoero`,`Classic`,`Erokemo`,`Fox_girl`,`Futanari`,`Lewdkemo`,`Wallpaper`,`Pussy_jpg`,`Kemonomimi`,`Nsfw_avatar`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   premimsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break   
        case 'randomfitur':
                  const randommsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK DISINI","footerText": "INI LIST MENU YANG ADA DI RANDOM FITUR","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`randomtext`,`randomimage`]


   listmenuu = [`Random Text`,`Random Image`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   randommsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break
case 'randomtext':
const sections = [{
            title: "Random Text",
            rows: [
                {title: "Quotes Dilan ", rowId: "dilanquote"},
                {title: "Quotes Muslim", rowId: "muslimquote"},
                {title: "Quotes Random", rowId: "randomquote"},
                {title: "Random Anime Quotes", rowId: "animequote"},
                {title: "Random Fakta Unik", rowId: "faktaunik"},
                {title: "Random Kata Bijak", rowId: "katabijak"},
                {title: "Random Pantun", rowId: "pantun"},
                {title: "Random Puisi", rowId: "puisi"},
                {title: "Random Kata Bucin 1", rowId: "bucin"},
                {title: "Random Kata Bucin 2", rowId: "katabucin"},
                {title: "Random Nama Orang", rowId: "nama"},
                        ]
        }]
        const listMessage = {
            text: "Silahkan pilih list di bawah ini",
            footer: ``,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await wxp.sendMessage(m.chat, listMessage, { quoted: m })
        break
        case 'gamemenu':
                  const gamsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "GAME MENU","footerText": "INI LIST MENU YANG ADA DI GAME MENU","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`Tebak lagu`,`Tebak gambar`,`Tebak kata`,`Tebak kalimat`,`Tebak lirik`,`Tebak lontong`,`ttc`]


   listmenuu = [`Tebak lagu`,`Tebak Gambar`,`Tebak Kata`,`Tebak Kalimat`,`Tebak Lirik`,`Tebak Lontong`,`TicTacToe`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: `Menampilkan ${x}`,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   gamsg(m.chat, `${ucapanWaktu}`,  `Hai kak *${pushname}* 👋`, list)


   break
        sections = [{
            title: "Game Menu",
            rows: [
                {title: "Tebak Lagu", rowId: "Tebak lagu"},
                {title: "Tebak Gambar", rowId: "Tebak gambar"},
                {title: "Tebak Kata", rowId: "Tebak kata"},
                {title: "Tebak Kalimat", rowId: "Tebak kalimat"},
                {title: "Tebak Lirik", rowId: "Tebak lirik"},
                {title: "Tebak Lontong", rowId: "Tebak lontong"},
                {title: "TicTacToe", rowId: "ttc"},
            ]
        }]
       listMessage = {
            text: "Silahkan pilih game nya di bawah ini",
            footer: ``,
            buttonText: "OPEN LIST",
            sections
        }
        sendMsg = await wxp.sendMessage(m.chat, listMessages, { quoted: m })
        break




//━━━━━━━━━━━━━━━[ AKHIR LIST FITUR ]━━━━━━━━━━━━━━━\\






//━━━━━━━━━━━━━━━[ FITUR DARI REST API ZENZ ]━━━━━━━━━━━━━━━\\


/*case 'hentaivid': {
                 if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `Khusus Member Premium\n mau beli premium? chat: https://wa.me/+${meki}`
                m.reply(mess.wait)
                let fetch = await fetchJson(api('zenz', '/downloader/hentaivid', {}, 'apikey'))
                let buttons = [
                    {buttonId: `hentaivid`, buttonText: {displayText: 'NEXT'}, type: 1},
                ]
                let buttonMessage = {
                    video: { url: fetch.result.video_1 },
                    caption: `${sp} Title : ${fetch.result.title}\n${sp} Category : ${fetch.result.category}\n${sp} Share : ${fetch.result.share_count}\n${sp} Views : ${fetch.result.views_count}\n\n${kata}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'iplookup':
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


if (!text) throw `Ip nya mana ?\nContoh : ${prefix + command}180.248.253.169`
let lokup = await fetchJson(`https://zenzapis.xyz/api/iplookup?apikey=${apikey}&query=${text}`)
 kupo = `*${atas}IP LOOKUOP${kanan}*\n\n`
 kupo += `Country : ${lokup.result.country}\n`,
 kupo += `Region : ${lokup.result.region}\n`,
 kupo += `City : ${lokup.result.city}\n`,
 kupo += `ZIP : ${lokup.result.zip}\n`,
 kupo += `Latitude : ${lokup.result.latitude}\n`,
 kupo += `Longtitude : ${lokup.result.longtitude}\n`,
 kupo += `ISP : ${lokup.result.isp}\n`,
 kupo += `Domain : ${lokup.result.domain}\n`
wxp.sendText(m.chat, kupo, troli)
break
            case 'playstore': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `${sp} Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `${sp} Name : ${i.name}\n`
            teks += `${sp} Link : ${i.link}\n`
            teks += `${sp} Developer : ${i.developer}\n`
            teks += `${sp} Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break                                             
            case 'spekhp': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `${sp} Title: ${judul}
${sp} Realease: ${rilis}
${sp} Size: ${ukuran}
${sp} Type: ${type}
${sp} Storage: ${storage}
${sp} Display: ${display}
${sp} Inchi: ${inchi}
${sp} Pixel: ${pixel}
${sp} Video Pixel: ${videoPixel}
${sp} Ram: ${ram}
${sp} Chipset: ${chipset}
${sp} Battery: ${batrai}
${sp} Battery Brand: ${merek_batre}
${sp} Detail: ${detail}`
            wxp.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `${sp} Title: ${i.title}\n`
            capt += `${sp} Thumbnail: ${i.thumb}\n`
            capt += `${sp} Url: ${i.url}\n\n──────────────────────\n`
            }
            wxp.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `${sp} Title: ${i.title}\n`
            capt += `${sp} Url: ${i.url}\n`
            capt += `${sp} Img Url: ${i.img}\n\n──────────────────────\n`
            }
            wxp.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `${sp} Community: ${i.community}\n`
            capt += `${sp} Community Link: ${i.community_link}\n`
            capt += `${sp} Thumbnail: ${i.community_thumb}\n`
            capt += `${sp} Description: ${i.community_desc}\n`
            capt += `${sp} Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            wxp.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'webtoons': {
            	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${sp} Judul: ${i.judul}\n`
            capt += `${sp} Like: ${i.like}\n`
            capt += `${sp} Creator: ${i.creator}\n`
            capt += `${sp} Genre: ${i.genre}\n`
            capt += `${sp} Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
                case 'dilanquote':
        case 'bucinquote':
        case 'muslimquote':
        case 'randomquote':
        case 'kanyequote':
        case 'galauquote':
        case 'trumpquote':
        case 'trumpthink':
        case 'motivasi':
        case 'katasenja':
        case 'creepyfact':
        case 'faktaunik':
        case 'pantun':
        case 'puisi':      
        	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


        m.reply(mess.wait)  
        let fetched = await fetchJson(api('zenz', '/randomtext/'+command, {}, 'apikey'))
        let buttons = [
            {buttonId: `${command}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            text: `Random ${command}\n\n` + fetched.result.message,
            footer: ``,
            buttons: buttons,
            headerType: 4
        }
        wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
break
case 'cersex': 
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
        let sexsex = await fetchJson(api('zenz', '/randomtext/cersex2', {}, 'apikey'))
        let buttonsd = [
            {buttonId: `${command}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessaged = {
            text: `Cerita:\n${sexsex.result.Cerita}`,
            footer: ``,
            buttons: buttonsd,
            headerType: 4
        }
        wxp.sendMessage(m.chat, buttonMessaged, { quoted: m })
break
case 'cerpen':
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


          m.reply(mess.wait)
        let penpen = await fetchJson(api('zenz', '/randomtext/cerpen', {}, 'apikey'))
        let buttonss = [
            {buttonId: `${command}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessages = {
            text: `Random ${command}\n\nJudul: ${penpen.result.Judul}\nPenulis: ${penpen.result.Penulis}\nCerita: ${penpen.result.cerita}\n\nSumber: ${penpen.result.sumber}\n`,
            buttons: buttonss,
            headerType: 4
        }
        wxp.sendMessage(m.chat, buttonMessages, { quoted: m })
break

					case 'hdin':
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


					if (!text) throw `linknya mana? Contoh : ${prefix + command}https://telegra.ph/file/7cfa1fb940fb3761e9275.jpg`
					menghd = await getBuffer(`https://zenzapis.xyz/creator/waifu2x?url=${text}&apikey=${apikey}`)
					wxp.sendMessage(m.chat, { image: menghd, caption: `Done Ngab` }, { quoted : m })
					break
            case 'cekapi':{
            if (!text) throw `Apikey nya mana?`
            let apikek = await fetchJson(api('zenz', '/api/cekapi', {apikey: text}))
            let caption = `Apikey Checker :\n\n`
            let i = apikek.message
            caption += `${sp} Id : ${i.id}\n`
            caption += `${sp} Created : ${i.created}\n`
            caption += `${sp} Updated : ${i.updated}\n`
            caption += `${sp} First Name : ${i.firstname}\n`
            caption += `${sp} Last Name : ${i.lastname}\n`
            caption += `${sp} Username : ${i.username}\n`
            caption += `${sp} ApiKey : ${i.apiKey}\n`
            caption += `${sp} Todayhit : ${i.today_hit}\n`
            caption += `${sp} Totalhit : ${i.total_hit}\n`
            caption += `${sp} Status : ${i.status}\n`
            caption += `${sp} Premium : ${i.premium}\n`
            caption += `${sp} Expired : ${i.premium_expired}\n`
            caption += `${sp} Active : ${i.active}\n`
            caption += `${sp} Location : ${i.location}\n`
            caption += `${sp} Biodata : ${i.biodata}\n`
            wxp.sendMessage(m.chat, { image: i.profile_image, caption: `${caption}` }, { quoted:  m})
//      m.reply(`${caption}`)
          }      
        break
    case 'logo2':
    case 'logo3':
    case 'logo4':
    case 'logogaming':
    case 'logogirl':
    case 'crossfire':
    case 'yasuologo':
    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit
    
    zikrol = await getBuffer(`https://zenzapis.xyz/ephoto/${command}?text=${text}&apikey=${apikey}`)
    await sleep(1000)
    wxp.sendMessage(m.chat, { image: zikrol, caption: `Done ngab` }, { quoted: m })
    break


*/



//━━━━━━━━━━━━━━━[ AKHIR FITUR DARI REST API ZENZ ]━━━━━━━━━━━━━━━\\






//━━━━━━━━━━━━━━━[ FITUR DARI REST API LOLHUMAN ]━━━━━━━━━━━━━━━\\


case 'randomquotes': {
zty = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${apikey}`)
let k = zty.result
sikrol = `Quotes : _${k.quote}_\n`
sikrol += `By : *${k.by}*\n`
reply(`${sikrol}`)
}
break
case 'muslimquote': {
agh = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
reply(`_${agh.result}_`)
}
break
case 'dilanquote': {
agh = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
reply(`_${agh.result}_`)
}
break
case 'faktaunik': 
case 'katabucin': 
case 'katabijak': 
case 'pantun':
case 'puisi':
case 'bucin': 
case 'katabucin':
case 'nama': {
let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
    let buttons = [


        {buttonId: `${command}`, buttonText: {displayText: 'NEXT'}, type: 1}


    ]


    let buttonMessage = {


        text: `${anu.result}`,


        footer: 'Press The Button Below',


        buttons: buttons,


        headerType: 2


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break



case 'cekapi': {
zyu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
let i = zyu.result
let caption = `Apikey Checker :\n\n`
caption += `${sp} Username : ${i.username}\n`
caption += `${sp} Requests : ${i.requests}\n`
caption += `${sp} Requests Today : ${i.today}\n`
caption += `${sp} Account Type : ${i.account_type}\n`
caption += `${sp} expired : ${i.expired}\n`
reply(`${caption}`)
}
break
                case 'shopee': {
            if (args.length == 0) return reply(`Example: ${prefix + command} sepeda`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${text}`)
            var kayu = 'Shopee Search : \n'
            for (var x of data.result) {
                text += `Name : ${x.name}\n`
                text += `Terjual : ${x.sold}\n`
                text += `Stock : ${x.stock}\n`
                text += `Lokasi : ${x.shop_loc}\n`
                text += `Link : ${x.link_produk}\n\n`
            }
            reply(kayu)
            }
            break            
case 'tiktok': case 'tiktokdl': case 'tt': {


	       	       if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit
       	       	        
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu =  await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=${apikey}&url=${text}`)
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result },
                    caption: `Cara save Media dari bot:\n1. Klick video/foto nya\n2. Klick titik 3 di pojok kanan\n3. Klick Save/Simpan\n\n${kata}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
            }           
            break
/*            case 'tiktok': case 'tiktokdl': case 'tt': {
            axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                sock.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
            })
            }
            break*/
            case 'tiktokmp3': case 'tiktokaudio': {
                      if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                bbd = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${text}`)
		    	wxp.sendMessage(m.chat, {audio: bbd, mimetype: 'audio/mp4', ptt:false }, { quoted : m })
		    	}
                break
                       case 'fbdl': case 'fb':
            if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
            axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
               wxp.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
            })
            break
                                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                                 if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                m.reply(mess.wait)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar, caption: `Result from command : *${command}*\n\n${kata}`}, { quoted: m })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                                 if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                m.reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar, caption: `Result from command : *${command}*\n\n${kata}`}, { quoted: m })
                    })
                    break
                case 'elf':
                case 'loli':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar, caption: `Result from command : *${command}*\n\n${kata}`}, { quoted: m })
                    })
                    break
   	     	    	     	     	    	    case 'couplepp': case 'ppcouple': case 'ppcp': {


   	     	    	    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


    m.reply(mess.wait)


    let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${apikey}`)


    sikr = await getBuffer(`${anu.result.male}`)
    sk = await getBuffer(`${anu.result.female}`)
    wxp.sendMessage(m.chat, { image: sikr, caption: `*${atas}Couple male${kanan}*\n\n${kata}` }, { quoted: m })


   wxp.sendMessage(m.chat, { image: sk, caption: `*${atas}Couple Female${kanan}*\n\n${kata}` }, { quoted: m })


}


	    break



                case 'lk21':
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dok = await getBuffer(get_result.link_dl)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m })
                   break
                case 'drakor':
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'wattpad':
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: m })
                    break
                case 'wattpadsearch':
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    m.reply(ini_txt)
                    break
case 'soundcloud': case 'scdl': {


                    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


if (!isUrl(args[0]) && !args[0].includes('soundcloud')) m.reply(`${wrongFormat}`)                                  
zlp = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${apikey}&url=${text}`)
ak = await getBuffer(`${zlp.result.link}`)
wxp.sendMessage(m.chat, {audio: ak, mimetype: 'audio/mp4', ptt:false }, { quoted: m })
}
break
case 'mirror': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


aoz = await fetchJson(`https://api.lolhuman.xyz/api/mirrorcreator?apikey=${apikey}&url=${text}`)
zko = `Zippyshare : ${aoz.result.zippyshare}\nDownloadgg : ${aoz.result.downloadgg}\nMix Drop : ${aoz.result.mixdropco}\nTusFiles : ${aoz.result.tusfiles}\nAnon files : ${aoz.result.anonfiles}\nUsers Drive : ${aoz.result.userdrive}\nGoogle Drive : ${aoz.result.googledrive}`
wxp.sendText(m.chat, zko, m)
fira = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${aoz.result.zippyshare}`)
m.reply(`*${atas}Zippyshare Downloader${kanan}*\n\nNama : ${fira.result.name_file}\n\nSize : ${fira.result.size}\nUpload : ${fira.result.date_upload}`)
wxp.sendMessage(m.chat, { document: { url: fira.result.download_url }, mimetype: `${fira.result.name_file.split(".")}`, fileName: `${fira.result.name_file}` }, { quoted: m })  
}
break

                case 'asupan': {
         if (m.isGroup) throw `Hanya bisa digunakan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await wxp.sendMessage(m.chat, { video: ini_buffer, caption: `${kata}` }, { quoted: m })
                    }
                    break

    
                    case 'telesticker':
            if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
            axios.get(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                wxp.sendMessage(m.chat, { sticker: { url: data.result.sticker.random() } })
            })
            break            
/*                    case 'pinterestdl': case 'pindl': {
                    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)                    
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=${apikey}&url=${text}`)      
                    ini_result = ini_result.result                                  
                    await wxp.sendMessage(m.chat, { image: { url:  ini_result[0], caption: `${kata}` }}, { quoted: m })
                    }
                    break*/	
                    
case 'alquranaudio':
            if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
            wxp.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
            break
                         case 'pinterest':
            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
            axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${text}`).then(({ data }) => {
                wxp.sendMessage(m.chat, { image: { url: data.result } })
            })
            break
        case 'pinterest2':
            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
            axios.get(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apikey}&query=${text}`).then(({ data }) => {
                for (var x of data.result.slice(0, 5)) {
                    wxp.sendMessage(m.chat, { image: { url: x } })
                }
            })
            break
        case 'pinterestdl': case 'pindl':
            if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
            axios.get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
                wxp.sendMessage(m.chat, { image: { url: data.result[0] } })
            })
            break
                case 'mlstalk': {
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${apikey}`)
                    m.reply(get_result.result)
                    }
                    break
  
    
                                    case 'ffstalk': {
                                    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} 84830127/2169`)
                    ff_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${ff_id}?apikey=${apikey}`)
                    m.reply(get_result.result)
                    }
                    break            
                    case 'stalkig': {
                    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    wxp.sendMessage(m.chat, { image: ini_buffer,caption: ini_txt }, { quoted: m })
                    }
                    break
                    case 'doujindesu': {
                    ajzo = await fetchJson(`https://api.lolhuman.xyz/api/doujindesu?apikey=${apikey}&url=${text}`)                    
                    wxp.sendText(m.chat, `Title : ${ajzo.result.title}\nLink : ${ajzo.result.link_dl}`, { quoted: m})
                    }
                    break                   
                    case 'doujindesusearch': {
                         if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
aozj = await fetchJson(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=${apikey}&query=${text}`)
ini_buffer = await getBuffer(aozj.result.thumbnail)
wxp.sendMessage(m.chat, { image: ini_buffer, caption: `Title : ${aozj.result.title}\nLink : ${aozj.result.link}`}, { quoted: m } )
}
break
                case 'stalkgithub': {
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} RidwanGans`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    wxp.sendMessage(m.chat, { image: ini_buffer,caption: ini_txt }, { quoted: m })
                    }
                    break
                case 'stalktwitter': {
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    wxp.sendMessage(m.chat, { image: ini_buffer,caption: ini_txt }, { quoted: m })
                    }
                    break
                case 'stalktiktok': {
                	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    lolhuman.sendMessage(m.chat, { image: pp_tt, caption: ini_txt }, { quoted: m })
                    }
                    break

                    case 'pptiktok': {
                    	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                    asz = await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${apikey}`)
                    wxp.sendMessage(m.chat, { image: asz,caption: `${kata}` }, { quoted: m })
                    }
                    break                                 
                      /*case 'tiktokmp3': case 'tiktokaudio': {
                      if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                bbd = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${text}`)
		    	wxp.sendMessage(m.chat, {audio: bbd, mimetype: 'audio/mp4', ptt:false }, { quoted : m })
		    	}
                break*/
                                case 'xhamstersearch':
                                         if (m.isGroup) throw `Hanya bisa digunakan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'xhamster':
                         if (m.isGroup) throw `Hanya bisa digunakan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: lol })
                    break
                case 'xnxxsearch':
                         if (m.isGroup) throw `Hanya bisa digunakan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          m.reply(mess.wait)
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                                                        case 'xnxx':
                    if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
                    if (!isPremium) throw `${kataprem}`
                    if (!text) throw`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${text}`)
                    get_result = get_result.result
                    ini_txt = `*${atas}XNXX DOWNLOADER${kanan}*\n`
                    ini_txt += `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    m.reply(ini_txt)                   
                    dk = await getBuffer(x.link[1])
                    wxp.sendMessage(m.chat, { video: dk, caption: `Result from command : *${command}*\n\n${kata}` }, { quoted: m })
                    break
                    case 'xnxxdl': {
                    uya = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${text}`)                    
                     dk = await getBuffer(uya.result.link[1])
                    wxp.sendMessage(m.chat, { video: dk, caption: `Result from command : *${command}*\n\n${kata}` }, { quoted: m })
                    }
                    break
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan Gansz`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar }, { quoted: m })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan Gansz`)
                    jhg = args.join(" ").split("|")
                    txt1 = jhg[0]
                    txt2 = jhg[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar }, { quoted: m })
                    })
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan Gansz`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar }, { quoted: m })
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan|Gansz`)
                    qpo = args.join(" ").split("|")
                    txt1 = qpo[0]
                    txt2 = qpo[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar }, { quoted: m })
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan Gansz`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        wxp.sendMessage(m.chat, { image: gambar }, { quoted: m })
                    })
                    break

                                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'attp':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
                    await wxp.sendMedia(m.chat, ini_buffer, m, { packname: global.packname, author: global.auhor })
                    break
	        case 'trigger': case 'pencil': case 'wasted': case 'triggered': case 'hitler': case 'jail': case 'rainbow': case 'rip': case 'trash': case 'wanted': {


	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} RidwanGans`


	        if (!/image/.test(mime)) throw respond
            
	        m.reply(mess.wait)


	        let dwnld = await quoted.download()


	        let { floNime } = require('./lib/uploader')


	        let fatGans = await floNime(dwnld)


	        let smeme = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${apikey}&img=${fatGans.result.url}`)
	        let FaTiH = await wxp.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })


	        await fs.unlinkSync(FaTiH)


           }


	       break
case 'tts': 


  case 'gtts':      


  	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


  if (!text) throw `textnya mana?`
          const gtts = await getBuffer(`https://api.lolhuman.xyz/api/gtts/id?apikey=${apikey}&text=${text}`)
          wxp.sendMessage(m.chat, {audio: gtts, mimetype: 'audio/mp4', ptt:true }, { quoted : m })     
          break




case 'mediafire':
if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


if(!isUrl(text) && !text.includes('mediafire')) return m.reply(`${wrongFormat}`)              
if (!text) throw `linknya mana? Contoh : ${prefix + command} https://www.mediafire.com/file/r9gjkeski678mge/111_sign.apk/file`
fira = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${apikey}&url=${text}`)
m.reply(`*${atas}Mediafire Downloader${kanan}*\n\nNama : ${fira.result.filename}\nType : ${fira.result.filetype}\nSize : ${fira.result.filesize}\nUpload : ${fira.result.uploaded}\nLink : ${fira.result.link}`)
wxp.sendMessage(m.chat, { document: { url: fira.result.link }, mimetype: `${fira.result.filetype}`, fileName: `${fira.result.filename}` }, { quoted: m })  
break
case 'zippyshare':
if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


if(!isUrl(text) && !text.includes('zippyshare')) return m.reply(`${wrongFormat}`)              
if (!text) throw `linknya mana? Contoh : ${prefix + command}https://www51.zippyshare.com/v/5W0TOBz1/file.html`
fira = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${text}`)
m.reply(`*${atas}Zippyshare Downloader${kanan}*\n\nNama : ${fira.result.name_file}\n\nSize : ${fira.result.size}\nUpload : ${fira.result.date_upload}`)
wxp.sendMessage(m.chat, { document: { url: fira.result.download_url }, mimetype: `${fira.result.name_file.split(".")}`, fileName: `${fira.result.name_file}` }, { quoted: m })  
break
					case 'ringkas':
					if (!text) throw `Textnya mana? Contoh : ${prefix + command}Seekor kucing muda dilempar dari mobil di jalan cincin Toulouse\n\nAsosiasi perlindungan hewan yang merawat kucing kecil yang terluka itu membunyikan alarm tentang peningkatan jumlah hewan peliharaan yang dibuang selama musim panas.  Adalah asosiasi perlindungan hewan lokal, ChaMania, yang mengungkap cerita itu dengan memperingatkan peningkatan jumlah hewan yang dibuang selama musim panas.  Setelah dengan keras membuang hewan saat mengemudi, pengemudi akan berbalik dan menghilang.`
					let kaskas = await fetchJson(`https://api.lolhuman.xyz/api/resoomer?apikey=${apikey}&text=${text}`)
					kaskas += `*${atas}RINGKASAN${kanan}*\n\n`
					wxp.sendText(m.chat, kaskas, m)
					break
		                case 'nhentaipdf':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/nhentaipdf/${text}?apikey=${apikey}`)
                    get_pepek = get_result.result
                    ini_buffer = await getBuffer(get_pepek)
                    await wxp.sendMessage(m.chat, { document: { url: get_result.result }, mimetype: 'application/pdf', fileName: `${text}.pdf` }, { quoted: m })
                    break


					                					                case 'stickerwa':
				    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		            db.users[m.sender].limit -= 2 // -1 limit


					if (m.isGroup) throw `Hanya bisa di lakukan di pribadi Bot karna banyak sticker yang akan di kirim oleh bot`                
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${x}`)
                        await wxp.sendImageAsSticker(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
                    }
                    m.reply(`Sukses.. Limit kamu di kurangi 2 ya kak`)
                    break
                    case 'spotify':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: ini_txt  }, { quoted: m })
                    get_audio = await getBuffer(get_result.link)
                    await wxp.sendMessage(m.chat, { audio: get_audio, mimetype: 'audio/mp4', ptt:false }, { quoted: m })
                    break
                case 'spotifysearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'joox':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`                    
                    thumbnail = await getBuffer(get_result.image)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: ini_txt  }, { quoted: m })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await wxp.sendMessage(m.chat, { audio: get_audio, mimetype: 'audio/mp4', ptt:false }, { quoted: m })
                    break
                case 'chord':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    m.reply(ini_txt)
                    break
                case 'heroml':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await wxp.sendMessage(m.chat, { image: ini_icon, caption: ini_txt }, { quoted: m })
                    break
    case 'nulis':
    case 'tulis':
     if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


          if (args.length < 1) return m.reply('Yang mau di tulis apaan?')
          teks = args.join(' ')
          m.reply(mess.wait)
          nulis = encodeURIComponent(teks)
          res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
          if (res.data.error) return m.reply(res.data.error)
          buff = Buffer.from(res.data.result.split(',')[1], 'base64')
          wxp.sendMessage(m.chat, { image: buff, caption: `Jangan males` }, {quoted: m}).catch(e => {
          return m.reply('[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File\n[ ! ] Error Failed To Download And Send Files\n[ ! ] فشل تحميل الملفات وإرسالها خطأ')
          })
          break
          case 'nimesearch':
           if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


          meqpa = await getBuffer(`https://api.lolhuman.xyz/api/danbooru?apikey=${apikey}&query=${text}`)
          wxp.sendMessage(m.chat, meqpa, m)
          break
          	        case 'kartu':
{
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} Judul|desc|attack|deff\nContoh : RidwanGans|Owner paling baik hati dan tidak sombong|999|999`


	        if (!/image/.test(mime)) throw respond
            
	        if (!text) throw respond


	        m.reply(mess.wait)


	        get_args = args.join(" ").split("|")
            judul = get_args[0]
            desk = get_args[1]
            atek = get_args[2]
            defent = get_args[3]
	        let dwnld = await quoted.download()


	        let { floNime } = require('./lib/uploader')


	        let fatGans = await floNime(dwnld)


	        let smeme = await getBuffer(`https://api.lolhuman.xyz/api/yugioh?apikey=${apikey}&img=${fatGans.result.url}&title=${judul}&desc=${desk}&atk=${atek}&def=${defent}`)
	        let FaTiH = await wxp.sendMessage(m.chat, { image: smeme, caption: `nih ngab\n\n${kata}`, m })


	        //await fs.unlinkSync(FaTiH)


           }


	       break
	       case 'quotemaker': case 'quotesmaker':	      
	       if (!text) throw `Textnya mana ?\nContoh : ${ prefix + command } Andai aku tidak hidup|Ridwan`
	       m.reply(mess.wait)
	       get_args = args.join(" ").split("|")
           sjok = get_args[0]
           torent = get_args[1]
	       pepfek = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker2?apikey=${apikey}&text=${sjok}&author=${torent}`)
	       wxp.sendMessage(m.chat, { image: pepfek, caption: `Result from command : *${command} ${sjok}|${torent}*\n\n${kata}`, m })
	       break
                    case 'character':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${text}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await wxp.sendMessage(m.chat, { image: thumbnail, caption: `${ini_txt}` }, { quoted: m })
                    break
                    case 'neonime': {
                    neo = await fetchJson(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${apikey}`)
                    let tiou = `*${atas}Neonime Latest${kanan}*\n\n`
                    for (let i of neo.result) {
                    tiou += `${sp}Title : ${i.title}\n`
                    tiou += `${sp}Episode : ${i.episode}\n`
                    tiou += `${sp}Date : ${i.date}\n`
                    tiou += `${sp}deskripsi : ${i.desc}\n`
                    tiou += `${sp}Link : ${i.link}\n\n`
                    tiou += `━━━━━━━━━━━━━━━━━━━\n\n`
                    gambarnya = await getBuffer(i.thumbnail)
                    }
                    await wxp.sendMessage(m.chat, { image: gambarnya, caption: `${tiou}` }, { quoted: m })
                    }
                    break
                case 'kusonime':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await wxp.sendMessage(m.chat, { image: ini_buffer, caption: `${ini_txt}` }, { quoted: m })
                    break
                                    case 'jadwaltv':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    m.reply(ini_txt)
                    break
               case 'storyanime': {
                if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


	        	db.users[m.sender].limit -= 1 // -1 limit


                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${apikey}`)
                wxp.sendMessage(m.chat, { video: anu, caption: `Nih Ngab`, m })
                }
            break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await wxp.sendMessage(m.chat, { image: get_buffer, caption: `${ini_txt}` }, { quoted: m })
                    break
                case 'lirik':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${text}`)
                    m.reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await wxp.sendMessage(m.chat, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: m })
                    m.reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    m.reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    m.reply(ini_txt)
                    break
                case 'kodepos':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    m.reply(ini_txt)
                    break
                case 'jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                    case 'ktpmaker':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		            db.users[m.sender].limit -= 3 // -3 limit


                    if (args.length == 0) return m.reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|Mars|Elektrik|Ridwan Salman|mars, 99-99-9999|Laki-laki|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|Dikit lagi kawin|mikirin dia|Mars Elektrik|hari kiamat|https://telegra.ph/file/7cfa1fb940fb3761e9275.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await wxp.sendMessage(m.chat, { image:ini_buffer }, { quoted: m })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${text}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                     await wxp.sendMessage(m.chat, { image: ini_buffer, caption: `${ini_txt}` }, { quoted: m })
                    break 
                    
case 'qrcode': case 'qr':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=1080%C3%971080`)
				wxp.sendMessage(m.chat, { image: buff, caption: `*${atas}QR CODE GENERATOR*\nQuery : _${text}_\n\n${kata}` }, {quoted: m})
				break
				case 'otakudesu':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://otakudesu.tube/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    m.reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${text}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    m.reply(ini_txt)
                    break
                case 'nhentai':
                    if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n\n`
                    ini_txt += `Read Online : ${get_result.read}\n`                    
                    m.reply(ini_txt)
                    break            
                case 'nhentaisearch':
                    if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${text}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                case 'nekopoi':
                    if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await wxp.sendMessage(from, { image: ini_buffer, caption: `${ini_txt}` }, { quoted: m })
                    break
                case 'nekopoisearch':
                    if (m.isGroup) throw `Hanya bisa dilakukan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${text}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    m.reply(ini_txt)
                    break
   
                    case 'alay':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


                    db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                   
                    alai = await fetchJson(`https://api.lolhuman.xyz/api/alay?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, alai.result, troli)
                    break
                    case 'temor':
                    morea = await fetchJson(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, morea.result, troli)
                    break
                    case 'mortex':
                    morep = await fetchJson(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, morep.result, troli)
                    break        
                    case 'satir':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		            db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    setir = await fetchJson(`https://api.lolhuman.xyz/api/upperlower?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, setir.result, troli)
                    break
                    case 'namaninja':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		            db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    nanji = await fetchJson(`https://api.lolhuman.xyz/api/ninja?apikey=${apikey}&nama=${text}`)
                    wxp.sendText(m.chat, nanji.result, troli)
                    break                    
                    case 'satir2':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


                    db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    petir = await fetchJson(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, petir.result, troli)
                    break
                    case 'jaksel':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


                    db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    kentut = await fetchJson(`https://api.lolhuman.xyz/api/randombahasa?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, kentut.result, troli)
                    break  
                    case 'tohex':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


                    db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    ja = await fetchJson(`https://api.lolhuman.xyz/api/convert/strtohex?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, ja.result, troli)
                    break  

                    case 'tostring':
                    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


                    db.users[m.sender].limit -= 1 // -1 limit


                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Ridwan sangat gansz`)                                       
                    zni = await fetchJson(`https://api.lolhuman.xyz/api/convert/hextostr?apikey=${apikey}&text=${text}`)
                    wxp.sendText(m.chat, zni.result, troli)
                    break                   		




//━━━━━━━━━━━━━━━[ AKHIR FITUR DARI REST API LOLHUMAN ]━━━━━━━━━━━━━━━\\






//━━━━━━━━━━━━━━━[ FITUR YANG GA PAKE APIKEY ]━━━━━━━━━━━━━━━\\



                case 'twtdl': case 'twitter': {
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = await fetchJson(`https://api-v1.majhcc.com/api/twitter?url=${text}`)                    
                    pakz = await getBuffer(`${ini_url.url}`)                    
                    await wxp.sendMessage(m.chat, { video: pakz, caption: `Download From : ${text}\n\n${kata}` }, { quoted: m })
                    }
                    break
                                         
case 'fakedata': case 'fdt': {
ajzi = await fetchJson(`https://api-v1.majhcc.com/api/fake-address`)
sik = `*${atas}FAKE DATA${kanan}*\n`
sik += `Name : ${ajzi.name}\n`
sik += `Email : ${ajzi.email}\n`
sik += `Phone : ${ajzi.phone}\n`
sik += `Post Code : ${ajzi.postcode}\n`
sik += `Street Addres : ${ajzi.streetAddress}\n`
sik += `City : ${ajzi.city}\n`
sik += `Country : ${ajzi.country}\n`
sik += `State : ${ajzi.state}\n`
sik += `Company : ${ajzi.company}\n`
sik += `Gender : ${ajzi.gender}\n`
sik += `*${atas}CREDIT${kanan}*\n`
sik += `Type : ${ajzi.credit.type}\n`
sik += `Number : ${ajzi.credit.number}\n`
sik += `Name : ${ajzi.credit.name}\n`
sik += `Email : ${ajzi.comemail}\n`
sik += `Date Of Birth : ${ajzi.dob}\n`
sik += `Age : ${ajzi.age}\n`
sik += `Job : ${ajzi.jobtitle}\n`
sik += `Expired : ${ajzi.credit.expirationDate}\n`
sik += `*${atas}OTHER${kanan}*\n`
sik += `Account No : ${ajzi.accountNo}\n`
sik += `Username : ${ajzi.username}\n`
sik += `Password : ${ajzi.passw}\n`
sik += `IPv4 : ${ajzi.ipv4}\n`
sik += `IPv6 : ${ajzi.ipv6}\n`
sik += `MAC Addres : ${ajzi.macad}\n`
sik += `Agent : ${ajzi.uagent}\n`
}
wxp.sendText(m.chat, sik, troli)
break
case 'fakedata2': case 'fdt2':
if (!isCreator) throw mess.owner


m.reply(`Tunggu sebentar sedang mencari data...`)
await sleep(1000)
m.reply(`Data ditemukan`)
await sleep(1000)
m.reply(`Data akan dikirimkan dalam waktu 10 detik`)
await sleep(1000)
m.reply(`3`)
await sleep(100)
m.reply(`2`)
await sleep(100)
m.reply(`1`)
await sleep(10)
i = await fetchJson(`https://api-v1.majhcc.com/api/fake-address`)
let hekernih = ``
hekernih += `Name : ${i.name}\n`
hekernih += `Email : ${i.email}\n`
hekernih += `Password : ${i.passw}\n`
hekernih += `Birthday : ${i.dob}\n`
hekernih += `Phone Number : ${i.phone}\n`
m.reply(hekernih)
break
   case 'rules':
   m.reply(`${rulesnya}`)
     break
    case 'sewabot': case 'sewa': case 'donasi': case 'donate':  case 'donate': 
wxp.sendText(m.chat, `${wase}`, troli1)	
break
case 'tutorial':
case 'tutor':
m.reply(`${tutorial}`)


break
                                        


case 'menfes':
if (!text) throw `Mau menfes ke siapa?\nContoh : menfes 6285692672176|haii sayang|Ridwan`
get_args = args.join(" ").split("|")
nomor = get_args[0]
pesan = get_args[1]
dari = get_args[2]
wxp.sendMessage(`${nomor}@s.whatsapp.net`, { text: `*${atas}SECRET CHAT${kanan}*\nPesan : ${pesan}\nDari : ${dari}`})
m.reply(`berhasil mengirim pesan ke:\n${nomor}\ndengan text : ${pesan}\nDari : ${dari}\n\n${kata}`)
break
case 'sc': {
        yodak = fs.readFileSync('./music/nih.m4a')


	    wxp.sendMessage(m.chat, {audio: yodak, mimetype: 'audio/mp4', ptt:true }, { quoted : m })
			     
			
        await sleep(2000)
        m.reply(`${scnya}`)
               }			
break

case 'setbio':
                    if (!isCreator) throw mess.owner
                    if (!text) throw `mana kata-katanya?`
					iyek = body.slice(7)
					wxp.setStatus(`${iyek}`)
					m.reply(`Sukses mengganti bio ke ${body.slice(7)}`)
					break


case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    wxp.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    wxp.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    wxp.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    wxp.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    wxp.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    wxp.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    wxp.modifyChat({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break                                                        
	    case 'family100': { //this is in indonesian so if u want to activate u can but will be in indonesian


    if ('family100'+m.chat in _family100) {


        m.reply('There are still unfinished sessions!')


        throw false


    }


    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')


    let random = anu[Math.floor(Math.random() * anu.length)]


    let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()


    _family100['family100'+m.chat] = {


        id: 'family100'+m.chat,


        pesan: await wxp.sendText(m.chat, hasil, m),


        ...random,


        terjawab: Array.from(random.jawaban, () => false),


        hadiah: 6,


    }


}


break


            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await wxp.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    wxp.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wxp.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wxp.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wxp.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wxp.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wxp.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    wxp.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wxp.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                wxp.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
//━━━━━━━━━━━━━━━[ COMMAND GROUP ]━━━━━━━━━━━━━━━\\



case 'join': {


          if (!isPremium) throw `${kataprem}`
          		db.users[m.sender].daily -= 1 // -1 limit


	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


    if (!text) throw 'Enter the group link!'


    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'


    m.reply(mess.wait)


    let result = args[0].split('https://chat.whatsapp.com/')[1]
    
    await wxp.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))    
}


break
/*case 'freejoin': {
	        if (!isPremium && global.db.users[m.sender].daily < 1) return m.reply(mess.endDaily) // response when limit runs out


if (!args[0]) return m.reply('Linknya mana kak?')
vdd = args[0]
let vcc = vdd.split('https://chat.whatsapp.com/')[1]
if (!vcc) return m.reply('Link invalid!')
if (isCreator) {
await wxp.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply('Succes')
} else {
wxp.query({
tag: 'iq',
attrs: {
type: 'get',
xmlns: 'w:g2',
to: '@g.us'
},
content: [{ tag: 'invite', attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 150) {
m.reply(`Maaf anggota group anda kurang dari 150, minimal agar bot join harus mempunyai lebih dari 150 anggota\nMau tanpa batas anggota ? ketik sewabot`)
} else if (sizny > 150) {
		db.users[m.sender].daily -= 1 // -1 limit


	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


await wxp.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply('Succes')
} else {
m.reply('Error')
}
}).catch(_ => _)
}
}
break*/
case 'leave': {


    if (!isAdmins && !isCreator) throw mess.admin
    await wxp.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


}


break


	case 'kick': {


		if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


	case 'add': {


		if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


	case 'culik': {
//if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group


let pantek = []
  for (let mem of participants) {
  pantek.push(mem.jid)
  }
  wxp.groupParticipantsUpdate(args[0], pantek)
}
break
	case 'promote': {


		if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


	case 'demote': {


		if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


        case 'block': {


		if (!isCreator) throw mess.owner


		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


        case 'unblock': {


		if (!isCreator) throw mess.owner


		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'


		await wxp.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


	}


	break


	    case 'setname': case 'setsubject': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


    if (!text) throw 'Text ?'


    await wxp.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))


}


break


          case 'setdesc': case 'setdesk': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


    if (!text) throw 'Text ?'


    await wxp.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))


}


break


    case 'hacked':


	      if (!isCreator) throw mess.owner


          if (!text) throw `Example: *${prefix + command} Owner is handsome*`         


          m.reply('bye² group ')


          tessgc = await getBuffer(`https://d.top4top.io/p_226006pnc1.jpg`)


          wxp.updateProfilePicture (m.chat, tessgc)


          wxp.groupUpdateSubject(m.chat, `Kudeta By ${q}`)


          wxp.groupUpdateDescription(m.chat, `*${q} was here!!*`)         


          wxp.sendText(m.chat, `Succes Hacked`, m)
          
		  members_id = []
		  for (let mem of participants) {
	   	  members_id.push(mem.jid)
	  	  }
          wxp.groupParticipantsUpdate(m.chat, members_id)
          break				


          case 'setppbot': case 'setbotpp': {


    if (!isCreator) throw mess.owner


    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`


    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    await wxp.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))


    m.reply(mess.success)


    }


    break


           case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {


    if (!m.isGroup) throw mess.group


    if (!isAdmins) throw mess.admin


    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`


    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    await wxp.updateProfilePicture(m.chat, { url: media })//.catch((err) => fs.unlinkSync(media))


    m.reply(mess.success)


    }


    break
case 'profile': case 'propil': case 'profil': case 'me':
try{


var pp_userb = await wxp.getProfilePicture(m.sender)
				} catch {
					var pp_userb = 'https://telegra.ph/file/e3696b85fb3afb3119101.gif'
				}
			let pp_userz = await getBuffer(pp_userb)
              propile = `      ${atas}*USER INFO*${kanan}\n\n${sp} *Username:* ${pushname}\n${sp} *Tag:* @${m.sender.split('@')[0]}\n${sp} *Link:* https://wa.me/${m.sender.split('@')[0]}\n${sp} *Premium User*: ${isPremium ? 'Ya' : 'No'}\n${sp} *Admin Group*: ${isAdmins ? 'Ya' : 'No'}\n$`
              wxp.sendMessage(m.chat, { image: pp_userz,caption: propile, m})
              break    
case 'grupinfo': case 'groupinfo':


try{


 var pic = await wxp.getProfilePicture(m.chat)


  } catch {


 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'


  }


let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`


ds = await getBuffer(pic)


wxp.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})


break


case 'tagall': case 'tag': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


let teks = `══✪〘 *👥 Tag All* 〙✪══


 


 ➲ *Message : ${q ? q : 'blank'}*\n\n`


    for (let mem of participants) {


    teks += `${sp} @${mem.id.split('@')[0]}\n`


    }


    wxp.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })


    }


    break


    case 'hidetag': {


if (!m.isGroup) throw mess.group


if (!isAdmins) throw mess.admin


wxp.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })


}


break


	    case 'style': case 'styletext': {


	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


		let { styletext } = require('./lib/scraper')


		if (!text) throw 'Enter Query text!'


    let anu = await styletext(text)


    let teks = `Entered Text:  ${text}\n\n`


    for (let i of anu) {


        teks += `${sp} *${i.name}* : ${i.result}\n\n`


    }


    m.reply(teks)


	    }


	    break


   case 'vote': {


if (!m.isGroup) throw mess.group


if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`


if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`


m.reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)


vote[m.chat] = [q, [], []]


await sleep(1000)


upvote = vote[m.chat][1]


devote = vote[m.chat][2]


teks_vote = `*「 VOTE 」*





*Reason:* ${vote[m.chat][0]}





 [ UPVOTE ]


• Total: ${vote[m.chat][1].length}





 [ DEVOTE ]


• Total: ${vote[m.chat][2].length}





*${prefix}deletevote* - to delete votes`


let buttonsVote = [


  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},


  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}


]





let buttonMessageVote = {


    text: teks_vote,


    footer: wxp.user.name,


    buttons: buttonsVote,


    headerType: 1


}


wxp.sendMessage(m.chat, buttonMessageVote)


	    }


break
	    case 'call':{
	        if (!isCreator) throw mess.owner
	     if(text.includes("@")) {
                    exec("python3 call.py "+text.split("@62")[1], (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    } else if(text.startsWith("8")) {
                    	exec("python3 call.py "+text, (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    	} else {
                    	m.reply(`Masukkan nomor contoh\n${prefix+command} 81319868981`)
                    	}
             }
	    break
	    case 'spamwa':{
	        if (!isCreator) throw mess.owner


	     if(text.includes("@")) {
                    exec("python3 wangsaff.py "+text.split("@62")[1], (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    } else if(text.startsWith("0")) {
                    	exec("python3 wangsaff.py "+text.split("0")[1], (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    	} else {
                    	m.reply(`Masukkan nomor contoh\n${prefix+command} 081319868981`)
                    	}
             }
	    break            
   case 'upvote': {


if (!m.isGroup) throw mess.group


if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`


isVote = vote[m.chat][1].concat(vote[m.chat][2])


wasVote = isVote.includes(m.sender)


if (wasVote) throw 'You have Voted'


vote[m.chat][1].push(m.sender)


menvote = vote[m.chat][1].concat(vote[m.chat][2])


teks_vote = `*「 VOTE 」*





*Reason:* ${vote[m.chat][0]}





 [ UPVOTE ]


 


• Total: ${vote[m.chat][1].length}


${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}


 








 [ DEVOTE ]


 


• Total: ${vote[m.chat][2].length}


${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}





*${prefix}hapusvote* - to delete votes`


let buttonsUpvote = [


  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},


  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}


]





let buttonMessageUpvote = {


    text: teks_vote,


    footer: wxp.user.name,


    buttons: buttonsUpvote,


    headerType: 1,


    mentions: menvote


 }


wxp.sendMessage(m.chat, buttonMessageUpvote)


	    }


 break


    case 'devote': {


if (!m.isGroup) throw mess.group


if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`


isVote = vote[m.chat][1].concat(vote[m.chat][2])


wasVote = isVote.includes(m.sender)


if (wasVote) throw 'You Have Voted'


vote[m.chat][2].push(m.sender)


menvote = vote[m.chat][1].concat(vote[m.chat][2])


teks_vote = `*「 VOTE 」*





*Reason:* ${vote[m.chat][0]}





 [ UPVOTE ]


 


• Total: ${vote[m.chat][1].length}


${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}


 








 [ DEVOTE ]


 


• Total: ${vote[m.chat][2].length}


${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}





*${prefix}hapusvote* - to delete votes`


let buttonsDevote = [


  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},


  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}


]





let buttonMessageDevote = {


    text: teks_vote,


    footer: wxp.user.name,


    buttons: buttonsDevote,


    headerType: 1,


    mentions: menvote


}


wxp.sendMessage(m.chat, buttonMessageDevote)


	}


break


     


case 'cekvote':


if (!m.isGroup) throw mess.group


if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`


teks_vote = `*「 VOTE 」*





*Reason:* ${vote[m.chat][0]}





 [ UPVOTE ]


 


• Total: ${upvote.length}


${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}


 








 [ DEVOTE ]


 


• Total: ${devote.length}


${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}





*${prefix}hapusvote* - to delete votes


`


wxp.sendTextWithMentions(m.chat, teks_vote, m)


break


		case 'deletevote': case'delvote': case 'hapusvote': {


if (!m.isGroup) throw mess.group


if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`


delete vote[m.chat]


m.reply('Successfully Deleted Vote Session In This Group')


	    }


break


   case 'group': case 'grup': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


    if (args[0] === 'close'){


        await wxp.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successful Closing The Group`)).catch((err) => m.reply(jsonformat(err)))


    } else if (args[0] === 'open'){


        await wxp.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successful Opening The Group`)).catch((err) => m.reply(jsonformat(err)))


    } else {


    let buttons = [


{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },


{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Group Mode`, wxp.user.name, m)





 }


}


break


case 'editinfo': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


 if (args[0] === 'open'){


    await wxp.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))


 } else if (args[0] === 'close'){


    await wxp.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Close Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))


 } else {


 let buttons = [


{ buttonId: 'editinfo open', buttonText: { displayText: 'OEPN' }, type: 1 },


{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Edit Info`, wxp.user.name, m)





}


}


break


case 'antilink':


	        if (!m.isGroup) return m.reply(`This feature only be used in group`)


			if (!isAdmins) return m.reply(`This feature could be used by admin only`)


			if (!isBotAdmins) return m.reply(`Bot must be admin first`)


					if (args[0] === 'on') {


						if (isAntiLink) return m.reply('Already Activated')


						antilink.push(m.chat)


						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))


						m.reply('```ANTILINK ACTIIVED IN GROUP```')


						wxp.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})


					} else if (args[0] === 'off') {


						if (!isAntiLink) return m.reply('already deactivated')


						var ini = antilink.indexOf(m.chat)


						antilink.splice(ini, 1)


						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))


						m.reply('```ANTILINK NOT ACTIVE IN GROUP```')


					} else {


     let buttons = [


{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },


{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Anti Link`, wxp.user.name, m)}


					break
case 'antipager':


	        if (!m.isGroup) return m.reply(`This feature only be used in group`)


			if (!isAdmins) return m.reply(`This feature could be used by admin only`)


			if (!isBotAdmins) return m.reply(`Bot must be admin first`)


					if (args[0] === 'on') {


						if (isAntipager) return m.reply('Already Activated')


						antipager.push(m.chat)


						fs.writeFileSync('./database/antipager.json', JSON.stringify(antipager))


						m.reply('```ANTIPAGER ACTIIVED IN GROUP```')


						wxp.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed Anti pagar\nIf you violate then I will kick`})


					} else if (args[0] === 'off') {


						if (!isAntipager) return m.reply('already deactivated')


						var ini = antipager.indexOf(m.chat)


						antipager.splice(ini, 1)


						fs.writeFileSync('./database/antipager.json', JSON.stringify(antipager))


						m.reply('```ANTIPAGER NOT ACTIVE IN GROUP```')


					} else {


     let buttons = [


{ buttonId: 'antipager on', buttonText: { displayText: 'ON' }, type: 1 },


{ buttonId: 'antipager off', buttonText: { displayText: 'OFF' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Anti Anti Pagar`, wxp.user.name, m)}


					break 
	
case 'antivirtex':


	        if (!m.isGroup) return m.reply(`This feature only be used in group`)


			if (!isAdmins) return m.reply(`This feature could be used by admin only`)


			if (!isBotAdmins) return m.reply(`Bot must be admin first`)


					if (args[0] === 'on') {


						if (isAntivirtex) return m.reply('Already Activated')


						antivirtex.push(m.chat)
=
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))


						m.reply('```ANTIVIRTEX ACTIIVED IN GROUP```')


						wxp.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed Anti Virtex\nIf you violate then I will kick`})


					} else if (args[0] === 'off') {


						if (!isAntivirtex) return m.reply('already deactivated')


						var ini = antivirtex.indexOf(m.chat)


						antivirtex.splice(ini, 1)


						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))


						m.reply('```ANTIVIRTEX NOT ACTIVE IN GROUP```')


					} else {


     let buttons = [


{ buttonId: 'antivirtex on', buttonText: { displayText: 'ON' }, type: 1 },


{ buttonId: 'antivirtex off', buttonText: { displayText: 'OFF' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Anti Virtex`, wxp.user.name, m)}


					break 


					case 'autokick':
						        if (!m.isGroup) return m.reply(`This feature only be used in group`)


			if (!isAdmins) return m.reply(`This feature could be used by admin only`)


const kickber = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan


let po = generateWAMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "KLICK HERE","footerText": "jika sudah yakin, silahkan klick tombol dibawah ini","listType": "SINGLE_SELECT","sections": list}}, {})


return wxp.relayMessage( m.chat, po.message, { messageId: po.key.id } )


}


   list = []


   listmenu = [`autokick2`,`aqsw`]


   listmenuu = [`IYA`,`TIDAK`]


   nombor = 1


   startnum = 0


   for (let x of listmenu) {


   const yy = {title: 'Menu Ke ' + nombor++,


        rows: [


           {


title: `${listmenuu[startnum++]}`,


description: ``,


rowId: `${prefix}${x}`


          }


        ]


       }


list.push(yy)


           }


   kickber(m.chat, `Apakah kamu yakin ingin mengaktifkan *Auto Kick*?`,  `Siapapun yang ngirim pesan disini akan di kick (kecuali admin)`, list)


   break
				
   case 'aqsw':
   m.reply(`Okey`)
   break					
					case 'autokick2':


	        if (!m.isGroup) return m.reply(`This feature only be used in group`)


			if (!isAdmins) return m.reply(`This feature could be used by admin only`)


			if (!isBotAdmins) return m.reply(`Bot must be admin first`)


					if (args[0] === 'on') {


						if (isAutokick) return m.reply('Already Activated')


						autokick.push(m.chat)


						fs.writeFileSync('./database/autokick.json', JSON.stringify(autokick))


						m.reply('```AUTO KICK ACTIIVED IN GROUP```')


						wxp.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed Auto Kick\nDont send any message`})


					} else if (args[0] === 'off') {


						if (!isAutokick) return m.reply('already deactivated')


						var ini = autokick.indexOf(m.chat)


						autokick.splice(ini, 1)


						fs.writeFileSync('./database/autokick.json', JSON.stringify(autokick))


						m.reply('```AUTO KICK NOT ACTIVE IN GROUP```')


					} else {


     let buttons = [


{ buttonId: 'autokick on', buttonText: { displayText: 'ON' }, type: 1 },


{ buttonId: 'autokick off', buttonText: { displayText: 'OFF' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Auto Kick`, wxp.user.name, m)}


					break 
															
					case 'antiwame': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


    if (args[0] === "on") {


    if (db.chats[m.chat].wame) return m.reply(`Already Activated`)


    db.chats[m.chat].wame = true


    m.reply(`Anti Wa.me Activated!`)


    } else if (args[0] === "off") {


    if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)


    db.chats[m.chat].wame = false


    m.reply(`Anti Wa.me is not activated!`)


    } else {


     let buttons = [


{ buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },


{ buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, wxp.user.name, m)


    }


 }


 break


					   case 'mute': {


    if (!m.isGroup) throw mess.group


    if (!isAdmins) throw mess.admin


    if (args[0] === "on") {


    if (db.chats[m.chat].mute) return m.reply(`Already activated`)


    db.chats[m.chat].mute = true


    m.reply(`${wxp.user.name} has been muted in this group !`)


    } else if (args[0] === "off") {


    if (!db.chats[m.chat].mute) return m.reply(`Already deactivated`)


    db.chats[m.chat].mute = false


    m.reply(`${wxp.user.name} has been unmuted in this group!`)


    } else {


     let buttons = [


{ buttonId: 'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },


{ buttonId: 'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `Mute Bot`, wxp.user.name, m)


    }


 }


 break


case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {


    if (!m.isGroup) throw mess.group


    let response = await wxp.groupInviteCode(m.chat)


    wxp.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })


}


break


case 'ephemeral': {


    if (!m.isGroup) throw mess.group


    if (!isBotAdmins) throw mess.botAdmin


    if (!isAdmins) throw mess.admin


    if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'


    if (args[0] === 'enable') {


        await wxp.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


    } else if (args[0] === 'disable') {


        await wxp.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))


    }


}


break


case 'delete': case 'del': {


    if (!m.quoted) throw false


    let { chat, fromMe, id, isBaileys } = m.quoted


    if (!isBaileys) throw 'The message was not sent by a bot!'


    wxp.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })


}


break


case 'bcgc': case 'bcgroup': {


    if (!isCreator) throw mess.owner


    if (!quoted) throw `Reply image With Caption ${prefix + command} kata`


    if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`


    let getGroups = await wxp.groupFetchAllParticipating()


    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])


    let anu = groups.map(v => v.id)


    m.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)


    for (let i of anu) {


        await sleep(100)


        let btn = [{


        urlButton: {


displayText: 'Group Bot',


url: `${groupwa}`


        }


    }, {


        quickReplyButton: {


displayText: 'Owner',


id: 'owner'


        }


    }]


          let media = await quoted.download()


          fatihgans = media
          let txt = `「 BROADCAST BOT 」\n\n${text}`


          wxp.send5ButImg(i, txt, wxp.user.name, fatihgans, btn, m)


        }


    m.reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)


}


break
case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(q => q.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: `${groupwa}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'menu'
                                }
                            }]
                      let media = await quoted.download()


          fatihgans = media
          let txt = `「 BROADCAST BOT 」\n\n${text}`


          wxp.send5ButImg(yoi, txt, wxp.user.name, fatihgans, btn, m)


        }


		m.reply(`Successful Sending Broadcast To ${anu.length}`)


}


            break
case 'chatinfo': {


    if (!m.quoted) m.reply('Reply to mesaage')


    let msg = await m.getQuotedObj()


    if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'


    let teks = ''


    for (let i of msg.userReceipt) {


        let read = i.readTimestamp


        let unread = i.receiptTimestamp


        let waktu = read ? read : unread


        teks += `${sp} @${i.userJid.split('@')[0]}\n`


        teks += ` ┗━${sp} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${sp} *Status :* ${read ? 'Read' : 'Unread'}\n\n`


    }


    wxp.sendTextWithMentions(m.chat, teks, m)


}


break


            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `  ${sp} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━  ${sp} *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}   ${sp} *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                wxp.sendTextWithMentions(m.chat, teks, m)
            }
            break
case 'q': case 'quoted': {


		if (!m.quoted) return m.reply('Reply Message!!')


		let wokwol = await wxp.serializeM(await m.getQuotedObj())


		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')


		await wokwol.quoted.copyNForward(m.chat, true)


}


	    break


	    	case 'listprem': case 'listpremium':
    case 'premlist':
		  teks = '*List Premium:*'
	      teks += `\n*Total : ${premium.length} user*`
		  wxp.sendTextWithMentions(m.chat, teks.trim(), fdoc2)
		  break
case 'listpc': {


     let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)


     let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`


     for (let i of anu) {


         let nama = store.messages[i].array[0].pushName


         teks += `${sp} *Name :* ${nama}\n${sp} *User :* @${i.split('@')[0]}\n${sp} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`


     }


     wxp.sendTextWithMentions(m.chat, teks, m)


 }


 break


    case 'listgc': {


     let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)


     let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`


     for (let i of anu) {


         let metadata = await wxp.groupMetadata(i)


         teks += `${sp} *Name :* ${metadata.subject}\n${sp} *Owner :* @${metadata.owner.split('@')[0]}\n${sp} *ID :* ${metadata.id}\n${sp} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${sp} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`


     }


     wxp.sendTextWithMentions(m.chat, teks, m)


 }


 break


 case 'listonline': case 'onlinelist': case 'liston': {


        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat


        let online = [...Object.keys(store.presences[id]), botNumber]


        wxp.sendText(m.chat, 'Online List:\n\n' + online.map(v => `${sp} @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })


 }


 break


case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {


if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`


m.reply(mess.wait)


        if (/image/.test(mime)) {


    let media = await quoted.download()


    let encmedia = await wxp.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })


    await fs.unlinkSync(encmedia)


} else if (/video/.test(mime)) {


    if ((quoted.msg || quoted).seconds > 61) return m.reply('Maximum 60 seconds!')


    let media = await quoted.download()


    let encmedia = await wxp.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })


    await fs.unlinkSync(encmedia)


} else {


    throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`


    }


}


break
case 'wm': case 'take': case 'colong': {


if (!quoted) throw `Reply Video/Image With Caption ${prefix + command} Packname|author\nContoh :\nRidwan|Gansz`


if (!text) throw `Reply Video/Image With Caption ${prefix + command} Packname|author\nContoh :\nRidwan|Gansz`


pekwem = args.join(" ").split("|")
tewem = pekwem[0]
towem = pekwem[1]
m.reply(mess.wait)


        if (/image/.test(mime)) {


    let media = await quoted.download()


    let encmedia = await wxp.sendImageAsSticker(m.chat, media, m, { packname: `${tewem}`, author: `${towem}` })
    await fs.unlinkSync(encmedia)


} else if (/video/.test(mime)) {


    if ((quoted.msg || quoted).seconds > 61) return m.reply('Maximum 60 seconds!')


    let media = await quoted.download()


    let encmedia = await wxp.sendVideoAsSticker(m.chat, media, m, { packname: `${tewem}`, author: `${towem}` })


    await fs.unlinkSync(encmedia)
} else if (!/webp/.test(mime)) {


    if ((quoted.msg || quoted).seconds > 61) return m.reply('Maximum 60 seconds!')


    let media = await quoted.download()


    let encmedia = await wxp.sendVideoAsSticker(m.chat, media, m, { packname: `${tewem}`, author: `${towem}` })


    await fs.unlinkSync(encmedia)
} else {


    throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`


    }


}


break
case 'ebinary': {


if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`


let { eBinary } = require('./lib/binary')


let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text


let eb = await eBinary(teks)


m.reply(eb)


        }


        break


case 'dbinary': {


if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`


let { dBinary } = require('./lib/binary')


let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text


let db = await dBinary(teks)


m.reply(db)


        }


        break


case 'emojimix': {


if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


	        if (!text) throw `Example : ${prefix + command} 😅+🤔`


		let [emoji1, emoji2] = text.split`+`


		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)


		for (let res of anu.results) {


		    let encmedia = await wxp.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })


		    await fs.unlinkSync(encmedia)


		}


	    }


	    break


	    case 'emojimix2': {


	    if (!text) throw `Example : ${prefix + command} 😅`


		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)


		for (let res of anu.results) {


		    let encmedia = await wxp.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })


		    await fs.unlinkSync(encmedia)


		}


	    }


	    break
         	                	       case 'smeme1': {


	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} Ridwan|Gansz`


	        if (!/image/.test(mime)) throw respond


if (!text) throw respond


	        m.reply(mess.wait)


atas = text.split('|')[0] ? text.split('|')[0] : '-'


bawah = text.split('|')[1] ? text.split('|')[1] : '-'


	        let dwnld = await quoted.download()


	        let { floNime } = require('./lib/uploader')


	        let fatGans = await floNime(dwnld)


	        let smeme = await getBuffer`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`


	        let FaTiH = await wxp.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })


	        await fs.unlinkSync(FaTiH)


}


	       break   


	       	       case 'smeme': {


	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} RidwanGans`


	        if (!/image/.test(mime)) throw respond


            if (!text) throw respond


	        m.reply(mess.wait)


	        let dwnld = await quoted.download()


	        let { floNime } = require('./lib/uploader')


	        let fatGans = await floNime(dwnld)


	        let smeme = await getBuffer(`https://api.memegen.link/images/custom/_/${encodeURIComponent(q)}.png?background=${fatGans.result.url}`)
	        let FaTiH = await wxp.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })


	        await fs.unlinkSync(FaTiH)


            }


	       break
 	        	       case 'smeme2': {


	        let { floNime } = require('./lib/uploader')	        


	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} RidwanGans`


	        if (!/image/.test(mime)) throw respond


	        if (!text) throw respond


	        m.reply(mess.wait)


	        let dwnld = await quoted.download()


	        let fatGans = await floNime(dwnld)


	        let smeme = await getBuffer`https://api.memegen.link/images/custom/${encodeURIComponent(text)}.png?background=${fatGans.result.url}`


	        let FaTiH = await wxp.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })


	        await fs.unlinkSync(FaTiH)


}


	       break
    


	       case 'searchgc': {
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: wxp,
jpegThumbnail: wxp,
caption: teks,
footer: "© WibuXploit BOT",
buttons: buttons,
headerType: 4
}
wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'tohuruf': {
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'toimage': case 'toimg': {


    if (!quoted) throw 'Reply Image'


    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`


    m.reply(mess.wait)


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    let ran = await getRandom('.png')


    exec(`ffmpeg -i ${media} ${ran}`, (err) => {


        fs.unlinkSync(media)


        if (err) throw err


        let buffer = fs.readFileSync(ran)


        wxp.sendMessage(m.chat, { image: buffer }, { quoted: m })


        fs.unlinkSync(ran)


    })


}


break
	        case 'tovid': case 'tomp4': case 'tovideo': {


    if (!quoted) throw 'Reply Image'


    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`


    m.reply(mess.wait)


		let { webp2mp4File } = require('./lib/uploader')


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    let webpToMp4 = await webp2mp4File(media)


    await wxp.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })


    await fs.unlinkSync(media)


}


break


case 'toaud': case 'toaudio': {


if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`


if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`


m.reply(mess.wait)


let media = await quoted.download()


let { toAudio } = require('./lib/converter')


let audio = await toAudio(media, 'mp4')


wxp.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })


}


break


case 'getmusic': case 'toaudio': case 'tomp3': {


if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`


if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`


if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`


m.reply(mess.wait)


let media = await quoted.download()


let { toAudio } = require('./lib/converter')


let audio = await toAudio(media, 'mp4')


wxp.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', ptt:false }, { quoted : m })


}


break


case 'mcserver': case 'mcquery': {
if (!args.join(" ")) return m.reply(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.wibuxploit.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return m.reply("ipnya mana kak?")
if (!portnya) return m.reply("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
m.reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
m.reply(jsonformat(success));
q.close();
})
}
break       
 case 'tovn': case 'toptt': {


if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`


if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`


m.reply(mess.wait)


let media = await quoted.download()


let { toPTT } = require('./lib/converter')


let audio = await toPTT(media, 'mp4')


wxp.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})


}


break


case 'togif': {


    if (!quoted) throw 'Reply Image'


    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`


    m.reply(mess.wait)


		let { webp2mp4File } = require('./lib/uploader')


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    let webpToMp4 = await webp2mp4File(media)


    await wxp.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })


    await fs.unlinkSync(media)


}


break


	        case 'tourl': {


    m.reply(mess.wait)


		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    if (/image/.test(mime)) {


        let anu = await TelegraPh(media)


        m.reply(util.format(anu))


    } else if (!/image/.test(mime)) {


        let anu = await UploadFileUgu(media)


        m.reply(util.format(anu))


    }


    await fs.unlinkSync(media)


}


break


case 'imagenobg': case 'removebg': case 'remove-bg': {


	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`


	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`


	    let remobg = require('remove.bg')


	    let apirnobg = ['wharsdwDLZiRL2p2csHfsu1x','XQ9XU8pra89eGgewBjaLxsJP','9gPuH7r6DF49Kd7NLqkdBKdz','eZJcCMsyPdWk9CgKkGasbNxt','qWPohANPVrs6mxM9ALjQ7CVu','fX6KxkUj4961WMggqKJDaabr']


	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]


	    hmm = await './src/remobg-'+getRandom('')


	    localFile = await wxp.downloadAndSaveMediaMessage(quoted, hmm)


	    outputFile = await './src/hremo-'+getRandom('.png')


	    m.reply(mess.wait)


	    remobg.removeBackgroundFromImageFile({


	      path: localFile,


	      apiKey: apinobg,


	      size: "regular",


	      type: "auto",


	      scale: "100%",


	      outputFile 


	    }).then(async result => {


	    wxp.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })


	    await fs.unlinkSync(localFile)


	    await fs.unlinkSync(outputFile)


	    })


	    }


	    break
	    	    case 'yts': case 'ytsearch': {


	    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    if (!text) throw `Example : ${prefix + command} story wa anime`


    let yts = require("yt-search")


    let search = await yts(text)


    let teks = 'Website Search\n\n Result From '+text+'\n\n'


    let no = 1


    for (let i of search.all) {


        teks += `${sp} No : ${no++}\n${sp} Type : ${i.type}\n${sp} Video ID : ${i.videoId}\n${sp} Title : ${i.title}\n${sp} Views : ${i.views}\n${sp} Duration : ${i.timestamp}\n${sp} Upload At : ${i.ago}\n${sp} Author : ${i.author.name}\n${sp} Url : ${i.url}\n\n─────────────────\n\n`


    }


    wxp.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })


}


break


    case 'ssweb': case 'ss':
        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    if (!text) throw `Urlnya mana kak..`
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${q}`)
	      buff = await getBuffer(anu.screenshot)
	      wxp.sendMessage(m.chat, { image: buff, caption: `screenshot from web : ${text}` }, {quoted: m }).catch(e => {
	      m.reply('Hemmm web maintenance')
	      })
          break  
        case 'google': {


        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    if (!text) throw `Example : ${prefix + command} Kapan RidwanGans kaya`


    let google = require('google-it')


    google({'query': text}).then(res => {


    let teks = `Google Search From : ${text}\n\n`


    for (let g of res) {


    teks += `${sp} *Title* : ${g.title}\n`


    teks += `${sp} *Description* : ${g.snippet}\n`


    teks += `${sp} *Link* : ${g.link}\n\n────────────────────────\n\n`


    } 


    m.reply(teks)


    })


    }


    break


     case 'image': case 'img':   case 'gimage': case 'googleimage': {


    if (m.isGroup) throw `Hanya bisa di lakukan di pribadi Bot`
      if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


        if (!text) throw `Example : ${prefix + command} ml nana`


        let gis = require('g-i-s')


        gis(text, async (error, result) => {


        n = result


        images = n[Math.floor(Math.random() * n.length)].url


        let buttons = [


        {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}


    ]


    let buttonMessage = {


        image: { url: images },


        caption: `*-------「 GIMAGE SEARCH 」-------*


🤠 *Query* : ${text}


🔗 *Media Url* : ${images}`,


        footer: wxp.user.name,


        buttons: buttons,


        headerType: 4


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


        })


        }


        break


	    case 'play': case 'ytplay': {


	    if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    if (!text) throw `Example : ${prefix + command} story wa anime`


    let yts = require("yt-search")


    let search = await yts(text)


    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]


    let buttons = [


        {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: ' Audio 128kbps'}, type: 1},


        {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: ' Video 360p'}, type: 1}
    ]


    let buttonMessage = {


        image: { url: anu.thumbnail },


        caption: `


${sp} Title : ${anu.title}


${sp} Ext : Search


${sp} ID : ${anu.videoId}


${sp} Duration : ${anu.timestamp}


${sp} Viewers : ${anu.views}


${sp} Upload At : ${anu.ago}


${sp} Author : ${anu.author.name}


${sp} Channel : ${anu.author.url}


${sp} Description : ${anu.description}


${sp} Url : ${anu.url}`,


        footer: wxp.user.name,


        buttons: buttons,


        headerType: 4


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break


      case 'brainly':


      if (!text) throw `Textnya mana?`
 brainly(args.join(" ")).then(res => {


 hmm = '────────────\n'


 for (let Y of res.data) {


 hmm += `\n*「 _BRAINLY_ 」*\n\n*${sp} Pertanyaan:* ${Y.pertanyaan}\n\n*${sp} Jawaban:* ${Y.jawaban[0].text}\n───────────\n`


}


 m.reply(hmm)
 console.log(res)
 })
 break
      case 'ytmp3': case 'ytaudio':
        if (!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply(`${wrongFormat}`)   
        if (!text) throw `example : ${ prefix + command } https://youtube.com/watch?v=AjaaGHi0UOQ`
	   if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    let { yta } = require('./lib/y2mate')


    let quality = args[1] ? args[1] : '128kbps'


    let media = await yta(text, quality)


    if (media.filesize >= 99999999) return m.reply('Audio size is too big '+util.format(media))


    wxp.sendImage(m.chat, media.thumb, `${sp} Title : ${media.title}\n${sp} File Size : ${media.filesizeF}\n${sp} Url : ${isUrl(text)}\n${sp} Ext : MP3\n${sp} Resolution : ${args[1] || '128kbps'}`, m)


    wxp.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })


break


case 'ytmp4': case 'ytvideo': {
if (!isUrl(args[0]) && !args[0].includes('youtu')) return m.reply(`${wrongFormat}`)   
        if (!text) throw `example : ${ prefix + command } https://youtube.com/watch?v=AjaaGHi0UOQ`
	   if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    let { ytv } = require('./lib/y2mate')


    let quality = args[1] ? args[1] : '360p'


    let media = await ytv(text, quality)


    if (media.filesize >= 99999999) return m.reply('Video size is too big '+util.format(media))


    wxp.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${sp} Title : ${media.title}\n${sp} File Size : ${media.filesizeF}\n${sp} Url : ${isUrl(text)}\n${sp} Ext : MP4\n${sp} Resololution : ${args[1] || '360p'}` }, { quoted: m })


}


break


case 'ytmp42': {


if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    let { ytv } = require('./lib/y2mate')


    if (!text) throw `Example : ${prefix + command} https://Website.com/watch?v=PtFMh6Tccag%27 360p`


    let quality = args[1] ? args[1] : '720p'


    let media = await ytv(text, quality)


    if (media.filesize >= 99999999) return m.reply('Video size is too big '+util.format(media))


    wxp.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${sp} Title : ${media.title}\n${sp} File Size : ${media.filesizeF}\n${sp} Url : ${isUrl(text)}\n${sp} Ext : MP4\n${sp} Resololution : ${args[1] || '720p'}` }, { quoted: m })


}


break


            case 'get':
            case 'fetch':
            if(!text) return m.reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            m.reply(bu)
            })   
            break
            case 'getvideo': {
            if(!text) return m.reply('Linknya?')
            aih = await getBuffer(`${text}`)
            wxp.sendMessage(m.chat, { video: aih, caption: `Result From web : ${text}`}, { quoted: m })
            }
            break
            case 'getimage': {
            if(!text) return m.reply('Linknya?')
            aih = await getBuffer(`${text}`)
            wxp.sendMessage(m.chat, { image: aih, caption: `Result From web : ${text}`}, { quoted: m })
            }
            break
case 'pinterest': {


if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.users[m.sender].limit -= 1 // -1 limit


    m.reply(mess.wait)


		let { pinterest } = require('./lib/scraper')


    anu = await pinterest(text)


    result = anu[Math.floor(Math.random() * anu.length)]


    wxp.sendMessage(m.chat, { image: { url: result }, caption: `${sp} Media Url : `+result }, { quoted: m })


}


break
        case 'nuklir': case 'nuklirkode':
         if (m.isGroup) throw `Hanya bisa digunakan di pribadi bot`
          if (!isPremium) throw `${kataprem}`
          const { nuklirkode } = require('./lib/nuklir.js')
          wxp.sendMessage(m.chat, nuklirkode(), text, {quoted: m})
          break
            case 'emoji':    
      case 'semoji':
          if (!text) throw `Send command *${prefix}semoji 😁*`
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          wxp.sendImageAsSticker(m.chat, `${teks}`, m, { packname: global.packname, author: global.author })       
                })
              break
                          case 'emoji1':    
      case 'semoji1':
          if (!text) throw `Send command *${prefix}semoji 😁*`
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[0].url}`;
          wxp.sendImageAsSticker(m.chat, `${teks}`, m, { packname: global.packname, author: global.author })       
                })
              break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						wxp.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break		
case 'shortlink':
case 'shorturl':
case 'short':
if (!text) throw `linknya mana??`
var { url, delete: del } = (await fetchJson('https://clph.pw/create.php?url='+encodeURIComponent(text))).result
response = `*SHORT URL*\n
Original Url : \`\`\`${text}\`\`\`

=============================

Short Url : \`\`\`${url}\`\`\`

=============================`.trim()
m.reply(response)
//m.reply(m.sender, `*DELETE URL*\n\n\`\`\`${del}\`\`\`\n\nNote : Jika Url Dihapus, Maka Short Link Anda Tidak Bisa Di Akses..`, m)
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

          @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
        ]
        await wxp.sendButtonText(m.chat, buttons, jawab, wxp.user.name, m, {mentions: ments})
}
break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

          @${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
        ]
        await wxp.sendButtonText(m.chat, buttons, jawab, wxp.user.name, m, {mentions: menst})
}
break
/*					case 'siapakah': case 'siapa': {
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} yang cinta aku`)		
					siapk = [`@${m.sender.split('@')}`,`Mamak Mu`,`Ayah Mu`,`Adik Mu`,`Kakak Mu`,`Saudara Mu`,`Sepupu Mu`,`Keponakan Mu`,`Tante Mu`,`Gatau`,`@${meki.split('@')}`]
					ah = siapk[Math.floor(Math.random() * siapk.length)]
					wxp.sendMessage(m.chat, { text: `Pertanyaan : ${command} ${q}\nJawaban : ${ah}` }, { quoted: m })					
					}
					break*/
					       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              wxp.sendMessage(m.chat, { image: truteh, caption: '*Truth*\n\n'+ ttrth }, { quoted: m })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              wxp.sendMessage(m.chat, { image: buffer, caption: '*dare*\n\n'+ der }, { quoted: m })
              break		
					case 'apakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ga bakal']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					wxp.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
					break
					case 'bisakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
					wxp.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
					break
					case 'bagaimanakah':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee','gatau']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
					wxp.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })					
					break
					case 'rate':
				if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					wxp.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
					break
					case 'gantengcek':
					case 'cekganteng':   
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Ridwan`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					wxp.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
					break
					case 'cantikcek':
					case 'cekcantik':  
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Ridwan`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					wxp.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
					break					
					case 'sangecek':
					case 'ceksange':
					case 'gaycek':
					case 'cekgay':
					case 'lesbicek':
					case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
					wxp.sendMessage(m.chat, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
					case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
					wxp.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
					case 'cekmati':


  if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)


  predea = await axios.get(`https://api.agify.io/?name=${q}`)


  m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)


  break


					case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':


if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`


ter = command[1].toLowerCase()


tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text


m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))


break


case 'react': case 'r': {


    if (!isCreator) throw mess.owner


    reactionMessage = {


        react: {


text: args[0],


key: { remoteJid: m.chat, fromMe: false, id: quoted.id }


        }


    }


    wxp.sendMessage(m.chat, reactionMessage)


}


break  
       case 'wangy':
  if (!q) return m.reply(`Example : ${prefix + command} komi`)
  qq = q.toUpperCase()
  awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
  m.reply(awikwok)
  break
       case 'simp':
  if (!q) return m.reply(`Example : ${prefix + command} komi`)
  name = q.toUpperCase()
  simph = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${name}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${name}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${name} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${name}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
  m.reply(simph)
  break
       case 'nenen':
  if (!q) return m.reply(`Example : ${prefix + command} komi`)
  name = q.toUpperCase()
  nenen =  `NENEN NENEN KEPENGEN NENEN SAMA ${name}. TETEK GEDE NAN KENCANG MILIK ${name} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${name}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${name}. BIARKAN AKU MENGENYOT NENENMU ${name}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${name} WANGIIII`
  m.reply(nenen)
  break
       case 'sherk':
  if (!q) return m.reply(`Example : ${prefix + command} komi`)
  name = q.toUpperCase()
  sherk = `Usiaku 22 tahun. Aku sangat mencintai ${name}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${name} adalah cinta" aku bilang "${name} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${name}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${name} datang ke dalam kamarku, Aku begitu senang bertemu ${name}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${name}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${name}. Aku ingin memberikan kepuasan kepada ${name}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${name} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${name} pergi meninggalkan kamarku. "${name} itu cinta" "${name} itu kehidupan".`
  m.reply(sherk)
  break
       case 'wangy2':
  if (!q) return m.reply(`Example : ${prefix + command} komi`)  
  q = q.toUpperCase();
  wangy2 = `GW BENAR-BENAR PENGEN JILAT KAKI *${q.toUpperCase()}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${q.toUpperCase()}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${q.toUpperCase()}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI.`
  reply (wangy2)
  break
case 'coffee': case 'kopi': {


let buttons = [


        {buttonId: `coffe`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}


    ]


    let buttonMessage = {


        image: { url: 'https://coffee.alexflipnote.dev/random' },


        caption: `☕Random Coffee☕`,


        footer: wxp.user.name,


        buttons: buttons,


        headerType: 4


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break


case 'wallpaper': {


    if (!text) throw 'Enter Query Title'


		let { wallpaper } = require('./lib/scraper')


    anu = await wallpaper(text)


    result = anu[Math.floor(Math.random() * anu.length)]


		let buttons = [


        {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}


    ]


    let buttonMessage = {


        image: { url: result.image[0] },


        caption: `${sp} Title : ${result.title}\n${sp} Category : ${result.type}\n${sp} Detail : ${result.source}\n${sp} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,


        footer: wxp.user.name,


        buttons: buttons,


        headerType: 4


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break
case 'wikimedia': {


    if (!text) throw 'Enter Query Title'


		let { wikimedia } = require('./lib/scraper')


    anu = await wikimedia(text)


    result = anu[Math.floor(Math.random() * anu.length)]


    let buttons = [


        {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}


    ]


    let buttonMessage = {


        image: { url: result.image },


        caption: `${sp} Title : ${result.title}\n${sp} Source : ${result.source}\n${sp} Media Url : ${result.image}`,


        footer: wxp.user.name,


        buttons: buttons,


        headerType: 4


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break

case 'animequote': case 'quotesanime': case 'quoteanime': {


		let { quotesAnime } = require('./lib/scraper')


    let anu = await quotesAnime()


    result = anu[Math.floor(Math.random() * anu.length)]


    let buttons = [


        {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}


    ]


    let buttonMessage = {


        text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,


        footer: 'Press The Button Below',


        buttons: buttons,


        headerType: 2


    }


    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


}


break


case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
wxp.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」

▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await wxp.profilePictureUrl(res.content[0].attrs.id, 'image')
} catch {
pp = fs.readFileSync('./media/404.jpg')
}
wxp.sendMessage(m.chat, { image: pp, caption: tekse }, "", m, { mentions: parseMention(tekse) })
})
}
break
	    case 'nomerhoki': case 'nomorhoki': {


                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`


                let anu = await primbon.nomer_hoki(Number(text))


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nomor HP :* ${anu.message.nomer_hp}\n${sp} *Angka Shuzi :* ${anu.message.angka_shuzi}\n${sp} *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n${sp} *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)


            }


            break


            case 'artimimpi': case 'tafsirmimpi': {


                if (!text) throw `Example : ${prefix + command} belanja`


                let anu = await primbon.tafsir_mimpi(text)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Mimpi :* ${anu.message.mimpi}\n${sp} *Arti :* ${anu.message.arti}\n${sp} *Solusi :* ${anu.message.solusi}`, m)


            }


            break


            case 'ramalanjodoh': case 'ramaljodoh': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000, EkaNovita, 11, 11, 2007`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`


                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama Anda :* ${anu.message.nama_anda.nama}\n${sp} *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n${sp} *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n${sp} *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'ramalanjodohbali': case 'ramaljodohbali': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000, EkaNovita, 11, 11, 2007`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`


                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama Anda :* ${anu.message.nama_anda.nama}\n${sp} *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n${sp} *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n${sp} *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'suamiistri': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000, EkaNovita, 11, 11, 2007`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`


                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama Suami :* ${anu.message.suami.nama}\n${sp} *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n${sp} *Nama Istri :* ${anu.message.istri.nama}\n${sp} *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'ramalancinta': case 'ramalcinta': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000, EkaNovita, 11, 11, 2007`


                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`


                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama Anda :* ${anu.message.nama_anda.nama}\n${sp} *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n${sp} *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n${sp} *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n${sp} *Sisi Positif :* ${anu.message.sisi_positif}\n${sp} *Sisi Negatif :* ${anu.message.sisi_negatif}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'artinama': {


                if (!text) throw `Example : ${prefix + command} Ridwan Salman`


                let anu = await primbon.arti_nama(text)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Arti :* ${anu.message.arti}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'kecocokannama': case 'cocoknama': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000`


                let [nama, tgl, bln, thn] = text.split`,`


                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Life Path :* ${anu.message.life_path}\n${sp} *Destiny :* ${anu.message.destiny}\n${sp} *Destiny Desire :* ${anu.message.destiny_desire}\n${sp} *Personality :* ${anu.message.personality}\n${sp} *Persentase :* ${anu.message.persentase_kecocokan}`, m)


            }


            break


            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {


                if (!text) throw `Example : ${prefix + command} Ridwan|Sefya`


                let [nama1, nama2] = text.split`|`


                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendImage(m.chat,  anu.message.gambar, `${sp} *Nama Anda :* ${anu.message.nama_anda}\n${sp} *Nama Pasangan :* ${anu.message.nama_pasangan}\n${sp} *Sisi Positif :* ${anu.message.sisi_positif}\n${sp} *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)


            }


            break


            case 'jadianpernikahan': case 'jadiannikah': {


                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Tanggal Pernikahan :* ${anu.message.tanggal}\n${sp} *karakteristik :* ${anu.message.karakteristik}`, m)


            }


            break


            case 'sifatusaha': {


                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Lahir :* ${anu.message.hari_lahir}\n${sp} *Usaha :* ${anu.message.usaha}`, m)


            }


            break


            case 'rejeki': case 'rezeki': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Lahir :* ${anu.message.hari_lahir}\n${sp} *Rezeki :* ${anu.message.rejeki}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'pekerjaan': case 'kerja': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Lahir :* ${anu.message.hari_lahir}\n${sp} *Pekerjaan :* ${anu.message.pekerjaan}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'ramalannasib': case 'ramalnasib': case 'nasib': {


                if (!text) throw `Example : 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.ramalan_nasib(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Analisa :* ${anu.message.analisa}\n${sp} *Angka Akar :* ${anu.message.angka_akar}\n${sp} *Sifat :* ${anu.message.sifat}\n${sp} *Elemen :* ${anu.message.elemen}\n${sp} *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)


            }


            break


            case 'potensipenyakit': case 'penyakit': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Analisa :* ${anu.message.analisa}\n${sp} *Sektor :* ${anu.message.sektor}\n${sp} *Elemen :* ${anu.message.elemen}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'artitarot': case 'tarot': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendImage(m.chat, anu.message.image, `${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Simbol Tarot :* ${anu.message.simbol_tarot}\n${sp} *Arti :* ${anu.message.arti}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'fengshui': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 1, 2000\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`


                let [nama, gender, tahun] = text.split`,`


                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Lahir :* ${anu.message.tahun_lahir}\n${sp} *Gender :* ${anu.message.jenis_kelamin}\n${sp} *Angka Kua :* ${anu.message.angka_kua}\n${sp} *Kelompok :* ${anu.message.kelompok}\n${sp} *Karakter :* ${anu.message.karakter}\n${sp} *Sektor Baik :* ${anu.message.sektor_baik}\n${sp} *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)


            }


            break


            case 'readmore': case 'prank':


if (args.length < 1) return m.reply(`cara menggunakan nya${prefix}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${command} Hai beb|an`)


var kls = `${text}`


var has = kls.split("|")[0];


var kas = kls.split("|")[1];


wxp.sendText(m.chat, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}`, m)


break


         


            case 'haribaik': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.petung_hari_baik(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Kala Tinantang :* ${anu.message.kala_tinantang}\n${sp} *Info :* ${anu.message.info}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'harisangar': case 'taliwangke': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Info :* ${anu.message.info}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break        


            case 'harinaas': case 'harisial': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Hari Lahir :* ${anu.message.hari_lahir}\n${sp} *Tanggal Lahir :* ${anu.message.tgl_lahir}\n${sp} *Hari Naas :* ${anu.message.hari_naas}\n${sp} *Info :* ${anu.message.catatan}\n${sp} *Catatan :* ${anu.message.info}`, m)


            }


            break


            case 'nagahari': case 'harinaga': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Hari Lahir :* ${anu.message.hari_lahir}\n${sp} *Tanggal Lahir :* ${anu.message.tgl_lahir}\n${sp} *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'arahrejeki': case 'arahrezeki': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Hari Lahir :* ${anu.message.hari_lahir}\n${sp} *tanggal Lahir :* ${anu.message.tgl_lahir}\n${sp} *Arah Rezeki :* ${anu.message.arah_rejeki}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'peruntungan': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`


                let [nama, tgl, bln, thn, untuk] = text.split`,`


                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'weton': case 'wetonjawa': {


                if (!text) throw `Example : ${prefix + command} 13, 02, 2000`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.weton_jawa(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Tanggal :* ${anu.message.tanggal}\n${sp} *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n${sp} *Watak Hari :* ${anu.message.watak_hari}\n${sp} *Naga Hari :* ${anu.message.naga_hari}\n${sp} *Jam Baik :* ${anu.message.jam_baik}\n${sp} *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)


            }


            break


            case 'sifat': case 'karakter': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000`


                let [nama, tgl, bln, thn] = text.split`,`


                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Garis Hidup :* ${anu.message.garis_hidup}`, m)


            }


            break


            case 'keberuntungan': {


                if (!text) throw `Example : ${prefix + command} Ridwan, 13, 02, 2000`


                let [nama, tgl, bln, thn] = text.split`,`


                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Nama :* ${anu.message.nama}\n${sp} *Lahir :* ${anu.message.tgl_lahir}\n${sp} *Hasil :* ${anu.message.result}`, m)


            }


            break


            case 'memancing': {


                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`


                let [tgl, bln, thn] = text.split`,`


                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Tanggal :* ${anu.message.tgl_memancing}\n${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'masasubur': {


                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`


                let [tgl, bln, thn, siklus] = text.split`,`


                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Hasil :* ${anu.message.result}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'zodiak': case 'zodiac': {


                if (!text) throw `Example : ${prefix+ command} 7 7 2005`


                let zodiak = [


                    ["capricorn", new Date(1970, 0, 1)],


                    ["aquarius", new Date(1970, 0, 20)],


                    ["pisces", new Date(1970, 1, 19)],


                    ["aries", new Date(1970, 2, 21)],


                    ["taurus", new Date(1970, 3, 21)],


                    ["gemini", new Date(1970, 4, 21)],


                    ["cancer", new Date(1970, 5, 22)],


                    ["leo", new Date(1970, 6, 23)],


                    ["virgo", new Date(1970, 7, 23)],


                    ["libra", new Date(1970, 8, 23)],


                    ["scorpio", new Date(1970, 9, 23)],


                    ["sagittarius", new Date(1970, 10, 22)],


                    ["capricorn", new Date(1970, 11, 22)]


                ].reverse()





                function getZodiac(month, day) {


                    let d = new Date(1970, month - 1, day)


                    return zodiak.find(([_,_d]) => d >= _d)[0]


                }


                let date = new Date(text)


                if (date == 'Invalid Date') throw date


                let d = new Date()


                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]


                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]





                let zodiac = await getZodiac(birth[1], birth[2])


                


                let anu = await primbon.zodiak(zodiac)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Zodiak :* ${anu.message.zodiak}\n${sp} *Nomor :* ${anu.message.nomor_keberuntungan}\n${sp} *Aroma :* ${anu.message.aroma_keberuntungan}\n${sp} *Planet :* ${anu.message.planet_yang_mengitari}\n${sp} *Bunga :* ${anu.message.bunga_keberuntungan}\n${sp} *Warna :* ${anu.message.warna_keberuntungan}\n${sp} *Batu :* ${anu.message.batu_keberuntungan}\n${sp} *Elemen :* ${anu.message.elemen_keberuntungan}\n${sp} *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n${sp} *Catatan :* ${anu.message.catatan}`, m)


            }


            break


            case 'shio': {


                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`


                let anu = await primbon.shio(text)


                if (anu.status == false) return m.reply(anu.message)


                wxp.sendText(m.chat, `${sp} *Hasil :* ${anu.message}`, m)


            }


            break
/*	       	       case 'tiktok': case 'tiktokdl': case 'tt': {
	
	       	       if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit
       	       	        
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = hx.ttdownloader(args[0]).then( data => {
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: ' With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.nowm },
                    caption: `Cara save Media dari bot:\n1. Klick video/foto nya\n2. Klick titik 3 di pojok kanan\n3. Klick Save/Simpan\n\n${kata}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
           }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out


		db.users[m.sender].limit -= 1 // -1 limit


                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = hx.ttdownloader(q).then( data => {
                let buttons = [
                    {buttonId: `tiktok ${text}`, buttonText: {displayText: ' No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.wm },
                    caption: `Cara save Media dari bot: 1. Klick video/foto nya\n2. Klick titik 3 di pojok kanan\n3. Klick Save/Simpan\n\n${kata}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                wxp.sendMessage(m.chat, buttonMessage, { quoted: m })
            })
            }
            break*/
                        case 'zx':            
            tes = `*${atas}RidwanGans${kanan}*`
            wxp.sendText(m.chat, tes, troli)
            wxp.sendText(m.chat, tes, fdoc)
            wxp.sendText(m.chat, tes, fvn)
            wxp.sendText(m.chat, tes, fgif)
            wxp.sendText(m.chat, tes, fvideo)    
            wxp.sendText(m.chat, tes, fkontak)  
            break                         
                        case 'allbug':
            tes = `*RidwanGans*`
            //wxp.sendText(m.chat, tes, fdoc3)
            wxp.sendText(m.chat, tes, fvn1)
            wxp.sendText(m.chat, tes, fgif1)
            wxp.sendText(m.chat, tes, fvideo1)    
            wxp.sendText(m.chat, tes, fvn1)
            wxp.sendText(m.chat, tes, fgif1)
            wxp.sendText(m.chat, tes, fvideo1)
            wxp.sendText(m.chat, tes, troli2)   
           // wxp.sendText(m.chat, tes, fkontak)  
            break                                          
            case 'ig': case 'igdl': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                m.reply(mess.wait)
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                wxp.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  wxp.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Server eror`))
            }		
			break

            case 'igs': case 'igstory': case 'instagramstory': {
                if (!text) throw 'Masukkan Username!'                
                m.reply(mess.wait)                
	            hx.igstory(text)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                wxp.sendMessage(m.chat, { video: link, }, { quoted: m })
                } else {
                    let link = await getBuffer(i.url)
                  wxp.sendMessage(m.chat, { image: link, }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`Sorry the username was not found`))
            }
            break
            case 'terimakasih':
            case 'makasih':
            case 'terima kasih':
            case 'ty':
            case 'tq':
            m.reply(`sama sama kak ${pushname}`)
            break
            case 'fdeface':           
            if (!text) throw `Contoh :\nhttps://nasa.gov|Hacked By Ridwan Salman|Website hacked`          
            hek = args.join(" ").split("|")
            heker0 = hek[0]
            heker1 = hek[1]            
            heker2 = hek[2]            
            wxp.sendMessage(m.chat, { text: `${heker0}`, contextInfo:{"externalAdReply": {"title": `${heker1}`,"body": `${heker2}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./media/heker.jpg'),"sourceUrl": `${heker0}`} } }, { quoted: m })
            
        break 

case 'umma': case 'ummadl': {


	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`


    let { umma } = require('./lib) scraper')


		let anu = await umma(isUrl(text)[0])


		if (anu.type == 'video') {


		    let buttons = [


{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},


{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '🎥Video🎥'}, type: 1}


        ]


		    let buttonMessage = {


		        image: { url: anu.author.profilePic },


			caption: `


${sp} Title : ${anu.title}


${sp} Author : ${anu.author.name}


${sp} Like : ${anu.like}


${sp} Caption : ${anu.caption}


${sp} Url : ${anu.media[0]}


To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above


`,


			footer: wxp.user.name,


			buttons,


			headerType: 4


		    }


		    wxp.sendMessage(m.chat, buttonMessage, { quoted: m })


		} else if (anu.type == 'image') {


		    anu.media.map(async (url) => {


		        wxp.sendMessage(m.chat, { image: { url }, caption: `${sp} Title : ${anu.title}\n${sp} Author : ${anu.author.name}\n${sp} Like : ${anu.like}\n${sp} Caption : ${anu.caption}` }, { quoted: m })


		    })


		}


	    }


	    break


        case 'ringtone': {


		if (!text) throw `Example : ${prefix + command} black rover`


        let { ringtone } = require('./lib/scraper')


		let anu = await ringtone(text)


		let result = anu[Math.floor(Math.random() * anu.length)]


		wxp.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })


	    }


	    break


		case 'iqra': {


		oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`


		if (!text) throw oh


		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)


		wxp.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))


		}


		break      
		case 'juzamma': {


		if (args[0] === 'pdf') {


		m.reply(mess.wait)


		wxp.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})


		} else if (args[0] === 'docx') {


		m.reply(mess.wait)


		wxp.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})


		} else if (args[0] === 'pptx') {


		m.reply(mess.wait)


		wxp.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})


		} else if (args[0] === 'xlsx') {


		m.reply(mess.wait)


		wxp.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})


		} else {


		m.reply(`What format do you want? ? Example : ${prefix + command} pdf





Available formats : pdf, docx, pptx, xlsx`)


		}


		}


		break


		case 'hadith': case 'hadist': {


		if (!args[0]) throw `Example:


${prefix + command} bukhari 1


${prefix + command} abu-daud 1





Options available:


abu-daud


1 - 4590


ahmad


1 - 26363


bukhari


1 - 7008


darimi


1 - 3367


ibu-majah


1 - 4331


nasai


1 - 5662


malik


1 - 1594


muslim


1 - 5362`


		if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`


		try {


		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)


		let { number, arab, id } = res.find(v => v.number == args[1])


		m.reply(`No. ${number}





${arab}





${id}`)


		} catch (e) {


		m.reply(`Hadith not found !`)


		}


		}


		break


case 'translate': case 'terjemahan': case 'tr': {
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`${sp}Translate : ${Detek}\n${sp}Hasil : ${Infoo}`)
}
break
		case 'alquran': {


		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`


		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`


		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)


		let txt = `*Arab* : ${res.result.data.text.arab}


*English* : ${res.result.data.translation.en}


*Indonesia* : ${res.result.data.translation.id}





( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`


		m.reply(txt)


		wxp.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })


		}


		break


		case 'tafsirsurah': {


		if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`


		if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`


		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)


		let txt = `「 *Tafsir Surah*  」





*Short* : ${res.result.data.tafsir.id.short}





*Long* : ${res.result.data.tafsir.id.long}





( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`


		m.reply(txt)


		}


		break





		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':


    try {


    let set


    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'


    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'


    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'


    if (/earrape/.test(command)) set = '-af volume=12'


    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'


    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'


    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'


    if (/reverse/.test(command)) set = '-filter_complex "areverse"'


    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'


    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'


    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'


    if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'


    if (/audio/.test(mime)) {


    m.reply(mess.wait)


    let media = await wxp.downloadAndSaveMediaMessage(quoted)


    let ran = getRandom('.mp3')


    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {


    fs.unlinkSync(media)


    if (err) return m.reply(err)


    let buff = fs.readFileSync(ran)


    wxp.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })


    fs.unlinkSync(ran)


    })


    } else m.reply(`Reply to the audio you want to change with caption *${prefix + command}*`)


    } catch (e) {


    m.reply(e)


    }


    break


case 'setcmd': {


    if (!m.quoted) throw 'Reply Message!'


    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'


    if (!text) throw `Untuk Command Apa?`


    let hash = m.quoted.fileSha256.toString('base64')


    if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'


    global.db.sticker[hash] = {


        text,


        mentionedJid: m.mentionedJid,


        creator: m.sender,


        at: + new Date,


        locked: false,


    }


    m.reply(`Done!`)


}


break
case 'delcmd': {


    let hash = m.quoted.fileSha256.toString('base64')


    if (!hash) throw `No hashes`


    if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'  


    delete global.db.sticker[hash]


    m.reply(`Done!`)


}


break


case 'listcmd': {


    let teks = `


*Hash List*


Info: *bold* hash is locked


${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}


`.trim()


    wxp.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })


}


break


case 'lockcmd': {


    if (!isCreator) throw mess.owner


    if (!m.quoted) throw 'Reply Message!'


    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'


    let hash = m.quoted.fileSha256.toString('base64')


    if (!(hash in global.db.sticker)) throw 'Hash not found in database'


    global.db.sticker[hash].locked = !/^un/i.test(command)


    m.reply('Done!')


}


break
case 'addmsg': {


    if (!m.quoted) throw 'Reply Message You Want To Save In Database'


    if (!text) throw `Example : ${prefix + command} message name`


    let msgs = global.db.database


    if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`


    msgs[text.toLowerCase()] = quoted.fakeObj


m.reply(`Successfully added message in message list as '${text}'


    


Access with ${prefix}getmsg ${text}





View list of message with ${prefix}listmsg`)


}


break


case 'getmsg': {


    if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`


    let msgs = global.db.database


    if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`


    wxp.copyNForward(m.chat, msgs[text.toLowerCase()], true)


}


break

case 'listmsg': {


    let msgs = JSON.parse(fs.readFileSync('./src/database.json'))


	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })


		let teks = '「 LIST DATABASE 」\n\n'


		for (let i of seplit) {


		    teks += `${sp} *Name :* ${i.nama}\n${sp} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`


	        }


	        m.reply(teks)


	    }


	    break


case 'delmsg': case 'deletemsg': {


	        let msgs = global.db.database


	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)


		delete msgs[text.toLowerCase()]


		m.reply(`Successfully deleted '${text}' from the message list`)


}


	    break
	    case 'addstore': {


    if (!m.quoted) throw `Balas Pesan yang Ingin Anda Simpan Di Database dengan cara ketik ${prefix}addstore nama|Deskripsi\nContoh : RidwanGans|Diamond Epep`
    if (!text) throw `Example : ${prefix + command} Ridwan|Diamond Epep murah`


    toror = args.join(" ").split("|")
    nama = toror[0]
    metext = toror[1] 
    let stores = global.db.toko


    if (text.split("|")[0].toLowerCase() in stores) throw `'${text}' telah terdaftar di list pesan`


    stores[text.split("|")[0].toLowerCase()] = quoted.fakeObj


m.reply(`Berhasil menambahkan pesan dalam daftar Store sebagai '${text}'
   


Akses dengan ${prefix}getstore ${text.split("|")[0]}


Lihat daftar store dengan ${prefix}liststore`)


}


break


case 'getstore': {


    if (!text) throw `Example : ${prefix + command} store name\n\nLihat daftar Store dengan ${prefix}liststore`


    let stores = global.db.toko


    if (!(text.toLowerCase() in stores)) throw `'${text.split("|")[0]}' tidak terdaftar dalam daftar Store`


    wxp.copyNForward(m.chat, stores[text.split("|")[0].toLowerCase()], true)


}


break

case 'liststore': {


    let stores = JSON.parse(fs.readFileSync('./src/database.json'))


	        let seplit = Object.entries(global.db.toko).map(([nama, isi]) => { return { nama, ...isi } })


		let teks = `Berbijaklah dalam memilih barang, jangan lupa gunakan jasa admin agar tidak terkena scam\nke scam jangan koar² ke owner\n\n\nCara melihat store silahkan ketik ${prefix}getstore nama\nContoh : ${prefix}getstore Ridwan\n\n`
		for (let i of seplit) {


		    teks += `*${atas}LIST STORE${kanan}*\n\n${sp} *Name :* ${i.nama.split("|")[0]}\n${sp} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n${sp} *Description :* ${metext}\n────────────────────────\n\n`


	        }


	        m.reply(teks)


	    }


	    break
case 'delstore': case 'deletestore': {


	        let stores = global.db.toko


	        if (!(text.toLowerCase() in stores)) return m.reply(`'${text}' tidak tercantum dalam daftar Store`)


		delete stores[text.toLowerCase()]


		m.reply(`Berhasil dihapus '${text}' dari daftar Store`)


}


	    break


/*	    case 'anonymous': {


    if (m.isGroup) return m.reply('This Features Cannot Be Use in Group!')


				this.anonymous = this.anonymous ? this.anonymous : {}


				let buttons = [{


        urlButton: {


displayText: 'Website',


url: `${website}`


        }


    }]


    wxp.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await wxp.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, wxp.user.name, m)


}


			break


case 'sendkontak': case 'sendcontact': {


    if (m.isGroup) return m.reply('This Features Cannot Be Use in Group!')


    this.anonymous = this.anonymous ? this.anonymous : {}


    let room = Object.values(this.anonymous).find(room => room.check(m.sender))


    if (!room) {


        let buttons = [


{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)


        throw false


    }


    let profile = await wxp.profilePictureUrl(room.b)


    let status = await wxp.fetchStatus(room.b)


    let msg = await wxp.sendImage(room.a, profile, `Name : ${await wxp.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })


    wxp.sendContact(room.a, [room.b.split("@")[0]], msg)


}


break


case 'keluar': case 'leave': {


    if (m.isGroup) return m.reply('This Features Cannot Be Use in Group!')


    this.anonymous = this.anonymous ? this.anonymous : {}


    let room = Object.values(this.anonymous).find(room => room.check(m.sender))


    if (!room) {


        let buttons = [


{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)


        throw false


    }


    m.reply('Ok')


    let other = room.other(m.sender)


    if (other) await wxp.sendText(other, `_Partner Has Left Anonymous Session_`, m)


    delete this.anonymous[room.id]


    if (command === 'leave') break


}


case 'mulai': case 'start': {


    if (m.isGroup) return m.reply('This Features Cannot Be Use in Group!')


    this.anonymous = this.anonymous ? this.anonymous : {}


    if (Object.values(this.anonymous).find(room => room.check(m.sender))) {


        let buttons = [


{ buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, wxp.user.name, m)


        throw false


    }


    let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))


    if (room) {


        let buttons = [


{ buttonId: 'next', buttonText: { displayText: 'NEXT' }, type: 1 },


{ buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }


        ]


        await wxp.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wxp.user.name, m)


        room.b = m.sender


        room.state = 'CHATTING'


        await wxp.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wxp.user.name, m)


    } else {


        let id = + new Date


        this.anonymous[id] = {


id,


a: m.sender,


b: '',


state: 'WAITING',


check: function (who = '') {


    return [this.a, this.b].includes(who)


},


other: function (who = '') {


    return who === this.a ? this.b : who === this.b ? this.a : ''


},


        }


        let buttons = [


{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, wxp.user.name, m)


    }


    break


}


case 'next': case 'lanjut': {


    if (m.isGroup) return m.reply('This Feature Cannot Be Used In Group!')


    this.anonymous = this.anonymous ? this.anonymous : {}


    let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))


    if (!romeo) {


        let buttons = [


{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)


        throw false


    }


    let other = romeo.other(m.sender)


    if (other) await wxp.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)


    delete this.anonymous[romeo.id]


    let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))


    if (room) {


        let buttons = [


{ buttonId: 'next', buttonText: { displayText: 'NEXT' }, type: 1 },


{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }


        ]


        await wxp.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wxp.user.name, m)


        room.b = m.sender


        room.state = 'CHATTING'


        await wxp.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wxp.user.name, m)


    } else {


        let id = + new Date


        this.anonymous[id] = {


id,


a: m.sender,


b: '',


state: 'WAITING',


check: function (who = '') {


    return [this.a, this.b].includes(who)


},


other: function (who = '') {


    return who === this.a ? this.b : who === this.b ? this.a : ''


},


        }


        let buttons = [


{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }


        ]


        await wxp.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, wxp.user.name, m)


    }


    break


}
*/
case 'public': {


    if (!isCreator) throw mess.owner


    wxp.public = true


    m.reply('Successfully Changed To Public Usage')


}


break


case 'self': {


    if (!isCreator) throw mess.owner


    wxp.public = false


    m.reply('Successfully Changed To Self Usage')


}


break


case 'ping': case 'botstatus': case 'statusbot': {


    const used = process.memoryUsage()


    const cpus = os.cpus().map(cpu => {


        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)


			        return cpu


    })


    const cpu = cpus.reduce((last, cpu, _, { length }) => {


        last.total += cpu.total


        last.speed += cpu.speed / length


        last.times.user += cpu.times.user


        last.times.nice += cpu.times.nice


        last.times.sys += cpu.times.sys


        last.times.idle += cpu.times.idle


        last.times.irq += cpu.times.irq


        return last


    }, {


        speed: 0,


        total: 0,


        times: {


			user: 0,


			nice: 0,


			sys: 0,


			idle: 0,


			irq: 0


    }


    })


    let timestamp = speed()


    let latensi = speed() - timestamp


    neww = performance.now()


    oldd = performance.now()


    respon = `


Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}





Info Server


RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}





NodeJS Memory Usaage


${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}





${cpus[0] ? `_Total CPU Usage_


${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}


_CPU Core(s) Usage (${cpus.length} Core CPU)_


${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}


    `.trim()


    m.reply(respon)


}


break


case 'owner': case 'creator': {


    let vcard = 'BEGIN:VCARD\n'


    + 'VERSION:3.0\n' 


    + `N:;${ownername};;;`
    + `FN:${ownername}\n`
    + `ORG:${ownername};\n`
    + `item1.TEL;type=CELL;type=VOICE;waid=${contact}:${contact1}\n`
    + 'item1.X-ABLabel:Jika ada keperluan silahkan chat\n'


    + `item2.EMAIL;type=INTERNET: ${email}\n`
    + 'item2.X-ABLabel:Email\n'


    + `item3.URL:${website}\n`
    + 'item3.X-ABLabel:Instagram\n'


    + 'item4.ADR:;;Indonesia;;;;\n'


    + 'item4.X-ABLabel:Region\n'


    + 'END:VCARD'


}


break
        case 'bug': case 'report': {


        	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `


        	wxp.sendMessage(`${meki}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}


Report Message: ${text}` })


        	m.reply(`Berhasil Dilaporkan Ke Owner\nOwner akan chat anda apabila bug nya telah di perbaiki\nMohon jangan spam jika ingin lapor bug, Pastikan Bugnya Valid, Jika Anda Bermain Dengan Ini, Gunakan Fitur Ini Lagi Dan Lagi Tanpa Alasan, Anda Pasti Akan Diblokir!`)


        }


        break
        case 'req': case 'request': {


        	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `


        	wxp.sendMessage(`${meki}@s.whatsapp.net`, {text: `*Request Fitur From:* wa.me/${m.sender.split("@")[0]}


Request Message: ${text}` })


        	m.reply(`Berhasil Request fitur ke owner\nOwner akan Chat anda apabila sudah di tambahkan fitur yang anda request\nMohon jangan spam jika ingin request, Jika Anda Bermain Dengan Ini, Gunakan Fitur Ini Lagi Dan Lagi Tanpa Alasan, Anda Pasti Akan Diblokir!`)


        }


        break



        case 'p':


         apaiyahj = fs.readFileSync('./music/adaapa.m4a')


			wxp.sendMessage(m.chat, {audio: apaiyahj, mimetype: 'audio/mp4', ptt:true }, { quoted : m })			     


break
case 'anjing':

case 'babi':
case 'monyet':
case 'kunyuk':
case 'bajingan':
case 'asu':
case 'bangsat':
case 'kontol':
case 'fefec':
case 'pepek':
case 'memek':
case 'ngentot':
case 'ngewe':
case 'perek':
case 'pecun':
case 'bencong':
case 'banci':
case 'jablay':
case 'bego':
case 'goblok':
case 'idiot':
case 'geblek':
case 'gila':
case 'sinting':
case 'tolol':
case 'sarap':
case 'buta':
case 'budek':
case 'bolot':
case 'jelek':
case 'setan':
case 'keparat':
case 'ngehe':
case 'bejad':
case 'gembel':
case 'brengsek':
case 'tai':



    bbd = fs.readFileSync('./music/gabole.m4a')
			wxp.sendMessage(m.chat, {audio: bbd, mimetype: 'audio/mp4', ptt:true }, { quoted : m })
break
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'wxp': case 'doge':
     if (!m.key.fromMe){


    anu = `Hi ${pushname} kenapa manggil² saya, suka sama saya :v?, langsung aja di kepoin gc wa sama website ku`


const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({


        templateMessage: {


hydratedTemplate: {


    hydratedContentText: anu,


    locationMessage: {


    jpegThumbnail: fs.readFileSync('./media/wxp.jpg')},


    hydratedFooterText: `𝗪𝗫𝗣 - 𝗠𝗗`,


    hydratedButtons: [{


        urlButton: {


displayText: 'Website',


url: `${website}`


        }


    }, {


    	urlButton: {


        displayText: 'Group',


url: `${groupwa}`


        }


    }, {


        quickReplyButton: {


displayText: 'Menu',


id: `${prefix}menu`


        }


        }, {


        quickReplyButton: {


displayText: 'All Menu',


id: `${prefix}allmenu`


        }


        }]


}


        }


    }), { userJid: m.chat })


    wxp.relayMessage(m.chat, template.message, { messageId: template.key.id })


    }          


    qtu = fs.readFileSync('./music/robot.m4a')


			wxp.sendMessage(m.chat, {audio: qtu, mimetype: 'audio/mp4', ptt:true }, { quoted : m })


			     


break






//━━━━━━━━━━━━━━━[ AKHIR DARI FITUR YANG GA PAKE APIKEY ]━━━━━━━━━━━━━━━\\





case 'mune': case 'nemu': case 'z': case 'f':case 'menu': case 'help':{


    let timestamp = speed()


    let latensi = speed() - timestamp


    neww = performance.now()


    oldd = performance.now()


    let pcchat = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)


txt = `*B O T - I N F O*

➔ *Bot Name:* *${global.botname}*
➔ *Owner Name:* _${global.ownername}_
➔ *Runtime:* _${runtime(process.uptime())}_
➔ *Speed:* _${latensi.toFixed(4)} Second_
➔ *Tanggal:* _${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
➔ *Waktu:* _${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
➔ *Platfrom:* _${os.platform()}_
➔ *Total User:* _${Object.keys(global.db.users).length}_
➔ *Private Chat:* _${pcchat.length}_

*Y O U R - I N F O*

➔ *Username:* *${pushname}*
➔ *Tag:* _@${m.sender.split('@')[0]}_
➔ *Link:*\n_https://wa.me/${m.sender.split('@')[0]}_
➔ *Premium User*: *${isPremium ? 'Ya' : 'No'}*`


let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail: wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: txt,
hydratedFooterText: `Jika menemukan bug/eror pada bot ini, silahkan lapor kepada ${prefix}owner.


Jangan lupa jaga kesehatan ya...


tetap patuhi prokes dan ikuti vaksinasi


Mari mendukung program pemerintah dalam menanggulangi COVID-19 di Indonesia🇲🇨


Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik ${prefix}rules
Ada keperluan dengan owner bot?


ketik ${prefix}owner untuk mengetahui kontak owner,
Jika tidak paham dengan cara penggunaan nya silahkan klick Tutorial

Thanks to:
• My wife ❤️
• Allah swt
• Adiwajshing
• Dika Ardnt
• Fakhri Awail
• Ridwan Salman
• Penyedia Layanan API
• Penyedia Modules
• Orang-orang yang Berdonasi
• All Member WibuXploit`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Group Info Bot', url: `https://chat.whatsapp.com/Hfd3kYeViAPKA5Rxwa2msp` } }, { quickReplyButton: { displayText: 'All Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } },  { quickReplyButton: { displayText: 'Donate', id: '.donasi', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}


break
case 'webzone':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.webzone(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'mainmenu':
{
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.main(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'groupmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname,command)}`,
hydratedFooterText: `${lang.group(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'downloadmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.download(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'searchmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.search(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break
case 'makermenu':
{ txt = `${lang.maker(pushname, kanan, atas, command, prefix, sp)}`


  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: txt.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/wxp.jpg') }, hydratedFooterText: `${botname}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break
case 'allmenu':


let g = 0
{ txt = `${lang.allmenu(pushname, kanan, atas, command, prefix, sp, g)}`


  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: txt.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/wxp.jpg') }, hydratedFooterText: `${botname}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Group Info Bot', url: ` ` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'randommenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.random(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'funmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.fun(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'audiomenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.audio(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'islammenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.islam(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'horoscopemenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.horoscope(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'convertmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.convert(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'databasemenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.database(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


/*case 'anonymousmenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.anonim(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break
*/
case 'ownermenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.owner(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break


case 'stalkmenu':
{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.stalk(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break 
case 'premiummenu':


{ let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/wxp.jpg'), gifPlayback:true, jpegThumbnail:global.wxp }, { upload: wxp.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText:`${lang.sapaan(pushname, command)}`,
hydratedFooterText: `${lang.premium(pushname, kanan, atas, command, prefix, sp)}`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Owner Number', url: `https://wa.me/+${meki}` } }, { quickReplyButton: { displayText: 'Back To Menu', id: '.allmenu', } }, { quickReplyButton: { displayText: 'Tutorial', id: '.tutorial', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


}						


break




//━━━━━━━━━━━━━━━[ MENU LOC ]━━━━━━━━━━━━━━━\\



const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: anu.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/wxp.jpg') }, hydratedFooterText: `𝗪𝗫𝗣 - 𝗠𝗗`, hydratedButtons: [{ urlButton: { displayText: 'Website', url: `${website}`} }, { urlButton: { displayText: 'Group', url: `${groupwa}`} }, { quickReplyButton: { displayText: 'Owner', id: 'owner', } }, { quickReplyButton: { displayText: 'Donate', id: 'donate', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 


  wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )


  


//━━━━━━━━━━━━━━━[ MENU IMG ]━━━━━━━━━━━━━━━\\


/*let message = await prepareWAMessageMedia({ image: wxp }, { upload: wxp.waUploadToServer })


    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({


        templateMessage: {


hydratedTemplate: {


    imageMessage: message.imageMessage,


    hydratedContentText: anu,


    hydratedButtons: [{


        urlButton: {


displayText: 'Instagram',


url: 'https://instagram.com/Fakhri_awail936'


        }


    }, {


        callButton: {


displayText: 'Owner Number',


phoneNumber: '+62 882-9202-4190'


        }


    }, {


        quickReplyButton: {


displayText: 'Speed',


id: 'ping'


        }


    }, {


        quickReplyButton: {


displayText: 'Script',


id: 'sc'


        }  


    }, {


        quickReplyButton: {


displayText: 'Owner',


id: 'owner'


        }


    }]


}


        }


    }), { userJid: m.chat, quoted: m })


    wxp.relayMessage(m.chat, template.message, { messageId: template.key.id })


}


break*/


default:


    	if (!m.isGroup && budy != undefined) {
						


	result = await fetchJson(`http://api.simsimi.net/v2/?text=${budy}&lc=id`, {method: 'get'})
 


	m.reply(result.success)
}					
	


/*ll    if (!m.isGroup && isCmd && !mek.key.fromMe){



	teks = `Maaf @${m.sender.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`



	const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: teks.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/404.jpg') }, hydratedFooterText: `𝗪𝗫𝗣 - 𝗠𝗗`, hydratedButtons: [{ quickReplyButton: { displayText: 'Back To Menu', id: 'menu', } }] } } }), { userJid: m.sender, quoted: m }); //conn.m.reply(m.chat, text.trim(), m) 
  


	wxp.relayMessage( m.chat, template.message, { messageId: template.key.id } )
}



	break*/
   


          if (budy.startsWith('=>')) {


        if (!isCreator) return m.reply(mess.owner)


        function Return(sul) {


sat = JSON.stringify(sul, null, 2)


bang = util.format(sat)


    if (sat == undefined) {


        bang = util.format(sul)


    }


    return m.reply(bang)


        }


        try {


m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))


        } catch (e) {


m.reply(String(e))


        }


    }





    if (budy.startsWith('>')) {


        if (!isCreator) return m.reply(mess.owner)


        try {


let evaled = await eval(budy.slice(2))


if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)


await m.reply(evaled)


        } catch (err) {


await m.reply(String(err))


        }


    }





    if (budy.startsWith('$')) {


        if (!isCreator) return m.reply(mess.owner)


        exec(budy.slice(2), (err, stdout) => {


if(err) return m.reply(err)


if (stdout) return m.reply(stdout)


        })


    }


			


		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {


        this.anonymous = this.anonymous ? this.anonymous : {}


        let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')


        if (room) {


if (/^.*(next|leave|start)/.test(m.text)) return


if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return


let other = [room.a, room.b].find(user => user !== m.sender)


m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {


    contextInfo: {


        ...m.msg.contextInfo,


        forwardingScore: 0,


        isForwarded: true,


        participant: other


    }


} : {})


        }


        return !0


    }


			


		if (isCmd && budy.toLowerCase() != undefined) {


		    if (m.chat.endsWith('broadcast')) return


		    if (m.isBaileys) return


		    let msgs = global.db.database


		    if (!(budy.toLowerCase() in msgs)) return


		    wxp.copyNForward(m.chat, msgs[budy.toLowerCase()], true)


		}


        }


        





    } catch (err) {


        m.reply(util.format(err))


    }


}








let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update ${__filename}`))


	delete require.cache[file]


	require(file)


})


