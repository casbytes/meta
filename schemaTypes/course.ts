import { defineField, defineType } from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'string',
      validation: (Rule) => Rule.required().error('Image is required'),
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
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'testEnvironment',
      title: 'Test Environment',
      type: 'string',
      options: {
        list: ['node', 'browser', 'python'],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Test Environment is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'module',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'module' }] }],
    }),
  ],
})
