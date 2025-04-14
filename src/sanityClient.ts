import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '2utgg96w',
  dataset: 'cheyjs',
  apiVersion: '2024-04-14', // use a date that's close to today
  useCdn: true // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source) 