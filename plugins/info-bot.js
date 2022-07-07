import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

handler.all = async function (m) {
let vn = './media/bot.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "51938089515-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -9999999999999, status: 1, surface : 1, message: '𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "51938089515-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "999999999", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
let name = conn.getName(m.sender)    
conn.sendButton(m.chat, '*𝙷𝙾𝙻𝙰 , ¿𝙲𝙾𝙼𝙾 𝚃𝙴 𝙿𝚄𝙴𝙳𝙾 𝙰𝚈𝚄𝙳𝙰𝚁?*', wm, [['user', `.infouser`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler
