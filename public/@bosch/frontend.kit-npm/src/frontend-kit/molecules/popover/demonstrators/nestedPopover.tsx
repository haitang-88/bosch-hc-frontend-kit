import * as React from 'react';
import { Button } from '../../../atoms/button/button';
import { Popover } from '../popover';
import { ArrowPosition } from '../constants';

const NestedPopoverDemonstrator: React.FunctionComponent = () => (
  <div className="frontend-kit-example_nested-popover">
    <Button mode="primary" label="open base popover" action="show" />
    <Popover
      buttonLabelPrimary="close base popover"
      arrowPosition={ArrowPosition.LEFT_CENTER}
      paragraph="This is a Popover that includes another Popover."
      closeButton
      detached={false}
    >
      <p>Click on the button below to open the nested popover</p>
      <Button mode="primary" label="open nested popover" action="show" />
      <Popover
        buttonLabelPrimary="close nested popover"
        arrowPosition={ArrowPosition.TOP_LEFT}
        paragraph="This is a nested popover with different attributes like the arrow position."
        closeButton
        detached={false}
      />
    </Popover>
  </div>
);

export default NestedPopoverDemonstrator;
