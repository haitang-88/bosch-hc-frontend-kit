import * as React from 'react';
import {
  SearchSuggestions,
  Suggestion,
} from '../../atoms/searchSuggestions/searchSuggestions';
import { InputSearch } from '../../atoms/inputSearch/inputSearch';

interface SearchFormProps {
  id: string;
  name?: string;
  placeholder?: string;
  suggestions?: Suggestion[];
}

const SearchForm: React.FunctionComponent<SearchFormProps> = ({
  id,
  name,
  placeholder,
  suggestions = [],
}) => (
  <form className="m-search-form" autoComplete="off">
    <InputSearch id={id} name={name} placeholder={placeholder} />
    {suggestions.length > 0 && <SearchSuggestions suggestions={suggestions} tabIndex={-1} />}
  </form>
);

export { SearchForm };
export type { SearchFormProps };
