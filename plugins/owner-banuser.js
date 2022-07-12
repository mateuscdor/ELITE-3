let handler = async (m, { conn, text}) => {
    if (!text) throw '*_A QUIEN QUIERES BANEAR?_*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_ETIQUETA A ALGUN USUARIO_*'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `*_EL USUARIO FUE BANEADO CON EXITO_*\n\n*_EL USUARIO NO TENDRA PERMISO PARA USAR EL BOT_*`, m)
}
handler.help = ['banuser']
handler.tags = ['General']
handler.command = /^(ban)$/i
handler.owner = false
handler.mods = false
handler.premium = true

export default handler
