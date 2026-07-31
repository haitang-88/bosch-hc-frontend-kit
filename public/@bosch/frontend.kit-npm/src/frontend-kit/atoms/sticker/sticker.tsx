import classNames from "classnames";
import * as React from "react";
import { Icon } from "../icon/icon";

class StickerProps {
  type?:
    | "plain-major"
    | "plain-minor"
    | "emphasis-00"
    | "emphasis-01"
    | "emphasis-02"
    | "emphasis-03"
    | "emphasis-04";
  label?: string;
  iconStart?: string;
  iconEnd?: string;
}

/**
 * @name    a-sticker
 * @type    atom
 * @author Diconium Germany GmbH
 * @copyright Robert Bosch GmbH
 * @param   {string} type           Name of Sticker Variant
 * @param   {string} label          Label of Sticker
 * @param   {string} iconStart      Icon on the start of the sticker
 * @param   {string} iconEnd.       Icon on the end of the sticker
 * @description
 * representation of sticker elements
 */
const Sticker: React.FunctionComponent<StickerProps> = ({
  type = "plain-major",
  label = '',
  iconStart = '',
  iconEnd = '',
}: StickerProps) => {
  const elementClass = classNames("a-sticker", {
    [`-${type}`]: type,
  });
  const stickerLabelId = `sticker-label-id-${type}`;

  return (
    <div className={elementClass} aria-labelledby={stickerLabelId}>
      {iconStart && 
        <Icon iconName={iconStart} />
      }
      {label && 
        <span id={stickerLabelId} className="a-sticker__label -size-s">
          {label}
        </span>
      }
      {iconEnd && 
        <Icon iconName={iconEnd} />
      }
    </div>
  );
};

export { Sticker };
export type { StickerProps };
