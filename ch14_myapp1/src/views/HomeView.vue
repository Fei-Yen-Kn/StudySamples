<template>
  <div>
    <h3 class="title is-1">E-commerce 플랫폼에 오신 것을 환영합니다.</h3>
    <hr />
    <div v-if="error" class="notification is-danger">{{ error }}</div>
    <div v-else class="columns is-multiline">
      <div
        v-for="product in products"
        :key="product.id"
        class="column is-half-tablet is-one-third-desktop"
      >
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="subtitle is-5">{{ product.price }} 원</p>
          </div>
          <footer class="card-footer">
            <button
              v-if="isAuthenticated"
              class="button is-link card-footer-item"
              @click="addToCart(product)"
            >
              장바구니 담기
            </button>
            <p v-else class="card-footer-item">로그인 후 구매할 수 있습니다.</p>
            <router-link
              v-if="isAuthenticated"
              :to="`/product/${product.id}`"
              class="button is-info card-footer-item"
              >구매하기</router-link
            >
          </footer>
        </div>
      </div>
    </div>
    <div v-if="isAdmin" class="container">
      <div class="card-content">
        <h3 class="title is-4">새로운 상품 등록</h3>
        <form @submit.prevent="submitNewProduct">
          <div class="field">
            <label class="label">상품명</label>
            <div class="control">
              <input
                class="input"
                v-model="newProduct.name"
                type="text"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">상품 설명</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="newProduct.description"
                required
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">가격</label>
            <div class="control">
              <input
                class="input"
                v-model="newProduct.price"
                type="number"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">재고 수량</label>
            <div class="control">
              <input
                class="input"
                v-model="newProduct.stock"
                type="number"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">상품 이미지</label>
            <div class="control">
              <input class="input" type="file" @change="handleFileUpload" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">상품 등록</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ProductService from "../services/ProductService";
import { useAuthStore } from "../store/auth";
import CartService from "../services/CartService";

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);
const isAdmin = computed(() => {
  return authStore.user && authStore.user.role === "ADMIN";
});
const products = ref([]);
const error = ref(null);
const newProduct = ref({
  name: "",
  description: "",
  price: 0,
  stock: 0,
  img: null,
});
const file = ref(null);

async function fetchProducts() {
  try {
    products.value = await ProductService.getProductList();
  } catch (err) {
    error.value =
      "제품 목록을 불러오는 데 실패했습니다. 네트워크 상태를 확인하세요.";
    console.error(err);
  }
}

async function addToCart(product) {
  if (!isAuthenticated.value) {
    alert("로그인 후 장바구니에 담을 수 있습니다.");
    return;
  }
  try {
    await CartService.addToCart(product);
    alert("장바구니에 상품이 추가되었습니다.");
  } catch (err) {
    alert("장바구니에 상품을 추가하는데 실패했습니다.");
  }
}

async function submitNewProduct() {
  const formData = new FormData();
  formData.append("name", newProduct.value.name);
  formData.append("description", newProduct.value.description);
  formData.append("price", newProduct.value.price);
  formData.append("stock", newProduct.value.stock);
  if (file.value) {
    formData.append("img", file.value);
  }

  try {
    await ProductService.addToProduct(formData);
    alert("새로운 상품이 등록되었습니다.");
    fetchProducts(); // 상품 목록 갱신
    newProduct.value = {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      img: null,
    };
    file.value = null;
  } catch (err) {
    console.error("상품 등록 실패:", err);
    alert("상품 등록에 실패했습니다.");
  }
}

function handleFileUpload(event) {
  file.value = event.target.files[0];
}

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.card {
  min-height: 250px;
  height: 260px;
  max-height: 300px;
}
.button.is-link {
  max-width: 120px;
  display: inline-block;
  font-size: 0.85rem;
  margin-left: 9%;
  margin-top: 18px;
}
.button.is-info {
  max-width: 120px;
  display: inline-block;
  font-size: 0.85rem;
  margin-left: 9%;
  margin-top: 18px;
}
.card-footer-item {
  font-style: italic;
  color: #999;
  text-align: center;
}
</style>
