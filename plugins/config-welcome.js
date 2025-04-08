import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;

  try {
    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/Mvhfa.jpg')
    let img = await (await fetch(`${pp}`)).buffer()
    let chat = global.db.data.chats[m.chat]

    console.log(`Message Stub Type: ${m.messageStubType}`);
    console.log(`Chat Bienvenida: ${chat.bienvenida}`);

    if (chat.bienvenida && m.messageStubType == 27) {
      if (chat.sWelcome) {
        let user = `@${m.messageStubParameters[0].split`@`[0]}`
        let welcome = chat.sWelcome
          .replace('@user', () => user)
          .replace('@group', () => groupMetadata.subject)
          .replace('@desc', () => groupMetadata.desc || 'sin descripción');
        await conn.sendAi(m.chat, botname, textbot, welcome, img, img, canal)
      } else {
        let bienvenida = `┌─★ _Barboza Bot_ \n│「 _Bienvenido_ 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  _Bienvenido_ a\n   │✑  ${groupMetadata.subject}\n   │✑  ${groupMetadata.desc || 'sin descripción'}`
        await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img)
      }
    }

    // Similar debug logs and checks for other message types...

  } catch (error) {
    console.error('Error processing welcome message:', error);
  }
}