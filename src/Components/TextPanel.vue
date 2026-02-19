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
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 20px;
    display: grid;
    gap: 12px;
    grid-template-rows: auto 1fr;
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
    background-color: #0E7C7B;
    color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 8px 12px;
    border-radius: 999px;
}

.clean-button {
    grid-column: 4;
    background-color: #F2EDE6;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 8px 12px;
    border-radius: 999px;
}

.textarea {
    background-color: #F9F7F3;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 16px;
    border-radius: 12px;
    outline: none;
    box-sizing: border-box;
    resize: none;
    height: 100%;
    width: 100%;
}
</style>
