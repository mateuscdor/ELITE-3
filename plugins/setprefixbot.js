let handler = async(m, { conn, text }) => {
  if (!text) throw `*❗No se ha detectado ningún prefijo.*`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`*❗Prefijo cambiado a* *${text}*`)

}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

export default handler
