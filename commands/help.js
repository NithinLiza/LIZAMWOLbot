const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╭───❍「 🤖ʟɪᴢᴀ ᴍᴡᴏʟ ᴍᴅ❄ 」
│ ✨ Hi! 👋
│ 🏷 OWNER : |𝙻𝙸𝚉𝙰𝙼𝚆𝙾𝙻|
│ 💌 DEV{✰𝙻𝙸𝙻-𝙲𝚁𝙾𝙽𝙴✰}*
╰─┬───────❍
╭─┴──❍「 ✰★✰ 」❍
│ 👑 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 = ༄𝚟3.0.0༆
│ 💸 𝙱𝙰𝙸𝙻𝙴𝚈𝚂=۞𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴♲

│ 🌟 𝙿𝚁𝙴𝙵𝙸𝚇 = ☞.☜

╰──┬──────❍
╭─┴❍
    │
╭────────❒ *DOWNLOADER CMDS*➣
│➣│▸ .play ▶ 
│➣│▸ .song 🎧
│➣│▸ .tikok 📺
│➣│▸ .lnstagram 📽
│➣│▸ .facebook 📸
╰─────│

    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *STICKER CMD*➣
│➣│▸ .blur <image>
│➣│▸ .simage <reply to sticker>
│➣│▸ .sticker <reply to image>
│➣│▸ .tgsticker <Link>
│➣│▸ .meme
│➣│▸ .take <packname> 
│➣│▸ .emojimix <emj1>+<emj2>
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣   
╭────────❒ *ADMIN CMDS*➣
│➣│▸ .ban @user
│➣│▸ .promote @user
│➣│▸ .demote @user
│➣│▸ .mute <minutes>
│➣│▸ .unmute
│➣│▸ .delete or .del
│➣│▸ .kick @user
│➣│▸ .warnings @user
│➣│▸ .warn @user
│➣│▸ .antilink
│➣│▸ .antibadword
│➣│▸ .clear
│➣│▸ .tag <message>
│➣│▸ .tagall
│➣│▸ .chatbot
│➣│▸ .resetlink
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *OWNER CMDS*➣
│➣│▸ .mode
│➣│▸ .autostatus
│➣│▸ .clearsession
│➣│▸ .antidelete
│➣│▸ .cleartmp
│➣│▸ .setpp <reply to image>
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *GITHUB CMDS*➣
│➣│▸ .git
│➣│▸ .github
│➣│▸ .sc
│➣│▸ .script
│➣│▸ .repo
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *TEXTMAKER CMDS*➣
│➣│▸ .metallic <text>
│➣│▸ .ice <text>
│➣│▸ .snow <text>
│➣│▸ .impressive <text>
│➣│▸ .matrix <text>
│➣│▸ .light <text>
│➣│▸ .neon <text>
│➣│▸ .devil <text>
│➣│▸ .purple <text>
│➣│▸ .thunder <text>
│➣│▸ .leaves <text>
│➣│▸ .1917 <text>
│➣│▸ .arena <text>
│➣│▸ .hacker <text>
│➣│▸ .sand <text>
│➣│▸ .blackpink <text>
│➣│▸ .glitch <text>
│➣│▸ .fire <text>
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *FUN CMDS*➣
│➣│▸ .compliment @user
│➣│▸ .insult @user
│➣│▸ .flirt 
│➣│▸ .character @user
│➣│▸ .wasted @user
│➣│▸ .ship @user
│➣│▸ .simp @user
│➣│▸ .stupid @user [text]
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *GAMES CMDS*➣
│➣│▸ .tictactoe @user
│➣│▸ .hangman
│➣│▸ .guess <letter>
│➣│▸ .trivia
│➣│▸ .answer <answer>
│➣│▸ .truth
│➣│▸ .dare
╰─────│
    ─┬────❍ 
╭─┴❍
    │
    │───❍─────❍❍➣
╭────────❒ *GENERAL CMDS*➣
│➣│▸ .menu
│➣│▸ .ping
│➣│▸ .alive
│➣│▸ .tts <text>
│➣│▸ .owner
│➣│▸ .joke
│➣│▸ .quote
│➣│▸ .fact
│➣│▸ .weather <city>
│➣│▸ .news
│➣│▸ .attp <text>
│➣│▸ .lyrics <song_title>
│➣│▸ .8ball <question>
│➣│▸ .groupinfo
│➣│▸ .staff or .admins 
│➣│▸ .vv
│➣│▸ .rent
│➣│▸ .gpt
│➣│▸ .gemini
╰─────│
    ─┬─❍ 
    │
 ───❍─────❍❍➣
BOT IS UNDER MAINTENANCE © PAID TECH ZONE:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401516239182@newsletter',
                        newsletterName: 'LIZAMWOL',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401516239182@newsletter',
                        newsletterName: 'LIZAMWOL',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
