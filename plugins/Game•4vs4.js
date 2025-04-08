import fg from 'api-dylux';
import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `
  𝟒 𝐕𝐄𝐑𝐒𝐔𝐒 𝟒
  
  ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎:
  🇲🇽 𝐌𝐄𝐗𝐈𝐂𝐎 : 
  🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀 :                
  
  ➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
  ➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
  
        𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1:
        👑 ┇ Jugador 1
        🥷🏻 ┇ Jugador 2
        🥷🏻 ┇ Jugador 3
        🥷🏻 ┇ Jugador 4
        
        ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
        🥷🏻 ┇ Suplente 1
        🥷🏻 ┇ Suplente 2

        𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2:
        👑 ┇ Jugador 1
        🥷🏻 ┇ Jugador 2
        🥷🏻 ┇ Jugador 3
        🥷🏻 ┇ Jugador 4
        
        ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
        🥷🏻 ┇ Suplente 1
        🥷🏻 ┇ Suplente 2
  `;

  // Mensaje de 4vs4
  const message = `
    𝟒 𝐕𝐄𝐑𝐒𝐔𝐒 𝟒

    ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎:
    🇲🇽 𝐌𝐄𝐗𝐈𝐂𝐎 : 
    🇨🇴 𝐂𝐎𝐋𝐎𝐌𝐁𝐈𝐀 :                

    ➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
    ➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:

    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1:
    👑 ┇ Jugador 1
    🥷🏻 ┇ Jugador 2
    🥷🏻 ┇ Jugador 3
    🥷🏻 ┇ Jugador 4

    ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
    🥷🏻 ┇ Suplente 1
    🥷🏻 ┇ Suplente 2

    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2:
    👑 ┇ Jugador 1
    🥷🏻 ┇ Jugador 2
    🥷🏻 ┇ Jugador 3
    🥷🏻 ┇ Jugador 4

    ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
    🥷🏻 ┇ Suplente 1
    🥷🏻 ┇ Suplente 2
  `;

  await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.help = ['4vs4'];
handler.tags = ['freefire'];
handler.command = /^(vs4|4vs4|masc4)$/i;
handler.group = true;
handler.admin = true;

export default handler;