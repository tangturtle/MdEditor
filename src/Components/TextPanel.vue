<script setup lang="ts">
defineProps(['type'])
</script>

<template>
    <div class="panel">
        <div class="panel-header">
            <h3 class="type-header">{{ type }}</h3>
            <button class="export-button">导出{{ type }}</button>
            <button class="clean-button">清空</button>
        </div>
        <div class="panel-body">
            <textarea class="textarea"></textarea>
        </div>
    </div>
</template>

<style scoped>
.panel {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    background-color: #ffffff;
    padding: 20px;
}

.panel-header {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 8px;
}

.type-header {
    grid-column: 1;
    margin: 0px;
}

.export-button {
    grid-column: 3;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 999px;
    background-color: #0e7c7b;
    padding: 8px 12px;
    color: #ffffff;
}

.clean-button {
    grid-column: 4;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 999px;
    background-color: #f2ede6;
    padding: 8px 12px;
}

.textarea {
    box-sizing: border-box;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    background-color: #f9f7f3;
    padding: 16px;
    width: 100%;
    height: 100%;
    resize: none;
}
</style>
