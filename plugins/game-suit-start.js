let timeout = 60000
let poin = 1000
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
await conn.sendMessage(m.chat, { react: { text: 'š®', key: m.key } })  
await m.reply(global.wait)
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ ā  ] šš° šš“ š“š½š²šš“š½ššš° š“š½ šš½ šæššæ, šš“šš¼šøš½š“ š°š½šš“š š³š“ šøš½šøš²šøš°š š¾ššš°*'
if (!m.mentionedJid[0]) return m.reply(`*[ā] Āæš²š¾š½ šššøš“š½ š³š“šš“š° š¹šš¶š°š?*\n*š“ššøššš“šš“ š° š»š° šæš“ššš¾š½š°!*\n\n*š“š¹š“š¼šæš»š¾:*\n*${usedPrefix}suit @tag*`)
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ ā  ] š»š° šæš“ššš¾š½š° ššš“ šššš“š³ šššøš“šš“ š³š“šš°šµšøš°š šš° š“ššš° š“š½ š¾ššš° šæš°šššøš³š°, š“ššæš“šš“ š° ššš“ šµšøš½š°š»šøš²š“*`
let id = 'suit_' + new Date() * 1
let caption = `*š® š¶š°š¼š“š - šæššæ - š¶š°š¼š“š š®*

*āā @${m.sender.split`@`[0]} š³š“šš°šµšøš° š° @${m.mentionedJid[0].split`@`[0]} a š“š½ šš½ šæššæ š³š“ šæšøš“š³šš°, šæš°šæš“š» š¾ ššøš¹š“šš°*
`.trim()
let footer = `ā š“šš²ššøš±š“ "aceptar" šæš°šš° š°š²š“šæšš°š\nā š“šš²ššøš±š“ "rechazar" šæš°šš° šš“š²š·š°šš°š`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, null, [[`Aceptar`, `aceptar`], [`Rechazar`, `Rechazar`]], m, { mentions: conn.parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `*[ ā³ ] ššøš“š¼šæš¾ š³š“ š“ššæš“šš° šµšøš½š°š»šøšš°š³š¾, š“š» šæššæ šš“ š²š°š½š²š“š»š¾ šæš¾š šµš°š»šš° š³š“ šš“ššæšš“ššš°*`, m)
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
