import { atom } from "recoil";

export const tempState = atom({
  key: "textState", // unique ID (with respect to other atoms)
  default: "c", // default value (aka initial value)
});
