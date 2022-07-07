import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('🔰 𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼...')
         await m.reply('🔰 𝗔𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗻𝗱𝗼 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗱𝗮𝘁𝗼𝘀!!!')
         await m.reply('🚀 𝗥𝗲𝗶𝗻𝗶𝗰𝗶𝗮𝗻𝗱𝗼...')
         await m.reply('❗𝗣𝗥𝗢𝗖𝗘𝗦𝗢 𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗔𝗗𝗢❗') 
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(reiniciar|res(tart)?)$/i
handler.exp = 500
handler.rowner = true

export default handler
