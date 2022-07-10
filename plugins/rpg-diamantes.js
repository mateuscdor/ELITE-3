const xpperlimit = 100 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buyd/i, '')
  let name = conn.getName(m.sender) 
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
┌───「 *TIENDA DE DIAMANTE*」───
*▢ CLIENTE : ${name}*
└──────────────────────
┌────────────────
*≡ Nota:*
*▢ 1 Diamante equivale a 100 de XP.*
└──────────────────────
┌──────────────────────
*▢ TOTAL XP GASTADO*  : 「-${xpperlimit * count}」 
*▢ DIAMANTE OBTENIDO* : 「+${count}」  
└──────────────────────`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['comprardiamante', 'tiendadiamante', 'buyall', 'storediamod', 'buyd', 'td',] 

handler.disabled = false

export default handler
