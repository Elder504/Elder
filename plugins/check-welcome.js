let handler = async (m, { conn }) => {
  if (!global.welcome) {
    return m.reply('*✦ No se encontro mensaje de bienvenida establecido.*');
  }

  m.reply(`${global.welcome}`);
};

handler.command = ['check --welc'];
handler.isAdmin = true;

export default handler;
