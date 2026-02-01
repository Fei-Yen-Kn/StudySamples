import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    users: [  // 1. 사용자 데이터 (users)
      { id: 1, username: 'hong', password: '1111', email: 'honggildong@example.com', name: '홍길동', role: 'USER', created_at: '2024-01-01' },
      { id: 2, username: 'kim', password: '4321', email: 'kimyujin@example.com', name: '김길동', role: 'USER', created_at: '2024-01-02' },
      { id: 3, username: 'admin', password: '1234', email: 'admin@example.com', name: '관리자', role: 'ADMIN', created_at: '2024-01-03' },
      { id: 4, username: 'lee', password: '2222', email: 'leesujin@example.com', name: '이길동', role: 'USER', created_at: '2024-01-04' },
      { id: 5, username: 'park', password: '3333', email: 'parkminsu@example.com', name: '박길동', role: 'USER', created_at: '2024-01-05' },
    ],
    notices: [  // 2. 공지사항 데이터 (notices)
      { id: 1, title: '시스템 점검 안내', content: '시스템 점검은 토요일 오전 2시부터 5시까지 진행됩니다.', created_at: '2024-11-01', updated_at: null },
      { id: 2, title: '새로운 기능 출시', content: '새로운 기능이 곧 출시됩니다. 기대해주세요!', created_at: '2024-11-05', updated_at: null },
      { id: 3, title: '휴무일 안내', content: '국경일에는 휴무입니다.', created_at: '2024-11-10', updated_at: null },
      { id: 4, title: '보안 업데이트', content: '보안을 강화하기 위해 비밀번호를 업데이트해 주세요.', created_at: '2024-11-15', updated_at: null },
      { id: 5, title: '커뮤니티 행사', content: '매년 커뮤니티 모임에 참여하세요!', created_at: '2024-11-17', updated_at: null },
    ],
    projects: [  // 3. 프로젝트 데이터 (projects)
      { id: 1, name: '웹사이트 리디자인', description: '웹사이트의 전체적인 디자인을 새롭게 개편합니다.', created_at: '2024-10-01', updated_at: null },
      { id: 2, name: '모바일 앱 개발', description: 'iOS와 안드로이드 앱을 새로 개발합니다.', created_at: '2024-10-05', updated_at: null },
      { id: 3, name: '마케팅 캠페인', description: '소셜 미디어를 통한 마케팅 캠페인을 시작합니다.', created_at: '2024-10-10', updated_at: null },
      { id: 4, name: '제품 출시', description: '새로운 제품 라인을 출시하기 위한 준비를 합니다.', created_at: '2024-10-15', updated_at: null },
      { id: 5, name: '직원 온보딩', description: '새로운 직원들을 위한 교육 자료를 만듭니다.', created_at: '2024-10-20', updated_at: null },
    ],
    tasks: [  // 4. 태스크 데이터 (tasks)
      { id: 1, project_id: 1, name: '홈페이지 디자인', description: '홈페이지 디자인을 새롭게 개발합니다.', status: 'IN_PROGRESS', due_date: '2024-11-30', created_at: '2024-10-01', updated_at: null },
      { id: 2, project_id: 1, name: '호스팅 설정', description: '새로운 호스팅 환경을 설정합니다.', status: 'TODO', due_date: '2024-12-01', created_at: '2024-10-05', updated_at: null },
      { id: 3, project_id: 2, name: '로그인 기능 개발', description: '로그인 및 회원가입 기능을 구현합니다.', status: 'DONE', due_date: '2024-10-25', created_at: '2024-10-10', updated_at: null },
      { id: 4, project_id: 3, name: '광고 디자인', description: '소셜 미디어 광고를 디자인합니다.', status: 'TODO', due_date: '2024-11-15', created_at: '2024-10-15', updated_at: null },
      { id: 5, project_id: 4, name: '제품 출시 행사 계획', description: '제품 출시 행사를 위한 장소와 일정을 계획합니다.', status: 'IN_PROGRESS', due_date: '2024-12-10', created_at: '2024-10-20', updated_at: null },
    ],
    posts: [  // 5. 메모 데이터 (posts)
      { id: 1, board_id: 1, title: '메모 스타일 공지', content: '프로젝트 가이드라인을 업데이트해 주세요.', position: 1, created_at: '2024-11-01', updated_at: null },
      { id: 2, board_id: 1, title: '작업 후속 조치', content: '홈페이지 디자인 진행 상황을 확인하세요.', position: 2, created_at: '2024-11-05', updated_at: null },
      { id: 3, board_id: 2, title: '고객 피드백', content: '최근 회의에서 받은 피드백을 반영해 주세요.', position: 3, created_at: '2024-11-10', updated_at: null },
      { id: 4, board_id: 2, title: '내부 리뷰', content: '현재 진행 중인 작업에 대한 내부 리뷰를 진행합니다.', position: 4, created_at: '2024-11-15', updated_at: null },
      { id: 5, board_id: 3, title: '아이디어 브레인스토밍', content: '새로운 캠페인 전략에 대해 논의해 주세요.', position: 5, created_at: '2024-11-17', updated_at: null },
    ],
    boards: [  // 6. 보드 데이터 (boards)
      { id: 1, name: '할 일', created_at: '2024-10-01' },
      { id: 2, name: '진행 중', created_at: '2024-10-05' },
      { id: 3, name: '완료', created_at: '2024-10-10' },
      { id: 4, name: '보관', created_at: '2024-10-15' },
      { id: 5, name: '백로그', created_at: '2024-10-20' },
    ],
  }),
  actions: {
    // 1. getXXX : 목록 검색
    getUsers() {
        return this.users;
    },
    getNotices() {
        return this.notices;
    },
    getProjects() {
        return this.projects;
    },
    getTasks() {
        return this.tasks;
    },
    getPosts() {
        return this.posts;
    },
    getBoards() {
      return this.boards.map(board => {
        return {
          ...board,
          posts: this.posts
            .filter(post => post.board_id == board.id)
            .sort((a, b) => a.position - b.position), // position 순으로 정렬
        }
      });
    },
    // 2. getXXXById: ID로 특정 데이터를 찾기
    getUserById(id) {
      return this.users.find(user => user.id === id);
    },
    getUserByUsername(username) {
        return this.users.find(user => user.username === username);
    },
    getNoticeById(id) {
      return this.notices.find(notice => notice.id === parseInt(id));
    },
    getProjectById(id) {
      return this.projects.find(project => project.id == id);
    },
    getTaskById(id) {
      return this.tasks.find(task => task.id === id);
    },
    getPostById(id) {
      return this.posts.find(post => post.id === id);
    },
    getBoardById(id) {
      return this.boards.find(board => board.id === id);
    },
    // 3. 데이터를 추가하는 메서드
    setUser(user) {
        this.users.push(user);
        return user; // 추가된 데이터를 반환
    },
    setNotice(notice) {
      this.notices.push(notice);
    },
    setProject(project) {
      this.projects.push(project);
    },
    setTask(task) {
      this.tasks.push(task);
    },
    setPost(post) {
      this.posts.push(post);
    },
    setBoard(board) {
      this.boards.push(board);
    },
    // 4. 데이터를 수정하는 메서드
    editUser(id, updatedUser) {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...updatedUser };
      }
    },
    editNotice(id, updatedNotice) {
      const index = this.notices.findIndex(notice => notice.id === id);
      if (index !== -1) {
        this.notices[index] = { ...this.notices[index], ...updatedNotice };
      }
    },
    editProject(id, updatedProject) {
      const index = this.projects.findIndex(project => project.id === id);
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updatedProject };
      }
    },
    editTask(id, updatedTask) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...updatedTask };
      }
    },
    editPost(id, updatedPost) {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], ...updatedPost };
      }
    },
    editBoard(id, updatedBoard) {
      const index = this.boards.findIndex(board => board.id === id);
      if (index !== -1) {
        this.boards[index] = { ...this.boards[index], ...updatedBoard };
      }
    },
    // 5. deleteXXX: 데이터를 삭제하는 메서드
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== parseInt(id));
    },
    deleteNotice(id) {
      this.notices = this.notices.filter(notice => notice.id !== parseInt(id));
    },
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== parseInt(id));
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== parseInt(id));
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== parseInt(id));
    },
    deleteBoard(id) {
      this.boards = this.boards.filter(board => board.id !== parseInt(id));
    }
  }
});
export default useStore;