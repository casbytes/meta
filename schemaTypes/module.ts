import { defineField, defineType } from 'sanity'

export const moduleType = defineType({
  name: 'module',
  title: 'Modules',
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
      name: 'tags',
      title: 'Tags',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tags is required'),
    }),
    defineField({
      name: 'checkpoint',
      title: 'Checkpoint',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'premium',
      title: 'Premium',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'testEnvironment',
      title: 'Test Environment',
      type: 'string',
      initialValue: 'node',
      options: {
        list: ['node', 'browser', 'python'],
        layout: 'radio',
      },
      hidden: ({ document }) => !document?.checkpoint,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'subModule',
      title: 'Sub Modules',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subModule' }] }],
    }),
  ],
})
