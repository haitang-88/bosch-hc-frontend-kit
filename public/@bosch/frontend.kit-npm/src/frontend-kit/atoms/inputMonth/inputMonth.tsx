import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputMonthProps {
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
 * @name      a-month-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of month input
 * @param   {string} id             Unique ID for month input
 * @param   {string} name           Unique name for month input
 * @param   {string} value          Initial value for month input
 * @param   {string} min            The earliest date to accept, format 2024-04
 * @param   {string} max            The latest date to accept, format 2024-04
 * @param   {number} step           specifies the granularity that the value must adhere to
 * @param   {boolean} disabled    Weather the month input is disabled or not
 * @param   {boolean} readOnly      Weather the month input is read only or not
 *
 * @description
 * representation of month input
 */

const InputMonth: React.FunctionComponent<InputMonthProps> = ({
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
  const idInputMonth = `month-input-${id}`;

  return (
    <div className="a-month-input">
      {label && <label htmlFor={idInputMonth}>{label}</label>}
      <input
        type="month"
        id={idInputMonth}
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
        className="a-month-input__button"
        disabled={disabled}
        aria-label="open dialog"
      >
        <Icon iconName="calendar-clock" />
      </button>
    </div>
  );
};

export { InputMonth };
export type { InputMonthProps };
