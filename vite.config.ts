import path from "node:path"
import { defineConfig } from "vite"
import vike from "vike/plugin"
import kaioken from "vite-plugin-kaioken"
import mdx from "@mdx-js/rollup"
import shiki, { type RehypeShikiOptions } from "@shikijs/rehype"
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers"

// const customTheme = {
//   name: "rose-pine-moon",
//   bg: "#2a2734",
//   settings: [
//     {
//       scope: ["punctuation"],
//       settings: {
//         foreground: "#6c6783",
//       },
//     },
//     {
//       scope: ["punctuation.definition.tag"],
//       settings: {
//         foreground: "#e09142",
//       },
//     },
//     {
//       scope: [
//         "keyword.control.import.js",
//         "keyword.control.from",
//         "string",
//         "storage.type",
//       ],
//       settings: {
//         foreground: "#fc9",
//       },
//     },
//     {
//       scope: ["entity.name.tag", "variable"],
//       settings: {
//         foreground: "#c4b9fe",
//       },
//     },
//   ],
// }

export default defineConfig({
  resolve: {
    alias: {
      $: path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    sourcemap: false,
  },
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsx: false,
        jsxImportSource: "kaioken",
        jsxRuntime: "automatic",
        rehypePlugins: [
          [
            shiki,
            {
              //theme: "rose-pine-moon",
              //theme: "min-dark",
              theme: "github-dark",
              transformers: [
                transformerNotationHighlight(),
                transformerNotationDiff(),
              ],
            } as RehypeShikiOptions,
          ],
        ],
      }),
    },
    vike({
      prerender: {
        noExtraDir: true,
      },
    }),
    kaioken(),
  ],
})
