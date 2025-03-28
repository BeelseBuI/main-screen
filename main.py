from flask import Flask, request
import telebot
from telebot import types
import os

bot_token = os.environ.get("BOT_TOKEN")
provider_token = os.environ.get("PROVIDER_TOKEN")
bot = telebot.TeleBot(bot_token)

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return "Bot is alive"

@app.route('/webhook', methods=['POST'])
def webhook():
    json_str = request.get_data().decode('UTF-8')
    update = types.Update.de_json(json_str)
    bot.process_new_updates([update])
    return 'ok'

@bot.message_handler(commands=['start'])
def url(message):
    markup = types.InlineKeyboardMarkup()
    webUrl = types.WebAppInfo("ССЫЛКА_НА_МИНИАПП")
    web_btn = types.InlineKeyboardButton(text='Перейти к Mini Apps', web_app=webUrl)
    markup.add(web_btn)
    bot.send_message(message.chat.id, "Перейти к Mini Apps", reply_markup=markup)

# webhook можно установить вручную или из Telegram Bot API
