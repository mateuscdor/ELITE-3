import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*¿Y el pokemon? Ingresa el nombre de un pokemon*`;
let res = await fetch(API("https://some-random-api.ml", "/pokedex", { pokemon: text }))
const res2 = await googleImage(text)
let image = res2.getRandom()
let link = image

if (!res.ok) throw `${res.status} ${res.statusText}`;
let json = await res.json();
let caption = `
Name: ${json.name}
Id: ${json.id}
Type: ${json.type}
Species: ${json.species}
Abilites: ${json.abilities}
Height: ${json.height}
Weight: ${json.weight}
Base experience: ${json.base_experience}
Gender: ${json.gender}
Egg groups: ${json.egg_groups}\n
STATS
Hp: ${json.stats.hp}
Attack: ${json.stats.attack}
Defense: ${json.stats.defense}
Sp atk: ${json.stats.sp_atk}
Sp def: ${json.stats.sp_def}
Speed: ${json.stats.speed}
Total: ${json.stats.total}\n
FAMILY
Evolution Stage: ${json.family.evolutionStage}
Evolution Line: ${json.family.evolutionLine}\n
DESCRIPTION
${json.description}
Generation: ${json.generation}
`.trim()

conn.sendFile(m.chat, link, null, caption, m)}
//el error estaba en esto - json.sprites.animated

handler.help = ["pokemon", "catch"].map((v) => v + " <pokemon>");
handler.tags = ["internet"];
handler.command = /^(pokemon|pokedex|catch|c|Pokémon)$/i;
export default handler
