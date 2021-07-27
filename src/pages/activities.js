import React from 'react'
import LayoutCard from '../components/LayoutCard';
import ExtensionIcon from '@material-ui/icons/Extension';
function Activities() {
  return (
    <div className='centerCard'>
      <LayoutCard icon={<ExtensionIcon />}></LayoutCard>
    </div>
  )
}

export default Activities;
