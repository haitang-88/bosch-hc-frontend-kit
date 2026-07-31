import * as React from 'react';
import { Accordion } from '../accordion';

interface MultiAccordionProps {
  size?: 'small' | 'large';
  name?;
  label: string;
}

const MultiAccordionDemonstrator: React.FunctionComponent<
  MultiAccordionProps
> = ({ size = 'large', name, label }) => {
  return (
    <>
      <Accordion
        size={size}
        headline="Accordion Headline 1"
        name={`${name} 1`}
        label={`${label}-1`}
      />
      <Accordion
        size={size}
        headline="Accordion Headline 2"
        name={`${name} 2`}
        label={`${label}-2`}
      />
      <Accordion
        size={size}
        headline="Accordion Headline 3"
        name={`${name} 3`}
        label={`${label}-3`}
      />
      <Accordion
        size={size}
        headline="Accordion Headline 4"
        name={`${name} 4`}
        label={`${label}-4`}
      />
    </>
  );
};

export default MultiAccordionDemonstrator;
