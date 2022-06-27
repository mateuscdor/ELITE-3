let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Uhmm... donde esta el texto?\n\ncontoh:\n${usedPrefix + command} hola`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i

export default handler
