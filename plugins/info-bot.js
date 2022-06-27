import util from 'util'
import path from 'path'

let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

let fgac = ["cris ofc", "andrea"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `𝗛𝗢𝗟𝗔 𝗚𝗔𝗬 *${name}* \n\n𝗡𝗘𝗖𝗘𝗦𝗜𝗧𝗔𝗦 𝗔𝗬𝗨𝗗𝗔 𝗚𝗜𝗟 *?* 🤣`, igfg, '', 'https://instagram.com/unptoadrih15?igshid=YmMyMTA2M2Y=', 'Sigueme en Instagram', null, null, [
      ['⦙☰ Menu', '.help'],
      ['⦙☰ MenuAudios', '.menuaudios'],
    ], m)
conn.sendFile(m.chat, null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp
export default handler
