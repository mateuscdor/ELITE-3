let timeout = 60000
let poin = 1000
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Termina tu suit anterior'
  if (!m.mentionedJid[0]) return m.reply(`A quien quieres desafiar?\nMenciona a alguien\nEjemplo\n${usedPrefix}suit @usuario`, m.chat, { contextInfo: 
{ mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona a la que estás desafiando está jugando con otra persona :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*SUIT PvP*_

@${m.sender.split`@`[0]} desafia a @${m.mentionedJid[0].split`@`[0]} a echar un suit PvP

Por favor @${m.mentionedJid[0].split`@`[0]} acepta o rechaza
`.trim()
  let footer = `Escribe "Aceptar" para aceptar el suit\nEscribe "Rechazar" para rechazar el suit`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, author, null, [[ 'Aceptar', 'aceptar'], [ 'Rechazar', 'rechazar']], m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Se acabo el tiempo para jugar_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suit(pvp)?$/i

handler.group = true
handler.game = true

export default handler
