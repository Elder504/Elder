import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import sharp from 'sharp';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let pp;
  try {
    pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image');
  } catch (error) {
    pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  }

  let img;
  try {
    img = await (await fetch(pp)).buffer();
  } catch (error) {
    console.error('Error al obtener la imagen del perfil:', error);
    return;
  }

  let chat = global.db.data.chats[m.chat];

  if (chat && chat.welcome && m.messageStubType == 27) {
    let welcome = `
      🌟 Bienvenido/a al grupo ${groupMetadata.subject}! 🌟
      
      👤 Usuario: @${m.messageStubParameters[0].split('@')[0]}
      📜 Descripción: ${groupMetadata.desc || 'Sin descripción'}
      
      ¡Esperamos que disfrutes tu estadía! 😊
    `;

    try {
      const extendedImage = await sharp(img)
        .resize({ width: 1200, height: 1200, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer();

      await conn.sendMessage(m.chat, { image: extendedImage, caption: welcome });
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      await conn.sendMessage(m.chat, { image: img, caption: welcome });
    }
  }
}