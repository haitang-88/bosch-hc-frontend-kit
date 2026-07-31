// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Tile, TileInteractiveProps } from '../tile';
import { Image, ImageProps } from '../../image/image';
import { Icon } from '../../icon/icon';

interface TileInteractiveDemonstratorProps extends TileInteractiveProps {
  image?: ImageProps;
}

const TileInteractiveDemonstrator: React.FunctionComponent<
  TileInteractiveDemonstratorProps
> = ({ name, variant, image, spacing }) => {
  return (
    <Tile name={name} variant={variant} spacing={spacing} isInteractive={true}>
      {image && (
        <Image
          srcSet={image.srcSet}
          altText={image.altText}
          caption={image.caption}
          defaultSrc={image.defaultSrc}
        />
      )}
      <div className="a-text">
        <span
          className="-size-s"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Category
        </span>
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
    </Tile>
  );
};

export default TileInteractiveDemonstrator;
