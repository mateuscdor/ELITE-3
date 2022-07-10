let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `*❗La asistencia aun esta activo en el grupo❗*\n\n*${usedPrefix}delasitencia para borrar la asistencia activada.*`
    }
    conn.absen[id] = [
        m.reply(`*✅ Asistencia activado con exito.*\n\n*${usedPrefix}presente* - 𝙿𝚊𝚛𝚊 𝚎𝚜𝚝𝚊𝚛 𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚎\n*${usedPrefix}cekabsen* - 𝙿𝚊𝚛𝚊 𝚌𝚘𝚖𝚙𝚛𝚘𝚋𝚊𝚛 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊\n*${usedPrefix}delasistencia* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚘𝚜 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(asis|mulai)tencia$/i
handler.group = true
handler.admin = true
export default handler
