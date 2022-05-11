import gateComponentElevation from './miterGateComponentElevation'

export default {
  title: 'Miter Gates',
  name: 'miterGate',
  type: 'object',
  fieldsets: [
    { name: 'gateData', title: 'Gate Data' },
    { name: 'elevationData', title: 'Elevation Data' },
  ],
  fields: [
    {
      name: 'name',
      type: 'slug',
      title: 'Name',
      description: 'Project-Chamber-Gate',
    },
    {
      name: 'gateData',
      title: 'Gate Data',
      type: 'miterGateData',
    },
    {
      name: 'sillElevationData',
      title: 'Sill Elevation Data',
      type: 'sillElevationData',
    },

    {
      name: 'miterGateComponentElevation',
      title: 'Gate Component Elevation',
      type: 'miterGateComponentElevation',
      fieldset: 'elevationData',
    },

    {
      name: 'image',
      type: 'image',
      title: 'Gate Photo',
    },
  ],
}
