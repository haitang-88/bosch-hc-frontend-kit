import * as React from 'react';
import { Icon } from '../icon';
import IconNames from './uiIconNames';
import IconRTLNames from './uiIconRTLNames';

interface UIIconsProps {
  isRtl?: boolean;
}

const UIIcons: React.FunctionComponent<UIIconsProps> = ({ isRtl = false }) => {
  let iconArrays = [];

  const restructureIconArray = (source: string[]): void => {
    const slice = source.splice(0, 3);

    if (slice.length > 0) {
      iconArrays = [...iconArrays, slice];
    }

    if (source.length > 0) {
      restructureIconArray(source);
    }
  };

  restructureIconArray(isRtl ? IconRTLNames : IconNames);

  return (
    <table dir={isRtl ? 'rtl' : ''} className="m-table">
      <thead>
        <tr>
          <th>icon</th>
          <th>name</th>
          <th>icon</th>
          <th>name</th>
          <th>icon</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {iconArrays.map((iconArray: string[], index) => (
          <tr key={`row-${index + 1}`}>
            {iconArray.map((name) => (
              <React.Fragment key={`icon-${name}`}>
                <td className="-with-icon">
                  <Icon iconName={name} key={name} isUiIcon />
                </td>
                <td>{name}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UIIcons;
