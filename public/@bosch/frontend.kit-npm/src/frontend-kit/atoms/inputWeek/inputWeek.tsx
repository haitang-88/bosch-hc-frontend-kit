import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputWeekProps {
  label?: string;
  id: string;
  name: string;
  value?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name      a-week-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of week input
 * @param   {string} id             Unique ID for week input
 * @param   {string} name           Unique name for week input
 * @param   {string} value          Initial value for week input
 * @param   {string} min            The earliest week to accept, format 2024-W01
 * @param   {string} max            The latest week to accept, format 2024-W04
 * @param   {number} step           specifies the granularity that the value must adhere to
 * @param   {boolean} disabled    Weather the week input is disabled or not
 * @param   {boolean} readOnly      Weather the week input is read only or not
 *
 * @description
 * representation of week input
 */

const InputWeek: React.FunctionComponent<InputWeekProps> = ({
  label,
  id,
  name,
  value,
  min,
  max,
  step,
  disabled,
  readOnly,
}) => {
  const idInputWeek = `week-input-${id}`;

  return (
    <div className="a-week-input">
      {label && <label htmlFor={idInputWeek}>{label}</label>}
      <input
        type="week"
        id={idInputWeek}
        name={name}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        readOnly={readOnly}
      />
      <button
        type="button"
        className="a-week-input__button"
        disabled={disabled}
        aria-label="open dialog"
      >
        <Icon iconName="calendar-clock" />
      </button>
    </div>
  );
};

export { InputWeek };
export type { InputWeekProps };
