
class ChatRoom {
  static showMessage(user, message) {
    console.log(new Date().toString() + " [" + user.getName() + "] : " + message);
  }
}

export default ChatRoom;