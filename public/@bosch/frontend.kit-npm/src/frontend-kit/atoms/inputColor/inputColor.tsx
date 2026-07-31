/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import classNames from 'classnames';

interface InputColorProps {
  label?: string;
  id: string;
  name: string;
  isDisabled?: boolean;
}

/**
 * @name      a-color-input
 * @type      atom
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label             Label to Display
 * @param   {string} id                Unique ID for each color input
 * @param   {string} name              Unique name attribute for each color input
 * @param   {boolean} isDisabled       Wether or not the color input is disabled
 *
 * @description
 * representation of color input
 */

const InputColor: React.FunctionComponent<InputColorProps> = ({
  label,
  id,
  name,
  isDisabled,
}) => {
  const idColorInput = `color-input-${id}`;

  const colorInputClass = classNames('a-color-input', {
    'a-color-input--disabled': isDisabled,
  });

  return (
    <label htmlFor={idColorInput} className={colorInputClass}>
      {label && <span className="a-color-input__label">{label}</span>}
      <input type="color" id={idColorInput} name={name} disabled={isDisabled} />
    </label>
  );
};

export { InputColor };
export type { InputColorProps };
