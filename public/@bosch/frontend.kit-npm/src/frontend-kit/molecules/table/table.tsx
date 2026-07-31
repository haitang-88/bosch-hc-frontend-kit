import * as React from 'react';
import { Icon } from '../../atoms/icon/icon';
import { Link } from '../../components';

interface TableProps {
  // boolean to decide if static highlighted row is needed
  highlightedRow?: boolean;
  // optional caption
  caption?: string;
}

/**
 * @name    m-table
 * @type    molecule
 *
 * @description
 * This is the whole table molecule
 */

/**
 * @name renderHeader
 * @returns header row in bold
 */
function renderHeader() {
  return (
    <tr>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
      <th>Header</th>
    </tr>
  );
}

function renderRow() {
  return (
    <>
      <td>Neutral</td>
      <td>Neutral</td>
      <td className="-with-icon">
        <Icon iconName="emoji-happy" />
      </td>
      <td>Neutral</td>
      <td>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link label="Link Label" href="#" level="primary" />
      </td>
    </>
  );
}

const Table: React.FunctionComponent<TableProps> = ({
  highlightedRow = false,
  caption,
}: TableProps) => {
  return (
    <table className="m-table" aria-label="Highlights">
      {caption && <caption>{caption}</caption>}
      <thead>{renderHeader()}</thead>
      <tbody>
        <tr>{renderRow()}</tr>
        <tr>{renderRow()}</tr>
        <tr className={highlightedRow ? '-secondary' : ''}>{renderRow()}</tr>
        <tr>{renderRow()}</tr>
      </tbody>
    </table>
  );
};

export { Table };
export type { TableProps };
