import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = m => {
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
Enhorabuena, has subido de nivel.!
*${before}* -> *${user.level}*
Escribe *.nivel* para verificar
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)|nivel$/i

export default handler
