import * as React from 'react';

interface InputEmailProps {
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name      a-email-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of email input
 * @param   {string} id             Unique ID for email input
 * @param   {string} name           Unique name for email input
 * @param   {string} placeholder    Placeholder of email input
 * @param   {string} value          The value of email input
 * @param   {boolean} disabled      Weather the email input is disabled or not
 * @param   {boolean} readOnly      Weather the email input is readonly or not
 *
 * @description
 * representation of email input
 */

const InputEmail: React.FunctionComponent<InputEmailProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  disabled,
  readOnly,
}) => {
  const idInputEmail = `email-input-${id}`;

  return (
    <div className="a-email-input">
      {label && <label htmlFor={idInputEmail}>{label}</label>}
      <input
        type="email"
        id={idInputEmail}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  );
};

export { InputEmail };
export type { InputEmailProps };
