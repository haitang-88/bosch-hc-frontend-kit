import classNames from 'classnames';
import * as React from 'react';

interface BadgeProps {
  label?: string;
  labelLeft?: boolean;
  type?:
    | 'success'
    | 'warning'
    | 'error'
    | 'emphasis-00'
    | 'emphasis-01'
    | 'emphasis-02'
    | 'emphasis-03'
    | 'emphasis-04';
  size?: 's' | 'm' | 'l' | 'xl';
  singleChar?: boolean;
}

/**
 * @name    a-badge
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string}  type                 Type of badge (neutral, success, warning, error)
 * @param   {string}  label                Label to Display
 * @param   {boolean}  labelLeft           Label position. Just relevant for size 's'. Default: label is positioned after badge. If true, label is positioned before badge.
 * @param   {string}  size                 Size of badge (s, m, l, xl) - if not set, m is default
 * @param   {boolean}  singleChar          Defines a special padding to ensure a circle when content is any single char
 *
 * @description
 * representation of badges
 */

const Badge: React.FunctionComponent<BadgeProps> = ({
  label,
  labelLeft,
  type,
  size,
  singleChar,
}) => {
  const badgeClass = classNames('a-badge', {
    [`-${type}`]: type,
    [`-${size}`]: size,
    [`-single-char`]: singleChar,
    [`-left`]: size === 's' && labelLeft,
  });

  if (size === 's') {
    return (
      <div className={badgeClass} role="status" aria-live="off">
        <span className="a-badge-dot" />
        {typeof label !== 'undefined' && (
          <span className="a-badge-label">{label}</span>
        )}
      </div>
    );
  }

  return (
    <div
      className={badgeClass}
      role="status"
      aria-live="off"
      data-count={typeof label !== 'undefined' ? label.length : 0}
    >
      {label}
    </div>
  );
};

export { Badge };
export type { BadgeProps };
