// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Tile, TileStaticProps } from '../tile';
import { Icon } from '../../icon/icon';
import { Chip } from '../../chip/chip';
import { Button } from '../../button/button';

const TileDemonstrator: React.FunctionComponent<TileStaticProps> = ({
  name,
  variant,
  spacing,
}) => {
  return (
    <Tile name={name} variant={variant} spacing={spacing}>
      <Chip name={name} label="Label" iconName="emoji-happy"></Chip>
      <div className="a-text" style={{ marginBlockStart: '1rem' }}>
        <h3
          className={
            spacing === 'small' || spacing === 'flat' ? '-size-l' : '-size-xl'
          }
          style={{ marginBottom: '0.5rem', marginTop: '0' }}
        >
          Headline
          <Icon
            isUiIcon
            iconName="inline-right-bold"
            style={{
              marginLeft: '0.5rem',
              fontSize: '1.5rem',
              verticalAlign: 'baseline',
            }}
          />
        </h3>
        <p className="-size-m" style={{ margin: '0' }}>
          Subheadline
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          marginBlockStart: '1rem',
        }}
      >
        <Button
          label="Label"
          group="brand"
          groupType="primary"
          fixedWidth
        ></Button>
        <Button
          label="Label"
          group="brand"
          groupType="secondary"
          fixedWidth
        ></Button>
      </div>
    </Tile>
  );
};

export default TileDemonstrator;
