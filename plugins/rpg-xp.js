let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let time = global.db.data.users[m.sender].lastmiming + 100000
if (new Date - global.db.data.users[m.sender].lastmiming < 100000) throw `*❗Reintenta en ${msToTime(time - new Date())} para obtener XP gratis.*`  
m.reply(`*🎁 Obtubistes* *${hasil} XP.*`)
global.db.data.users[m.sender].lastmiming = new Date * 1
  
}
handler.help = ['xp']
handler.tags = ['xp']
handler.command = ['rexp', 'xpgo', 'xpgr'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
