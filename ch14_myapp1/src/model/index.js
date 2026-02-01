export const users = [
  {
    id: 1,
    username: "user1",
    password: "4321",
    email: "user1@example.com",
    role: "USER",
  },
  {
    id: 2,
    username: "user2",
    password: "1234",
    email: "user2@example.com",
    role: "USER",
  },
  {
    id: 3,
    username: "user3",
    password: "1111",
    email: "user3@example.com",
    role: "USER",
  },
  {
    id: 4,
    username: "admin1",
    password: "1234",
    email: "admin1@example.com",
    role: "ADMIN",
  },
  {
    id: 5,
    username: "admin2",
    password: "1234",
    email: "admin2@example.com",
    role: "ADMIN",
  },
];

export const notices = [
  {
    id: 1,
    title: "환영합니다!",
    content: "저희 서비스를 이용해 주셔서 감사합니다.",
    created_at: new Date(),
  },
  {
    id: 2,
    title: "신규 기능 안내",
    content: "이번 주 추가된 새로운 기능을 확인해 보세요.",
    created_at: new Date(),
  },
  {
    id: 3,
    title: "정기 점검 공지",
    content: "이번 달 20일에 정기 점검이 예정되어 있습니다.",
    created_at: new Date(),
  },
  {
    id: 4,
    title: "이용 가이드",
    content: "서비스 이용을 위한 가이드를 참고해 주세요.",
    created_at: new Date(),
  },
  {
    id: 5,
    title: "휴무 안내",
    content: "12월 25일 공휴일에는 운영하지 않습니다.",
    created_at: new Date(),
  },
];

export const products = [
  {
    id: 1,
    name: "상품 A",
    description: "상품 A의 설명입니다.",
    price: 19900,
    stock: 100,
    img: null,
  },
  {
    id: 2,
    name: "상품 B",
    description: "상품 B의 설명입니다.",
    price: 29900,
    stock: 50,
    img: null,
  },
  {
    id: 3,
    name: "상품 C",
    description: "상품 C의 설명입니다.",
    price: 15900,
    stock: 150,
    img: null,
  },
  {
    id: 4,
    name: "상품 D",
    description: "상품 D의 설명입니다.",
    price: 49900,
    stock: 30,
    img: null,
  },
  {
    id: 5,
    name: "상품 E",
    description: "상품 E의 설명입니다.",
    price: 5900,
    stock: 200,
    img: null,
  },
];

export const orders = [
  {
    id: 1,
    user_id: 1,
    total_amount: 59700,
    status: "PENDING",
    created_at: new Date(),
  },
  {
    id: 2,
    user_id: 2,
    total_amount: 29900,
    status: "PAID",
    created_at: new Date(),
  },
  {
    id: 3,
    user_id: 3,
    total_amount: 49900,
    status: "CANCELLED",
    created_at: new Date(),
  },
  {
    id: 4,
    user_id: 1,
    total_amount: 15900,
    status: "PAID",
    created_at: new Date(),
  },
  {
    id: 5,
    user_id: 2,
    total_amount: 119700,
    status: "PENDING",
    created_at: new Date(),
  },
];

export const payments = [
  {
    id: 1,
    order_id: 1,
    payment_method: "CREDIT_CARD",
    payment_amount: 59700,
    payment_status: "SUCCESS",
    payment_date: new Date(),
  },
  {
    id: 2,
    order_id: 2,
    payment_method: "PAYPAL",
    payment_amount: 29900,
    payment_status: "SUCCESS",
    payment_date: new Date(),
  },
  {
    id: 3,
    order_id: 3,
    payment_method: "BANK_TRANSFER",
    payment_amount: 49900,
    payment_status: "FAIL",
    payment_date: new Date(),
  },
  {
    id: 4,
    order_id: 4,
    payment_method: "CREDIT_CARD",
    payment_amount: 15900,
    payment_status: "SUCCESS",
    payment_date: new Date(),
  },
  {
    id: 5,
    order_id: 5,
    payment_method: "BANK_TRANSFER",
    payment_amount: 119700,
    payment_status: "SUCCESS",
    payment_date: new Date(),
  },
];

export const sales = [
  {
    id: 1,
    product_id: 1,
    quantity: 2,
    total_price: 39800,
    sale_date: new Date(),
  },
  {
    id: 2,
    product_id: 2,
    quantity: 1,
    total_price: 29900,
    sale_date: new Date(),
  },
  {
    id: 3,
    product_id: 3,
    quantity: 3,
    total_price: 47900,
    sale_date: new Date(),
  },
  {
    id: 4,
    product_id: 4,
    quantity: 1,
    total_price: 49900,
    sale_date: new Date(),
  },
  {
    id: 5,
    product_id: 5,
    quantity: 5,
    total_price: 29500,
    sale_date: new Date(),
  },
];

export const carts = [
  { id: 1, user_id: 1, product_id: 1, quantity: 2 },
  { id: 2, user_id: 1, product_id: 3, quantity: 1 },
  { id: 3, user_id: 2, product_id: 2, quantity: 1 },
  { id: 4, user_id: 3, product_id: 4, quantity: 3 },
  { id: 5, user_id: 2, product_id: 5, quantity: 4 },
];

export default {
  users,
  notices,
  products,
  orders,
  payments,
  sales,
  carts,
};
