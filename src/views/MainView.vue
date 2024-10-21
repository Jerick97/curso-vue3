<template>
    <div class="container">
        <SidebarMenu />
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import SidebarMenu from '@/components/SidebarMenu.vue';
</script>

<style scoped>
.container {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>