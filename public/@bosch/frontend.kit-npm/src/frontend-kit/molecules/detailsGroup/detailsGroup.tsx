/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Details } from '../../components';

interface DetailsGroupProps {
  summary: string;
  content: string;
  isSmall?: boolean;
}

/**
 * @name      m-details-group
 * @type      molecule
 * @author    diconium digital solutions GmbH
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} summary        Summary to display.
 * @param   {string} content        The content to disclose.
 * @param   {boolean} isSmall       Wether or not the details element is small. Optional.
 *
 * @description
 * representation of details
 */

const DetailsGroup: React.FunctionComponent<DetailsGroupProps> = ({
  summary,
  content,
  isSmall = false,
}) => {
  return (
    <div className="m-details-group">
      <Details summary={summary} content={content} isSmall={isSmall} />
      <Details summary={summary} content={content} isSmall={isSmall} />
      <Details summary={summary} content={content} isSmall={isSmall} />
    </div>
  );
};

export { DetailsGroup };
export type { DetailsGroupProps };
