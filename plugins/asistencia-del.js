let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `*❗ Aun no hay asistencia en este grupo❗*\n\n*${usedPrefix}asistencia para empezar una asistencia.*`
    delete conn.absen[id]
    m.reply(`*✅ Asistencia eliminado satisfactoriamente.*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(del|hapus)asistencia$/i
handler.group = true
handler.admin = true
export default handler
