import * as React from "react";
import classNames from "classnames";

interface ListItem {
  id: string | number;
  content: string;
  subList?: {
    isOrdered?: boolean;
    itemStyle?: "dot" | "num" | "check";
    items: ListItem[];
  };
}

interface ListProps {
  id: string | number;
  isOrdered?: boolean;
  itemStyle?: "dot" | "num" | "check";
  listItems: ListItem[];
}

/**
 * @name            a-list
 * @type            atom
 * @author          Diconium Germnay GmbH
 * @copyright       Robert Bosch GmbH
 *
 * @param           {string} content                          Array of content which should be rendered
 * @param           {string|number} id                        Unique identifier for the list, used for generating unique keys in nested structures
 * @param           {boolean} isOrdered                       Determines list type: true renders <ol>, false renders <ul>
 * @param           {string} itemStyle                        Visual style of list markers
 * @param           {ListItem[]} listItems                    Array of list items to render, each item can contain nested subLists
 * @description
 * Accessible list component supporting ordered/unordered lists with unlimited nesting depth.
 * Follows W3C WAI-ARIA guidelines for nested list structures.
 */

const List: React.FunctionComponent<ListProps> = ({
  id,
  isOrdered = false,
  itemStyle = "dot",
  listItems = [],
}) => {
  const CustomTag = (isOrdered || itemStyle === 'num') ? "ol" : "ul";

  const listClass = classNames("a-list", {
    [`a-list--${itemStyle}`]: itemStyle,
  });

  return (
    <CustomTag className={listClass}>
      {listItems.map((item) => (
        <li key={item.id}>
          {item.content}
          {item.subList && item.subList.items.length > 0 && (
            <List
              id={`${id}-${item.id}`}
              isOrdered={item.subList.isOrdered}
              itemStyle={item.subList.itemStyle}
              listItems={item.subList.items}
            />
          )}
        </li>
      ))}
    </CustomTag>
  );
};

export { List };
export type { ListProps, ListItem };
