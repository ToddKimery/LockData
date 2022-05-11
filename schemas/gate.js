import react from 'react'

export default {
  title: 'Gate',
  name: 'gate',
  type: 'object',
  fields: [
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      options: {
        list: [
          { title: 'Upstream', value: 'upstream' },
          { title: 'Downstream', value: 'downstream' },
        ],
      },
    },
    {
      name: 'gateType',
      type: 'string',
      title: 'Gate Type',
      options: {
        list: [
          { title: 'Miter', value: 'miter' },
          { title: 'Sector', value: 'sector' },
          { title: 'Tainter', value: 'tainter' },
          { title: 'Vertical', value: 'vertical' },
        ],
      },
    },
    {
      name: 'yearInService',
      type: 'number',
      title: 'Year In Service',
    },
    {
      name: 'height',
      type: 'number',
      title: 'Gate Height',
    },
    {
      name: 'width',
      type: 'number',
      title: 'Gate Width',
    },
    {
      name: 'replaced',
      type: 'array',
      title: 'Dates Replaced',
      of: [{ type: 'string' }],
    },
    {
      name: 'theoreticalReplacement',
      type: 'array',
      title: 'Theoretical Replacement',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Gate Photo',
    },
  ],
}
