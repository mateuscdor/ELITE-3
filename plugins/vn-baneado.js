import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/baneado.mp3'
conn.sendFile(m.chat, vn, 'baneado.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /fracasado|permabaneado|fracazado|/
handler.command = new RegExp
export default handler
