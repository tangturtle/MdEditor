<script setup lang="ts">
import EditorLayout from './components/layout/EditorLayout.vue';

</script>

<template>
    <div class="main-header">
        <h1>Mdeditor</h1>
    </div>
    <div class="editor-layout">
        <EditorLayout />
    </div>
</template>

<style scoped>
.main-header {
    text-align: center;
    font-size: 30px;
}
</style>

<style>
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

#app {
    display: grid;
    grid-template-rows: 1fr 9fr;
    box-sizing: border-box;
    height: 100vh;
}
</style>
