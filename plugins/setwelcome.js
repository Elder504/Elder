import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome);
  let img = await (await fetch(`${pp}`)).buffer();

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let userTag = `@${m.messageStubParameters[0].split`@`[0]}`;
    let groupDescription = groupMetadata.desc || '*Sin descripción*';
    
    let welcomeMessage = global.welcome
      .replace(/\+tag/gi, userTag)
      .replace(/\+description/gi, groupDescription);

    await conn.sendMini(m.chat, redes, dev, welcomeMessage, img, img, redeshost);
  }
}

let handler = async (m, { conn, isRowner }) => {
  const newWelcome = m.text.trim().split(' ').slice(1).join(' ');

  if (!newWelcome) {
    return m.reply('*✦ Proporcione un mensaje de bienvenida*');
  }

  global.welcome = newWelcome;
  m.reply(`*✦ El mensaje de bienvenida fue cambiado*`);
};

handler.command = ['setwelcome'];
handler.isAdmin = true;

export default handler;
