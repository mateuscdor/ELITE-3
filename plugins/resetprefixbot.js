let handler = async(m, { conn }) => {

  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
     //await m.reply(`Prefix berhasil direset`)
     conn.fakeReply(m.chat, '*❗Prefijo restablecido con éxito❗*', '0@s.whatsapp.net', '•𝐑𝐞𝐬𝐞𝐭 𝐩𝐫𝐞𝐟𝐢𝐱•')
}
handler.help = ['resetprefix']
handler.tags = ['owner']
handler.command = /^(restablecerprefix)$/i
handler.rowner = true

export default handler
