import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../icon/icon';

class AnimatedIconProps {
  iconName: string;
  isUiIcon?: boolean;
  className?: string;
  loop?: boolean;
  autoPlay?: boolean;
}

/**
 * @name    a-animatedIcon
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {string}    iconName    name of the font icon
 * @param {boolean}   isUiIcon    whether or not it's an icon from the UI font or not, defaults to false
 * @param {string}    className   additional class which can be passed in
 * @param {boolean}   loop        whether or not the animation should loop, defaults to false
 * @param {boolean}   autoPlay    whether or not the animation should start automatically, defaults to false
 */
const AnimatedIcon: React.FunctionComponent<AnimatedIconProps> = ({
  iconName,
  isUiIcon = false,
  className,
  loop = false,
  autoPlay = false,
}: AnimatedIconProps) => {
  const iconClassName = classNames('a-animated-icon', {
    [className]: className,
  });

  return (
    <div
      className={iconClassName}
      data-loop={loop}
      data-auto-play={autoPlay}
      data-icon-name={iconName}
      data-ui-icon={isUiIcon}
    >
      <div className="a-animated-icon__placeholder">
        <Icon iconName={iconName} isUiIcon={isUiIcon} />
      </div>
      <div className="a-animated-icon__container" />
    </div>
  );
};

export { AnimatedIcon };
export type { AnimatedIconProps };
