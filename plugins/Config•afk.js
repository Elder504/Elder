global.afk = {};

export async function before(m, { conn, text }) {
  // Comando para establecer el estado AFK
  if (text.startsWith('/afk')) {
    let reason = text.slice(4).trim();
    global.afk[m.sender] = {
      time: Date.now(),
      reason: reason || 'No se especificó una razón'
    };
    return await conn.sendMessage(m.chat, { text: `🛑 @${m.sender.split('@')[0]} está ahora en modo AFK.\n\nRazón: ${reason || 'No se especificó una razón'}` }, { mentions: [m.sender] });
  }

  // Comando para eliminar el estado AFK
  if (text.startsWith('/back')) {
    if (global.afk[m.sender]) {
      delete global.afk[m.sender];
      return await conn.sendMessage(m.chat, { text: `✅ @${m.sender.split('@')[0]} ha vuelto del modo AFK.` }, { mentions: [m.sender] });
    }
  }

  // Verificar si el destinatario está en modo AFK
  let mentionedJid = m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.mentionedJid;
  if (mentionedJid) {
    mentionedJid.forEach(async (jid) => {
      if (global.afk[jid]) {
        let afkTime = global.afk[jid].time;
        let reason = global.afk[jid].reason;
        let timeAgo = (Date.now() - afkTime) / 1000; // seconds
        await conn.sendMessage(m.chat, { text: `🛑 @${jid.split('@')[0]} está en modo AFK desde hace ${timeAgo.toFixed(1)} segundos.\n\nRazón: ${reason}` }, { mentions: [jid] });
      }
    });
  }

  // Verificar si el remitente está en modo AFK y eliminar el estado AFK si es el caso
  if (global.afk[m.sender]) {
    delete global.afk[m.sender];
    return await conn.sendMessage(m.chat, { text: `✅ @${m.sender.split('@')[0]} ha vuelto del modo AFK.` }, { mentions: [m.sender] });
  }
}