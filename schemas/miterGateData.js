export default {
  title: 'Miter Gate Data',
  name: 'miterGateData',
  type: 'object',
  fieldsets: [{ name: 'gateData', title: 'Miter Gate Data' }],
  fields: [
    {
      name: 'gateType',
      type: 'string',
      title: 'Gate Type',
      fieldset: 'gateData',
      options: {
        list: [
          { title: 'Miter', value: 'Miter' },
          { title: 'Sector', value: 'Sector' },
        ],
      },
    },
    {
      name: 'framing',
      type: 'string',
      title: 'Framing',
      fieldset: 'gateData',
      options: {
        list: [
          { title: 'Vertical', value: 'Vertical' },
          { title: 'Horizontal', value: 'Horizontal' },
        ],
      },
    },
    {
      name: 'diagonalSetsPerLeaf',
      type: 'number',
      title: 'Diagonal Sets Per Leaf',
      fieldset: 'gateData',
    },
    {
      name: 'pintel',
      type: 'string',
      title: 'Pintle',
      fieldset: 'gateData',
      options: {
        list: [
          { title: '', value: '' },
          { title: 'Fixed', value: 'Fixed' },
          { title: 'Floating', value: 'Floating' },
        ],
      },
    },
    {
      name: 'constructionType',
      type: 'string',
      title: 'Construction Type',
      fieldset: 'gateData',
      optons: {
        list: [
          { title: 'Welded', value: 'Welded' },
          { title: 'Riveted', value: 'Riveted' },
        ],
      },
    },
    {
      name: 'contactPointToGudgeon',
      type: 'number',
      title: 'Contact Point To Gudgeon ',
      fieldset: 'gateData',
      description:
        'Distance from contact point to gudgeon pin (Along Workline)(ft)',
    },
    {
      name: 'strutFromGudgeon',
      type: 'number',
      title: 'Strut Location From Gudgeon ',
      fieldset: 'gateData',
      description:
        'Distance of the strut location from the gudgeon pin (Along Workline)(ft)',
    },
    {
      name: 'strutType',
      type: 'string',
      title: 'Strut Type ',
      fieldset: 'gateData',
      description: 'linkage, direct, etc.',
    },
    {
      name: 'wallToCenterline',
      type: 'number',
      title: 'Wall To Centerline',
      fieldset: 'gateData',
      description:
        "Distance from the lock wall's concrete wall face to the centerline of the pintle (in) ",
    },
    {
      name: 'pintleRadius',
      type: 'number',
      title: 'Pingle Radius',
      fieldset: 'gateData',
      description: 'The radius of the pintle (in) ',
    },
    {
      name: 'girderToFlanges',
      type: 'number',
      title: 'Girder To Flanges',
      fieldset: 'gateData',
      description: 'Gider Depth Out To Out Flanges (in) ',
    },
    {
      name: 'leafLength',
      type: 'number',
      title: 'Leaf Length',
      fieldset: 'gateData',
      description: 'Leaf Length CL Quion to CL Miter Contact (in) ',
    },
    {
      name: 'embeddedWallQuionRadius',
      type: 'number',
      title: 'Embedded Wall Quion Radius',
      fieldset: 'gateData',
      description: 'Embedded Wall Quoin Block Radius (in) ',
    },
    {
      name: 'wallQuionRadius',
      type: 'number',
      title: 'Wall Quion Block Radius',
      fieldset: 'gateData',
      description: 'Wall Quoin Block Radius (in) ',
    },
    {
      name: 'wallQuionWidth',
      type: 'number',
      title: 'Wall Quion Block Width',
      fieldset: 'gateData',
      description: 'Wall Quoin Block Width (in) ',
    },
    {
      name: 'bottomSeal',
      type: 'string',
      title: 'Bottom Seal Type',
      fieldset: 'gateData',
      description: 'Compression or Sweeper',
      optons: {
        list: [
          { title: 'Compression', value: 'Compression' },
          { title: 'Sweeper', value: 'Sweeper' },
        ],
      },
    },
    {
      name: 'slopeInMiter',
      type: 'number',
      title: 'Leaf Slope In Miter',
      fieldset: 'gateData',
      description: 'Leaf Slope in Miter Position, 1 on X',
    },
    {
      name: 'leafRecessDepth',
      type: 'number',
      title: 'Leaf Recess Depth',
      fieldset: 'gateData',
      description: 'Leaf Recess Depth (ft)',
    },
  ],
}
