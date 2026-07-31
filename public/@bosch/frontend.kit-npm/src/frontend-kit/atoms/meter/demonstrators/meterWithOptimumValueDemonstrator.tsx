import * as React from 'react';
import { Meter } from '../meter';

const MeterWithoutOptimumValueDemonstrator: React.FunctionComponent = () => (
  <Meter
    id="example-without-optimum-value"
    label="Label"
    value={50}
    optimum={80}
  />
);

export default MeterWithoutOptimumValueDemonstrator;
