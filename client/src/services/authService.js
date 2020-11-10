import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/",
      withCredentials: true,
    });
    this.service = service;
  }

  // singup = async (username, password) => {
  //    const response = await this.service.post('/auth/signup', { username, password })
  //    return response.data
  // }

  signup = (username, password) => {
    return this.service
      .post("/auth/signup", { username, password })
      .then((response) => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/auth/login", { username, password })
      .then((response) => response.data);
  };

  logout = () => {
    return this.service.get("/auth/logout").then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/auth/loggedin").then((response) => response.data);
  };

  imageUpload = (image) => {
    return this.service.post("/auth/avatar", image).then((response) => response.data);
  };
}

export default AuthService;
