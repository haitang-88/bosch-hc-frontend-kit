import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputTimeProps {
  label?: string;
  id: string;
  name: string;
  value?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name      a-time-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of time input
 * @param   {string} id             Unique ID for time input
 * @param   {string} name           Unique name for time input
 * @param   {string} value          Initial value for time input
 * @param   {string} min            The earliest time to accept, format 09:00
 * @param   {string} max            The latest time to accept, format 18:00
 * @param   {boolean} disabled    Weather the time input is disabled or not
 * @param   {boolean} readOnly      Weather the time input is read only or not
 *
 * @description
 * representation of time input
 */

const InputTime: React.FunctionComponent<InputTimeProps> = ({
  label,
  id,
  name,
  value,
  min,
  max,
  disabled,
  readOnly,
}) => {
  const idInputTime = `time-input-${id}`;

  return (
    <div className="a-time-input">
      {label && <label htmlFor={idInputTime}>{label}</label>}
      <input
        type="time"
        id={idInputTime}
        name={name}
        defaultValue={value}
        min={min}
        max={max}
        disabled={disabled}
        readOnly={readOnly}
      />
      <button
        type="button"
        className="a-time-input__button"
        disabled={disabled}
        aria-label="open dialog"
      >
        <Icon iconName="calendar-clock" />
      </button>
    </div>
  );
};

export { InputTime };
export type { InputTimeProps };
