import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, '*🤖 Aqui tienes el link del grupo:*\n\n 🔰 https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '    ❗ 𝐋𝐈𝐍𝐊 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 ❗',
body: 'ڪے(̅_̅_̅(̲̲̲̲̲̅̅̅̅̅̅(̅_̅_̲̅✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹 _̅_̅_̅()ڪے',         
previewType: 0, thumbnail: fs.readFileSync("./Menulink.jpg"),
sourceUrl: null}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^(link)$/i
handler.group = true
handler.botAdmin = true
handler.premium = true
export default handler
