import fg from 'api-dylux';
import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  // Verificar si se proporcionaron argumentos
  if (!args[0]) throw `
📢 𝟒 𝐕𝐄𝐑𝐒𝐔𝐒 𝟒

⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎
🇲🇽 𝐌𝐄𝐗𝐈𝐂𝐎 : [Indica la hora]
🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀 : [Indica la hora]

➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: [Indica la modalidad]
➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1:
👑 ┇ Capitán
🥷🏻 ┇ Integrante 1
🥷🏻 ┇ Integrante 2
🥷🏻 ┇ Integrante 3

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
🥷🏻 ┇ Suplente 1
🥷🏻 ┇ Suplente 2

✏️ Usa el comando de la forma:
${usedPrefix}${command} [hora] | [modalidad] | [jugadores]
Ejemplo: ${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3
`;

  // Procesar los argumentos
  const input = args.join(' ').split('|').map(v => v.trim());
  if (input.length < 3) throw `⚠️ Debes proporcionar todos los datos: hora, modalidad y jugadores.\nEjemplo: ${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3`;

  const [hora, modalidad, jugadoresRaw] = input;
  const jugadores = jugadoresRaw.split(',').map(v => v.trim());

  if (jugadores.length < 4) throw `⚠️ Debes proporcionar al menos 4 jugadores.\nEjemplo: ${usedPrefix}${command} 20:00 | Clásico | Capitán, Jugador1, Jugador2, Jugador3`;

  // Formatear el mensaje
  const mensaje = `
📢 𝟒 𝐕𝐒 𝟒

⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎
🇲🇽 𝐌𝐄𝐗𝐈𝐂𝐎: ${hora}
🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀: [Convierte la hora si es necesario]

➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: ${modalidad}
➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1:
👑 ┇ ${jugadores[0]} (Capitán)
🥷🏻 ┇ ${jugadores[1]}
🥷🏻 ┇ ${jugadores[2]}
🥷🏻 ┇ ${jugadores[3]}

ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
${jugadores[4] ? `🥷🏻 ┇ ${jugadores[4]}` : '🥷🏻 ┇ Vacante'}
${jugadores[5] ? `🥷🏻 ┇ ${jugadores[5]}` : '🥷🏻 ┇ Vacante'}
`;

  // Enviar el mensaje
  await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });
};

handler.help = ['4vs4'];
handler.tags = ['freefire'];
handler.command = /^(vs4|4vs4|masc4)$/i;
handler.group = true; // Solo en grupos
handler.admin = true; // Solo para admins

export default handler;