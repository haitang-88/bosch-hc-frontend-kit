import * as React from 'react';
import { AnimatedIcon } from '../animatedIcon';
import { Button } from '../../button/button';

interface AnimatedIconDemonstratorProps {
  iconName: string;
  loop?: boolean;
  autoPlay?: boolean;
}

const AnimatedIconDemonstrator: React.FunctionComponent<
  AnimatedIconDemonstratorProps
> = ({ iconName, loop, autoPlay }) => {
  return (
    <div>
      <Button label="test" icon={iconName} mode="primary">
        <AnimatedIcon
          className="a-button__icon"
          iconName={iconName}
          loop={loop}
          autoPlay={autoPlay}
        />
        <span className="a-button__label">Button label</span>
      </Button>
    </div>
  );
};

export default AnimatedIconDemonstrator;
