let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendFile(m.chat, pickRandom(stikerhuuu), null, { asSticker: true })
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "./media/stickers/STK-20220619-WA1589.webp",
 "./media/stickers/STK-20220619-WA1588.webp",
 "./media/stickers/STK-20220619-WA1587.webp",
 "./media/stickers/STK-20220619-WA1579.webp",
 "./media/stickers/STK-20220619-WA1578.webp",
 "./media/stickers/STK-20220619-WA1576.webp",
 "./media/stickers/STK-20220619-WA1574.webp",
 "./media/stickers/STK-20220619-WA1572.webp",
 "./media/stickers/STK-20220619-WA1571.webp",
 "./media/stickers/STK-20220619-WA1569.webp",
 "./media/stickers/STK-20220619-WA1568.webp",
 "./media/stickers/STK-20220619-WA1573.webp",
 "./media/stickers/STK-20220619-WA1566.webp",
]
