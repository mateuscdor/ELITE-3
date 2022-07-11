
let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
users[who].banned = true
let username = conn.getName(who)
conn.reply(m.chat, `        ❗ *USUARIO BLOQUEADO* ❗\n\n┌──────────────────────\n\n*▢ Acceso al BOT.*\n*▢ Grupos y chat pv.*\n*▢ Disfrute del BOT:*\n    ${username}. \n\n└──────────────────────\n\n*•ATTE: BOT ${gt}*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^block$/i
handler.group = true
handler.admin = true 
export default handler
