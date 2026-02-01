<template>
  <div class="container">
    <h1 class="title">결제 페이지</h1>
    <p>상품명: {{ product.name }}</p>
    <p>가격: {{ product.price }} 원</p>
    <button class="button is-success" @click="handlePayment">결제하기</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductService from "../services/ProductService";

const product = ref({});
const route = useRoute();
const productId = ref(route.params.id);

async function fetchProduct() {
  try {
    product.value = await ProductService.getProductDetail(productId.value);
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }
}

function handlePayment() {
  const { IMP } = window;
  IMP.init("your-iamport-key"); // 아임포트 key를 입력

  IMP.request_pay(
    {
      pg: "html5_inicis", // 결제 게이트웨이
      pay_method: "card", // 결제 방식
      merchant_uid: `mid_${new Date().getTime()}`, // 고유 주문번호
      name: product.value.name,
      amount: product.value.price,
      buyer_email: "buyer@example.com",
      buyer_name: "구매자 이름",
      buyer_tel: "010-1234-5678",
    },
    function (rsp) {
      if (rsp.success) {
        alert("결제가 완료되었습니다.");
        // 성공 후 추가 로직
      } else {
        alert(`결제 실패: ${rsp.error_msg}`);
      }
    },
  );
}

onMounted(() => {
  fetchProduct();
});
</script>
