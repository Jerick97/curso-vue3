<template>
  <h1>Hola Mundo</h1>
  <p>{{ contador }}</p>
  <button @click="handleIncrement">Incrementar</button>
  <button @click="handleDecrement">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);

const handleIncrement = () => {
  contador.value++;
}

const handleDecrement = () => {
  contador.value--;
}

</script>

<style scoped></style>
