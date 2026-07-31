/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import classNames from 'classnames';

class TimelineProps {
  additionalClassName?: string;
  id: string;
  duration?: number;
  initialValue?: number;
  disabled?: boolean;
  playing?: boolean;
  description: string;
  ariaValueText?: string;
  ariaDescription?: string;
}

/**
 * @name        a-timeline
 * @type        atom
 *
 * @param       additionalClassName Additional classname for timeline. Optional.
 * @param       id                  Unique ID for the timeline
 * @param       duration            Duration of media content in seconds
 * @param       initialValue        Initial value of timeline range. Optional
 * @param       disabled            Whether or not the timeline is disabled
 * @param       playing             Whether or not the timeline is in playing state
 * @param       description         Timeline range description, used for accessibility attributes
 * @param       ariaValueText       Aria value text of timeline range.
 * @param       ariaDescription     Aria description of timeline range.
 *
 * @description
 * representation of a Timeline
 */

const Timeline: React.FunctionComponent<TimelineProps> = ({
  additionalClassName,
  id,
  duration = 0,
  initialValue = 0,
  disabled,
  playing,
  description,
  ariaValueText,
  ariaDescription,
}: TimelineProps) => {
  const divClass = classNames(
    'a-timeline',
    {
      '-disabled': disabled,
      '-playing': playing,
    },
    additionalClassName,
  );

  const inputElement = (
    <input
      tabIndex={0}
      id={id}
      type="range"
      min={0}
      max={duration}
      defaultValue={initialValue}
      disabled={disabled}
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={initialValue}
      aria-label={description}
      aria-valuetext={ariaValueText}
      aria-description={ariaDescription}
    />
  );

  return (
    <div className={divClass}>
      <div className="a-timeline__time">
        <label htmlFor={id} className="a-timeline__current"></label>
        <span>/</span>
        <label htmlFor={id} className="a-timeline__duration"></label>
      </div>
      <div className="a-timeline__range">{inputElement}</div>
    </div>
  );
};

export { Timeline };
export type { TimelineProps };
