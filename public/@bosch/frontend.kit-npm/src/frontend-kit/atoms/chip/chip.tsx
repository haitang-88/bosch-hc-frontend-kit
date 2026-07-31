import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../../components';

class ChipProps {
  name: string;
  label: string;
  disabled?: boolean;
  buttonClose?: boolean;
  image?: string;
  iconName?: string;
  fixedWidth?: boolean;
  selected?: boolean;
  dragged?: boolean;
  buttonPair?: boolean;
}

/**
 * @name    a-chip
 * @type    atom
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 * @param   {string}  name          Name of Chip
 * @param   {string}  label         Label of Chip
 * @param   {boolean} disabled      Disable Chip. Optional.
 * @param   {boolean} buttonClose   Show Close Button. Optional.
 * @param   {string}  image         URL of Image to show. Optional.
 * @param   {string}  iconName      Chip with icon. Optional.
 * @param   {boolean} fixedWidth    Set Chip to have a fixed Width. Optional.
 * @param   {boolean} selected      Set Chip to selected State. Optional.
 * @param   {boolean} dragged       Set Chip to dragged State. Optional.
 * @param   {boolean} buttonPair    Render two Chips (for Preview-Purposes only). Optional.
 * @description
 * representation of chip elements
 */
const Chip: React.FunctionComponent<ChipProps> = ({
  name,
  label,
  disabled,
  buttonClose,
  image,
  iconName,
  fixedWidth,
  selected,
  dragged,
  buttonPair,
}: ChipProps) => {
  const elementClass = classNames('a-chip', {
    'a-chip--fixed': fixedWidth,
    '-disabled': disabled,
    '-btnClose': buttonClose,
    '-image': image,
    '-selected': selected,
    '-dragged': dragged,
    '-icon': iconName,
  });

  const style = {
    backgroundImage: `url('${image}')`,
  };

  const imageMarkup = (
    <div className="a-chip__image" style={image ? style : null} />
  );
  const chipLabelId = `chip-label-id-${name.replace(' ', '-')}`;
  const labelMarkup = (
    <span id={chipLabelId} className="a-chip__label">
      {label}
    </span>
  );

  const closeButtonMarkup = (
    <Icon
      isUiIcon
      className="a-chip__close"
      iconName="close-small"
    />
  );

  let imageLabelMarkup;
  if (image && fixedWidth) {
    imageLabelMarkup = (
      <div className="fixed-width-image-label-group">
        {imageMarkup}
        {labelMarkup}
        {buttonClose && closeButtonMarkup}
      </div>
    );
  } else {
    imageLabelMarkup = (
      <>
        {image && imageMarkup}
        {labelMarkup}
        {buttonClose && closeButtonMarkup}
      </>
    );
  }

  const chipMarkup = (
    <div
      tabIndex={0}
      className={elementClass}
      role="button"
      aria-labelledby={chipLabelId}
      aria-disabled={disabled}
    >
      {iconName && (
        <Icon
          iconName={iconName}
          className="a-chip__icon"
        />
      )}
      {imageLabelMarkup}
    </div>
  );

  const buttonPairMarkup = (
    <>
      <div
        tabIndex={0}
        className={elementClass}
        role="button"
        aria-labelledby={chipLabelId}
        aria-disabled={disabled}
      >
        <span id={chipLabelId} className="a-chip__label">
          {label}
        </span>
      </div>
      <div
        tabIndex={0}
        className={elementClass}
        role="button"
        aria-labelledby="chip-label-id-two-chips-02"
        aria-disabled={disabled}
      >
        <span id="chip-label-id-two-chips-02" className="a-chip__label">
          {label}
        </span>
      </div>
    </>
  );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{!buttonPair ? chipMarkup : buttonPairMarkup}</>;
};

export { Chip };
export type { ChipProps };
