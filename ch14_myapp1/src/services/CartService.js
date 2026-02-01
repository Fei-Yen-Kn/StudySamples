import model from "../model";

const CartService = {
  async addToCart(product) {
    const userId = 1; // 임시 userId
    if (!model.carts) model.carts = []; // carts가 undefined일 경우 초기화
    const existingCart = model.carts.find(
      (c) => c.user_id === userId && c.product_id === product.id,
    );
    if (existingCart) {
      existingCart.quantity += 1; // 이미 있는 경우 수량 증가
    } else {
      model.carts.push({
        id: model.carts.length + 1,
        user_id: userId,
        product_id: product.id,
        quantity: 1,
      });
    }
    return { success: true };
  },
  async deleteCart(cartId) {
    if (!model.carts) return false;
    const index = model.carts.findIndex((c) => c.id === cartId);
    if (index > -1) {
      model.carts.splice(index, 1);
      return true;
    }
    return false;
  },
  async editCart(cartId, quantity) {
    if (!model.carts) return null;
    const cart = model.carts.find((c) => c.id === cartId);
    if (cart) {
      cart.quantity = quantity;
      return cart;
    }
    return null;
  },
  async getCartList(userId) {
    if (!model.carts) model.carts = [];
    const userIdNumber = parseInt(userId); // userId를 숫자로 변환
    const cartItems = model.carts.filter((c) => c.user_id === userIdNumber); // 필터링된 cartItems
    const cartItemsWithProducts = cartItems.map((item) => {
      const product = model.products.find((p) => p.id === item.product_id); // product_id로 product 찾기
      console.log(product); // 각 product 정보 출력
      return {
        ...item,
        product: product || {}, // product 정보를 추가 (없을 경우 빈 객체를 넣음)
      };
    });
    console.log(cartItemsWithProducts); // product가 추가된 cartItems 출력
    return cartItemsWithProducts; // 수정된 cartItems 반환
  },
  async getCartDetail(cartId) {
    if (!model.carts) return null;
    return model.carts.find((c) => c.id === cartId) || null;
  },
};

export default CartService;
