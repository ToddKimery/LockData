export default {
  title: 'Locks',
  name: 'lock',
  type: 'document',
  fields: [
    {
      title: 'Lock Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'District',
      name: 'district',
      type: 'reference',
      to: [{ type: 'district' }],
    },
    {
      title: 'River',
      name: 'river',
      type: 'reference',
      to: [{ type: 'river' }],
    },
    {
      title: 'Lock Number',
      name: 'lock_number',
      type: 'number',
    },
    {
      title: 'River Mile',
      name: 'river_mile',
      type: 'number',
    },
    {
      title: 'Lift',
      name: 'lift',
      type: 'number',
    },
    {
      title: 'Normal Upper Elevation',
      name: 'normalUpperElevation',
      type: 'number',
    },
    {
      title: 'Normal Lower Elevation',
      name: 'normalLowerElevation',
      type: 'number',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Year Opened',
      name: 'yearOpen',
      type: 'number',
    },
    {
      title: 'Town',
      name: 'town',
      type: 'string',
    },
    {
      title: 'County',
      name: 'county',
      type: 'string',
    },
    {
      title: 'Mooring',
      name: 'mooring',
      type: 'string',
    },
    {
      title: 'Congressional Interests',
      name: 'congressionalIntrest',
      type: 'array',
      of: [{ type: 'congressionalInterest' }],
    },
    {
      title: 'Chambers',
      name: 'chamber',
      type: 'array',
      of: [{ type: 'chamber' }],
    },
    {
      title: 'Dam',
      name: 'dam',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'dam' }],
        },
      ],
    },
    {
      title: 'Cover Photo',
      name: 'coverPhoto',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
