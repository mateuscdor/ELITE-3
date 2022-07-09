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
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀`,
rows: [
      {title: "✨ 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 ✨", description: null, rowId: `${usedPrefix}creador`},
      {title: "👑 𝙈𝙀𝙉𝙐 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑", description: null, rowId: `${usedPrefix}menucreador`},
]}, ]
await m.reply(global.wait)
let name = await conn.getName(m.sender)
const listMessage = {
text: `┏━━━━━━━━〔 Menú 〕━━━━━━━━━━
┃ 👤 hola ${name} .
┃ ✨ Bienvenido al menu❗
┃━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  ▢ Información basica :
┃  ≡ Creador del bot : ✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹
┃  ≡ N° del creador : wa.me/51996089079 
┃    (NO BOT)
┃  ≡ N° del bot : wa.me/51938089515 
┃    (SI BOT)
┃━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  ▢ Permisos :
┃  ≡ Puede añadir el bot a su grupo.
┃  ≡ Problemas con el bot , reporta.
┃  ≡ /Report <ayuda>
┃━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  ▢ Bot :
┃  ≡ Versión del bot :
┃    ${vs}
┃  ≡ El bot esta permitido en :
┃    ${global.opts['self'] ? 'CHAT PRIVADO •' : 'GRUPOS'}
┃━━━━━━━━━━━━━━━━━━━━━━━━━━
┃  ▢ Datos actuales :
┃  💎 𝙳𝙸𝙰𝙼𝙾𝙽𝙳 : ${limit}
┃  🌟 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 : ${exp}
┃  🎖️ 𝚁𝙾𝙻 : ${role}
┃  🌀 𝙻𝙴𝚅𝙴𝙻 : ${level}
┃  📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
┃  🕰️ 𝙷𝙾𝚁𝙰: ${time}
┃  📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┃  📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg}
┗━━━━━━━〔 🤖Assistant 〕━━━━━━━`, footer: `${abc}`, pp,
title: null,
buttonText: "PULSA AQUI", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|help|allmenu|m|\?)$/i
handler.exp = 50
handler.register = true
handler.limit = 3
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}
