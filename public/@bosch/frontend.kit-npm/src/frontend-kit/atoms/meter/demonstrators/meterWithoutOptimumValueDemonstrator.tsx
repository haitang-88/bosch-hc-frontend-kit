import * as React from 'react';
import { Meter } from '../meter';

const MeterWithoutOptimumValueDemonstrator: React.FunctionComponent = () => (
  <Meter id="example-with-optimum-value" label="Label" value={50} />
);

export default MeterWithoutOptimumValueDemonstrator;
