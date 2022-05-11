export default {
  title: 'Dam Gates',
  name: 'damGate',
  type: 'object',
  fields: [
    {
      name: 'gateNumber',
      type: 'string',
      title: 'Gate Number',
    },
    {
      name: 'gateType',
      type: 'string',
      title: 'Gate Type',
      options: {
        list: [
          { title: 'Miter', value: 'Miter' },
          { title: 'Sector', value: 'Sector' },
          { title: 'Tainter', value: 'Tainter' },
          { title: 'Roller', value: 'Roller' },
        ],
      },
    },
    {
      name: 'cableConnections',
      type: 'string',
      title: 'Type of Cable Connections',
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
      name: 'image',
      type: 'image',
      title: 'Gate Photo',
    },
  ],
}
