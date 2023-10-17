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
    endpoints:[
      {
        path: "/posts/videos/stream",
        method: 'get',
        handler: async (req, res, next) =>{
          const page = parseInt(req.query.page) || 1;
          const limit = parseInt(req.query.limit) || 2;
          try {
            const posts = await payload.find({collection: 'posts', limit: limit, page: page, where: {
              type: {
                equals: "Short Video",
              }} 
            })
            res.status(200).send({posts});
          } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Server error' });
          }
        }
      }
    ]
  }

export default Posts