import * as React from 'react';
import classNames from 'classnames';

class IconProps {
  iconName: string;
  className?: string;
  isUiIcon?: boolean;
  style?: React.CSSProperties;
}

/**
 * @name    a-icon
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {iconName}  string        name of the font icon
 * @param   {className} string        additional class which can be passed in
 * @param   {isUiIcon}  boolean       whether or not it's an icon from the UI font or not, defaults to false
 * @param   {style}     CSSProperties optional inline styles for demonstrators
 * component, which uses the bosch icon font
 */
const Icon: React.FunctionComponent<IconProps> = ({
  iconName,
  className = '',
  isUiIcon = false,
  style,
}: IconProps) => {
  const iconClass: string = classNames('a-icon', {
    [className]: className,
    [`boschicon-bosch-ic-${iconName}`]: iconName && !isUiIcon,
    [`ui-ic-${iconName}`]: iconName && isUiIcon,
  });

  return <i className={iconClass} style={style} />;
};

export { Icon };
export type { IconProps };
