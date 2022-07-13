let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = false
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('44' || '44')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('62' || '62')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('7' || '7')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('55' || '55')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('48' || '48')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('972' || '972')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('371' || '371')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('377' || '377')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.ðŸ˜„')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
    }

export default handler
