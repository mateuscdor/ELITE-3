let handler = async(m, { conn, usedPrefix, command, args }) => {
if (!args[0]) throw `Use example ${usedPrefix + command} hello`
let teksnya = args[0]
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "bear", rowId: '.gettextpro bear ' + teksnya},
{title: "berry", rowId: '.gettextpro berry ' + teksnya},
{title: "blackpink", rowId: '.gettextpro blackpink ' + teksnya},
{title: "blood", rowId: '.gettextpro blood ' + teksnya},
{title: "broken", rowId: '.gettextpro broken ' + teksnya},
{title: "carbon", rowId: '.gettextpro carbon ' + teksnya},
{title: "christmas", rowId: '.gettextpro christmas ' + teksnya},
{title: "circuit", rowId: '.gettextpro circuit ' + teksnya},
{title: "devil", rowId: '.gettextpro devil ' + teksnya},
{title: "discovery", rowId: '.gettextpro discovery ' + teksnya},
{title: "dropwater", rowId: '.gettextpro dropwater ' + teksnya},
{title: "embossed", rowId: '.gettextpro embossed ' + teksnya},
{title: "fiction", rowId: '.gettextpro fiction ' + teksnya},
{title: "firework", rowId: '.gettextpro firework ' + teksnya},
{title: "glossy", rowId: '.gettextpro glossy ' + teksnya},
{title: "glue", rowId: '.gettextpro glue ' + teksnya},
{title: "gradient", rowId: '.gettextpro gradient ' + teksnya},
{title: "greenhorror", rowId: '.gettextpro greenhorror ' + teksnya},
{title: "harrypotter", rowId: '.gettextpro harrypotter ' + teksnya},
{title: "imglitch", rowId: '.gettextpro imglitch ' + teksnya},
{title: "light", rowId: '.gettextpro light ' + teksnya},
{title: "magma", rowId: '.gettextpro magma ' + teksnya},
{title: "metallic", rowId: '.gettextpro metallic ' + teksnya},
{title: "neon", rowId: '.gettextpro neon ' + teksnya},
{title: "paper", rowId: '.gettextpro paper ' + teksnya},
{title: "skeleton", rowId: '.gettextpro skeleton ' + teksnya},
{title: "sketch", rowId: '.gettextpro sketch ' + teksnya},
{title: "stone", rowId: '.gettextpro stone ' + teksnya},
{title: "transformer", rowId: '.gettextpro transformer ' + teksnya},
{title: "videogame", rowId: '.gettextpro videogame ' + teksnya}
	]
    }
]

const listMessage = {
  text: `Please select theme at the bottom button...\n*Your text:* ${args[0]}\nWant a costume name? type *${usedPrefix + command} text*`,
  footer: global.wm,
  title: "⎔───「 Textpro 」───⎔",
  buttonText: "Click Here !",
  sections
}
conn.sendMessage(m.chat, listMessage, m)
}
handler.help = ['textpro <teks>']
handler.tags = ['maker']
handler.command = /^(textpro)$/i
export default handler
