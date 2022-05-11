// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import division from './division'
import district from './district'
import chamber from './chamber'
import lock from './lock'
import river from './river'
import gate from './gate'
import damGate from './damGate'
import dam from './dam'
import stoppage from './stoppage'
import miterGate from './miterGate'
import miterGateData from './miterGateData'
import sillElevationData from './sillElevationData'
import miterGateComponentElevation from './miterGateComponentElevation'
import congressionalInterest from './congressionalInterest'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    division,
    district,
    chamber,
    congressionalInterest,
    lock,
    river,
    gate,
    dam,
    damGate,
    stoppage,
    miterGate,
    miterGateData,
    miterGateComponentElevation,
    sillElevationData,
  ]),
})
