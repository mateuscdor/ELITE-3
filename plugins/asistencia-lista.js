let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `*❗No hay asistencia en este grupo❗*\n\n*▢ ${usedPrefix}asistencia* para empezar la asistencia.`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀 」*
▢ Fecha y hora : *${new Date().toLocaleString('id-ID')}*
${conn.absen[id][2]}
┌ *🔰 Usuarios presentes:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────
`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^listasist$/i
handler.group = true
export default handler
