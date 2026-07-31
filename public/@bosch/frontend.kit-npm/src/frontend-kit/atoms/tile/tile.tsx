// eslint-disable-next-line no-use-before-define
import * as React from "react";
import classNames from "classnames";

export const variantsStatic = [
  "",
  "primary",
  "secondary",
  "contrast",
  "emphasis-00-nested",
  "emphasis-01-nested",
  "emphasis-02-nested",
  "emphasis-03-nested",
  "emphasis-04-nested",
  "integrated-nested",
] as const;

export const variantsInteractive = [
  "",
  "emphasis-00",
  "emphasis-01",
  "emphasis-02",
  "emphasis-03",
  "emphasis-04",
  "integrated-major",
  "integrated-minor",
  "integrated-pure",
  "plain-major",
  "plain-minor",
  "plain-pure",
] as const;

type VariantStatic = (typeof variantsStatic)[number];
type VariantInteractive = (typeof variantsInteractive)[number];

interface TileBaseProps {
  name: string;
  spacing?: "small" | "flat";
  children?: React.ReactNode;
}

interface TileStaticProps extends TileBaseProps {
  isInteractive?: false;
  variant?: VariantStatic;
}

interface TileInteractiveProps extends TileBaseProps {
  isInteractive: true;
  variant?: VariantInteractive;
}

type TileProps = TileStaticProps | TileInteractiveProps;

/**
 * @name        a-tile
 * @type        atom
 *
 * @param       {string}          name          Tile's name.
 * @param       {boolean}         isInteractive If the tile itself is interactive (link) or just a container
 * @param       {string}          spacing       when omitted biggest spacing, otherwise small or flat (for no spacing around) can be chosen
 * @param       {string}          variant       different set of variants coupled to the isInteractive state
 * @param       {React.ReactNode} children      Tile's optional children.

 * @description
 * representation of tile
 */

const Tile: React.FunctionComponent<TileProps> = ({
  name,
  isInteractive,
  variant,
  spacing,
  children,
}) => {
  const tileClasses = classNames("a-tile", {
    [`-${variant}`]: variant,
    [`-${spacing}`]: spacing && spacing,
  });

  return (
    <div className={tileClasses}>
      {/* link variant with only static content, tile itself has hovered and pressed state */}
      {isInteractive && (
        <a
          href="/#"
          aria-label={`Link for ${name}`}
          className="a-tile__link"
          target="_blank"
        >
          {children}
        </a>
      )}
      {!isInteractive && children}
    </div>
  );
};

export { Tile };
export type { TileProps, TileStaticProps, TileInteractiveProps };
