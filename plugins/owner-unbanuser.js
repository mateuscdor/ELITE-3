let handler = async (m, { conn, text}) => {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })  
await m.reply(global.wait)
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*'
let users = global.db.data.users
let name = await conn.getName(m.sender)
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚈𝙰 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*\n${name}`, m)
}
handler.help = ['unblock']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.rowner = true
export default handler
