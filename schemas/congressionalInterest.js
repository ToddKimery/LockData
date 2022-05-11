export default {
  title: 'Congressional Interest',
  name: 'congressionalInterest',
  type: 'object',
  fields: [
    {
      title: 'Congress',
      name: 'congress',
      type: 'string',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Senate', value: 'senate' },
        ],
      },
    },
    {
      title: 'Congressional State',
      name: 'congressionalState',
      type: 'string',
      options: {
        list: [
          { title: 'Alabama - 01', value: 'AL' },
          { title: 'Alaska - 02', value: 'AK' },
          { title: 'Arizona - 04', value: 'AZ' },
          { title: 'Arkansas - 05', value: 'AR' },
          { title: 'California - 06', value: 'CA' },
          { title: 'Colorado - 08', value: 'CO' },
          { title: 'Connecticut - 09', value: 'CT' },
          { title: 'Delaware - 10', value: 'DE' },
          { title: 'Florida - 12', value: 'FL' },
          { title: 'Georgia - 13', value: 'GA' },
          { title: 'Hawaii - 15', value: 'HI' },
          { title: 'Idaho - 16', value: 'ID' },
          { title: 'Illinois - 17', value: 'IL' },
          { title: 'Indiana - 18', value: 'IN' },
          { title: 'Iowa - 19', value: 'IA' },
          { title: 'Kansas - 20', value: 'KS' },
          { title: 'Kentucky - 21', value: 'KY' },
          { title: 'Louisiana - 22', value: 'LA' },
          { title: 'Maine - 23', value: 'ME' },
          { title: 'Maryland - 24', value: 'MD' },
          { title: 'Massachusetts - 25', value: 'MA' },
          { title: 'Michigan - 26', value: 'MI' },
          { title: 'Minnesota - 27', value: 'MN' },
          { title: 'Mississippi - 28', value: 'MS' },
          { title: 'Missouri - 29', value: 'MO' },
          { title: 'Montana - 30', value: 'MT' },
          { title: 'Nebraska - 31', value: 'NE' },
          { title: 'Nevada - 32', value: 'NV' },
          { title: 'New Hampshire - 33', value: 'NH' },
          { title: 'New Jersey - 34', value: 'NJ' },
          { title: 'New Mexico - 35', value: 'NM' },
          { title: 'New York - 36', value: 'NY' },
          { title: 'North Carolina - 37', value: 'NC' },
          { title: 'North Dakota - 38', value: 'ND' },
          { title: 'Ohio - 39', value: 'OH' },
          { title: 'Oklahoma - 40', value: 'OK' },
          { title: 'Oregon - 41', value: 'OR' },
          { title: 'Pennsylvania - 42', value: 'PA' },
          { title: 'Rhode Island - 44', value: 'RI' },
          { title: 'South Carolina - 45', value: 'SC' },
          { title: 'South Dakota - 46', value: 'SD' },
          { title: 'Tennessee - 47', value: 'TN' },
          { title: 'Texas - 48', value: 'TX' },
          { title: 'Utah - 49', value: 'UT' },
          { title: 'Vermont - 50', value: 'VT' },
          { title: 'Virginia - 51', value: 'VA' },
          { title: 'Washington - 53', value: 'WA' },
          { title: 'West Virginia - 54', value: 'WV' },
          { title: 'Wisconsin - 55', value: 'WI' },
          { title: 'Wyoming - 56', value: 'WY' },
        ],
      },
    },
    {
      title: 'Congressional District',
      name: 'congressionalDistrict',
      type: 'string',
      hidden: ({ parent, value }) =>
        (!value && parent?.congress == 'senate') || parent.congress == null,
    },
    {
      title: 'GEOID',
      name: 'geoid',
      type: 'string',
      // hidden: ({ parent, value }) => !value && !parent?.congressionalDistrict,

      // description:
      //   'The GEIOD is the two digits by the State and the Congressional District. (ex. State: Arkansas - 04, District 01, GEOID = 0401 )',
      validation: Rule =>
        Rule.custom((congressionalDistrict, congressionalState) => {
          const newValue =
            // congressionalState.slice(congressionalState.length - 2) +
            congressionalState + congressionalDistrict
          return newValue
        }),
    },
    // geoid?.value ===
  ],
}
