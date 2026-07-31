import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../icon/icon';

const PRIMARY_LINK_ICON_NAME = 'nosafe-lr-forward-small';

interface ATagProps {
  ariaLabel?: string;
  label?: string;
  href: string;
  target?: '_blank' | '_self';
  role?: React.AriaAttributes['aria-roledescription'];
  tabIndex?: number | null;
  icon?: string;
  iconPosition?: 'left' | 'right' | 'center';
  isUiIcon?: boolean;
}
interface LinkProps extends ATagProps {
  level?:
    | 'simple'
    | 'primary'
    | 'inline'
    | 'integrated'
    | 'button'
    | 'button-secondary'
    | 'button-integrated';
  disabled?: boolean;
  additionalClasses?: string[];
  isHighlighted?: boolean;
  size?: 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}

interface LabelProps {
  label: string;
  splitLabel: boolean;
  children?: React.ReactNode;
}

const Label: React.FunctionComponent<LabelProps> = ({
  label,
  splitLabel = false,
  children,
}) => {
  const lastWordOf = (text: string) => {
    if (!text) return '';
    const words = text.split(' ');
    return words[words.length - 1];
  };

  const allWordsButLastOf = (text: string) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.filter((word, index) => index !== words.length - 1).join(' ');
  };

  if (!splitLabel) {
    return <span>{label}</span>;
  }

  return (
    <>
      {/* 
        IMPORTANT:
        Keep the whitespace after allWordsButLastOf-Function and the closing </span>-Tag
      */}
      <span>{allWordsButLastOf(label)} </span>
      <span>
        {lastWordOf(label)}
        {children}
      </span>
    </>
  );
};

const ATag: React.FunctionComponent<ATagProps> = ({
  ariaLabel,
  href,
  target = null,
  role = null,
  tabIndex = null,
  label,
  icon = null,
  iconPosition = 'left',
  isUiIcon = false,
}) => {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target={target}
      role={role}
      tabIndex={typeof tabIndex === 'number' ? tabIndex : null}
    >
      {icon && iconPosition === 'left' && (
        <Icon iconName={icon} isUiIcon={isUiIcon} />
      )}
      {iconPosition !== 'center' && (
        <Label label={label} splitLabel={icon && iconPosition === 'right'}>
          {icon && iconPosition === 'right' && (
            <Icon iconName={icon} isUiIcon={isUiIcon} />
          )}
        </Label>
      )}
      {icon && iconPosition === 'center' && (
        <span>
          <Icon iconName={icon} isUiIcon={isUiIcon} />
        </span>
      )}
    </a>
  );
};

/**
 * @name    a-link
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} level        Type of Link (simple, inline, primary, button or button-secondary), defaults to 'simple'
 * @param   {string} ariaLabel    Variant's aria-label to display. Optional.
 * @param   {string} href         HREF-Attribute
 * @param   {string} label        Label to Display
 * @param   {string} role         optional WAI-ARIA role identifier
 * @param   {number} tabIndex     tabIndex attribute for the link element, defaults to null (no tabIndex override)
 * @param   {boolean} disabled    Whether or not the Link is disabled, defaults to false
 * @param   {string} target       Open Links in same or new window (_self or _blank), optional
 * @param   {string} icon         an icon name of an icon to add, optional
 * @param   {string} iconPosition 'left' or 'right', controls position, defaults to 'left'
 * @param   {boolean} isUiIcon    Whether or not the icon is a UI-Icon, defaults to false
 * @param   {boolean} isHighlighted Wheter or not the Link is bold, default to false.
 * @param   {string}  size        Size to display.

 * @description
 * representation of links
 */
const Link: React.FunctionComponent<LinkProps> = ({
  ariaLabel,
  level = 'simple',
  href,
  label,
  disabled = false,
  target = '_self',
  additionalClasses = [],
  role = null,
  tabIndex = null,
  icon = null,
  iconPosition = 'left',
  isUiIcon = false,
  isHighlighted = false,
  size,
}: LinkProps) => {
  const isInlineLink = level === 'inline';

  if (isInlineLink) {
    return (
      <ATag
        ariaLabel={ariaLabel}
        href={href}
        target={target}
        role={role}
        tabIndex={tabIndex}
        label={label}
      />
    );
  }

  const isPrimaryLink = level === 'primary';

  const linkClass = classNames(
    'a-link',
    {
      'a-link--button': level === 'button',
      'a-link--button-secondary': level === 'button-secondary',
      'a-link--button-integrated': level === 'button-integrated',
      'a-link--integrated': level === 'integrated',
      '-disabled': disabled,
      '-icon': icon || isPrimaryLink,
      highlight: isHighlighted,
      [`-size-${size}`]: size,
    },
    ...additionalClasses,
  );

  return (
    <div className={linkClass}>
      <ATag
        ariaLabel={ariaLabel}
        href={href}
        target={target}
        role={role}
        tabIndex={tabIndex}
        label={label}
        icon={isPrimaryLink ? PRIMARY_LINK_ICON_NAME : icon}
        iconPosition={isPrimaryLink ? 'right' : iconPosition}
        isUiIcon={isPrimaryLink ? true : isUiIcon}
      />
    </div>
  );
};

export { Link };
export type { LinkProps };
