let handler = async (m, { text, command, usedPrefix }) => {
let INTROJUEGO = conn.sendHydrated(m.chat, 'ππππΏππΌ, ππΌπππ, π ππππππΌ\n\nππͺππππ¨ πͺπ¨ππ§ π‘π€π¨ π½ππππππ π₯ππ§π ππͺπππ§ π€ π©ππ’ππππ£ π₯πͺππππ¨ πͺπ¨ππ§ ππ¨π©π€π¨ ππ€π’ππ£ππ€π¨:\n.π₯ππππ§π\n.π₯ππ₯ππ‘\n.π©ππππ§π\n\nππ¨π ππ£ π’ππ£πͺπ¨ππͺπ‘ππ¨', wm, null, null, null, null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['πππ₯ππ‘ π', `${usedPrefix + command} papel`],
['πππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m,)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*π° Empate!*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*π₯³ TΓΊ ganas! π*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*π Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*β οΈ TΓΊ pierdes! β*\n\n*ππ» Usted: ${text}*\n*ππ» El Bot: ${astro}*\n*β Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
