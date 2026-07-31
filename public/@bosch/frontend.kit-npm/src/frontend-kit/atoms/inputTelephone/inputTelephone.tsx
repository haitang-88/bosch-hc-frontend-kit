import * as React from 'react';

interface InputTelephoneProps {
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name      a-telephone-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of telephone input
 * @param   {string} id             Unique ID for telephone input
 * @param   {string} name           Unique name for telephone input
 * @param   {string} placeholder    Placeholder of telephone input
 * @param   {string} value          The value of telephone input
 * @param   {boolean} disabled      Weather the telephone input is disabled or not
 * @param   {boolean} readOnly      Weather the telephone input is readonly or not
 *
 * @description
 * representation of telephone input
 */

const InputTelephone: React.FunctionComponent<InputTelephoneProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  disabled,
  readOnly,
}) => {
  const idInputTelephone = `telephone-input-${id}`;

  return (
    <div className="a-telephone-input">
      {label && <label htmlFor={idInputTelephone}>{label}</label>}
      <input
        type="tel"
        id={idInputTelephone}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        readOnly={readOnly}
      />
    </div>
  );
};

export { InputTelephone };
export type { InputTelephoneProps };
