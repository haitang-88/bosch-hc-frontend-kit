import * as React from 'react';
import BoxComponent from './index';
import classNames from 'classnames';

/**
 * properties for a box
 */
class BoxProps {
  // a CSS width property string
  width?: string;
  // a CSS height property string
  height?: string;
  // if true, render a modal
  modal?: boolean;
  // the child nodes of the component
  children?: React.ReactNode;
  // only for modals - an optional ID
  modalId?: string;
  // wether the box has a floating shadow or not
  hasFloatingShadow?: boolean;
  // optional class to be added to the box container
  additionalClasses?: string[];
}

const Box: React.FunctionComponent<BoxProps> = ({
  modal = false,
  width = 'auto',
  height = 'auto',
  children,
  modalId,
  hasFloatingShadow = true,
  additionalClasses = [],
}) => {
  const needsStyleAttribute = width !== 'auto' || height !== 'auto';
  const styleAttribute = {
    width,
    height,
  };

  let boxClass = classNames(
    'a-box',
    {
      '-floating-shadow-s': hasFloatingShadow,
      '-primary': !hasFloatingShadow,
    },
    ...additionalClasses,
  );

  if (modal) {
    return (
      <div
        className="a-box--modal"
        id={modalId ? BoxComponent.modalId(modalId) : null}
      >
        <div
          className={boxClass}
          style={needsStyleAttribute ? styleAttribute : null}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div
      className={boxClass}
      style={needsStyleAttribute ? styleAttribute : null}
    >
      {children}
    </div>
  );
};

export { Box };
export type { BoxProps };
