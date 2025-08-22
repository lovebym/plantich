import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION ?? "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: true,
  perspective: "published"
});
