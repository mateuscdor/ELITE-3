import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'toppajeras','toppajeros') {
let top = `*L@S MAS PAJER@S DEL GRUPO SONπ¦:* 
    
*_1.- ${user(a)} π¦_*
*_2.- ${user(b)} π¦_*
*_3.- ${user(c)} π¦_*
*_4.- ${user(d)} π¦_*
*_5.- ${user(e)} π¦_*
*_6.- ${user(f)} π¦_*
*_7.- ${user(g)} π¦_*
*_8.- ${user(h)} π¦_*
*_9.- ${user(i)} π¦_*
*_10.- ${user(j)} π¦_*`
m.reply(top, null, {
contextInfo: {
mentionedJid: [a, b, c, d, e, f, g, h, i, j]
}})
conn.sendFile(m.chat, top, null, null, m, true, {
type: 'audioMessage', 
ptt: true })}

}
handler.command = ['toppajeras','toppajeros']
handler.tags = ['games']
handler.group = true
export default handler  
