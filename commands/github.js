async function githubCommand(sock, chatId) {
    const repoInfo = `*LIZAMWOL*

*📂 GitHub Repository:*
https://github.com/mudiyanmas/LIZAMWOL

*📢 Official Channel:*
https://chat.whatsapp.com/IDik0Yl1FnVGE6kiXsKUAG

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401516239182@g.us',
                    newsletterName: 'LIZAMWOL',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
