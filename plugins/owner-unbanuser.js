let handler = async (m, { conn, text}) => {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })  
await m.reply(global.wait)
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
let username = conn.getName(who)
users[who].banned = false
conn.reply(m.chat, `     ❗ *USUARIO DESBANEADO* ❗\n\n┌──────────────────────\n\n*▢ Acceso al BOT.*\n*▢ Grupos y chat pv.*\n*▢ Disfrute del BOT:*\n    ${username}. \n\n└──────────────────────\n\n*•ATTE: BOT ${gt}*`, m)
}
handler.help = ['unblock']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.rowner = true
export default handler
