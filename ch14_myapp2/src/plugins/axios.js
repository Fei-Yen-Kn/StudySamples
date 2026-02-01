import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8085/api', // Spring Boot 서버의 API URL
  timeout: 5000, // 요청 타임아웃 설정 (ms)
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 토큰이 필요할 경우 헤더에 추가
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message)
    return Promise.reject(error)
  }
)

export default instance