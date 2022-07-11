import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, text}) => {
    if (!text) throw '*A quien quiere desbanear? etiquete a la persona con el @*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Etiquete a una persona con el @*'
    let users = global.db.data.users
    let username = conn.getName(who)
    conn.reply(m.chat, `        ❗ *USUARIO BANEADO* ❗\n\n┌──────────────────────\n\n*▢ Acceso al BOT.*\n*▢ Grupos y chat pv.*\n*▢ Disfrute del BOT:*\n    ${username}. \n\n└──────────────────────\n\n*•ATTE: 𝗕𝗢𝗧 ${gt}*`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = false
handler.premium = true

export default handler
