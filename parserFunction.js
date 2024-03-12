import { Marked } from "marked";

export const marked = new Marked({
    async: true,
    pedantic: false,
    gfm: true,
    renderer: {
        heading(text, level) {
            return `<h${level} class="preview-heading">${text}<h${level}>`;
        },
    },
});
