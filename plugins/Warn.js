let handler = async (m, { conn, groupMetadata }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!mention) throw `*Menciona a alguien para darle una advertencia!*⚠️`
    let warn = global.db.data.users[mention].warn
    if (warn < 2) {
        global.db.data.users[mention].warn += 1
        m.reply(`⚠️ *_Se le dio una advertencia +1_*
*_Al acumular 3 será expulsado del grupo_*⚠️`)
        m.reply('*Recibiste una advertencia del administrador del grupo, tu advertencia total ahora es* ' + (warn + 1) + ', *si recibes una advertencia 3 veces, serás eliminado del grupo*', mention)
    } else if (warn == 2) {
        global.db.data.users[mention].warn = 0
        m.reply('*Seras eliminado por acumular 3 advertencias*')
        let res =  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        m.reply(`*Fuiste eliminado del grupo* ${groupMetadata.subject} *porque has recibido 3 advertencias*`, mention)
    }
}
handler.help = ['warn [@user]']
handler.tags = ['group']
handler.command = /^warn$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
