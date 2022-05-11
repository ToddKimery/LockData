export default {
  title: 'Stoppages',
  name: 'stoppage',
  type: 'document',
  fields: [
    {
      name: 'erocCode',
      title: 'ERCO',
      type: 'string',
    },
    {
      name: 'riverCode',
      title: 'River Code',
      type: 'string',
      // type:'river',
      // of:[{type:'river'}]
    },
    {
      name: 'lockNumber',
      title: 'Lock',
      type: 'string',
      // type:'lock',
      // of:[{type:'lock'}]
    },
    {
      name: 'chamberNumber',
      title: 'Chamber',
      type: 'string',
      // type:'chamber',
      // of:[{type:'chamber'}]
    },
    {
      name: 'beginStopDate',
      title: 'Stoppage Start',
      type: 'string',
    },
    {
      name: 'endStopDate',
      title: 'Stoppage End',
      type: 'string',
    },
    {
      name: 'isScheduled',
      title: 'Scheduled Closure',
      type: 'boolean',
    },
    {
      name: 'reasonCode',
      title: 'Reason for Stoppage Code',
      type: 'string',
    },
    {
      name: 'numHwCycles',
      title: 'Number of Hardware Cycles',
      type: 'number',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'refreshDate',
      title: 'Refresh Date',
      type: 'string',
    },
    {
      name: 'isTrafficStopped',
      title: 'Is Traffic Stopped',
      type: 'boolean',
    },
  ],
}

//***************Bash Script */

// for i in 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 ; do curl -k "https://corpslocks.usace.army.mil/lpwb/json.stall_stoppage?begin_date=010120$i&end_date=010620$i" >> outputData.json; curl -k "https://corpslocks.usace.army.mil/lpwb/json.stall_stoppage?begin_date=020620$i&end_date=311220$i" >> o
