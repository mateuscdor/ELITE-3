import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/banprro.mp3'
conn.sendFile(m.chat, vn, 'banprro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ban|kick|baneado|Baneado|Ban|BAN|prro|perro|banamex|/
handler.command = new RegExp
export default handler
