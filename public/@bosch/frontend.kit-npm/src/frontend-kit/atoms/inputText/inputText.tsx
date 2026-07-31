import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputTextProps {
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  isIntegrated?: boolean;
}

/**
 * @name        a-text-field
 * @type        atom
 * @copyright   Robert Bosch GmbH
 *
 * @param   {string} label          Label of text input
 * @param   {string} id             Unique ID for text input
 * @param   {string} name           Unique name for text input
 * @param   {string} placeholder    Placeholder of text input
 * @param   {string} value          The value of text input
 * @param   {boolean} disabled      Weather the text input is disabled or not
 * @param   {boolean} readOnly      Weather the text input is readonly or not
 * @param   {boolean} isIntegrated  Sets the text input to the integrated mode
 *
 * @description
 * representation of text input
 */

const InputText: React.FunctionComponent<InputTextProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  disabled,
  readOnly,
  isIntegrated = false,
}: InputTextProps) => {
  const divClass = classNames('a-text-field', {
    'a-text-field--integrated': isIntegrated,
  });
  const idInputText = `text-input-${id}`;

  return (
    <div className={divClass}>
      {label && <label htmlFor={idInputText}>{label}</label>}
      <input
        type="text"
        id={idInputText}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      {isIntegrated && (
        <>
          <button
            type="button"
            className="a-text-field__icon-edit"
            disabled={disabled}
            aria-label="LoremIpsum"
          >
            <Icon iconName="edit" />
          </button>
          <button
            type="button"
            className="a-text-field__icon-close"
            aria-label="LoremIpsum"
          >
            <Icon isUiIcon iconName="close-small" />
          </button>
        </>
      )}
    </div>
  );
};

export { InputText };
export type { InputTextProps };
