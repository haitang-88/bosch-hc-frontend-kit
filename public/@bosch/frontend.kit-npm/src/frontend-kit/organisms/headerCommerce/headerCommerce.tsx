import * as React from 'react';
import classNames from 'classnames';
import Logo from '../header/parts/logo';
import {
  Button,
  Image,
  Link,
  SplitButton,
  TabNavigation,
} from '../../components';

interface HeaderCommerceProps {
  logo: 'bosch' | 'dremel';
  isSticky?: boolean;
  navigationBackground?: 'primary' | 'contrast';
  minimalistic?: boolean;
}

/**
 * @name    o-header-commerce
 * @type    organism
 * @author Robert Bosch GmbH
 * @copyright Robert Bosch GmbH
 *
 * @param   {boolean} isSticky   Whether the header is sticky
 * @description
 * representation of a test component
 */
const HeaderCommerce: React.FunctionComponent<HeaderCommerceProps> = ({
  logo = 'bosch',
  isSticky = false,
  navigationBackground = 'primary',
  minimalistic = false,
}) => {

  const headerClassNames = classNames('o-header', 'o-header-commerce', `-${navigationBackground}`, {
    '-sticky': isSticky,
  });

  return (
    <>
      <header className={headerClassNames}>
        {!minimalistic && (
          <nav className="o-header-commerce__utility-bar -secondary">
            <div className="e-container">
              <div className="-left">
                <Link
                  href="https://www.bosch.com"
                  label="Private customers"
                  level="integrated"
                  ariaLabel="private customers"
                  size="s"
                  additionalClasses={['-active']}
                />
                <Link
                  href="https://www.bosch.com"
                  label="Business customers"
                  level="integrated"
                  ariaLabel="business customers"
                  size="s"
                />
              </div>
              <div className="-right">
                <Link
                  href="https://www.bosch.com"
                  label="Link"
                  level="integrated"
                  ariaLabel="link example"
                  size="s"
                />
                <Button
                  groupType="tertiary"
                  group="neutral"
                  label="Button"
                  size="small"
                />
                <SplitButton
                  group="brand"
                  groupType="tertiary"
                  menuItems={[
                    {
                      "label": "Option 1",
                      "isButton": true,
                    },
                    {
                      "label": "Option 2",
                      "isButton": true,
                    },
                  ]}
                  rightButton={{ label: 'Split button', iconName: '' }}
                />

              </div>
            </div>
          </nav>
        )}

        {logo !== 'dremel' && <div className="o-header-commerce__supergraphic"></div>}

        <div className={`o-header-commerce__navigation-wrapper -${navigationBackground}`}>
          <div className="e-container">
            <div className="o-header__top">
              {logo === 'bosch' && <Logo />}
              {logo === 'dremel' && (
                <a href="/" className="o-header__logo" aria-label="Dremel Logo">
                  <svg width="109" height="24" viewBox="0 0 109 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12183_8748)">
                      <path d="M1 4.07263H12.9381C17.7812 4.07263 17.9991 6.46994 18.3381 9.54528V14.2915C17.9265 17.948 16.9336 19.3525 12.9381 19.6915H1V4.07263ZM4.94709 16.3013H11.9695C13.8341 16.3013 14.3668 15.1148 14.3668 12.887V10.7803C14.3668 8.55246 13.9552 7.17219 11.9695 7.17219H4.94709V16.3013Z" fill="white" />
                      <path d="M20.1785 4.07263H32.3104C36.1364 4.07263 36.3785 6.59102 36.3785 8.72196V9.71479C36.2817 11.6762 35.4825 12.3542 34.4897 12.9112L34.4655 13.0323C35.5794 13.7829 36.2574 14.461 36.1848 17.052C36.2817 18.8439 36.6207 19.7157 36.6207 19.7157H32.6978C32.2619 19.4735 32.2861 17.8511 32.2861 17.8511C32.2861 16.2045 32.1408 14.7031 30.4942 14.5094H24.174V19.6915H20.1543V4.07263H20.1785ZM24.1982 11.2888H30.8574C31.9471 11.2888 32.383 10.4412 32.383 9.30313V8.79461C32.383 7.41434 31.7534 7.14797 30.4942 7.14797H24.1982V11.2888Z" fill="white" />
                      <path d="M38.6305 4.07263H52.9902V7.14797H42.6503V10.1991H52.4332V13.0807H42.6503V16.3013H53.2081V19.7157H38.6063V4.07263H38.6305Z" fill="white" />
                      <path d="M79.6027 4.07263H93.9623V7.14797H83.6224V10.1991H93.4054V13.0807H83.6224V16.3013H94.1803V19.7157H79.5785V4.07263H79.6027Z" fill="white" />
                      <path d="M55.0726 4.07263H61.1264L65.9211 14.122H66.0421L70.5946 4.07263H76.9874V19.6915H73.0646V8.38295H72.8466L67.5677 19.6915H64.5408L59.0924 8.38295H58.8744V19.6915H55.0726V4.07263Z" fill="white" />
                      <path d="M95.9237 4.07263H99.9434V16.3013H109V19.7157H95.9237V4.07263Z" fill="white" />
                      <path d="M100.864 5.84036C100.864 4.82332 101.687 4 102.704 4C103.721 4 104.544 4.82332 104.544 5.84036C104.544 6.8574 103.721 7.68072 102.704 7.68072C101.687 7.68072 100.864 6.8574 100.864 5.84036ZM104.133 5.84036C104.133 5.04126 103.479 4.41166 102.704 4.41166C101.905 4.41166 101.275 5.04126 101.275 5.84036C101.275 6.63946 101.905 7.26906 102.704 7.26906C103.479 7.24484 104.133 6.61525 104.133 5.84036ZM103.624 6.83319H103.14L102.704 6.00986H102.341V6.83319H101.929V4.84753H102.922C103.382 4.84753 103.697 4.92018 103.697 5.45291C103.697 5.81614 103.503 5.96144 103.164 5.98565L103.624 6.83319ZM102.922 5.69507C103.14 5.69507 103.261 5.64663 103.261 5.40448C103.261 5.16233 103.019 5.16233 102.825 5.16233H102.341V5.69507H102.922Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_12183_8748">
                        <rect width="109" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}
              <div className="o-header__subbrand o-header-commerce__subbrand">
                {!minimalistic ? (
                  <SplitButton
                    group="neutral"
                    groupType="tertiary"
                    menuItems={[
                      {
                        "label": "First action item",
                        "isButton": true,
                      },
                      {
                        "label": "Second action item",
                        "isButton": true,
                      },
                      {
                        "label": "Third action item",
                        "isButton": true,
                      }
                    ]}
                    rightButton={{ label: 'Subbrand identifier', iconName: '' }}
                    size="medium"
                  />
                ) : ('Subbrand identifier')}

              </div>
            </div>
            <div className="o-header-commerce__main-navigation">
              {!minimalistic ? (
                <TabNavigation
                  role="none"
                  tabs={[
                    {
                      type: 'button',
                      label: 'Products',
                      identifier: 'products-tab',
                      'aria-controls': 'products__nav-block',
                      role: 'button',
                      "aria-haspopup": true,
                      "aria-expanded": false,
                      additionalClasses: ['-open-level-0'],
                    },
                    {
                      type: 'button',
                      label: 'Services',
                      identifier: 'services-tab',
                      'aria-controls': 'services__nav-block',
                      role: 'button',
                      "aria-haspopup": true,
                      "aria-expanded": false,
                      additionalClasses: ['-open-level-0'],
                    },
                    {
                      type: 'button',
                      label: 'Solutions',
                      identifier: 'solutions-tab',
                      'aria-controls': 'solutions__nav-block',
                      role: 'button',
                      "aria-haspopup": true,
                      "aria-expanded": false,
                      additionalClasses: ['-open-level-0'],
                    },
                  ]}
                />
              ) : (
                <TabNavigation
                  tabs={[
                    {
                      type: 'button',
                      label: 'With sub-items',
                      identifier: 'products-tab',
                      'aria-controls': 'subitems__nav-block',
                      role: 'button',
                      "aria-haspopup": true,
                      "aria-expanded": false,
                      additionalClasses: ['-open-level-0'],
                    },
                    {
                      type: 'link',
                      label: 'Link to another page',
                      identifier: 'direct-link',
                    },
                    {
                      type: 'link',
                      label: 'Second link',
                      identifier: 'second-link',
                    },
                  ]}
                />
              )}

              <div className="o-header__quicklinks">
                {!minimalistic && (
                  <Button groupType="tertiary" group="neutral" icon="search" aria-label="Search" />
                )}
                {!minimalistic && (
                  <Button groupType="tertiary" group="neutral" icon="user" aria-label="User account" />
                )}
                {!minimalistic && (
                  <Button
                    groupType="tertiary"
                    group="neutral"
                    icon="globe-language"
                    aria-label="Language selection"
                  />
                )}
                {!minimalistic && (
                  <Button
                    groupType="tertiary"
                    group="neutral"
                    icon="shoppingcart"
                    aria-label="Shopping cart"
                  />
                )}
                <Button
                  groupType="tertiary" group="neutral" size="small"
                  additionalClasses={['-menu-opener -open-level-0']}
                  aria-controls="main-menu__nav-block"
                  aria-expanded="false"
                  aria-label='open navigation'
                >
                  <i className="a-icon a-button__icon ui-ic-menu"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {minimalistic && (
          <nav className="o-header-commerce__main-navigation__content__wrapper -nested -primary -level-0">
            <div className="e-container">
              <div className="o-header-commerce__main-navigation__content">
                <div className="o-header-commerce__main-navigation__controls">
                  <Button
                    aria-label="close menu"
                    id="menu-close-button"
                    groupType="tertiary"
                    group="neutral"
                    size="small"
                    additionalClasses={['controls__previous']}
                  >
                    <span className="a-button__label">Close</span>
                    <i className="a-icon a-button__icon ui-ic-close"></i>
                  </Button>
                </div>

                <ul id="main-menu__nav-block" className="o-header-commerce__main-navigation__content__links -main-menu -level-0">
                  <li>
                    <Button
                      aria-label="Opens Products navigation block"
                      groupType="tertiary"
                      group="neutral"
                      aria-controls="subitems__nav-block"
                      aria-expanded="false"
                    >
                      <span className="a-button__label">With sub-items</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Link to another page"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Second link"
                    />
                  </li>
                </ul>

                <ul id="subitems__nav-block" className="o-header-commerce__main-navigation__content__links -level-1 ">
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Services direct page link"
                    />
                  </li>
                  <li>
                    <Link aria-label="direct link" level="integrated" href="http://bosch.com" label="Services direct page link 2" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}

        {!minimalistic && (
          <nav className="o-header-commerce__main-navigation__content__wrapper -nested -primary -level-0">
            <div className="e-container">
              <div className="o-header-commerce__main-navigation__content">
                <div className="o-header-commerce__main-navigation__controls">
                  <Button
                    aria-label="previous level"
                    id="previous-level-button"
                    groupType="tertiary"
                    group="neutral"
                    size="small"
                    additionalClasses={['controls__close']}
                  >
                    <i className="a-icon a-button__icon ui-ic-left"></i>
                    <span className="a-button__label">Previous level</span>
                  </Button>
                  <Button
                    aria-label="close menu"
                    id="menu-close-button"
                    groupType="tertiary"
                    group="neutral"
                    size="small"
                    additionalClasses={['controls__previous']}
                  >
                    <span className="a-button__label">Close</span>
                    <i className="a-icon a-button__icon ui-ic-close"></i>
                  </Button>
                </div>
                <ul id="main-menu__nav-block" className="o-header-commerce__main-navigation__content__links -main-menu -level-0">
                  <li>
                    <Button
                      aria-label="Opens Products navigation block"
                      groupType="tertiary"
                      group="neutral"
                      aria-controls="products__nav-block"
                      aria-expanded="false"
                      additionalClasses={['-open-level-1']}
                    >
                      <span className="a-button__label">Products</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      aria-label="Opens Services navigation block"
                      groupType="tertiary"
                      group="neutral"
                      aria-controls="services__nav-block"
                      aria-expanded="false"
                      additionalClasses={['-open-level-1']}
                    >
                      <span className="a-button__label">Services</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      aria-label="Opens Solutions navigation block"
                      groupType="tertiary"
                      group="neutral"
                      aria-controls="solutions__nav-block"
                      aria-expanded="false"
                      additionalClasses={['-open-level-1']}
                    >
                      <span className="a-button__label">Solutions</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                </ul>

                <ul id="products__nav-block" className="o-header-commerce__main-navigation__content__links -level-1">
                  <li>
                    <Button
                      groupType="tertiary"
                      group="neutral"
                      aria-label="Opens IoT products navigation block"
                      aria-controls="products_iot__nav-block"
                      aria-expanded="false"
                      additionalClasses={['-open-level-2']}
                    >
                      <span className="a-button__label">IoT products</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                    <ul id="products_iot__nav-block" className="o-header-commerce__main-navigation__content__links -level-2">
                      <li>
                        <Button
                          groupType="tertiary"
                          group="neutral"
                          aria-label="Opens Mobility navigation block"
                          aria-controls="products_iot_mobility__nav-block"
                          aria-expanded="false"
                          additionalClasses={['-open-level-3']}
                        >
                          <span className="a-button__label">Mobility</span>
                          <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                        </Button>
                        <ul id="products_iot_mobility__nav-block" className="o-header-commerce__main-navigation__content__links -level-3">
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 2"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 3"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 4"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 5"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 6"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 7"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 8"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 9"
                            />
                          </li>
                          <li>
                            <Link
                              aria-label="direct link"
                              level="integrated"
                              href="http://bosch.com"
                              label="Direct page link 10"
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Button
                          groupType="tertiary"
                          group="neutral"
                          aria-label="Opens IoT Promotions navigation block"
                          aria-controls="products_iot_promotions__nav-block"
                          aria-expanded="false"
                          aria-details="teaser"
                          additionalClasses={['-open-level-3']}
                        >
                          <span className="a-button__label">IoT Promotions</span>
                          <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                        </Button>
                      </li>
                      <li>
                        <div className="a-link -icon -size-m a-link--integrated">
                          <a aria-label="Open Look-alike integrated button with icon right Link Label" target="_self" href="http://bosch.com">
                            <span>Direct page link 2</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Button
                      groupType="tertiary"
                      group="neutral"
                      aria-label="Opens Gardening products navigation block"
                      aria-controls="products_gardening__nav-block"
                      aria-details="teaser"
                      aria-expanded="false"
                      additionalClasses={['-open-level-2']}
                    >
                      <span className="a-button__label">Gardening</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      groupType="tertiary"
                      group="neutral"
                      aria-label="Opens Promotions navigation block"
                      aria-controls="products_promotions__nav-block"
                      aria-expanded="false"
                      aria-details="teaser"
                      additionalClasses={['-open-level-2']}
                    >
                      <span className="a-button__label">Promotions</span>
                      <i className="a-icon a-button__icon ui-ic-nosafe-lr-right-small"></i>
                    </Button>
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Direct page link"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Direct page link 2"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Direct page link 3"
                    />
                  </li>
                </ul>

                <ul id="services__nav-block" className="o-header-commerce__main-navigation__content__links -level-1 ">
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Services direct page link"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Services direct page link 2"
                    />
                  </li>
                </ul>

                <ul id="solutions__nav-block" className="o-header-commerce__main-navigation__content__links -level-1 ">
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 2"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 3"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 2"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 3"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 4"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 5"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 6"
                    />
                  </li>
                  <li>
                    <Link
                      aria-label="direct link"
                      level="integrated"
                      href="http://bosch.com"
                      label="Solutions direct page link 7"
                    />
                  </li>
                </ul>

                <div
                  id="utility_bar_mobile"
                  className="o-header-commerce__main-navigation__content__teaser o-header-commerce__utility-bar -mobile -secondary"
                >
                  <div className="-left">
                    <Link
                      href="https://www.bosch.com"
                      label="Private customers"
                      level="integrated"
                      ariaLabel="private customers"
                      size="s"
                      additionalClasses={['-active']}
                    />
                    <Link
                      href="https://www.bosch.com"
                      label="Business customers"
                      level="integrated"
                      ariaLabel="business customers"
                      size="s"
                    />
                  </div>
                  <div className="-right">
                    <Link
                      href="#"
                      label="Link"
                      level="integrated"
                      ariaLabel="Link"
                      size="s"
                    />
                    <Button
                      group='neutral'
                      groupType='tertiary'
                      size='small'
                      label='Button'>
                    </Button>
                    <SplitButton
                      group="brand"
                      groupType="tertiary"
                      menuItems={[
                        {
                          "label": "Option 1",
                          "isButton": true,
                        },
                        {
                          "label": "Option 2",
                          "isButton": true,
                        },
                      ]}
                      rightButton={{ label: 'Split button', iconName: '' }}
                    />
                  </div>
                </div>

                <div id="products_iot_promotions__nav-block" className="o-header-commerce__main-navigation__content__teaser -secondary -level-3">
                  <Image
                    caption="Lorem ipsum sin amet"
                    altText="promotions image"
                    defaultSrc="https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                    srcSet={[
                      {
                        "width": 400,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-400w.jpg"
                      },
                      {
                        "width": 800,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-800w.jpg"
                      },
                      {
                        "width": 1600,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                      }
                    ]}
                  />
                  <Image
                    caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    altText="promotions image"
                    defaultSrc="https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                    srcSet={[
                      {
                        "width": 400,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-400w.jpg"
                      },
                      {
                        "width": 800,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-800w.jpg"
                      },
                      {
                        "width": 1600,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                      }
                    ]}
                  />
                </div>

                <div id="products_gardening__nav-block" className="o-header-commerce__main-navigation__content__teaser -secondary -level-2">
                  <Image
                    caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    altText="promotions image"
                    defaultSrc="https://uicicdnstorage.blob.core.windows.net/frontend-kit/demo-commerce-header/gardening-1.png"
                    srcSet={[]}
                  />
                  <Image
                    caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    altText="promotions image"
                    defaultSrc="https://uicicdnstorage.blob.core.windows.net/frontend-kit/demo-commerce-header/gardening-2.png"
                    srcSet={[]}
                  />
                </div>

                <div id="products_promotions__nav-block" className="o-header-commerce__main-navigation__content__teaser -secondary -level-2">
                  <Image
                    caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    altText="promotions image"
                    defaultSrc="https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                    srcSet={[
                      {
                        "width": 400,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-400w.jpg"
                      },
                      {
                        "width": 800,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-800w.jpg"
                      },
                      {
                        "width": 1600,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                      }
                    ]}
                  />
                  <Image
                    caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    altText="promotions image"
                    defaultSrc="https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                    srcSet={[
                      {
                        "width": 400,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-400w.jpg"
                      },
                      {
                        "width": 800,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-800w.jpg"
                      },
                      {
                        "width": 1600,
                        "source": "https://brandguide-cdn.azureedge.net/frontend-kit/example-image-1600w.jpg"
                      }
                    ]}
                  />
                </div>

                <div className='o-header-commerce__main-navigation__close__button'>
                  <Button
                    id="menu-close-button__desktop"
                    groupType="tertiary"
                    group="neutral"
                    size="small"
                    aria-label="close navigation"
                    icon="close"
                  />
                </div>

              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export { HeaderCommerce };
export type { HeaderCommerceProps };