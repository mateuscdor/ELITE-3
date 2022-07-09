import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })  
await m.reply(global.wait)
let text = `*43.649552,-79.465872 *
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❗𝐂𝐨𝐨𝐫𝐝𝐞𝐧𝐚𝐝𝐚❗',
body: '✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2"),
sourceUrl: `http://wa.me/+51996089079`}}}) 
}
handler.command = /^(canadá)/i
handler.register = true
handler.limit = 2
export default handler
