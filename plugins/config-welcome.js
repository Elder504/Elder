import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import sharp from 'sharp';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
  let img = await (await fetch(pp)).buffer();

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let welcomeMessage = `Welcome to ${groupMetadata.subject}!`;

    try {
      const extendedImage = await sharp(img)
        .resize({ width: 800, height: 300, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }) // Ajusta estos valores
        .toBuffer();

      await conn.sendMini(m.chat, redes, dev, welcomeMessage, extendedImage, extendedImage, redeshost);
    } catch (error) {
      console.error('Error', error);
      await conn.sendMini(m.chat, redes, dev, welcomeMessage, img, img, redeshost);
    }
  }
}