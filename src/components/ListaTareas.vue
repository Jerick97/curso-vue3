<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="handleAddTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">{{ tarea }}
                <button @click="handleDeleteTarea">x</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const handleAddTarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = "";
}
const handleDeleteTarea = (index) => {
    tareas.value.splice(index, 1)
}

</script>
<style></style>