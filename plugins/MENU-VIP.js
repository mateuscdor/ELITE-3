import fs from "fs"
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Grup.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `ððððð¼ ð¿ððððððð¼ð½ðð`,
rows: [
      {title: "â¨ ðð¥ðððð¢ð¥ â¨", description: null, rowId: `${usedPrefix}creador`},
      {title: "ð ðððð ðð¥ðððð¢ð¥ ð", description: null, rowId: `${usedPrefix}menucreador`},
]}, ]
await m.reply(global.wait)
let name = await conn.getName(m.sender)
const listMessage = {
text: `âââââââââã MenÃº ãââââââââââ
â ð¤ hola ${name} .
â â¨ Bienvenido al menuâ
âââââââââââââââââââââââââââ
â  â¢ InformaciÃ³n basica :
â  â¡ Creador del bot : â¦ÒÍ¡Íâ³ð»ð²ð¥ð¬ð°ð±â¢ââÍ¡ÍÛÛÛ£ð¹
â  â¡ NÂ° del creador : wa.me/51996089079 
â    (NO BOT)
â  â¡ NÂ° del bot : wa.me/51938089515 
â    (SI BOT)
âââââââââââââââââââââââââââ
â  â¢ Permisos :
â  â¡ Puede anÌadir el bot a su grupo.
â  â¡ Problemas con el bot , reporta.
â  â¡ /Report <ayuda>
âââââââââââââââââââââââââââ
â  â¢ Bot :
â  â¡ VersiÃ³n del bot :
â    ${vs}
â  â¡ El bot esta permitido en :
â    ${global.opts['self'] ? 'CHAT PRIVADO â¢' : 'GRUPOS'}
âââââââââââââââââââââââââââ
â  â¢ Datos actuales :
â  ð ð³ð¸ð°ð¼ð¾ð½ð³ : ${limit}
â  ð ð´ðð¿ð´ðð¸ð´ð½ð²ð¸ð° : ${exp}
â  ðï¸ ðð¾ð» : ${role}
â  ð ð»ð´ðð´ð» : ${level}
â  ð ðµð´ð²ð·ð°: ${week}, ${date}
â  ð°ï¸ ð·ð¾ðð°: ${time}
â  ð ðð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
â  ð ðððð°ðð¸ð¾ð ðð´ð¶ð¸ðððð°ð³ð¾ð : ${rtotalreg}
ââââââââã ð¤Assistant ãâââââââ`, footer: `${abc}`, pp,
title: null,
buttonText: "PULSA AQUI", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menÃº|help|allmenu|m|\?)$/i
handler.exp = 50
handler.register = true
handler.limit = 3
export default handler

//ââââââââ[ ð¤ ]ââââââââ//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "buenos dias espero que tenga lindo diasâ¨"
  if (time >= 4) {
    res = "buena tarde espero que tenga linda tardeâï¸i"
  }
  if (time > 10) {
    res = "buenos dÃ­as espero que tenga lindo dÃ­aâ¨ "
  }
  if (time >= 15) {
    res = "buenas noches espero que tenga linda nocheâ¨"
  }
  if (time >= 18) {
    res = "buenos dias espero que lindo diasâ¨"
  }
  return res
}
