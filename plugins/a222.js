let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg} •𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙎𝙀𝙍 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋.\n\n 𝙀𝗷𝗲𝗺𝗽𝗹𝗼:\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig} ✨ 𝗘𝗟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙔𝘼 𝙀𝙎 𝙑𝙄𝙋 ✨`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `${eg} *✅ @${who.split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙑𝙄𝙋.* \n\n *➖𝙉𝙊 𝙑𝘼 𝙏𝙀𝙉𝙀𝙍 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 𝘾𝙊𝙉 𝗘𝗟 𝗕𝗢𝗧 ${gt}.*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(adddd|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
