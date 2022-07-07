let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏━━━━━━━━━━━━━━━━━━━━*
*┃     「 𝐃𝐎𝐍𝐀𝐑 」*
*┣━━━━━━━━━━━━━━━━━━━━*
*┃ 👤 𝙷𝙾𝙻𝙰 ${name}*
*┃*
*┃ ▢ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾:* 
*┃   • 𝙳𝚄𝙴𝙽̃𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃* 
*┃  http://wa.me/51938089515*
*┃ ▢ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾:* 
*┃   • 𝙰𝙿𝙾𝚈𝙾*
*┃   • 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙸𝙻𝙸𝙼𝙸𝚃𝙰𝙳𝙾*
*┃   • 𝙰𝙲𝙲𝙴𝚂𝙾 𝙰 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*
*┃     𝙿𝚁𝙴𝙼𝙸𝚄𝙼*
*┃   • 𝚈 𝙼𝚄𝙲𝙷𝙾 𝙼𝙰𝚂.*
*┃ ▢ 𝙿𝙰𝚈𝙿𝙰𝙻:* 
*┃  https://www.paypal.me/KeygenVIP*
*┃*
*┗━━━━━━━━━━━━━━━━━━━━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/KeygenVIP', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['✨ 𝐎𝐰𝐧𝐞𝐫 ✨', '/owner']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|paypal|donación|apoyar$/i
handler.register = true
export default handler
