import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import { WelcomeLeave } from 'canvafy';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'welcome');
  let img = await (await fetch(pp)).buffer();

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = global.welcome
      .replace('+tag', `@${m.messageStubParameters[0].split('@')[0]}`)
      .replace('+description', groupMetadata.desc || 'Sin descripción');

    try {
      const welcomeImage = await new WelcomeLeave()
        .setAvatar(await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'welcome'))
        .setBackground("image", "https://qu.ax/kiBjo.jpg")
        .setTitle("Bienvenido")
        .setDescription(welcome)
        .setBorder("#2a2e35")
        .setAvatarBorder("#2a2e35")
        .setOverlayOpacity(0.3)
        .build();

      await conn.sendMessage(m.chat, { image: welcomeImage, caption: welcome });
    } catch (error) {
      console.error('Error', error);
      await conn.sendMini(m.chat, redes, dev, welcome, img, img, redeshost);
    }
  }
}
