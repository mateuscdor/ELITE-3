const pilihan = ['piedra', 'tijera', 'papel']
const Case = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
let handler = async(m, { text, usedPrefix }) => {
    let salah = `Opciones disponibles Tijeras, Papel, Piedra\n\n*Ejemplo* : ${usedPrefix}suit tijera\n`
    if (!text) throw salah
    if (!pilihan.includes(text.toLowerCase())) throw salah
    let suitP1 = pilihan.indexOf(text.toLowerCase())
    let suitPC = Math.floor(Math.random() * 3)
    let kamu = Case(pilihan[suitP1])
    let bot = Case(pilihan[suitPC])
    let state = `Tú: ${kamu}\nBot: ${bot}`
    let user = global.db.data.users[m.sender]
    if (suitP1 === suitPC) {
        user.exp += 100
        m.reply(`*🔰Empate🔰*\n\n${state}\n\nPuntos (±)100 XP`)
    } else if ((suitP1 + 1) % 3 === suitPC) {
        user.exp += 300
        m.reply(`*🥳Tu ganas🎉*\n\n${state}\n\nPuntos (+)300 XP`)
    } else if ((suitP1 - 1) % 3 === suitPC) {
        user.exp -= 300
        m.reply(`*☠️Tu pierdes❌*\n\n${state}\n\nPuntos (-)300 XP`)
    } else throw 'Ocurrió un error'
}
handler.help = ['suit [tijeras|piedra|papel]']
handler.tags = ['juego']

handler.command = /^ppt$/i

export default handler
