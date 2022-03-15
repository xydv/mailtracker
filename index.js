const express = require("express");
const app = express();
require('dotenv').config()
const TB = require('node-telegram-bot-api');
const bot = new TB(process.env.TOKEN, { polling: true });
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/image.png`, (error) => { });
    bot.sendMessage(process.env.CHATID, `Name :- ${req.query.name}\nMail :- ${req.query.mail}\nSubject :- ${req.query.subject}\nHas Been Readed By Receiver!!`);
    console.log(req.query);
});
app.listen(process.env.PORT);
