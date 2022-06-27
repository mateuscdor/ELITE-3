import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Se salió un puto.webp'
conn.sendFile(m.chat, vn, 'Se salió un puto.webp', null, m, true, { 
})
}
handler.command = /^adios$/

handler.fail = null
handler.exp = 100
export default handler



