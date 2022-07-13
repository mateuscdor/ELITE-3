let timeout = 60000
let poin = 1000
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
await conn.sendMessage(m.chat, { react: { text: '🎮', key: m.key } })  
await m.reply(global.wait)
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ ⚠ ] 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙴𝙽 𝚄𝙽 𝙿𝚅𝙿, 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙾𝚃𝚁𝙰*'
if (!m.mentionedJid[0]) return m.reply(`*[❗] ¿𝙲𝙾𝙽 𝚀𝚄𝙸𝙴𝙽 𝙳𝙴𝚂𝙴𝙰 𝙹𝚄𝙶𝙰𝚁?*\n*𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰!*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix}suit @tag*`)
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ ⚠ ] 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳 𝚀𝚄𝙸𝙴𝚁𝙴 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙾𝚃𝚁𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰, 𝙴𝚂𝙿𝙴𝚁𝙴 𝙰 𝚀𝚄𝙴 𝙵𝙸𝙽𝙰𝙻𝙸𝙲𝙴*`
let id = 'suit_' + new Date() * 1
let caption = `*🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮*

*—◉ @${m.sender.split`@`[0]} desafia a @${m.mentionedJid[0].split`@`[0]} a 𝙴𝙽 𝚄𝙽 𝙿𝚅𝙿 𝙳𝙴 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻 𝙾 𝚃𝙸𝙹𝙴𝚁𝙰*
`.trim()
let footer = `◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "aceptar" 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝚁\n◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "rechazar" 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, null, [[`Aceptar`, `aceptar`], [`Rechazar`, `Rechazar`]], m, { mentions: conn.parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `*[ ⏳ ] 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝚂𝙿𝙴𝚁𝙰 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙴𝙻 𝙿𝚅𝙿 𝚂𝙴 𝙲𝙰𝙽𝙲𝙴𝙻𝙾 𝙿𝙾𝚁 𝙵𝙰𝙻𝚃𝙰 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰*`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.tags = ['games']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suitpvp|gameppt|suit|ppt2?$/i
handler.group = true
handler.register = true
handler.level = 3
handler.limit = 12


export default handler
