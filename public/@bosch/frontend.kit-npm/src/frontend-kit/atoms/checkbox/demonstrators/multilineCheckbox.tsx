import * as React from 'react';
import { Checkbox } from '../checkbox';

const MultilineCheckboxDemonstrator: React.FunctionComponent = () => {
  return (
    <Checkbox
      name="multiline label checkbox"
      id="multiline-label"
      isSelected
      labelCheckbox={
        <>
          First line
          <br />
          Second line
        </>
      }
    />
  );
};

export default MultilineCheckboxDemonstrator;
