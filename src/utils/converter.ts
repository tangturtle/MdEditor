// Markdown to HTML converter
import MarkdownIt from 'markdown-it';
import { tasklist } from '@mdit/plugin-tasklist';
const md = new MarkdownIt();
md.use(tasklist);

// TODO: 目前仅渲染的产物checkbox只读，在编辑器版本再支持可编辑
export const markdownToHTML = (markdown: string): string => {
    return md.render(markdown);
};

// HTML to Markdown converter
import TurndownService from 'turndown';
import { taskListItems } from '@truto/turndown-plugin-gfm';

const turndownService = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
});
turndownService.use(taskListItems);

export const htmlToMarkdown = (html: string): string => {
    // TODO: 定期检查https://github.com/mixmark-io/turndown/issues/484是否修复
    // 规范任务列表的空格格式，避免输出为 "-   [x]  b"
    return turndownService.turndown(html).replace(/^(-\s+)\[([ xX])\]\s+/gm, '- [$2] ');
};
