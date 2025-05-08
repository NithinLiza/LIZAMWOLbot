const { izumi, mode } = require('../lib/');
izumi({
    pattern: "owner$",
    fromMe: mode,
    desc: "Bot Owner",
    type: "user",
}, async (message, match, client) => {
    try {
        const name = 'Eʏᴘᴢ ☔', title = "Iᴢᴜᴍɪ Sᴜᴘᴘᴏʀᴛ🧚‍♂️", number = '917994489493', body = "Eʏᴘᴢ☔";
        const image = "https://i.imgur.com/UriXD0j.jpeg", sourceUrl = 'https://chat.whatsapp.com/KHvcGD7aEUo8gPocJsYXZe';
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
        await client.sendMessage(message.jid, {
            contacts: {
                contacts: [{ vcard }]
            },
            contextInfo: { 
                externalAdReply: {
                    title: `${title}`,
                    body: `${body}`,
                    sourceUrl: `${sourceUrl}`,
                    mediaUrl: `${sourceUrl}`,
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true,
                    thumbnailUrl: `${image}`
                }
            }
        });
    } catch (error) {
        console.error('Error occurred:', error);
        await client.sendMessage(message.jid, { text: '```Error occurred while executing the command.```' });
    }
});
