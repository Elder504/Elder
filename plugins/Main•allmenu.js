let handler = async (m, { conn }) => {
 let txt = `*HOLA HUMANO! : \`${conn.getName(m.sender)}\`*

» 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰, 𝘦𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘮𝘦𝘯𝘶́ 𝘳𝘦𝘴𝘶𝘮𝘪𝘥𝘰 𝘥𝘦 𝘵𝘰𝘥𝘰 𝘭𝘰 𝘲𝘶𝘦 𝘤𝘰𝘯𝘵𝘪𝘦𝘯𝘦 𝘌𝘭𝘥𝘦𝘳-𝘣𝘰𝘵.

*\`ɪɴꜰᴏ\`*

☆ *ᴘᴇʀꜰɪʟ*
☆ *ᴍᴇɴᴜ*

*\`ᴀɪ\`*

☆ *ʀᴇᴍɪɴɪ*
☆ *ʜᴅ*
☆ *ᴇɴʜᴀɴᴄᴇ*
☆ *ᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛxᴛ>*
☆ *ɢᴇᴍɪɴɪ / ɪᴀ*
☆ *ᴘɪxᴀɪ*

 *\`ʙᴜꜱQᴜᴇᴅᴀꜱ\`*

☆ 🚩 *ɢᴏᴏɢʟᴇ <ʙÚꜱQᴜᴇᴅᴀ>*
☆ *ᴛɪᴋᴛᴏᴋꜱᴇᴀʀᴄʜ <ᴛxᴛ>*
☆ *ʏᴛꜱᴇᴀʀᴄʜ*
☆ *ɪᴍᴀɢᴇɴ <ᴛxᴛ>*
☆ *ᴘʟᴀʏ* <ᴍᴜꜱɪᴄᴀ>
☆ *ʏᴛᴅʟᴍᴘ4* <ɴᴏᴍʙʀᴇ>
☆ *ʏᴛᴅʟᴍᴘ3* <ɴᴏᴍʙʀᴇ>

‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌
 *\`ᴊᴜᴇɢᴏꜱ\`*

☆ *ᴀʙʀᴀᴢᴀʀ <@ᴛᴀɢ>*
☆ *ᴀᴄᴇʀᴛɪᴊᴏ*
☆ *ꜱᴏɴʀᴏᴊᴀʀꜱᴇ <@ᴛᴀɢ>*
☆ *ᴄᴏɴꜱᴇᴊᴏ*
☆ *ᴇɴᴀᴍᴏʀᴀᴅᴀ <@ᴛᴀɢ>*
☆ *ᴍᴇᴍᴇ*
☆ *ᴀᴄᴀʀɪᴄɪᴀʀ <@ᴛᴀɢ>*
☆ *ᴘᴇʀꜱᴏɴᴀʟɪᴅᴀᴅ*
☆ *ᴘɪʀᴏᴘᴏ*
☆ *ᴘᴏᴋᴇᴅᴇx <ᴘᴏᴋᴇᴍÓɴ>*
☆ *ᴘʀᴇɢᴜɴᴛᴀ*
☆ *ᴅᴏʀᴍɪʀ <@ᴛᴀɢ>*
☆ *ᴛʀɪꜱᴛᴇ <@ᴛᴀɢ>*
☆ *ᴛᴏᴘ <ᴛxᴛ>*
☆ *ᴢᴏᴅɪᴀᴄ <2010 03 15*

 *\`ᴊᴀᴅɪ / ʙᴏᴛꜱ\`*

☆ *ᴄᴏᴅᴇ* 
☆ *ꜱᴇʀʙᴏᴛ*
☆ *ᴇꜱᴛᴀᴅᴏ*

 *\`ʀᴘɢ\`*

☆ *ʙᴀʟ*
☆ *ᴄʀɪᴍᴇɴ*
☆ *ᴅᴀɪʟʏ*
☆ *ᴄʟᴀɪᴍ*
☆ *ᴅᴇᴘᴏꜱɪᴛᴀʀ*
☆ *ʟʙ*
☆ *ʀᴇᴛɪʀᴀʀ*
☆ *ʀᴏʙ2*
☆ *ʀᴏʙ*
☆ *ᴛʀᴀʙᴀᴊᴀʀ*
☆ *ʙᴜʏ*
☆ *ʙᴜʏ ᴀʟʟ*

 *\`ꜱᴛɪᴄᴋᴇʀꜱ\`*

☆ *Qᴄ*
☆ *ꜱᴛɪᴋᴇʀ <ɪᴍɢ>*
☆ *ꜱᴛɪᴄᴋᴇʀ <ᴜʀʟ>*
☆ *ᴛᴀᴋᴇ <ɴᴏᴍʙʀᴇ/ᴀᴜᴛᴏʀ>*

 *\`+18\`*

☆ *xɴxxꜱᴇᴀʀᴄʜ <ᴛxᴛ>*
☆ *xɴxxᴅʟ <ʟɪɴᴋ>*

 *\`ᴀɴɪᴍᴇꜱ\`*

☆ *ʀᴜʟᴇ34 <ᴛᴀɢ>*
☆ *ᴡᴀɪꜰᴜ*
☆ *ʜᴇɴᴛᴀɪꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>*
☆ *ʜᴇɴᴛᴀɪᴅʟ <ʟɪɴᴋ / ɪᴅ>*

 *\`ɢʀᴜᴘᴏꜱ\`*

☆ *ʟɪɴᴋ*
☆ *ɢʀᴜᴘᴏ ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ*
☆ *ᴅᴇʟᴇᴛᴇ*
☆ *ᴅᴇᴍᴏᴛᴇ*
☆ *ᴘʀᴏᴍᴏᴛᴇ*
☆ *ᴇɴᴄᴜᴇꜱᴛᴀ <ᴛxᴛ / ᴛxᴛ>*
☆ *ʜɪᴅᴇᴛᴀɢ*
☆ *ɪɴꜰᴏɢʀᴜᴘᴏ*
☆ *ᴋɪᴄᴋ*
☆ *ʟɪꜱᴛᴀᴅᴠ*
☆ *ᴛᴀɢᴀʟʟ <ᴛxᴛ>*
☆ *ɪɴᴠᴏᴄᴀʀ <ᴛxᴛ>*

 *\`ᴏɴ/ᴏꜰꜰ\`*

☆ *ᴇɴᴀʙʟᴇ*
☆ *ᴅɪꜱᴀʙʟᴇ*

 *\`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`*

☆ *ꜰᴀᴄᴇʙᴏᴏᴋ - ꜰʙ*
☆ *ɪᴍᴀɢᴇɴ <ᴛxᴛ>*
☆ *ɪɴꜱᴛᴀɢʀᴀᴍ - ɪɢ*
☆ *ᴛɪᴋᴛᴏᴋ*
☆ *ʏᴛᴍᴘ4*
☆ *ʏᴛᴍᴘ3*

 *\`ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ\`*

☆ *ᴛᴏᴀɴɪᴍᴇ*
☆ *ʀᴇᴍɪɴɪ*
☆ *ʜᴅ*
☆ *ᴇɴʜᴀɴᴄᴇ*
☆ *ꜱꜱᴡᴇʙ*
☆ *ꜱꜱ*
☆ *ᴛʀᴀᴅ*

 *\`ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ\`*

☆ *ᴛᴏɢɪꜰᴀᴜᴅ*
☆ *ᴛᴏɪᴍɢ*
☆ *ᴛᴏᴀᴜᴅɪᴏ*

 *\`ᴀᴅᴍɪɴ\`*

☆ *ᴀᴅᴅᴘʀᴇᴍ2 <@ᴛᴀɢ> <ᴅᴀʏꜱ>*
☆ *ᴀᴅᴅʏᴇɴ2 <@ᴛᴀɢ>*
> *© ⍴᥆ᥕᥱrᥱძ ᑲᥡ һᥒ ᥱᥣძᥱr*`.trim();

m.react('✅');
let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/5xMs19nx/file.jpg');

/* await conn.sendMessage(m.chat, { text: txt, contextInfo: { externalAdReply: { title: botname, body: dev, thumbnailUrl: banner, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
};
*/
let bann = 'https://cdnmega.vercel.app/media/9wB1HLrT@Jcn5yrz18NjokOpmyK-SS9u-OZc4SyK_2rsVxxQ6wXI';

conn.sendMessage(m.chat, { image: { url: bann }, caption: txt }, { quoted: m });
}

handler.command = ['allmenu', 'menu', 'menuall', 'menucompleto'];

export default handler;