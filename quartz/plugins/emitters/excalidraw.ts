import { FilePath, joinSegments, slugifyFilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import path from "path"
import fs from "fs"
import { glob } from "../../util/glob"
import DepGraph from "../../depgraph"
import { Argv } from "../../util/ctx"
import { QuartzConfig } from "../../cfg"
import { write } from "./helpers"

const filesToCopy = async (argv: Argv, cfg: QuartzConfig) => {
  // glob all non MD files in content folder and copy it over
  return await glob("**/*.excalidraw*", argv.directory, cfg.configuration.ignorePatterns)
}

export const ObsidianExcalidraw: QuartzEmitterPlugin = () => {
  return {
    name: "ObsidianExcalidraw",
    getQuartzComponents() {
      return []
    },
    // async getDependencyGraph(ctx, _content, _resources) {
    //   const { argv, cfg } = ctx
    //   const graph = new DepGraph<FilePath>()

    //   const fps = await filesToCopy(argv, cfg)

    //   for (const fp of fps) {
    //     const ext = path.extname(fp)
    //     const src = joinSegments(argv.directory, fp) as FilePath
    //     const name = (slugifyFilePath(fp as FilePath, true) + ext) as FilePath

    //     const dest = joinSegments(argv.output, name) as FilePath

    //     graph.addEdge(src, dest)
    //   }

    //   return graph
    // },
    async emit({ argv, cfg } , content, resources): Promise<FilePath[]> {
      const fps = await filesToCopy(argv, cfg)
      
      console.log(fps)

      return []
    },
  }
}
