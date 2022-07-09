import { googleImage } from '@bochilteam/scraper'
import translate from 'translate-google-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `¿Y el pokemon? Ingresa el nombre de un pokemon`;
let res = await fetch(API("https://some-random-api.ml", "/pokedex", { pokemon: text }))
const res2 = await googleImage(text)
let image = res2.getRandom()
let link = image
const tld = 'cn'

if (!res.ok) throw `${res.status} ${res.statusText}`
let json = await res.json()
let result = await translate(`${json.description}`, { tld, to: 'es', })
let result2 = await translate(`${json.species}`, { tld, to: 'es', })
let result3 = await translate(`${json.type}`, { tld, to: 'es', })
let result4 = await translate(`${json.abilities}`, { tld, to: 'es', })
let result5 = await translate(`${json.gender}`, { tld, to: 'es', })
let result6 = await translate(`${json.egg_groups}`, { tld, to: 'es', })
let caption = `
Nombre: ${json.name}
ID: ${json.id}
Tipo: ${result3}
Especies: ${result2}
Habilidades: ${result4}
Altura: ${json.height}
Peso: ${json.weight}
Experiencia básica: ${json.base_experience}
Género: ${result5}
Grupos de huevos: ${result6}

ESTADÍSTICAS
Hp: ${json.stats.hp}
Ataque: ${json.stats.attack}
Defensa: ${json.stats.defense}
Sp atk: ${json.stats.sp_atk}
Sp def: ${json.stats.sp_def}
Velocidad: ${json.stats.speed}
Total: ${json.stats.total}

FAMILIA
Etapa de evolución: ${json.family.evolutionStage}
Línea Evolución: ${json.family.evolutionLine}

DESCRIPCION:
${result}
Generacion: ${json.generation}
`.trim()

conn.sendFile(m.chat, link, null, caption, m)}
//el error estaba en esto - json.sprites.animated

handler.help = ["pokemon", "catch"].map((v) => v + " <pokemon>");
handler.tags = ["internet"];
handler.command = /^(pokemon|pokedex|catch|c|Pokémon)$/i;
export default handler
