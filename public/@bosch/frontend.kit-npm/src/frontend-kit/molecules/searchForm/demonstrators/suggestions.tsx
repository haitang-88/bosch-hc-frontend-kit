import * as React from 'react';
import { SearchForm, SearchFormProps } from '../searchForm';

const SearchAutoSuggestionsDemonstrator: React.FunctionComponent<
  SearchFormProps
> = ({ id, placeholder }) => (
  <div className="frontend-kit-example_m-search-form">
    <SearchForm id={id} placeholder={placeholder} />
  </div>
);

export default SearchAutoSuggestionsDemonstrator;
