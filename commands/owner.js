const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner}
TEL;waid=${settings.+918137829228}:${settings.+918137829228}
END:VCARD
`;

    await sock.sendMessage(chatId, {
        contacts: { LIZAMWOL: settings.Mudiyanmass, +918137829228: [{ vcard }] },
    });
}

module.exports = ownerCommand;
