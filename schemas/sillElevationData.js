export default {
  title: 'Sill Elevation Data',
  name: 'sillElevationData',
  type: 'object',
  fieldsets: [{ name: 'sillData', title: 'Miter Gate Data' }],
  fields: [
    {
      name: 'topOfWall',
      title: 'Top of Wall Elevation',
      type: 'number',
      fieldset: 'sillData',
    },
    {
      name: 'upperGateSill',
      title: 'Upper Gate Sill',
      type: 'number',
      description: 'Upper Gate Sill Elevation (NAD29)',
      fieldset: 'sillData',
    },
    {
      name: 'lowerGateSill',
      title: 'Lower Gate Sill',
      type: 'number',
      description: 'Lower Gate Sill Elevation (NAD29)',
      fieldset: 'sillData',
    },
    {
      name: 'emergencyGateSill',
      title: 'Emergency Gate Sill',
      type: 'number',
      description: 'Emergency Gate Sill Elevation (NAD29)',
      fieldset: 'sillData',
    },
  ],
}
