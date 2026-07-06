import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    data: z.coerce.date(),
    categoria: z.string().default("Riflessioni"),
    autore: z.string().default("Aria"),
    inEvidenza: z.boolean().default(false),
  }),
});

export const collections = { blog };
