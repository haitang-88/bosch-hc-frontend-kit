import * as React from 'react';
import { AnimatedIcon } from '../animatedIcon';

const iconNames = [
  'emoji-super-happy',
  'emoji-happy',
  'emoji-neutral',
  'emoji-sad',
  'emoji-very-sad',
  'wrench',
  'weather-cloud-sun',
  'calender-sheet',
  'battery',
  'flash',
  'start-play-frame',
  'hand',
  'thumb-up',
  'health',
  'fireworks',
  'camera',
  'welcome',
  'car',
  'plane-top',
  'thumb-down',
  'piggybank',
  'video',
  'call-wifi',
  'customer-service',
  'fire',
  'coffee-break',
  'settings',
  'lightbulb',
  'cookie',
];

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

restructureIconArray(iconNames);

const AllAnimatedIcons: React.FC = () => (
  <table className="m-table">
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
                <AnimatedIcon iconName={name} loop autoPlay />
              </td>
              <td>{name}</td>
            </React.Fragment>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default AllAnimatedIcons;
