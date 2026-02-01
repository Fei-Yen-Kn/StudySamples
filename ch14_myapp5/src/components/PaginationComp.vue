<template>
    <ul class="pagination center">
        <li :class="{ disabled: currentPage === 1 }" @click="changePage(currentPage - 1)">
        <a href="#!"><i class="material-icons">chevron_left</i></a>
        </li>
        <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
        <a href="#!">{{ page }}</a>
        </li>
        <li :class="{ disabled: currentPage === totalPages }" @click="changePage(currentPage + 1)">
        <a href="#!"><i class="material-icons">chevron_right</i></a>
        </li>
    </ul>
</template>
<script setup>
defineProps({
    totalPages: Number,
    currentPage: Number,
});
defineEmits(['update:currentPage']);
    function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        emit('update:currentPage', page);
    }
}
</script>
<style scoped>
.pagination {
margin-top: 20px;
}
</style>  