/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import classNames from 'classnames';

class SliderProps {
  additionalClassName?: string;
  description: string;
  disabled?: boolean;
  id: string;
  min: number;
  max: number;
  initialValue: number;
  step?: number | string;
  labelLeft?: string;
  labelRight?: string;
  labelTop?: string;
  tooltip?: boolean;
  tooltipType?: string;
  tooltipUnit?: string;
  labelsOnTop?: boolean;
  isVertical?: boolean;
  ariaValueText?: string;
  ariaDescription?: string;
}

/**
 * @name        a-slider
 * @type        atom
 *
 * @param       additionalClassName Additional classname for slider. Optional.
 * @param       description         Slider's description, used for accessibility attributes
 * @param       disabled            Whether or not the slider is disabled
 * @param       id                  Unique ID for the slider
 * @param       min                 Minimum value of slider
 * @param       max                 Maximum value of slider
 * @param       initialValue        Initial value of slider
 * @param       step                The interval the value moves on every step
 * @param       labelLeft           Label text at the left sight of the slider
 * @param       labelRight          Label text at the right side of the textfield
 * @param       tooltip             Whether a tooltip with the value is displayed on click of the thumb
 * @param       tooltipType         Can be absolute or relative. Relative by default
 * @param       tooltipUnit         Unit symbol, displayed with absolute value
 * @param       labelsOnTop         if true, labels will be displayed on top instead of
 *                                  to the sides, optional, defaults to false
 * @param       isVertical          Whether the slider is vertical or not. Horizontal by default.
 * @param       ariaValueText       Aria value text of slider.
 * @param       ariaDescription     Aria description of slider.
 * @param       ariaValueNow        Aria value now of slider.
 *
 * @description
 * representation of a slider
 */

const Slider: React.FunctionComponent<SliderProps> = ({
  additionalClassName,
  description,
  disabled,
  id,
  min = 0,
  max = 100,
  initialValue,
  step = 1 || 'any',
  labelLeft,
  labelRight,
  labelTop,
  tooltip,
  tooltipType,
  tooltipUnit,
  labelsOnTop = false,
  isVertical,
  ariaValueText,
  ariaDescription = 'here goes an extensive description text',
}: SliderProps) => {
  const divClass = classNames(
    'a-slider',
    {
      'a-slider--labels-on-top': labelsOnTop,
      'a-slider--vertical': isVertical,
      'a-slider--unitless': tooltipType === 'absolute' && !tooltipUnit,
    },
    additionalClassName,
  );

  let resultValue;
  if (tooltipType === 'absolute') {
    if (tooltipUnit) {
      resultValue = `${initialValue}${tooltipUnit}`;
    } else {
      resultValue = `${initialValue}`;
    }
  } else {
    resultValue = `${initialValue} %`;
  }

  const inputElement = (
    <input
      tabIndex={0}
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      defaultValue={initialValue}
      disabled={disabled}
      aria-labelledby={labelLeft || labelRight || labelTop ? description : null}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={initialValue}
      aria-orientation={isVertical ? 'vertical' : 'horizontal'}
      aria-label={labelLeft || labelRight || labelTop ? null : description}
      aria-valuetext={ariaValueText}
      aria-description={ariaDescription}
    />
  );

  return (
    <div className={divClass}>
      {labelLeft && <label htmlFor={id}>{labelLeft}</label>}
      {tooltip && (
        <div>
          <span
            className="a-tooltip -floating-shadow-s"
            tooltip-type={tooltipType === 'absolute' ? 'absolute' : 'relative'}
            tooltip-unit={tooltipUnit}
            aria-haspopup={false}
          >
            {resultValue}
          </span>
          {inputElement}
          {labelTop && <label htmlFor={id}>{labelTop}</label>}
        </div>
      )}
      {!tooltip && inputElement}
      {labelRight && <label htmlFor={id}>{labelRight}</label>}
    </div>
  );
};

export { Slider };
export type { SliderProps };
