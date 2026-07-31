/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../components';

interface DetailsProps {
  summary: string;
  content?: string;
  isSmall?: boolean;
  children?: React.ReactNode;
}

/**
 * @name      a-details
 * @type      atom
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} summary        Summary to display.
 * @param   {string} content        The content to disclose.
 * @param   {boolean} isSmall       Wether or not the details element is small. Optional.
 *
 * @description
 * representation of details
 */

const Details: React.FunctionComponent<DetailsProps> = ({
  summary,
  content,
  isSmall,
  children,
}) => {
  const detailsClass = classNames('a-details', {
    'a-details--small': isSmall,
  });

  return (
    <details className={detailsClass}>
      <summary className="highlight">
        <Icon iconName="down" />
        {summary}
      </summary>
      {children && children}
      {!children && <p>{content}</p>}
    </details>
  );
};

export { Details };
export type { DetailsProps };
