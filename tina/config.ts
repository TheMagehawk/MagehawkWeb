import { defineConfig } from "tinacms";
import Post from "./collections/post";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Post],
  },
  search: {
    tina: {
      indexerToken: '70b0471ecbf101238b39d4394bb0e9898e4e917a',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
