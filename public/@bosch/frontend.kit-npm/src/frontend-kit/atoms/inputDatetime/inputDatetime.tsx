import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputDatetimeProps {
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
 * @name      a-datetime-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of datetime input
 * @param   {string} id             Unique ID for datetime input
 * @param   {string} name           Unique name for datetime input
 * @param   {string} value          Initial value for datetime input
 * @param   {string} min            The earliest datetime to accept, format 2024-04-01T08:30
 * @param   {string} max            The latest datetime to accept, format 2024-04-30T20:30
 * @param   {number} step           specifies the granularity that the value must adhere to
 * @param   {boolean} disabled      Weather the datetime input is disabled or not
 * @param   {boolean} readOnly      Weather the datetime input is read only or not
 *
 * @description
 * representation of datetime input
 */

const InputDatetime: React.FunctionComponent<InputDatetimeProps> = ({
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
  const idInputDatetime = `datetime-input-${id}`;

  return (
    <div className="a-datetime-input">
      {label && <label htmlFor={idInputDatetime}>{label}</label>}
      <input
        type="datetime-local"
        id={idInputDatetime}
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
        className="a-datetime-input__button"
        disabled={disabled}
        aria-label="open dialog"
      >
        <Icon iconName="calendar-clock" />
      </button>
    </div>
  );
};

export { InputDatetime };
export type { InputDatetimeProps };
