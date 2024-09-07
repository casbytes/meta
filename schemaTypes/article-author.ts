import { defineField, defineType } from 'sanity'

export const articleAuthor = defineType({
  name: 'author',
  title: 'Article authors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required'),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      validation: (Rule) => Rule.required().error('Profession is required'),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
})
