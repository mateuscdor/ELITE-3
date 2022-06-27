let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*Todavía hay votos en este chat.!*`, author, null, [
                ['𝗕𝗢𝗥𝗥𝗔𝗥', `${usedPrefix}-vote`]
            ], m)
            let caption = `Comienza la votación!
*${usedPrefix}cekvote* - comprobar votos 
*${usedPrefix}delvote* - borrar votacion`
            await conn.sendButton(m.chat, caption, author, null, [
                ['𝗩𝗢𝗧𝗢 𝗔 𝗙𝗔𝗩𝗢𝗥', `${usedPrefix}upvote`],
                ['𝗩𝗢𝗧𝗢 𝗘𝗡 𝗖𝗢𝗡𝗧𝗥𝗔', `${usedPrefix}devote`]
            ], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(vote|votar)$/i

export default handler
