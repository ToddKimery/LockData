export default {
  title: 'Districts',
  name: 'district',
  type: 'document',
  fields: [
    {
      title: 'District Long Name',
      name: 'district_long_name',
      type: 'string',
    },
    {
      title: 'District Short Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'EROC',
      name: 'eroc',
      type: 'string',
    },
    {
      title: 'Locks',
      name: 'districtLock',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'lock' }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
    {
      title: 'River',
      name: 'districtRiver',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'river' }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
  ],
}
