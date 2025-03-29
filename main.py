import telebot
from django.conf import settings

bot = telebot.TeleBot(settings.TELEGRAM_API_TOKEN, parse_mode="HTML")
