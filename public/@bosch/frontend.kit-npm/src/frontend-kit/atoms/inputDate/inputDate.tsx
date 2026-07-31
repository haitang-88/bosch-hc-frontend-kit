import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputDateProps {
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
 * @name      a-date-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of date input
 * @param   {string} id             Unique ID for date input
 * @param   {string} name           Unique name for date input
 * @param   {string} value          Initial value for date input
 * @param   {string} min            The earliest date to accept, format 2024-04-01
 * @param   {string} max            The latest date to accept, format 2024-04-30
 * @param   {number} step           specifies the granularity that the value must adhere to
 * @param   {boolean} isDisabled    Weather the date input is disabled or not
 * @param   {boolean} readOnly      Weather the date input is read only or not
 *
 * @description
 * representation of date input
 */

const InputDate: React.FunctionComponent<InputDateProps> = ({
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
  const idInputDate = `date-input-${id}`;

  return (
    <div className="a-date-input">
      {label && <label htmlFor={idInputDate}>{label}</label>}
      <input
        type="date"
        id={idInputDate}
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
        className="a-date-input__button"
        disabled={disabled}
        aria-label="open dialog"
      >
        <Icon iconName="calendar-clock" />
      </button>
    </div>
  );
};

export { InputDate };
export type { InputDateProps };
