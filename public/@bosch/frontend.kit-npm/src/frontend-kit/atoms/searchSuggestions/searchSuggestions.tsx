import * as React from 'react';
import { Link } from '../link/link';

interface Suggestion {
  text: string;
  highlight: string;
  href: string;
}

interface SearchSuggestionsProps {
  suggestions: Suggestion[];
  tabIndex?: number;
}

const renderSuggestionLinkText = (text: string, highlight: string): string => {
  if (!highlight) {
    return text;
  }
  return text.replace(highlight, `<em>${highlight}</em>`);
};

const SearchSuggestions: React.FunctionComponent<SearchSuggestionsProps> = ({
  suggestions = [],
  tabIndex = 0,
}) => (
  <div className="a-search-suggestions">
    <ul>
      {suggestions.map((suggestion, index) => (
        <li className="a-search-suggestions__item" key={index}>
          <a
            href={suggestion.href}
            className="a-search-suggestions__result-link"
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: renderSuggestionLinkText(
                suggestion.text,
                suggestion.highlight,
              ),
            }}
          >
            {}
          </a>
        </li>
      ))}
    </ul>
    <Link
      additionalClasses={['a-search-suggestions__results-link']}
      label="All Results"
      level="primary"
      href="/"
      tabIndex={tabIndex}
    />
  </div>
);

export { SearchSuggestions };
export type { SearchSuggestionsProps, Suggestion };
