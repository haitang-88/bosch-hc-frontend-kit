import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputPasswordProps {
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name      a-password-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of password input
 * @param   {string} id             Unique ID for password input
 * @param   {string} name           Unique name for password input
 * @param   {string} placeholder    Placeholder of password input
 * @param   {string} value          The value of password input
 * @param   {boolean} disabled      Weather the password input is disabled or not
 * @param   {boolean} readOnly      Weather the password input is readonly or not
 *
 * @description
 * representation of password input
 */

const InputPassword: React.FunctionComponent<InputPasswordProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  disabled,
  readOnly,
}) => {
  const idInputPassword = `password-input-${id}`;

  return (
    <div className="a-password-input">
      {label && <label htmlFor={idInputPassword}>{label}</label>}
      <input
        type="password"
        id={idInputPassword}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <button
        type="button"
        className="a-password-input__icon-password"
        disabled={disabled}
        aria-label="Show password"
      >
        <Icon isUiIcon iconName="watch-on" />
      </button>
    </div>
  );
};

export { InputPassword };
export type { InputPasswordProps };
