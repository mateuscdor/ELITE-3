let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('              *[❗𝐈𝐍𝐅𝐎❗]* \n\n*𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙱𝙰𝙽𝙴𝙰𝙳𝙾.*')
  chat.isBanned = false
  m.reply('                       *[❗𝐈𝐍𝐅𝐎❗]* \n\n*𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾.*')
}
handler.command = /^unbanchat$/i
handler.admin = true
export default handler
