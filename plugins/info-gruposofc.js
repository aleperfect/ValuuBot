const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝑯𝒐𝒍𝒂, 𝑻𝒆 𝑰𝒏𝒗𝒊𝒕𝒐 𝑨 𝑼𝒏𝒊𝒓𝒕𝒆 𝑨 𝑳𝒐𝒔 𝑮𝒓𝒖𝒑𝒐𝒔 𝑶𝒇𝒊𝒄𝒊𝒂𝒆𝒔 𝑫𝒆 𝑪/𝑽 𝑫𝒆 𝑴𝒊 𝑪𝒓𝒆𝒂𝒅𝒐𝒓

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜:*
*1.-* 
https://chat.whatsapp.com/CCDGO1lIuH3Ggr4nA44cbY

qi
*2.-* 
https://chat.whatsapp.com/CCDGO1lIuH3Ggr4nA44cbY

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
