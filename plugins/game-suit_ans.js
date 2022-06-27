let handler = m => m
handler.before = async function (m) {
  this.suit = this.suit ? this.suit : {}
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
  let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
  if (room) {
    let win = ''
    let tie = false
    if (m.sender == room.p2 && /^(acc(ept)?|aceptar|ok|acepto(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(rechazar|cancelar|negar(k.)?bisa)/i.test(m.text)) {
        this.reply(m.chat, `No hubo respuesta de @${room.p2.split`@`[0]} el suit se cancela`, m)
        delete this.suit[room.id]
        return !0
      }
      room.status = 'play'
      room.asal = m.chat
      clearTimeout(room.waktu)
      //delete room[room.id].waktu
      m.reply(`El suit ha sido enviado al chat.
@${room.p.split`@`[0]} vs @${room.p2.split`@`[0]}

Por favor elige en el chat privado del bot
pulsando aqui wa.me/${conn.user.jid.split`@`[0]}`, m.chat, 
         {
          mentions: [room.p, room.p2]
        }
      )

      if (!room.pilih) this.sendButton(room.p, `Selecciona una opcion\nGanador +${room.poin}XP\nPerdedor ${room.poin_lose}XP`, author, null, [[ 'Piedra🗿', 'Piedra'], ['Papel📄', 'Papel'], ['Tijeras✂️', 'Tijeras']], m)
      if (!room.pilih2) this.sendButton(room.p2, `Selecciona una opcion\nGanador +${room.poin}XP\nPerdedor ${room.poin_lose}XP`, author, null, [['Piedra🗿', 'Piedra'], ['Papel📄', 'Papel'], ['Tijeras✂️', 'Tijeras']], m)
      room.waktu_milih = setTimeout(() => {
        if (!room.pilih && !room.pilih2) this.reply(m.chat, `Los jugadores no quieren jugar,\nSuit cancelado`)
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p
          this.reply(m.chat, `@${(room.pilih ? room.p2 : room.p).split`@`[0]} no elijas, el juego termino`, m)
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
        }
        delete this.suit[room.id]
        return !0
      }, room.timeout)
    }
    let jwb = m.sender == room.p
    let jwb2 = m.sender == room.p2
    let g = /Tijeras/i
    let b = /Piedra/i
    let k = /Papel/i
    let reg = /^(Tijeras|Piedra|Papel)/i
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0]
      room.text = m.text
      m.reply(`Has elegido ${m.text} ${!room.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
      if (!room.pilih2) this.reply(room.p2, '_El oponente ha elegido_\nAhora es tu turno', 0)
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0]
      room.text2 = m.text
      m.reply(`Has elegido ${m.text} ${!room.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
      if (!room.pilih) this.reply(room.p, '_El oponente ha elegido_\nAhora es tu turno', 0)
    }
    let stage = room.pilih
    let stage2 = room.pilih2
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih)
      if (b.test(stage) && g.test(stage2)) win = room.p
      else if (b.test(stage) && k.test(stage2)) win = room.p2
      else if (g.test(stage) && k.test(stage2)) win = room.p
      else if (g.test(stage) && b.test(stage2)) win = room.p2
      else if (k.test(stage) && b.test(stage2)) win = room.p
      else if (k.test(stage) && g.test(stage2)) win = room.p2
      else if (stage == stage2) tie = true
      this.reply(room.asal, `
_*Resultados del suit*_${tie ? '\nEmpate' : ''}

@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` Ganó \n+${room.poin}XP` : ` Perdió \n${room.poin_lose}XP`}
@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` Ganó \n+${room.poin}XP` : ` Perdió \n${room.poin_lose}XP`}
`.trim(), m, { mentions: [room.p, room.p2] } )
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose

      }
      delete this.suit[room.id]
    }
  }
  return !0
}
handler.exp = 0
export default handler

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
