import ChatRoom from "./chat-room.js";

class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }  
  sendMessage(message) {
    ChatRoom.showMessage(this, message);
  }
}

export default User;