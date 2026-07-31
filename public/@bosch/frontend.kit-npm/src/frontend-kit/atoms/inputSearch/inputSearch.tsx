import * as React from 'react';
import { Icon } from '../icon/icon';

interface InputSearchProps {
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hideSearchButton?: boolean;
}

/**
 * @name      a-search-input
 * @type      atom
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label          Label of search input
 * @param   {string} id             Unique ID for search input
 * @param   {string} name           Unique name for search input
 * @param   {string} placeholder    Placeholder of search input
 * @param   {string} value          The value of search input
 * @param   {boolean} disabled      Weather the search input is disabled or not
 * @param   {boolean} readOnly      Weather the search input is readonly or not
 * @param   {boolean} hideSearchButton Weather the search button at the input field is hidden or not
 *
 * @description
 * representation of search input
 */
const InputSearch: React.FunctionComponent<InputSearchProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  disabled,
  readOnly,
  hideSearchButton = false,
}) => {
  const idInputSearch = `search-input-${id}`;

  return (
    <div className="a-search-input">
      {label && <label htmlFor={idInputSearch}>{label}</label>}
      <input
        type="search"
        id={idInputSearch}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <button type="button" className="a-search-input__icon-close">
        <Icon isUiIcon iconName="close-small" />
      </button>
      {!hideSearchButton && (
        <button
          type="submit"
          className="a-search-input__icon-search"
          disabled={disabled || readOnly}
          aria-label="Search"
        >
          <Icon isUiIcon iconName="search" />
        </button>
      )}
    </div>
  );
};

export { InputSearch };
export type { InputSearchProps };
