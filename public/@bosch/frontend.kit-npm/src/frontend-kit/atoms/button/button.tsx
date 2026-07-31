import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../icon/icon';

export const groups = ['brand', 'neutral', 'destructive'] as const;
export type groups = typeof groups[number]
export const groupTypes = ['primary', 'secondary', 'tertiary'] as const;
export type groupTypes = typeof groupTypes[number]
export type size = 'small' | 'medium';

interface BasicButton {
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  mode?: 'primary' | 'secondary' | 'tertiary' | 'integrated';
  size?: size;
  group?: groups;
  groupType?: groupTypes;
  isDisabled?: boolean;
  icon?: string;
  isUiIcon?: boolean;
  fixedWidth?: boolean;
  action?: string;
  additionalClasses?: string[];
  'aria-haspopup'?: React.AriaAttributes['aria-haspopup'];
  'aria-expanded'?: React.AriaAttributes['aria-expanded'];
  'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
  'aria-controls'?: React.AriaAttributes['aria-controls'];
  'aria-level'?: React.AriaAttributes['aria-level'];
  'aria-details'?: React.AriaAttributes['aria-details'];
  tabIndex?: number | null;
  children?: React.ReactNode;
  role?: React.AriaRole;
}

interface ButtonWithLabel extends BasicButton {
  'aria-label'?: never;
  label: string;
}

interface ButtonWithAriaLabel extends BasicButton {
  label?: never;
  'aria-label': React.AriaAttributes['aria-label'];
}

type ButtonProps = ButtonWithLabel | ButtonWithAriaLabel;

/**
 * @name    a-button
 * @type    atom
 * @author diconium Germany GmbH
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} type                 Type of Attribute (button, submit, reset)
 * @param   {string} mode                 Type of Button Definition (Primary, Secondary, Tertiary, Integrated or Inverted)
 * @param   {string} size                 Size of the button, default is medium, available sizes: small and medium
 * @param   {group} group                related button group (Brand, Neutral or Destructive)
 * @param   {groupType} groupType            Type regarding the group (Primary, Secondary or Tertiary)
 * @param   {string} label                Label to Display
 * @param   {boolean} isDisabled          Disable or not the Button
 * @param   {string} icon                 Icon to Display
 * @param   {boolean} isUiIcon            whether or not it's an icon from the UI font or not
 * @param   {boolean} fixedWidth          Fixed or not fixed width
 * @param   {string} action               Name of the action this button should be used for
 * @param   {string[]} additionalClasses  Additional css classes
 * @param   {string} ariaHaspopup         Accessibility role. Used for popup context menu or sub-level menu.
 * @param   {string} ariaExpanded         Accessibility expanded. Used for toggle button.
 * @param   {string} ariaLabel            Accessibility label. Used if label doesn't exist
 * @param   {string} ariaLabelledBy       Accessibility label. Used if label does exist.
 * @param   {number} tabIndex             Index of sequential keyboard navigation
 *
 * @description
 * representation of buttons
 */

const Button: React.FunctionComponent<ButtonProps> = ({
  id,
  type = 'button',
  mode,
  size = 'medium',
  group = '',
  groupType = '',
  isDisabled,
  label,
  icon,
  isUiIcon,
  fixedWidth,
  action = null,
  additionalClasses = [],
  'aria-haspopup': ariaHaspopup = null,
  'aria-label': ariaLabel = null,
  'aria-labelledby': ariaLabelledBy = null,
  'aria-expanded': ariaExpanded = null,
  'aria-level': ariaLevel = null,
  'aria-controls': ariaControls = null,
  'aria-details': ariaDetails = null,
  tabIndex = null,
  children = null,
  role = null,
}) => {
  const buttonClass = classNames(
    'a-button',
    {
      [`a-button--${mode}`]: mode && !group,
      [`a-button--${group}-${groupType}`]: group && !mode,
      '-fixed': fixedWidth,
      '-without-icon': label && !icon && mode && !group,
      '-without-label': icon && !label && mode && !group,
      '-small': size === 'small',
    },
    ...additionalClasses,
  );

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      id={id}
      type={type}
      className={buttonClass}
      disabled={isDisabled}
      data-frok-action={action}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-level={ariaLevel}
      aria-controls={ariaControls}
      aria-details={ariaDetails}
      role={role}
      tabIndex={typeof tabIndex === 'number' ? tabIndex : null}
    >
      {icon && !children && (
        <Icon iconName={icon} className="a-button__icon" isUiIcon={isUiIcon} />
      )}
      {label && !children && <span className="a-button__label">{label}</span>}
      {/* if child nodes a provided the inner markup rendering of the button will not run */}
      {children && children}
    </button>
  );
};

export { Button };
export type { ButtonProps };
