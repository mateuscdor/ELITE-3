import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler  = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama aplikasi', m)

  await m.reply('Searching...')
    let res = await fetch(`https://caliphapi.com/api/playstore/search?apikey=ELYASXD&q=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = json.result[0].icon
    let hasil = `*ββ γ ππππ πππππ γ ββ*
β’ *π½πΎπΌπ±ππ΄*: ${json.result[0].title}
β’ *π°πΏπΏ πΈπ³*: ${json.result[0].appId}
β’ *DEVELOPER*: ${json.result[0].developer}
β’ *π΄πππ°π³πΎ*: ${json.result[0].priceText}
β’ *HARGA*: ${json.result[0].price}
β’ *RATING*: ${json.result[0].scoreText}
β’ *DESKRIPSI*: ${json.result[0].summary}
β’ *πππ»*:  
${json.result[0].url}
`

    conn.sendButtonImg(m.chat, thumb, hasil, wm, 'Pencet', 'huuu', m)
}
handler.help = ['playstore'].map(v => v + ' <nama apk>')
handler.tags = ['internet']
handler.command = /^(playstore2)$/i
handler.limit = true
export default handler
