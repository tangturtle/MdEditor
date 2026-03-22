<template>
    <!--
    编辑器页面的布局外壳。
    该组件负责组织工具栏、编辑区和预览区的位置关系。
    这里只保留布局逻辑，不放 Markdown 解析或命令处理逻辑。
  -->
    <div class="editor-layout">
        <EditorToolbar class="editor-toolbar" />
        <MarkdownEditor />
        <MarkdownPreview />
    </div>
</template>

<script setup lang="ts">
import MarkdownEditor from '../editor/MarkdownEditor.vue';
import MarkdownPreview from '../preview/MarkdownPreview.vue';
import EditorToolbar from '../toolbar/EditorToolbar.vue';

// 占位：后续组合子组件时，在这里补充布局层的 props/slots。
</script>

<style scoped>
.editor-layout {
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100%;
}

.editor-toolbar {
    grid-column-start: span 2;
}
</style>
