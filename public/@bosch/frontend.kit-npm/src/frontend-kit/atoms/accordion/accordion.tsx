import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../icon/icon';

class AccordionProps {
  open?: boolean;
  headline: string;
  size?: 'small' | 'large';
  name?: string;
  label: string;
}

/**
 * @name        a-accordion
 * @type        atom
 *
 * @param       open            Whether the Accordion is open or not
 * @param       headline        The headline of the Accordion
 * @param       size            The size of the Accordion
 * @param       name            The name of the Accordion
 * @param       label           Used to create ids connecting parts of the UI regarding a11y
 * @description
 * representation of a accordion
 */

const Accordion: React.FunctionComponent<AccordionProps> = ({
  open = false,
  headline,
  size = 'large',
  name,
  label,
}: AccordionProps) => {
  const divClass = classNames('a-accordion', {
    'a-accordion--open': open,
    'a-accordion--small': size === 'small',
  });

  return (
    <div className={divClass}>
      <div className="a-accordion__headline">
        <h2
          id={`${label}-headline`}
          className="a-accordion__headline-heading"
        >
          {headline}
        </h2>
        <button
          id={label}
          type="button"
          className="a-accordion__headline-button"
          aria-expanded={open}
          aria-controls={`${label}-content`}
          aria-label={open ? 'arrow up' : 'arrow down'}
        >
          {open ? (
            <Icon iconName="up" className="a-accordion__headline-icon" />
          ) : (
            <Icon iconName="down" className="a-accordion__headline-icon" />
          )}
        </button>
      </div>
      <div
        className="a-accordion__content"
        id={`${label}-content`}
        role="region"
        aria-labelledby={`${label}-headline`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        quibusdam blanditiis recusandae labore veritatis, rem at voluptates vero
        reprehenderit tempore?
      </div>
    </div>
  );
};

export { Accordion };
export type { AccordionProps };
