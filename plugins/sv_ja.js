import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/jaja.mp3'
conn.sendFile(m.chat, vn, 'jaja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ja|jaja|ha|hahaha|ha|jajaja|jajajajaja|risas|risa|/
handler.command = new RegExp
export default handler
