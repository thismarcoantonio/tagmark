import { IconTypes } from "./IconTypes";
import { TranslateResult } from "vue-i18n";

export interface DropdownOption {
  key: string;
  icon?: IconTypes;
  label: TranslateResult;
}
