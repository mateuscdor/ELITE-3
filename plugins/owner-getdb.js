import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('*❗Espera un momento, el proceso de obtener el archivo base de datos.json*')
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler
