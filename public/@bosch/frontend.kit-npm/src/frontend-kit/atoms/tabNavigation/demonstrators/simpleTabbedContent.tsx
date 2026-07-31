import * as React from 'react';
import { TabNavigation } from '../tabNavigation';

const SimpleTabbedContentDemonstrator: React.FunctionComponent<{}> = () => (
  <div className="frontend-kit-example_tabbed-content">
    <TabNavigation
      tabs={[
        {
          type: 'button',
          label: 'Content 1',
          identifier: 'content-1',
          isSelected: true,
        },
        {
          type: 'button',
          label: 'Content 2',
          identifier: 'content-2',
        },
      ]}
    />
    <div
      className="frontend-kit-example_content"
      style={{ textAlign: 'center' }}
      data-frok-content-identifier="content-1"
      id="panel-1"
      aria-labelledby="panel-1"
      role="tabpanel"
    >
      <p>Content 1</p>
    </div>
    <div
      className="frontend-kit-example_content"
      style={{ textAlign: 'center', display: 'none' }}
      data-frok-content-identifier="content-2"
      id="panel-2"
      aria-labelledby="panel-2"
      role="tabpanel"
    >
      <p>Content 2</p>
    </div>
  </div>
);

export default SimpleTabbedContentDemonstrator;
