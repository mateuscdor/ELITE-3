import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} 𝙀𝙎𝙏𝘼 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n#on restrict | #off restrict\n𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.reply(m.chat, `𝘼 𝗦𝗨𝗦 𝗢𝗥𝗗𝗘𝗡𝗘𝗦 𝗠𝗜𝗥𝗘𝗬, 𝗟𝗔 𝗥𝗔𝗧𝗔 𝗙𝗨𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗔 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`)
}

if (command == 'sacar') { 
conn.reply(m.chat, `𝗔 𝗦𝗨𝗦 𝗢𝗥𝗗𝗘𝗡𝗘𝗦 𝗠𝗜𝗥𝗘𝗬,𝗟𝗔 𝗥𝗔𝗧𝗔 𝗙𝗨𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗔 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`)
}
  
if (command == 'ban') { 
conn.reply(m.chat, `𝗔 𝗦𝗨𝗦 𝗢𝗥𝗗𝗘𝗡𝗗𝗘𝗦 𝗠𝗜𝗥𝗘𝗬,𝗟𝗔 𝗥𝗔𝗧𝗔 𝗙𝗨𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗔 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 😎`)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'sacar'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

