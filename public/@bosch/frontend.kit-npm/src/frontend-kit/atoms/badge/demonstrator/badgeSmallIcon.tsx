import * as React from 'react';
import { Button } from '../../button/button';
import { Badge, BadgeProps } from '../badge';

const BadgeSmallIconDemonstrator: React.FunctionComponent<BadgeProps> = ({
  label,
}) => {
  return (
    <>
      <style
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{
          __html: `
            .badge-small-icon-example {
              display: inline-block;
              position: relative;
            }
        
            .badge-small-icon-example .a-badge {
              position: absolute;
              top: 0.25rem;
              left: 2rem;
            }
          `,
        }}
      />
      <div className="badge-small-icon-example">
        <Button icon="emoji-happy" aria-label="emoji-happy" mode="integrated" />
        <Badge size="s" />
      </div>
    </>
  );
};

export default BadgeSmallIconDemonstrator;
