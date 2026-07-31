/* eslint-disable import/prefer-default-export */
import * as React from 'react';

interface LegendProps {
  label: string;
}

/**
 * @name      a-lagend
 * @type      atom
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label                Label to Display
 *
 * @description
 * representation of legends
 */

const Legend: React.FunctionComponent<LegendProps> = ({ label }) => {
  return <legend className="a-legend">{label}</legend>;
};

export { Legend };
export type { LegendProps };
