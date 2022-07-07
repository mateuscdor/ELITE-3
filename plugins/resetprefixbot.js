let handler = async(m, { conn }) => {

  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
     conn.fakeReply(m.chat, '*❗Prefijo restablecido con éxito❗*', '0@s.whatsapp.net', 'PREFIJO RESETEADO')
}
handler.help = ['resetprefix']
handler.tags = ['owner']
handler.command = /^(restablecerprefix)$/i
handler.rowner = true

export default handler
