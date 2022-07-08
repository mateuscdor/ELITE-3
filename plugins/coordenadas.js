import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
await conn.sendMessage(m.chat, { react: { text: '✨', key: m.key } })  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

const sections = [
{
title: `❗LUGARES DE FARMEO - COORDENADAS:`,
rows: [
{title: "*🇵🇪 Perú - Chancay.*  ", description: null, rowId: `${usedPrefix}perú`},
{title: "*🇧🇷 Brazil - Consolacao São Paulo.*  ", description: null, rowId: `${usedPrefix}Brazil`},
{title: "*🇱🇷 Nueva York - Central Park.*", description: null, rowId: `${usedPrefix}newyork`},
{title: "*🇺🇸 San Francisco - Pier 39.*", description: null, rowId: `${usedPrefix}pier39`},
{title: "*🇨🇦 Canadá - Toronto , High Park.*", description: null, rowId: `${usedPrefix}canada`},
{title: "*🇯🇵 Japón - Ciudad de tokio.*", description: null, rowId: `${usedPrefix}japon`},
{title: "*🇦🇸 Samoa Americana - Fagatogo.*", description: null, rowId: `${usedPrefix}samoa`},   
{title: "*🇯🇵 Japón - Ciudad de tokio.*", description: null, rowId: `${usedPrefix}japon`},    
{title: "*🇱🇷 EE.UU Honululu - Ala Moana Hawái.*", description: null, rowId: `${usedPrefix}honululu`},      
{title: "*🇦🇪 Dubai - Beach.*", description: null, rowId: `${usedPrefix}dubai`},    
{title: "*🇹🇼 Taiwán - Taipei.*", description: null, rowId: `${usedPrefix}taipei`},    
{title: "*🇦🇺 Australia - Sydney.*", description: null, rowId: `${usedPrefix}sydney`},    
{title: "*🇰🇮 Kiribati - London.*", description: null, rowId: `${usedPrefix}kiribati`},    
{title: "*🇪🇬 Egipto - Cairo.*", description: null, rowId: `${usedPrefix}egipto`},    
{title: "*🇪🇸 España - Zaragoza.*", description: null, rowId: `${usedPrefix}zaragoza`},    
{title: "*🇪🇸 Parque Estadio Insular - Gran Canarias.*", description: null, rowId: `${usedPrefix}islacanarias`},    
{title: "*🇭🇺 Hungría - Budapest.*", description: null, rowId: `${usedPrefix}budapest`},    
{title: "*🇳🇿 Nueva Zelanda - P. Noroeste Wellington.*", description: null, rowId: `${usedPrefix}nuevazelanda`},    
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
await m.reply(global.wait)
const listMessage = {
text: `❒═════「 *🤖Assistant* 」════❒

*👤 ${username} bienvenido al minimenú coordenadas.*

*▢ Fecha ➮ ${week}, ${date}*
*▢ Hora  ➮ ${time}*

${abc}`,
title: null,
buttonText: "PULSE AQUI ❗", 
sections }

await conn.sendMessage(m.chat, listMessage)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(cc|coordenadas|coordenada)$/i
handler.register = true
handler.limit = 5
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
