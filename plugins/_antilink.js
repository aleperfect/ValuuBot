const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*[❗] 𝑯𝒆𝒚 𝑬𝒍 𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝑬𝒔𝒕𝒂 𝑯𝒂𝒃𝒊𝒍𝒊𝒕𝒂𝒅𝒐 𝑷𝒆𝒓𝒐 𝑬𝒓𝒆𝒔 𝑨𝒅𝒎𝒊𝒏*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*${user} 𝑰𝒏𝒄𝒖𝒎𝒑𝒍𝒊𝒔𝒕𝒆 𝑳𝒂𝒔 𝑹𝒆𝒈𝒍𝒂𝒔 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐, 𝑺𝒆𝒓𝒂𝒔 𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐. 𝑨𝑫𝑰𝑶𝑺 𝑯𝑫𝑳𝑽!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗] 𝑬𝒍 𝑩𝒐𝒕 𝑵𝒐 𝑬𝒔 𝑨𝒅𝒎𝒊𝒏 𝑷𝒐𝒓 𝑳𝒐 𝑻𝒂𝒏𝒕𝒐 𝑵𝒐 𝑷𝒖𝒆𝒅𝒆 𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗] 𝑬𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝑫𝒆𝒍 𝑩𝒐𝒕 𝑻𝒊𝒆𝒏𝒆 𝑫𝒆𝒔𝒉𝒂𝒃𝒊𝒊𝒕𝒂𝒅𝒂𝒔 𝑳𝒂𝒔 𝑹𝒆𝒔𝒕𝒓𝒊𝒄𝒄𝒊𝒐𝒏𝒆𝒔 (. 𝑬𝒏𝒂𝒃𝒍𝒆 𝑹𝒆𝒔𝒕𝒓𝒊𝒄𝒕) 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒆 𝑪𝒐𝒏 𝑬𝒍 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 𝑷𝒂𝒓𝒂 𝑸𝒖𝒆 𝑯𝒂𝒃𝒊𝒍𝒊𝒕𝒆 𝑳𝒂 𝑭𝒖𝒏𝒄𝒊𝒐𝒏*');
  }
  return !0;
}
