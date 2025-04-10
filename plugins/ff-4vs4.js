let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!m.isGroup) return; // Si no es un grupo, no hacer nada
  await m.reply('El comando ha sido ejecutado correctamente.'); // Mensaje de prueba
};