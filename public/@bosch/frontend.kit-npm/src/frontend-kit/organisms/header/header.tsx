import * as React from 'react';
import { Button } from '../../atoms/button/button';
import {
  SearchSuggestions,
  Suggestion,
} from '../../atoms/searchSuggestions/searchSuggestions';
import Logo from './parts/logo';
import MenuTrigger from './parts/menuTrigger';
import { Navigation, NavigationEntry } from './parts/navigation';
import Search from './parts/search';
import { Breadcrumbs } from '../../components';

interface Quicklink {
  label: string;
  icon: string;
}

export interface HeaderProps {
  quicklinks?: Quicklink[];
  includeSearch?: boolean;
  excludeMenu?: boolean;
  searchSuggestions?: Suggestion[];
  breadcrumbs?: string[];
  subbrand?: string;
  navigation: NavigationEntry[];
  languages?: string[];
}

/**
 *
 * @name o-header
 * @type organism
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {Quicklink[]} quicklinks          Optional quicklinks to display.
 * @param {boolean} includeSearch           Whether or not to include the search.
 * @param {boolean} excludeMenu             Whether or not to include the menu.
 * @param {Suggestion[]} searchSuggestions  Optional search suggestions to display.
 * @param {string[]} breadcrumbs            Optional breadcrumbs to display.
 * @param {string} subbrand                 Optional subbrand to display.
 * @param {NavigationEntry[]} navigation    Navigation container to display.
 * @param {string[]} languages              Optional languagues from a Dropdown to display.
 *
 * @description
 * representation of header
 */

const Header: React.FunctionComponent<HeaderProps> = ({
  quicklinks = [],
  includeSearch = false,
  excludeMenu = false,
  searchSuggestions = [],
  breadcrumbs = [],
  subbrand,
  navigation = [],
  languages = [],
}) => (
  <header className="o-header">
    <div className="o-header__top-container">
      <div className="e-container">
        <div className="o-header__top">
          <Logo />
          <div className="o-header__quicklinks">
            {quicklinks.map((quicklink) => (
              <Button
                key={quicklink.label}
                mode="integrated"
                label={quicklink.label}
                icon={quicklink.icon}
              />
            ))}
          </div>
          {includeSearch && <Search />}
          {!excludeMenu && <MenuTrigger />}
        </div>
      </div>
    </div>

    {includeSearch && (
      <div className="o-header__search_suggestions_container">
        <div className=" e-container">
          {includeSearch && searchSuggestions.length > 0 && (
            <SearchSuggestions suggestions={searchSuggestions} />
          )}
        </div>
      </div>
    )}

    <div className="e-container">
      <div className="o-header__meta">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        {subbrand && (
          <span className="o-header__subbrand">Subbrand identifier</span>
        )}
      </div>
    </div>

    <div className="o-header__navigation-container">
      <div className="e-container">
        <Navigation navigation={navigation} languages={languages} />
      </div>
    </div>
  </header>
);

export default Header;
