import "./scss/style.scss";
import $ from "jquery";
import { marked } from "./parserFunction";

$(async function () {
    const editor = $(`#editor`);
    const defaultPlaceHolder =
        "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\nYou can also make text **bold**...\nOr _italic_\nOr **_both!_**\nPossibly if you want to ~~cross out stuff~~.\n\n\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```\n#### Image Shown below\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
    editor.val(defaultPlaceHolder);

    const currentEditorValue = editor.val();
    console.log(currentEditorValue);

    const preview = $(`#preview`);
    const text = await marked.parse(currentEditorValue);
    console.log();
    preview.html(text);
});
