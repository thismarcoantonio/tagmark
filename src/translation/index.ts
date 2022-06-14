import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en";
import pt from "./pt";
import { getItem, setItem } from "@/utils/storage";
import { UserConfig } from "@/declarations/UserConfig";

Vue.use(VueI18n);

const STORAGE_KEY = "tagmark-configurations";

function getActiveTranslation(): UserConfig["language"] | undefined {
  const config = getItem<UserConfig>(STORAGE_KEY);
  return config?.language;
}

export function setActiveTranslation(language: UserConfig["language"]) {
  if (language !== i18n.locale) {
    const config = getItem<UserConfig>(STORAGE_KEY);
    setItem<UserConfig>(STORAGE_KEY, { ...config, language });
    i18n.locale = language;
  }
}

const i18n = new VueI18n({
  locale: getActiveTranslation(),
  messages: { en, pt },
});

export default i18n;
