import * as React from 'react';
import classNames from 'classnames';

class ProgressIndicatorProps {
  isDisabled?: boolean;
  progress?: number;
  progressId?: string;
  type: string;
}

/**
 * @name        a-progress-indicator
 * @type        atom
 *
 * @param       isDisabled    Wether the progress indicator is disabled. Optional.
 * @param       progress      Progress of the indicator. Optional.
 * @param       progressId    Identifier for a determinate progress indicator. Optional.
 * @param       type          Type of indicator. Either determinate or indeterminate. Required.
 *
 * @description
 * representation of a progress indicator
 */

const ProgressIndicator: React.FunctionComponent<ProgressIndicatorProps> = ({
  isDisabled,
  progress,
  progressId,
  type,
}: ProgressIndicatorProps) => {
  const progressIndicatorTypeClass = classNames('a-progress-indicator', {
    [`-${type}`]: type,
    [`-disabled`]: isDisabled,
  });

  const progressValue: number = progress || null;

  return (
    <div className="a-progress-indicator-container">
      <progress
        className={progressIndicatorTypeClass}
        id={progressId}
        value={progressValue}
        max={100}
      />
      {type === 'determinate' ? (
        <div className="a-progress-indicator__inner-bar" />
      ) : (
        <div className="a-progress-indicator__anim-bar">
          <div className="a-progress-indicator__inner-bar" />
        </div>
      )}
    </div>
  );
};

export { ProgressIndicator };
export type { ProgressIndicatorProps };
