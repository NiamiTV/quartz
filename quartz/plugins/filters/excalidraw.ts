import { QuartzFilterPlugin } from "../types"

export const RemoveExcalidraw: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveExcalidraw",
  shouldPublish(_ctx, [_tree, vfile]) {
    const excalidrawFlag: boolean = vfile.data?.frontmatter?.tags?.includes('excalidraw') ?? false
    return !excalidrawFlag
  },
})
