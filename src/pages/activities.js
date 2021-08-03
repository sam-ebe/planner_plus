import React from 'react'
import LayoutCard from '../components/LayoutCard';
import LayoutList from '../components/LayoutList';
import ExtensionIcon from '@material-ui/icons/Extension';
function Activities() {
  return (
    <div className='centerCard'>
      <LayoutCard icon={<ExtensionIcon />} content={<LayoutList />}>
              
      </LayoutCard>

    </div>
  )
}

export default Activities;
