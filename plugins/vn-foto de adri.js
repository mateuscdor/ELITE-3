import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Foto del creador.jpg' 
conn.sendFile(m.chat, vn, 'Foto del creador.jpg', 'Aqui tienes una foto de mi creador😳🥵', m, true, {
})
}
handler.customPrefix = /foto de Adri|foto adri|foto adrih|foto del creador|foto de Unptoadrih15/i
handler.command = new RegExp
export default handler
