export default {
  title: 'Dams',
  name: 'dam',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dam Type',
      type: 'string',
      options: {
        list: [
          { title: 'Tainter Gate', value: 'Tainter Gate' },
          { title: 'Roller Gate', value: 'Roller Gate' },
          { title: 'Vertical Lift Gate', value: 'Vertical Lift Gate' },
          {
            title: 'Non-Navigable Fixed Weir',
            value: 'Non-Navigable Fixed Weir',
          },
          { title: 'Navigable Fixed Weir', value: 'Navigable Fixed Weir' },
          { title: 'Wicket', value: 'Wicket' },
          { title: 'Fixed Crest', value: 'Fixed Crest' },
          { title: 'Hinge Crest', value: 'Hinge Crest' },
        ],
      },
    },
    {
      name: 'altName',
      title: 'Alternate Name',
      type: 'string',
    },
    {
      name: 'damLength',
      title: 'Dam Length',
      type: 'string',
    },
    {
      name: 'numberOfGates',
      title: 'Total Number of Gates',
      type: 'number',
    },
    {
      name: 'gate',
      type: 'array',
      title: 'Gates',
      of: [{ type: 'damGate' }],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Gate Photo',
    },
  ],
  preview: {
    select: {
      altTitle: 'altName',
      title: 'name',
      media: 'image',
    },
    prepare(selection) {
      const { title, media, altTitle } = selection
      if (altTitle) {
        return {
          title: altTitle,
          media: media,
        }
      } else {
        return {
          title: title.charAt(0).toUpperCase() + title.slice(1),
          media: media,
        }
      }
    },
  },
}
