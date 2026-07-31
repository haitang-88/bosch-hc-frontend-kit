import * as React from 'react';

const BdoRTLDemonstrator: React.FunctionComponent = () => (
  <div className="text">
    <bdo dir="rtl">&apos;this text&apos;</bdo> should be read from right to left
  </div>
);
export default BdoRTLDemonstrator;
