import { defineStore } from 'pinia';
export const useDatabaseStore = defineStore('database', {
  state: () => ({
    users: [
      { id: 1, username: 'user1', password: '1111', email: 'user1@example.com', profile_picture: 'profile1.jpg', name: '사용자1', created_at: '2024-11-18', token:'$2a$10$uLzsHxte2v8gvL.WheggOOFJUgCGAuvGdnjtRZDSnAFHtVhdCZZ3q'},
      { id: 2, username: 'user2', password: '2222', email: 'user2@example.com', profile_picture: 'profile2.jpg', name: '사용자2', created_at: '2024-11-19', token:'$2a$10$OZIvZWuUtHZgH9mNZvE8ku/sKr1KkF64wH3yTF9J7wGHJgVYmB7Cm'},
      { id: 3, username: 'user3', password: '3333', email: 'user3@example.com', profile_picture: 'profile3.jpg', name: '사용자3', created_at: '2024-11-20', token:'$2a$10$VVRXHd5kGV6fl5v8nJ/mS.dHXBmcC7/hV3Inl/qe6U6Jh8zA1U2AC'},
      { id: 4, username: 'user4', password: '4444', email: 'user4@example.com', profile_picture: 'profile4.jpg', name: '사용자4', created_at: '2024-11-21', token:'$2a$10$e6N9cPZ4bgW6f.xKaRQExeMvA9dTmd1T4OnbSiWBn4GjSTiVsGq/i'},
      { id: 5, username: 'user5', password: '5555', email: 'user5@example.com', profile_picture: 'profile5.jpg', name: '사용자5', created_at: '2024-11-22', token:'$2a$10$N9nnr8ZYuTz/kCnT1ecqBO9qB1m69/3OUoHz9XaEnD6Tl0TpnAwS.'}
    ],
    posts: [
      { id: 1, user_id: 1, content: '첫 번째 게시물입니다.', media_url: 'image1.jpg', media_type: 'IMAGE', created_at: '2024-11-19' },
      { id: 2, user_id: 2, content: '두 번째 게시물입니다.', media_url: 'movie2.mp4', media_type: 'VIDEO', created_at: '2024-11-19' },
      { id: 3, user_id: 3, content: '세 번째 게시물입니다.', media_url: 'data3.txt', media_type: 'TEXT', created_at: '2024-11-19' },
      { id: 4, user_id: 4, content: '네 번째 게시물입니다.', media_url: 'image4.jpg', media_type: 'IMAGE', created_at: '2024-11-19' },
      { id: 5, user_id: 5, content: '다섯 번째 게시물입니다.', media_url: 'movie5.mp4', media_type: 'VIDEO', created_at: '2024-11-19' }
    ],
    comments: [
      { id: 1, post_id: 1, user_id: 2, content: '첫 번째 게시물의 첫 번째 댓글입니다.', created_at: '2024-11-19' },
      { id: 2, post_id: 1, user_id: 3, content: '첫 번째 게시물의 두 번째 댓글입니다.', created_at: '2024-11-19' },
      { id: 3, post_id: 2, user_id: 1, content: '두 번째 게시물의 첫 번째 댓글입니다.', created_at: '2024-11-19' },
      { id: 4, post_id: 3, user_id: 4, content: '세 번째 게시물의 첫 번째 댓글입니다.', created_at: '2024-11-19' },
      { id: 5, post_id: 4, user_id: 5, content: '네 번째 게시물의 첫 번째 댓글입니다.', created_at: '2024-11-19' }
    ],
    messages: [
      { id: 1, sender_id: 1, receiver_id: 2, content: '안녕하세요, user2님!', sent_at: '2024-11-19' },
      { id: 2, sender_id: 2, receiver_id: 1, content: '안녕하세요, user1님!', sent_at: '2024-11-19' },
      { id: 3, sender_id: 3, receiver_id: 4, content: '오늘 약속 시간 괜찮으신가요?', sent_at: '2024-11-19' },
      { id: 4, sender_id: 4, receiver_id: 3, content: '네, 괜찮습니다.', sent_at: '2024-11-19' },
      { id: 5, sender_id: 5, receiver_id: 1, content: '프로젝트 관련해서 질문이 있습니다.', sent_at: '2024-11-19' }
    ]
  }),
  getters: {
    // ID로 특정 객체를 가져오는 메서드
    getUserById: (state) => (id) => state.users.find(user => user.id === parseInt(id)),
    getUserByUsername: (state) => (username) => state.users.find(user => user.username === username),
    getPostById: (state) => (id) => state.posts.find(post => post.id === parseInt(id)),
    getPostsByUserId: (state) => (userId) => state.posts.filter(post => post.user_id === parseInt(userId)), 
    getCommentById: (state) => (id) => state.comments.find(comment => comment.id === parseInt(id)),
    getCommentPostById: (state) => (postId) => state.comments.filter(comment => comment.post_id === parseInt(postId)),
    getMessageById: (state) => (id) => state.messages.find(message => message.id === parseInt(id)),
    getMessageBySenderId: (state) => (senderId) => state.messages.filter(message => message.sender_id === parseInt(senderId)),
    getMessageByReceiverId: (state) => (receiverId) => state.messages.filter(message => message.receiver_id === parseInt(receiverId)),
    getConversation: (state) => (senderId, receiverId) => state.messages.filter(message => ( message.sender_id === parseInt(senderId) && message.receiver_id === parseInt(receiverId))),
  },
  actions: {
    // 각 테이블에서 데이터를 가져오는 메서드
    getUsers: (state) => state.users,
    getPosts: (state) => state.posts,
    getComments: (state) => state.comments,
    getMessages: (state) => state.messages,

    // 객체 추가하는 메서드
    addUser(user) {
      if (!Array.isArray(this.users)) {
        this.users = []; // users가 undefined인 경우 빈 배열로 초기화
      }
      const maxId = Math.max(...this.users.map(user => user.id)); // this.users로 수정
      user.id = maxId + 1;
      user.created_at = new Date().toISOString(); // 날짜 형식도 ISO로 일관되게 저장
      this.users.push(user); // 올바른 참조
    },
    addPost(post) {
      const maxId = Math.max(...posts.map(post => post.id));
      post.id = maxId + 1;
      post.created_at = new Date().toISOString();
      this.posts.push(post);
    },
    addComment(comment) {
      const maxId = Math.max(...comments.map(comment => comment.id));
      comment.id = maxId + 1;
      comment.created_at = new Date().toISOString();
      this.comments.push(comment);
    },
    addMessage(senderId, receiverId, content) {
      const maxId = Math.max(...messages.map(message => message.id));  
      const message = { id: maxId+1, sender_id: senderId, receiver_id: receiverId, content: content, sent_at: new Date().toISOString() }
      this.messages.push(message);
      return this.messages;
    },

    // 객체 수정하는 메서드
    editUser(userId, updatedUser) {
      const userIndex = this.users.findIndex(user => user.id === parseInt(userId));
      if (userIndex !== -1) {
        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      }
    },
    editPost(postId, updatedPost) {
      const postIndex = this.posts.findIndex(post => post.id === parseInt(postId));
      if (postIndex !== -1) {
        this.posts[postIndex] = { ...this.posts[postIndex], ...updatedPost };
      }
    },
    editComment(commentId, updatedComment) {
      const commentIndex = this.comments.findIndex(comment => comment.id === parseInt(commentId));
      if (commentIndex !== -1) {
        this.comments[commentIndex] = { ...this.comments[commentIndex], ...updatedComment };
      }
    },
    editMessage(messageId, updatedMessage) {
      const messageIndex = this.messages.findIndex(message => message.id === parseInt(messageId));
      if (messageIndex !== -1) {
        this.messages[messageIndex] = { ...this.messages[messageIndex], ...updatedMessage };
      }
    },

    // 객체 삭제하는 메서드
    deleteUser(userId) {
      this.users = this.users.filter(user => user.id !== parseInt(userId));
    },
    deletePost(postId) {
      this.posts = this.posts.filter(post => post.id !== parseInt(postId));
    },
    deleteComment(commentId) {
      this.comments = this.comments.filter(comment => comment.id !== parseInt(commentId));
    },
    deleteMessage(messageId) {
      this.messages = this.messages.filter(message => message.id !== parseInt(messageId));
    }
  }
});