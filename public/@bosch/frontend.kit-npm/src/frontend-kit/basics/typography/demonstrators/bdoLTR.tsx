import * as React from 'react';

const BdoRTLDemonstrator: React.FunctionComponent = () => (
  <div className="text">
    <p>
      This in Hebrew written from right to left:
      <br />
      <bdo dir="rtl">אה, אני אוהב להיות ליד חוף הים</bdo>
    </p>
    <p>
      And this is from left to right:
      <br />
      <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
    </p>
  </div>
);
export default BdoRTLDemonstrator;
