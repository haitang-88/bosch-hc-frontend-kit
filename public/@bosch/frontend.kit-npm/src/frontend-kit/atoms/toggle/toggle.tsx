/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import classNames from 'classnames';

interface ToggleProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}

/**
 * @name        a-toggle
 * @type        atom
 * @author      Experience One AG
 * @copyright   Robert Bosch GmbH
 *
 * @param {number}  id          ID of Toggle-Component
 * @param {boolean} disabled    Disable Toggle-Component
 * @param {boolean} checked     Set Checked State
 * @param {string}  leftLabel   Text shown on Left Label
 * @param {string}  rightLabel  Text shown on Right Label
 *
 * @description
 * representation of toggle elements
 */

const Toggle: React.FunctionComponent<ToggleProps> = ({
  id,
  disabled,
  checked,
  leftLabel,
  rightLabel,
}: ToggleProps) => {
  const idToggleInput = `toggle-input-${id}`;

  const toggleLabelClass = classNames('a-toggle__label', {
    [`a-toggle__label--left`]: leftLabel,
    [`a-toggle__label--right`]: rightLabel,
  });

  return (
    <div className="a-toggle">
      <label>
        <input
          id={idToggleInput}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
        />
        {leftLabel && <span className={toggleLabelClass}>{leftLabel}</span>}
        <div className="a-toggle__trigger" />
        {rightLabel && <span className={toggleLabelClass}>{rightLabel}</span>}
      </label>
    </div>
  );
};

export { Toggle };
export type { ToggleProps };
