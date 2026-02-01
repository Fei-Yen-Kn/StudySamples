<template>
  <div class="chat-page">
    <h2 class="title">실시간 채팅</h2>
    <hr />
    <div class="chat-container">
      <div class="chat-box">
        <div class="messages" ref="messageList">
          <div class="message" v-for="msg in chats" :key="msg.timestamp">
            <strong>{{ msg.username }}:</strong>
            <p>{{ msg.content }}</p>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendMessage" class="grid-x grid-padding-x">
        <div class="cell small-9">
          <input 
            type="text" 
            v-model="newMessage" 
            class="input-group-field" 
            placeholder="Type a message..." 
            required 
          />
        </div>
        <div class="cell small-3">
          <button type="submit" class="button success expanded">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { io } from 'socket.io-client';
const chats = ref([]);
const newMessage = ref('');
const username = ref(null); // 랜덤 사용자명
const socket = io('http://localhost:7000'); // 서버와 연결
onMounted(() => {
  username.value = localStorage.getItem("username");
  socket.on('chat message', (msg) => {
    chats.value.push(msg); // 수신된 메시지를 추가
    scrollToBottom();
  });
});
const sendMessage = () => {
  if (newMessage.value.trim()) {
    const msg = {
      username: username.value,
      content: newMessage.value,
      timestamp: new Date().getTime(),
    };

    socket.emit('chat message', msg); // 서버로 메시지 전송
    newMessage.value = ''; // 입력란 초기화
  }
};

// 스크롤을 가장 아래로 이동
const scrollToBottom = () => {
  nextTick(() => {
    const messageList = document.querySelector('.messages');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  });
};
</script>

<style scoped>
.chat-page {
  max-width: 600px;
  margin: 0 auto;
}

.chat-container {
  display: flex;
  flex-direction: column;
}

.chat-box {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.messages {
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 10px;
}

.input-group-field {
  width: 100%;
  padding: 10px;
}

.button {
  width: 100%;
  height: 100%;
}
</style>