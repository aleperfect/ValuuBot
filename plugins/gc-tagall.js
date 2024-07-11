let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*🌟 𝘼𝙙𝙦𝙪𝙞𝙚𝙧𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙖𝙦𝙪𝙞 ⤸*
  https://chat.whatsapp.com/HhZUtxp2KRTD5rD5j09VCy ${pesan}`
  let teks = `*𝘼𝘾𝙏𝙄𝙑𝙀𝙉𝙎𝙀 𝙋𝙇𝘼𝙉𝙏𝘼𝙎 𝙊 𝘾𝙐𝙋𝙊 👋🏻*\n\n ${oi}\n\n *𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙂𝙀𝙉𝙀𝙍𝘼𝙇*\n`
  for (let mem of participants) {
  teks += `🐱🩵 @${mem.id.split('@')[0]}\n`}
  teks += `✿⁠ 𝙑𝙖𝙡𝙪 𝘽𝙤𝙩`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler