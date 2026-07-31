import * as React from "react";
import { Button } from "../../atoms/button/button";
import type {
  ButtonProps,
  groups,
  groupTypes,
} from "../../atoms/button/button";
import { Box } from "../../atoms/box/box";

interface FloatingButtonGroupProps {
  group: groups;
  groupType: groupTypes;
  buttons: ButtonProps[];
}

/**
 * @name    m-floating-button-group
 * @type    molecules
 * @author diconium Germany GmbH
 * @copyright Robert Bosch GmbH
 *
 * @description
 * representation of floating button group
 */

const FloatingButtonGroup: React.FunctionComponent<
  FloatingButtonGroupProps
> = ({ group = "brand", groupType = "primary", buttons = [] }) => {
  return (
    <Box
      additionalClasses={["m-floating-button-group", "-primary"]}
      hasFloatingShadow
    >
      {buttons.map((props) => {
        return <Button group={group} groupType={groupType} {...props} />;
      })}
    </Box>
  );
};

export { FloatingButtonGroup };
export type { FloatingButtonGroupProps };
