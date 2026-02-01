const dummyDB = {
    users: [
      { id: 1, username: 'user1', password: '1234', email: 'user1@example.com', name: '사용자1', role: 'USER', created_at: new Date() },
      { id: 2, username: 'admin1', password: '1234', email: 'admin1@example.com', name: '관리자', role: 'ADMIN', created_at: new Date() },
      { id: 3, username: 'user2', password: '2222', email: 'user2@example.com', name: '사용자2', role: 'USER', created_at: new Date() },
      { id: 4, username: 'user3', password: '3333', email: 'user3@example.com', name: '사용자3', role: 'USER', created_at: new Date() },
      { id: 5, username: 'user4', password: '4444', email: 'user4@example.com', name: '사용자4', role: 'USER', created_at: new Date() },
    ],
    notices: [
      { id: 1, title: '시스템 점검 안내', content: '시스템 점검으로 인한 서비스 일시 중단 안내입니다.', created_at: new Date(), hits: 0 },
      { id: 2, title: '신규 기능 추가', content: '이번 업데이트에서 신규 기능이 추가되었습니다.', created_at: new Date(), hits: 0 },
      { id: 3, title: '이용 약관 변경', content: '새로운 이용 약관이 적용되었습니다.', created_at: new Date(), hits: 0 },
      { id: 4, title: '정기 점검 일정 공지', content: '다음 주에 정기 점검이 예정되어 있습니다.', created_at: new Date(), hits: 0 },
      { id: 5, title: '보안 업데이트 안내', content: '보안 업데이트가 완료되었습니다.', created_at: new Date(), hits: 0 },
    ],
    contents: [
      { id: 1, title: '첫 번째 콘텐츠', description: '이것은 첫 번째 더미 콘텐츠입니다.', content: '첫 번째 콘텐츠의 본문입니다.', author_id: 1, created_at: new Date(), updated_at: null },
      { id: 2, title: '두 번째 콘텐츠', description: '이것은 두 번째 더미 콘텐츠입니다.', content: '두 번째 콘텐츠의 본문입니다.', author_id: 2, created_at: new Date(), updated_at: null },
      { id: 3, title: '세 번째 콘텐츠', description: '이것은 세 번째 더미 콘텐츠입니다.', content: '세 번째 콘텐츠의 본문입니다.', author_id: 3, created_at: new Date(), updated_at: null },
      { id: 4, title: '네 번째 콘텐츠', description: '이것은 네 번째 더미 콘텐츠입니다.', content: '네 번째 콘텐츠의 본문입니다.', author_id: 4, created_at: new Date(), updated_at: null },
      { id: 5, title: '다섯 번째 콘텐츠', description: '이것은 다섯 번째 더미 콘텐츠입니다.', content: '다섯 번째 콘텐츠의 본문입니다.', author_id: 5, created_at: new Date(), updated_at: null },
    ],
    gallery: [
      { id: 1, content_id: 1, file_path: 'image1.jpg', file_type: 'IMAGE', uploaded_at: new Date() },
      { id: 2, content_id: 2, file_path: 'image2.jpg', file_type: 'IMAGE', uploaded_at: new Date() },
      { id: 3, content_id: 3, file_path: 'image3.jpg', file_type: 'IMAGE', uploaded_at: new Date() },
      { id: 4, content_id: 4, file_path: 'image4.jpg', file_type: 'IMAGE', uploaded_at: new Date() },
      { id: 5, content_id: 5, file_path: 'video1.mp4', file_type: 'VIDEO', uploaded_at: new Date() },
    ],
  };
  
  function getItems(table) {
    return dummyDB[table];
  }
  
  function getItemById(table, id) {
    return dummyDB[table].find(item => item.id == parseInt(id));
  }
  
  function getItemByUsername(table, username) {
    return dummyDB[table].find(item => item.username === username);
  }

  function getCateByContentId(table, content_id) {
    return dummyDB[table].filter(item => item.content_id == parseInt(content_id));
  }

  function addItem(table, item) {
    const newId = dummyDB[table].length > 0 ? Math.max(...dummyDB[table].map(i => i.id)) + 1 : 1;
    const newItem = { id: newId, ...item, created_at: new Date() };
    dummyDB[table].push(newItem);
    return newItem;
  }
  
  function editItem(table, id, newData) {
    const index = dummyDB[table].findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
      dummyDB[table][index] = { ...dummyDB[table][index], ...newData, updated_at: new Date() };
      return dummyDB[table][index];
    }
    return null;
  }
  
  function deleteItem(table, id) {
    const index = dummyDB[table].findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
      return dummyDB[table].splice(index, 1)[0];
    }
    return null;
  }
  
  const model = {
    getUsers: () => getItems('users'),
    getUserById: id => getItemById('users', id),
    getItemByUsername: username => getItemByUsername('users', username),
    addUser: user => addItem('users', user),
    editUser: (id, user) => editItem('users', id, user),
    deleteUser: id => deleteItem('users', id),
  
    getNotices: () => getItems('notices'),
    getNoticeById: id => getItemById('notices', id),
    addNotice: notice => addItem('notices', notice),
    editNotice: (id, notice) => editItem('notices', id, notice),
    deleteNotice: id => deleteItem('notices', id),
  
    getContents: () => getItems('contents'),
    getContentById: id => getItemById('contents', id),
    addContent: content => addItem('contents', content),
    editContent: (id, content) => editItem('contents', id, content),
    deleteContent: id => deleteItem('contents', id),
  
    getGallery: () => getItems('gallery'),
    getGalleryById: id => getItemById('gallery', id),
    getCateByContentId: content_id => getCateByContentId('gallery', content_id), 
    addGallery: gallery => addItem('gallery', gallery),
    editGallery: (id, gallery) => editItem('gallery', id, gallery),
    deleteGallery: id => deleteItem('gallery', id),
  };
  export default model;