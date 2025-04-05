// commands/setwelcome.js

const handler = async (m, { conn, text }) => {
    if (!m.isGroup) {
        await conn.sendMessage(m.chat, 'Este comando solo se puede usar en grupos.', { quoted: m });
        return;
    }

    const chat = global.db.data.chats[m.chat];
    const welcomeMessage = text.trim();

    if (!welcomeMessage) {
        await conn.sendMessage(m.chat, 'Por favor, proporciona un mensaje de bienvenida.', { quoted: m });
        return;
    }

    chat.welcome = welcomeMessage;
    await conn.sendMessage(m.chat, 'El mensaje de bienvenida ha sido actualizado.', { quoted: m });
};

handler.command = /^(setwelcome)$/i;
handler.tags = ['group'];
handler.help = ['setwelcome <mensaje>'];

export default handler;