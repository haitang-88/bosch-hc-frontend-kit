/* eslint-disable import/prefer-default-export */
import * as React from 'react';

interface MeterProps {
  id: string;
  label: string;
  innerText?: string;
  optimum?: number;
  value: number;
}

/**
 * @name      a-meter
 * @type      meter
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} id           Unique ID for each meter.
 * @param   {string} label        The label of the meter.
 * @param   {string} innerText    The inner text of the meter. Optional.
 * @param   {number} optimum      The desired optimum value. Optional.
 * @param   {number} value        The current value.
 *
 * @description
 * representation of meter
 */

const Meter: React.FunctionComponent<MeterProps> = ({
  id,
  label,
  innerText,
  optimum,
  value,
}) => {
  const idMeter = `meter-${id}`;

  const MIN_VALUE = 0;
  const MAX_VALUE = 100;
  const LOW_VALUE = 33;
  const HIGH_VALUE = 66;
  const ARIA_VALUE_MIN = 0;
  const ARIA_VALUE_MAX = 100;

  return (
    <div className="a-meter">
      <label htmlFor={idMeter}>{label}</label>
      <meter
        id={idMeter}
        min={MIN_VALUE}
        max={MAX_VALUE}
        low={LOW_VALUE}
        high={HIGH_VALUE}
        optimum={optimum}
        value={value}
        aria-valuenow={value}
        aria-valuemin={ARIA_VALUE_MIN}
        aria-valuemax={ARIA_VALUE_MAX}
        aria-labelledby={innerText}
      >
        {innerText}
      </meter>
    </div>
  );
};

export { Meter };
export type { MeterProps };
