export default {
  title: 'Divisions',
  name: 'division',
  type: 'document',
  fields: [
    {
      title: 'Division Long Name',
      name: 'division_long_name',
      type: 'string',
    },
    {
      title: 'Division Short Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'District',
      name: 'district',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'district' }],
        },
      ],
    },
  ],
}
