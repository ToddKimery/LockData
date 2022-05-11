export default {
  title: 'Rivers',
  name: 'river',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'River Name' },
    { name: 'riverCode', type: 'string', title: 'River Code' },
    { name: 'riverLength', type: 'number', title: 'River Length' },
    {
      name: 'wikiUrl',
      type: 'url',
      title: 'Wiki PDF',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
}
