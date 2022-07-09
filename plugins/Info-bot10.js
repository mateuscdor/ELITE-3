import util from 'util'
import path from 'path'

import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'

let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: '✨', key: m.key } })
let name = conn.getName(m.sender)

let fgac = ["cris ofc", "andrea"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `*👤hola ${name}* \n\n *necesita ayuda *`, igfg, '', 'http://wa.me/51938 089515', '🤖', null, null, [
      ['⦙☰ Menu', '.menu'],
      ['⦙☰ Exp', '.xpgr'],
    ], m)
conn.sendFile(m.chat, null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(abz|robopt)$/i
handler.command = new RegExp
export default handler
