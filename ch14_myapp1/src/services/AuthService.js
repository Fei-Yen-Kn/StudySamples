import { users } from "../model";

const AuthService = {
  session: null,
  login(username, password) {
    console.log("login recieve", username, password);

    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    console.log("login find", user);

    if (user) {
      this.session = { ...user };
      return { success: true, user: this.session };
    }
    return { success: false, message: "로그인 실패" };
  },
  logout() {
    this.session = null;
    return { success: true, message: "로그아웃 성공" };
  },
  getSession() {
    return this.session;
  },
  isAuthenticated() {
    return !!this.session;
  },
};

export default AuthService;
