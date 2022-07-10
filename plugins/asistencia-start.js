let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `*❗La asistencia aun esta activo en el grupo❗*\n\n*▢ ${usedPrefix}delasitencia* para borrar la asistencia activada.`
    }
    conn.absen[id] = [
        m.reply(`*✅ Asistencia activado con exito.*\n\n*▢ ${usedPrefix}presente* estar presente.\n*▢ ${usedPrefix}listasist verificar lista de asistencia.*\n*▢ ${usedPrefix}delasistencia borrar todos los datos*\n     *de la asistencia*`),
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
