import * as React from 'react';
import { FloatingButtonGroup } from '../floatingButtonGroup';
import { groups, groupTypes, Button } from '../../../atoms/button/button';

const AllFloatingButtonGroupsDemonstrator: React.FunctionComponent = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, max-content)',
    gap: '1rem',
    placeItems: 'center start',
  }}>
    {groups.map((group) => {
      return groupTypes.map(groupType => {
        return (
          <>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label', icon: 'emoji-happy'},
              { label: 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label', icon: 'emoji-happy'},
              { label: 'Button Label', icon: 'emoji-happy'},
              { label: 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label'},
              { label: 'Button Label'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { label: 'Button Label'},
              { label: 'Button Label'},
              { label: 'Button Label'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
            <FloatingButtonGroup group={group} groupType={groupType} buttons={[
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
              { "aria-label": 'Button Label', icon: 'emoji-happy'},
            ]}></FloatingButtonGroup>
          </>
        )
      })
    })}
    
    
  </div>
);

export default AllFloatingButtonGroupsDemonstrator;
