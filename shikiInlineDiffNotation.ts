import { ShikiTransformer, ThemedToken } from "shiki"

function splitAndColorTokens(
  tokens: ThemedToken[][],
  options: {
    bgColor: string
    matchStart: string
    matchEnd: string
  }
) {
  tokens.forEach((token) => {
    const idx = token.findIndex((t) => t.content.includes(options.matchStart))
    if (idx === -1) return
    const node = token[idx]
    if (node.content === options.matchStart) {
      // in this case, the nodes are already split.
      // loop over the nodes between the start and end, applying the color
      // then remove the start and end nodes

      for (let i = idx + 1; i < token.length; i++) {
        if (token[i].content === options.matchEnd) break
        if (token[i].content.includes(options.matchEnd)) {
          console.error("TODO: handle this case here", token, node, new Error())
          return
        }
        token[i].bgColor = options.bgColor
      }

      token.splice(idx, 1)
      const endIdx = token.findIndex((t) => t.content === options.matchEnd)
      token.splice(endIdx, 1)
      return
    }
    const startIdx = node.content.indexOf(options.matchStart)
    const endIdx = node.content.indexOf(options.matchEnd)
    // here we have a node with content like so: >Hello /++{name}++/!</
    // we want to replace it with 3 nodes:
    // 1. the start node: >Hello
    // 2. the diff node: {name}
    // 3. the end node: !</

    const startNode = {
      ...node,
      content: node.content.slice(0, startIdx),
    }
    const diffNode = {
      ...node,
      content: node.content.slice(startIdx + 3, endIdx),
    }
    diffNode.bgColor = options.bgColor
    const endNode = {
      ...node,
      content: node.content.slice(endIdx + 3),
    }

    token.splice(idx, 1, startNode, diffNode, endNode)
    //node.bgColor = "red"
  })
}

export function shikiInlineDiffNotation(): ShikiTransformer {
  return {
    name: "shiki-diff-notation",
    tokens(tokens) {
      splitAndColorTokens(tokens, {
        bgColor: "#173a4f",
        matchStart: "|~~",
        matchEnd: "~~|",
      })
      splitAndColorTokens(tokens, {
        bgColor: "#174327",
        matchStart: "|++",
        matchEnd: "++|",
      })
      splitAndColorTokens(tokens, {
        bgColor: "#512525",
        matchStart: "|--",
        matchEnd: "--|",
      })
    },
  }
}
