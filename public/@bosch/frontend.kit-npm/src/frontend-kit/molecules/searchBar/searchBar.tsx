/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Button } from '../../atoms/button/button';
import {
  InputSearch,
  InputSearchProps,
} from '../../atoms/inputSearch/inputSearch';

/**
 * @name      m-search-bar
 * @type      molecule
 * @copyright Robert Bosch GmbH
 *
 * @description
 * representation of search bar
 */

const SearchBar: React.FunctionComponent<InputSearchProps> = ({
  id,
  name,
  placeholder,
  label,
  disabled,
  readOnly,
}) => {
  return (
    <div className="m-search-bar">
      <InputSearch
        id={id}
        name={name}
        placeholder={placeholder}
        label={label}
        disabled={disabled}
        readOnly={readOnly}
        hideSearchButton
      />
      <Button
        mode="primary"
        additionalClasses={['m-search-bar__icon-search']}
        label="Search"
        icon="search"
        isDisabled={disabled || readOnly}
      />
    </div>
  );
};

export { SearchBar };
