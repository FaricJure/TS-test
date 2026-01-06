import { log, chats } from "./chats.js";
const button = document.getElementById("enable-button");
button?.addEventListener("click", () => {
    const supportAI = window.supportAI;
    supportAI?.enableAutoReply();
});
log(chats);
// @ts-ignore
