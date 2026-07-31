import * as React from 'react';
import { Button, groups, groupTypes } from '../button';

const AllButtonsDemonstrator: React.FunctionComponent = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, max-content)',
    gap: '1rem',
    placeItems: 'center left',
  }}>
    {groups.map((group) => {
      return groupTypes.map(groupType => {
        return (
          <>
            <Button group={group} groupType={groupType} icon='emoji-happy' label='Button label' />
            <Button group={group} groupType={groupType} label='Button label' />
            <Button group={group} groupType={groupType} icon='emoji-happy' label='Button label' fixedWidth />
            <Button group={group} groupType={groupType} icon='emoji-happy' aria-label='Button label' />
            <Button group={group} groupType={groupType} icon='emoji-happy' label='Button label' isDisabled />
            <Button group={group} groupType={groupType} size='small' icon='emoji-happy' label='Button label' />
            <Button group={group} groupType={groupType} size='small' label='Button label' />
            <Button group={group} groupType={groupType} size='small' icon='emoji-happy' label='Button label' fixedWidth />
            <Button group={group} groupType={groupType} size='small' icon='emoji-happy' aria-label='Button label' />
            <Button group={group} groupType={groupType} size='small' icon='emoji-happy' label='Button label' isDisabled />
          </>
        )
      })
    })}
    
    
  </div>
);

export default AllButtonsDemonstrator;
