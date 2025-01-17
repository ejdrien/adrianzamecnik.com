import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    // TODO: add slug
    // slug: z.string(),
    release_date: z.date(),
  })
})

export const collections = { articles }