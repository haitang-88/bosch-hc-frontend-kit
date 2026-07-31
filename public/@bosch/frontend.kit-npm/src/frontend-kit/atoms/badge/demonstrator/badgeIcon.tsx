import * as React from 'react';
import { Button } from '../../button/button';
import { Badge, BadgeProps } from '../badge';

const BadgeIconDemonstrator: React.FunctionComponent<BadgeProps> = ({
  label,
}) => {
  return (
    <>
      <style
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{
          __html: `
            .badge-icon-example {
              display: inline-block;
              position: relative;
            }
        
            .badge-icon-example .a-badge {
              position: absolute;
              top: 0.5rem;
              left: 1.5rem;
            }
          `,
        }}
      />
      <div className="badge-icon-example">
        <Button icon="emoji-happy" aria-label={label} mode="integrated" />
        <Badge label={label} />
      </div>
    </>
  );
};

export default BadgeIconDemonstrator;
