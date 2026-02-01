import { defineStore } from "pinia";
import AuthService from "../services/AuthService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    username: null,
    userId: null, // Add userId
  }),

  actions: {
    async login(username, password) {
      const response = AuthService.login(username, password);
      if (response.success) {
        this.user = response.user;
        this.isAuthenticated = true;
        this.username = response.user.username;
        this.userId = response.user.id; // Set userId from response
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: this.user,
            isAuthenticated: this.isAuthenticated,
            username: this.username,
            userId: this.userId, // Save userId
          }),
        );
        localStorage.setItem("userId", this.userId);
        localStorage.setItem("username", this.username);
        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    },
    logout() {
      AuthService.logout();
      this.user = null;
      this.isAuthenticated = false;
      this.username = null;
      this.userId = null; // Clear userId
      localStorage.removeItem("auth");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
    },
    initialize() {
      const authData = localStorage.getItem("auth");
      if (authData) {
        const parsedData = JSON.parse(authData);
        this.user = parsedData.user;
        this.isAuthenticated = parsedData.isAuthenticated;
        this.username = parsedData.username;
        this.userId = parsedData.userId; // Restore userId from storage
      }
    },
  },
});
