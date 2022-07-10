import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = m => {
  let name = conn.getName(m.sender)
  let { role } = global.db.data.users[m.sender]
  let user = global.DATABASE.data.users[m.sender]
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
Todavia falta *${max - user.exp}* exp mas!
`.trim()
  }
  let before = user.level * 1
	while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
┌───⊷ *NIVEL*
▢ Nombre : *${name}*
▢ Nivel : *${user.level}*
▢ Rango : *${role}*
▢ XP : *${user.exp - min}/${xp}*
└──────────────
•Te falta *${max - user.exp}* de *XP* para subir de nivel.
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)}    Nivel:`
        let str = `
┌─⊷ *LEVEL UP*
▢ Nivel anterior : *${before}*
▢ Nivel actual : *${user.level}*
▢ Rango : *${role}*
▢ Fecha : *${new Date().toLocaleString('id-ID')}*
└──────────────
*_Cuanto más interactúes con los bots, mayor será tu nivel_*

	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
