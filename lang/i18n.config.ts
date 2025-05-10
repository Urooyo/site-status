import zh from "./locales/zh-CN.json";
import en from "./locales/en-US.json";
import jp from "./locales/ja-JP.json";
import kr from "./locales/ko-KR.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko-KR",
  messages: { "zh-CN": zh, "ja-JP": jp, "ko-KR": kr, en },
  fallbackLocale: "ko-KR",
  // 语言偏好
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "ko-KR",
    redirectOn: "root",
  },
}));
