// @ts-ignore
import { kamehameha, pregnantGoku } from "./goku.js";

const button = document.getElementById("enable-button")!;

button.addEventListener("click", () => {
    // @ts-ignore
  window.supportAI.enableAutoReply();
});

kamehameha([42, 9001]);
console.log(pregnantGoku.name);
