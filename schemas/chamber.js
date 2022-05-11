export default {
  title: 'Chamber',
  name: 'chamber',
  type: 'object',
  fields: [
    {
      name: 'chamber',
      type: 'string',
      title: 'Chamber Name',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Auxiliary', value: 'auxiliary' },
        ],
      },
    },
    { name: 'altChamberName', type: 'string', title: 'Alternate Chamber Name' },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      options: {
        list: [
          { title: 'River', value: 'river' },
          { title: 'Land', value: 'land' },
        ],
      },
    },
    {
      name: 'length',
      type: 'number',
      title: 'Length',
      options: {
        list: [
          { title: '1200', value: 1200 },
          { title: '800', value: 800 },
          { title: '720', value: 720 },
          { title: '600', value: 600 },
          { title: '500', value: 500 },
          { title: '400', value: 400 },
          { title: '360', value: 360 },
        ],
      },
    },
    {
      name: 'width',
      type: 'number',
      title: 'Width',
      options: {
        list: [
          { title: '110', value: 110 },
          { title: '84', value: 84 },
          { title: '56', value: 56 },
        ],
      },
    },

    {
      name: 'miterGate',
      type: 'miterGate',
      title: 'Miter Gates',
    },
  ],
  preview: {
    select: {
      altTitle: 'altChamberName',
      chamber: 'chamber',
    },
    prepare(selection) {
      const { chamber, altTitle } = selection
      if (altTitle) {
        return {
          title: altTitle,
        }
      } else {
        return {
          title: chamber.charAt(0).toUpperCase() + chamber.slice(1),
        }
      }
    },
  },
}
