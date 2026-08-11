import { createClient } from "@sanity/client"

const sanity = createClient({
  dataset: import.meta.env.sanityDataset,
  projectId: import.meta.env.projectID,
  apiVersion: import.meta.env.apiVersion,
  token: import.meta.env.sanityToken,
  useCdn: false,
})

export default sanity
