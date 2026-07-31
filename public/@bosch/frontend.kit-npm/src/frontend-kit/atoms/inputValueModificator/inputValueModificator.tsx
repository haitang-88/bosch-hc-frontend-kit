import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputValueModificatorProps {
  label?: string;
  id: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * @name        a-value-modificator
 * @type        atom
 * @copyright   Robert Bosch GmbH
 *
 * @param   {string} label          Label of value modificator
 * @param   {string} id             Unique ID for value modificator
 * @param   {string} name           Unique name for value modificator
 * @param   {string} value          The value of value modificator
 * @param   {boolean} disabled      Weather the value modificator is disabled or not
 * @param   {boolean} readOnly      Weather the value modificator is readonly or not

 * @description
 * representation of value modificator
 */

const InputValueModificator: React.FunctionComponent<
  InputValueModificatorProps
> = ({
  label,
  id,
  name,
  value,
  disabled,
  readOnly,
}: InputValueModificatorProps) => {
  const idInputValueModificator = `value-modificator-${id}`;

  return (
    <div className="a-value-modificator">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="number"
        id={idInputValueModificator}
        name={name}
        defaultValue={value}
        min="0"
        max="100"
        step="5"
        disabled={disabled}
        readOnly={readOnly}
      />
      <button
        type="button"
        className="a-value-modificator__minus-button"
        disabled={disabled || readOnly}
        aria-label="Minus"
      >
        <Icon iconName="less-minimize" />
      </button>
      <button
        type="button"
        className="a-value-modificator__plus-button"
        disabled={disabled || readOnly}
        aria-label="Plus"
      >
        <Icon iconName="add" />
      </button>
    </div>
  );
};

export { InputValueModificator };
export type { InputValueModificatorProps };
