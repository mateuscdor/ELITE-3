let handler = async (m, { conn, text}) => {
await conn.sendMessage(m.chat, { react: { text: '❎', key: m.key } })  
await m.reply(global.wait)
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
let username = conn.getName(who)
users[who].banned = true
conn.reply(m.chat, `        *❗ USUARIO BANEADO ❗*\n\n┌──────────────────────\n\n*▢ Registrado en blocklist.*\n*▢ No accede a comandos.*\n*▢ BOT ignora a :*\n    ${username}. \n\n└──────────────────────\n\n*•ATTE: 𝗕𝗢𝗧 ${gt}*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^block$/i
handler.rowner = true
export default handler
