let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
 let txt = `
Hola *${name}* 

Desarrollo...`
    
     conn.sendHydrated(m.chat, txt, igfg, null, null, null, null, null, [
      ['⦙☰ Menu', '.menu'],
      ['⦙☰ Menu 2', '.menucompleto'],
    ], m)

} 

handler.command = ['PokeVIP'] 

export default handler
