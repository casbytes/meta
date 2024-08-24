import {defineField, defineType} from 'sanity'

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
      name: 'checkpoint',
      title: 'Checkpoint',
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
      hidden: ({document}) => !document?.checkpoint,
    }),
    defineField({
      name: 'subModule',
      title: 'Sub Modules',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subModule'}]}],
    }),
  ],
})
