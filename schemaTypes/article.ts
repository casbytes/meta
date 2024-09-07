import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'createdAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('Published Date is required'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tag is required'),
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
      validation: (Rule) => Rule.required().error('Content is required'),
    }),
    defineField({
      name: 'videoId',
      title: 'Youtube Video ID',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
  ],
})
