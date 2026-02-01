import { users } from "../model";

const UserService = {
  addToUser(username, password, email, role = "USER") {
    console.log("addToUser recieve:", username, password, email, role);
    console.log("addToUser recieve:", users.length);
    const newUser = {
      id: users.length + 1,
      username,
      password,
      email,
      role,
    };
    users.push(newUser);
    console.log("addToUser:", newUser.username, newUser.password);
    console.log("addToUser recieve:", users.length);
    console.log("addToUser recieve:", users);

    const objectKeys = Object.keys(username);
    console.log(objectKeys, newUser[username]);

    return newUser;
  },
  editUser(userId, updatedData) {
    const user = users.find((u) => u.id === userId);
    if (user) {
      Object.assign(user, updatedData);
      return user;
    }
    return null;
  },
  deleteUser(userId) {
    const index = users.findIndex((u) => u.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  },
  getUserList() {
    return users;
  },
  getUserDetail(userId) {
    return users.find((u) => u.id === userId) || null;
  },
};

export default UserService;
