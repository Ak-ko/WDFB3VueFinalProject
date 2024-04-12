import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state() {
    return {
      theme: "light",
    };
  },
  getters: {
    THEME(state) {
      return state.theme;
    },
  },
  actions: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        this.theme = "light";
        document.documentElement.classList.remove("dark");
      }

      localStorage.theme = this.theme;
    },
  },
});
