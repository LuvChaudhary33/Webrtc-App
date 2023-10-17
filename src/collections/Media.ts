import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
    slug: 'media',
    labels: {
      singular: 'Media',
      plural: 'Media',
    },
    fields: [
      {
        name: 'url',
        type: 'text',
        label: 'Media URL',
      },
    ],
  }

  export default Media