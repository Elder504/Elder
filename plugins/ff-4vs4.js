let handler = async (m, { conn, args, usedPrefix, command }) => {
  // Validar si se proporcionaron argumentos
  if (args.length === 0) throw `
📢 𝟒 𝐕𝐒 𝟒 - 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄

✏️ Uso del comando:
${usedPrefix}${command} <hora> | <modalidad> | <jugadores>
Ejemplo:
${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3, Suplente1, Suplente2

📝 Detalles:
- <hora>: Hora de la partida (ejemplo: 20:00)
- <modalidad>: Modalidad de la partida (ejemplo: Clásico o Competitivo)
- <jugadores>: Lista de jugadores separados por comas (mínimo 4, máximo 6 incluyendo suplentes).
`;

  // Dividir los argumentos en partes
  const input = args.join(' ').split('|').map(v => v.trim());
  if (input.length < 3) throw `⚠️ Proporciona todos los datos requeridos: hora, modalidad y jugadores.\nEjemplo: ${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3`;

  const [hora, modalidad, jugadoresRaw] = input; // Hora, Modalidad, Lista de jugadores
  const jugadores = jugadoresRaw.split(',').map(v => v.trim()); // Lista de jugadores separados por comas

  if (jugadores.length < 4) throw `⚠️ Debes proporcionar al menos 4 jugadores.\nEjemplo: ${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3`;

  // Generar el mensaje dinámico
  const mensaje = `
🎮 𝟒 𝐕𝐒 𝟒 - 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 🎮

⏱ 𝐇𝐎𝐑𝐀:
${hora}

🎯 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃:
${modalidad}

👥 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1:
👑 Capitán: ${jugadores[0]}
🥷 Jugador 1: ${jugadores[1]}
🥷 Jugador 2: ${jugadores[2]}
🥷 Jugador 3: ${jugadores[3]}

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
${jugadores[4] ? `🥷 Suplente 1: ${jugadores[4]}` : '🥷 Suplente 1: Vacante'}
${jugadores[5] ? `🥷 Suplente 2: ${jugadores[5]}` : '🥷 Suplente 2: Vacante'}
`;

  // Enviar el mensaje al chat
  await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });
};

// Configuración del comando
handler.help = ['4vs4'];
handler.tags = ['freefire'];
handler.command = /^(4vs4|ff4vs4|vs4)$/i;
handler.group = true; // Solo en grupos
handler.admin = true; // Solo administradores pueden usarlo

export default handler;