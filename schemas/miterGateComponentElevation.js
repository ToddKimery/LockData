export default {
  title: 'Miter Gate Componenet Elevation NAD29',
  name: 'miterGateComponentElevation',
  type: 'object',
  fieldsets: [{ name: 'mgc', title: 'Miter Gate Component Elevations' }],
  fields: [
    {
      name: 'strutConnection',
      type: 'number',
      title: 'Elevation C.L. Strut Connection',
      // fieldset: 'mgc',
    },
    {
      name: 'gudgeonAnchorage',
      type: 'number',
      title: 'Elevation C.L. Gudgeion Anchorage',
      // fieldset: 'mgc',
    },
    {
      name: 'topGirder',
      type: 'number',
      title: 'Elevation C.L. Top Girder',
      // fieldset: 'mgc',
    },
    {
      name: 'bottomGirder',
      type: 'number',
      title: 'Elevation C.L. Bottom Girder',
      // fieldset: 'mgc',
    },
    {
      name: 'topOfPintle',
      type: 'number',
      title: 'Elevation Top of Pintle',
      // fieldset: 'mgc',
    },
    {
      name: 'baseOfPintle',
      type: 'number',
      title: 'Elevation Top of Pintle',
      // fieldset: 'mgc',
    },
  ],
}
