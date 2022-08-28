# WXP BOT
Script WhatsApp Bot Multi Device

## NOTE
This Script is for everyone, not for Sale. Jika dijual neraka menunggumu brother !

# Instalasi
## Heroku Buildpack

Click the deploy icon below !

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/FakhriGansz/baruZ)

```bash
 > heroku/nodejs
 > https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
 > https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)


```bash
git clone https://github.com/FakhriGansz/WXPBotPublic
cd WXPBotPublic
npm install
```

## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'Your Mongo URI'`



## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/FakhriGansz/WXPBotPublic
cd WXPBotPublic
npm install
```

## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ node .
```

## ❗ Warning
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in [`config.js`](https://github.com/FakhriGansz/WXPBotPublic/blob/master/config.js)
Get Apikey zenz on [`zenz`](https://zenzapi.xyz/pricing)


## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`Fatih Arridho`](https://github.com/FatihArridho)
* [`zhwzein`](https://github.com/zhwzein)
* [`CAF-ID`](https://github.com/CAF-ID)
* [`Hisoka775`](https://github.com/Hisoka775)
* [`Fakhri Awail`](https://github.com/FakhriGansz)
* [`Ridwan Salman`](https://github.com/WibuXploit1)


License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

Support Me
* [`Saweria`](https://saweria.co/ridwangans)
