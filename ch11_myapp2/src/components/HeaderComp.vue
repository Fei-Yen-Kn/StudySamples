<template>
  <header class="bg-blue-600 text-white">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold"
        >Weather Dashboard</router-link
      >
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="hover:underline">Home</router-link>
        </li>
        <li>
          <router-link to="/weather" class="hover:underline"
            >날씨 목록</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>
