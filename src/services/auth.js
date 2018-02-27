import { post } from "./http";

const Auth = {
  isAuthenticated: false,
  token: null,
  async Authenticate(username, password) {
    const response = await post(`http://localhost:9000/auth/redux`, {
      username,
      password
    });
    this.token = response.token;
    this.isAuthenticated = true;
    return this.isAuthenticated;
  },
  signout(cb) {
    this.isAuthenticated = false;
    this.token = null;
  }
};

export default Auth;
