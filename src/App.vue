<script setup lang="ts">
import AppHeader from "./Components/AppHeader.vue"
import TextPanel from "./Components/TextPanel.vue"

import { ref } from "vue";

const textTypes = ref([{ id: 1, type: "Markdown" }, { id: 2, type: "HTML" }])


</script>

<template>
    <div class="container-app-header">
        <AppHeader />
    </div>
    <div class="container-panels">
        <TextPanel v-for="textType in textTypes" :key="textType.id" :type="textType.type" />
    </div>

</template>

<style scoped>
.container-panels {
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
}
</style>

<style>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f4f0ea;
}

#app {
    display: grid;
    grid-template-rows: 94px auto;
    gap: 24px;
    height: 100vh;
    padding: 32px;
    box-sizing: border-box;
}
</style>