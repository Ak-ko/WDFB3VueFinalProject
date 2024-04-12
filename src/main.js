import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

if (localStorage.theme === "dark" && "theme" in localStorage) {
  document.documentElement.classList.add("dark");
}

app.use(pinia);
app.use(router);
app.mount("#app");
