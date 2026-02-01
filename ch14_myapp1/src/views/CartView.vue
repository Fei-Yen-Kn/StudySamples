<template>
  <div>
    <h2 class="title is-3">{{ username }}님 장바구니</h2>
    <div v-if="cartItems && cartItems.length === 0">
      장바구니가 비어 있습니다.
    </div>
    <div v-for="item in cartItems" :key="item.id" class="box">
      <div class="columns">
        <div class="column is-half">{{ item.product?.name }}</div>
        <div class="column is-one-quarter">{{ item.product?.price }}원</div>
        <div class="column is-one-quarter">
          <button @click="removeFromCart(item)" class="button is-danger">
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CartService from "../services/CartService";

const cartItems = ref([]);
const username = localStorage.getItem("username");
const userId = localStorage.getItem("userId");

async function fetchCartItems() {
  try {
    const response = await CartService.getCartList(userId);
    cartItems.value = response;
    console.log(cartItems.value);
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
}

async function removeFromCart(item) {
  try {
    await CartService.deleteCart(item.id);
    cartItems.value = cartItems.value.filter(
      (cartItem) => cartItem.id !== item.id,
    );
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
}

onMounted(fetchCartItems);
</script>
