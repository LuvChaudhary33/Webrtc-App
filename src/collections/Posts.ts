import payload from 'payload';
import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
    slug: 'posts',
    labels: {
      singular: 'Post',
      plural: 'Posts',
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
      },
      {
        name: 'type',
        type: 'select',
        label: 'Post Type',
        options: [
          {
            label: 'Image',
            value: 'Image',
          },
          {
            label: 'Video',
            value: 'Video',
          },
          {
            label: 'Short Video',
            value: 'Short Video',
          },
        ],
      },{
        name: 'media',
        type: 'relationship',
        label: 'Media',
        relationTo: 'media',
      },
    ],
  }

export default Posts
