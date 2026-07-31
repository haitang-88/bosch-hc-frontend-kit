import * as React from 'react';
import classNames from 'classnames';
import {
  Button,
  Details,
  Divider,
  Icon,
  InputSearch,
  InputText,
  Link,
} from '../../components';

type LinkSection = {
  title: string,
  links: string[],
}[]

const linkSection: LinkSection = [
  {
    "title": "Customer Service",
    "links": [
      "Get support",
      "Repair Service",
      "Care, protection and parts",
      "Contact us",
    ]
  },
  {
    "title": "Experience Bosch",
    "links": [
      "History",
      "Leave a review",
      "Newsletter",
    ]
  },
  {
    "title": "Online Shop",
    "links": [
      "Payment methods",
      "Delivery services",
      "Terms & conditions",
      "Return policy",
    ]
  },
  {
    "title": "More Bosch products",
    "links": [
      "Bosch DIY",
      "Bosch Smarthome solutions",
      "Bosch Automotive",
      "Bosch Home Comfort",
    ],
  },
  {
    "title": "More Bosch products",
    "links": [
      "Bosch DIY",
      "Bosch Smarthome solutions",
      "Bosch Automotive",
      "Bosch Home Comfort",
    ],
  },
];

const minimumLinkSection: string[] = [
  "Get support",
  "History",
  "Payment methods",
  "Bosch DIY",
  "Bosch DIY",
]

interface FooterCommerceProps {
  onGrid?: boolean,
  search?: boolean,
  banner?: boolean,
  legal?: boolean,
  scrollToTop?: boolean,
  links?: boolean,
  linksRegular?: boolean,
  lastLinkSectionBlock?: boolean,
  shopInfo?: boolean,
  payment?: boolean,
  delivery?: boolean,
  newsletter?: boolean,
  minimum?: boolean,
}

function ConditionalWrap({ condition, wrap, children }) {
  return condition ? wrap(children) : children;
}

/**
 * @name    o-footer-commerce
 * @type    organism
 * @author Diconium Germany GmbH
 * @copyright Robert Bosch GmbH
 *
 * @description
 * representation of a test component
 */
const FooterCommerce: React.FunctionComponent<FooterCommerceProps> = ({
  onGrid = false,
  search = true,
  banner = true,
  legal = true,
  scrollToTop = true,
  links = true,
  lastLinkSectionBlock = true,
  shopInfo = true,
  payment = true,
  delivery = true,
  newsletter = true,
  minimum = false,
}) => {
  return (
    <footer className='o-footer-commerce'>
      {search && !minimum && (
        <div className="o-footer-commerce__search -secondary">
          {<ConditionalWrap
            condition={onGrid}
            wrap={(children) => <div className='e-container'>{children}</div>}
          >
            <div className="o-footer-commerce__search-wrapper">
              <span className='o-footer-commerce__search-label'>Still looking for something?</span>
              <InputSearch id='footer-commerce-search' placeholder='e.g. hint'></InputSearch>
            </div>
          </ConditionalWrap>}
        </div>
      )}

      {banner && !minimum && (
        <div className="o-footer-commerce__banner -contrast">
          <div className="o-footer-commerce__banner-content">
            <Icon iconName='ticket'></Icon>
            <span className='o-footer-commerce__banner-title'>Your exclusive discount code</span>
            <span className='o-footer-commerce__banner-text'>Get 10% discount on original spare parts and accessories</span>
            <Link label='Learn more' href='/' size='s'></Link>
          </div>
        </div>
      )}

      {<ConditionalWrap
        condition={onGrid}
        wrap={(children) => <div className='e-container'>{children}</div>}
      >
        <div className="o-footer-commerce__resources -primary">
          {/* slogan */}
          <div className="o-footer-commerce__slogan">
            <div className="o-footer-commerce__slogan-title">Invented for life</div>
            <div className="o-footer-commerce__socials">
              <Button
                aria-label='PLACEHOLDER'
                icon='facebook'
                group='neutral'
                groupType='tertiary'>
              </Button>
              <Button
                aria-label='PLACEHOLDER'
                icon='youtube'
                group='neutral'
                groupType='tertiary'>
              </Button>
              <Button
                aria-label='PLACEHOLDER'
                icon='twitter-x'
                group='neutral'
                groupType='tertiary'>
              </Button>
              <Button
                aria-label='PLACEHOLDER'
                icon='linkedin'
                group='neutral'
                groupType='tertiary'>
              </Button>
              <Button
                aria-label='PLACEHOLDER'
                icon='xing'
                group='neutral'
                groupType='tertiary'>
              </Button>
              <Button
                aria-label='PLACEHOLDER'
                icon='instagram'
                group='neutral'
                groupType='tertiary'>
              </Button>
            </div>
          </div>

          {/* link section specific for minimum variant */}
          {minimum && (
            <div className="o-footer-commerce__links-minimum">
              <div className="o-footer-commerce__links-wrapper">
                {minimumLinkSection.map((link, i) => (
                  <Link
                    href='#'
                    level='integrated'
                    label={link}
                    key={`link-${i}`}
                    iconPosition='left'
                    icon='emoji-happy'
                  />
                ))}
              </div>
              <div className="a-link -icon a-link--integrated">
                <a href="#" target="_self">
                  <i className="a-icon boschicon-bosch-ic-globe"></i>
                  <span>Bosch Corporate&nbsp;</span>
                  <span>Website<i className="a-icon ui-ic-nosafe-lr-externallink"></i></span>
                </a>
              </div>
            </div>
          )}

          {/* legal */}
          {legal && (
            <div className="o-footer-commerce__legal">
              <div className="o-footer-commerce__claim">
                All rights reserved. Text, images, graphics, sound, animations and videos as well as the arrangement of the same on Bosch websites are protected by copyright and other commercial protective rights. The content of these websites may not be copied, disseminated, altered or made accessible to third parties for commercial purposes. In addition, some Bosch websites contain images that are subject to third-party copyrights.
              </div>
            </div>
          )}

          {/* link section mobile until tablet */}
          {links && !minimum && (
            <div className="o-footer-commerce__links -mobile">
              {linkSection.map((({ title, links }, i) => (
                <div className="m-details-group">
                  <Details summary={title} key={`title-${i}`}>
                    {links.map((link, j) => (
                      <Link
                        href='#'
                        level='integrated'
                        label={link}
                        key={`link-${j}`}
                      />
                    ))}
                  </Details>
                </div>
              )))}
              <div className="a-link -icon a-link--integrated">
                <a href="#" target="_self">
                  <i className="a-icon boschicon-bosch-ic-globe"></i>
                  <span>Bosch Corporate&nbsp;</span>
                  <span>Website<i className="a-icon ui-ic-nosafe-lr-externallink"></i></span>
                </a>
              </div>
            </div>
          )}

          {/* link section for desktop upwards */}
          {links && !minimum && (
            <div className="o-footer-commerce__links">
              {linkSection.filter((_, k) => {
                if (!lastLinkSectionBlock && k === linkSection.length - 1) {
                  return false;
                }
                return true;
              }).map((({ title, links }, i) => {
                return (
                  <div className='o-footer-commerce__links-block' key={`title-${i}`}>
                    <div className='highlight'>{title}</div>
                    {links.map((link, j) => (
                      <Link
                        href='#'
                        level='integrated'
                        label={link}
                        key={`link-${j}`}
                      />
                    ))}
                  </div>
                )
              }))}
              <div className="a-link -icon a-link--integrated o-footer-commerce__corporate-link">
                <a href="#" target="_self">
                  <i className="a-icon boschicon-bosch-ic-globe"></i>
                  <span>Bosch Corporate&nbsp;</span>
                  <span>Website<i className="a-icon ui-ic-nosafe-lr-externallink"></i></span>
                </a>
              </div>
            </div>
          )}

          {/* newsletter & shop info */}
          <div className="o-footer-commerce__connect">
            <div className="o-footer-commerce__shop">
              {shopInfo && !minimum && (
                <div className="o-footer-commerce__shop-info">
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/shop_01.png 1x, /images/shop_01.png 2x"
                      src="/images/shop_01.png"
                      height={78}
                      width={78}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/shop_02.png 1x, /images/shop_02.png 2x"
                      src="/images/shop_02.png"
                      height={78}
                      width={78}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/shop_03.png 1x, /images/shop_03.png 2x"
                      src="/images/shop_03.png"
                      height={78}
                      width={78}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/shop_04.png 1x, /images/shop_04.png 2x"
                      src="/images/shop_04.png"
                      height={78}
                      width={107}
                    />
                  </figure>
                </div>
              )}
              {payment && !minimum && (
                <div className="o-footer-commerce__payment">
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_01.png 1x, /images/pay_01.png 2x"
                      src="/images/pay_01.png"
                      height={32}
                      width={78}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_02.png 1x, /images/pay_02.png 2x"
                      src="/images/pay_02.png"
                      height={32}
                      width={67}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_03.png 1x, /images/pay_03.png 2x"
                      src="/images/pay_03.png"
                      height={32}
                      width={57}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_04.png 1x, /images/pay_04.png 2x"
                      src="/images/pay_04.png"
                      height={32}
                      width={46}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_05.png 1x, /images/pay_05.png 2x"
                      src="/images/pay_05.png"
                      height={32}
                      width={57}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/pay_06.png 1x, /images/pay_06.png 2x"
                      src="/images/pay_06.png"
                      height={32}
                      width={120}
                    />
                  </figure>
                </div>
              )}
              {delivery && !minimum && (
                <div className="o-footer-commerce__delivery">
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/delivery_01.png 1x, /images/delivery_01.png 2x"
                      src="/images/delivery_01.png"
                      height={32}
                      width={27}
                    />
                  </figure>
                  <figure>
                    <img
                      alt="PLACEHOLDER"
                      srcSet="/images/delivery_02.png 1x, /images/delivery_02.png 2x"
                      src="/images/delivery_02.png"
                      height={32}
                      width={32}
                    />
                  </figure>
                </div>
              )}
            </div>
            {newsletter && !minimum && (
              <div className="o-footer-commerce__newsletter">
                <div className="o-footer-commerce__newsletter-title">Subscribe to newsletter</div>
                <p>Subscribe to newsletter to stay up-to-date on products news, special offers, promotions and other highlights.</p>
                <form className='o-footer-commerce__subscription'>
                  <InputText id="newsletter-subscription" label='Email address' />
                  <Button
                    label='Submit'
                    type='submit'
                    group='brand'
                    groupType='secondary'
                  />
                </form>
              </div>
            )}
          </div>
        </div>

        {/* bottom part */}
        <div className="o-footer-commerce__bottom">
          <Divider />
          <div className="o-footer-commerce__bottom-wrapper">
            <div className="o-footer-commerce__rights">© Robert Bosch GmbH 2024, all rights reserved</div>
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Corporate information'
            />
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Legal Notice'
            />
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Data protection policy'
            />
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Privacy settings'
            />
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Sitemap'
            />
            <Link
              href='#'
              level='integrated'
              size='s'
              label='Web accessibility'
            />
          </div>

          {/* scroll to top */}
          {scrollToTop && (
            <Button
              group='neutral'
              groupType='tertiary'
              label='scroll to top'
              isUiIcon={true}
              icon='up'
              additionalClasses={['o-footer-commerce__scroll-to-top']}
            />
          )}
        </div>
      </ConditionalWrap>}
    </footer>
  );
};

export { FooterCommerce };