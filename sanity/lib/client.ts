import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
    "sk64BfMrLYcsR82OhM2oETwLko9lvH3jPz3NNTGU7Pr6TDb7P9vV7Wxllq54gcVxeaLrNOwBgWLq2yWyaLOdeCioY8ESCvS5OSkwkdN2ZMD69nhXXokj8qoPcF5RMcKlnd8qkHhDZ7arfBARV3G5BP45RyLlsBK4HsK9v8aGXry75TtAbFXB"
})
