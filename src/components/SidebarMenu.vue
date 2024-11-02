<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
        <ul class="list-container">
            <li>
                <RouterLink to="/contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink>
            </li>
            <li>
                <RouterLink to="/registrar">Registrar</RouterLink>
            </li>
        </ul>

    </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    height: 100vh;
    color: #000;
    font-weight: 700;
}

.list-container {
    list-style: none;
}
</style>