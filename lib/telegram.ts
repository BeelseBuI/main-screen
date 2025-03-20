"use client";

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    query_id: string;
    user: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    auth_date: string;
    hash: string;
  };
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
  };
  BackButton: {
    isVisible: boolean;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
  };
  ready: () => void;
  expand: () => void;
  close: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export const getTelegramWebApp = (): TelegramWebApp | null => {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    return window.Telegram.WebApp;
  }
  return null;
};

export const useTelegramUser = () => {
  const webApp = getTelegramWebApp();
  if (!webApp) return null;
  
  return webApp.initDataUnsafe.user;
};

export const initTelegramWebApp = () => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.ready();
    webApp.expand();
  }
};

export const showTelegramBackButton = () => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.BackButton.show();
  }
};

export const hideTelegramBackButton = () => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.BackButton.hide();
  }
};

export const setTelegramBackButtonHandler = (callback: () => void) => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.BackButton.onClick(callback);
  }
};

export const showTelegramMainButton = (text: string) => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.MainButton.setText(text);
    webApp.MainButton.show();
  }
};

export const hideTelegramMainButton = () => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.MainButton.hide();
  }
};

export const setTelegramMainButtonHandler = (callback: () => void) => {
  const webApp = getTelegramWebApp();
  if (webApp) {
    webApp.MainButton.onClick(callback);
  }
};