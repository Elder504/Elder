// commands/menu.js

const handler = async (m, { conn }) => {
    const menu = `
    ╔════════════════╗
    ║      𝗠𝗘𝗡𝗨      ║
    ╚════════════════╝
    ║
    ╠➤ .ping - Verifica si el bot está activo
    ╠➤ .saludar [nombre] - Envía un saludo personalizado
    ╠➤ .info - Muestra información del bot
    ║
    ╚═➤ Más comandos próximamente...
    `;

    await conn.sendMessage(m.chat, menu, { quoted: m });
};

handler.command = /^(menu|help)$/i;
handler.tags = ['menu'];
handler.help = ['menu', 'help'];

export default handler;