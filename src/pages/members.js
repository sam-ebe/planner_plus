import React from 'react'
import LayoutCard from '../components/LayoutCard';
import GroupIcon from '@material-ui/icons/Group';
function Members() {
  return (
    <div className='centerCard'>
      <LayoutCard icon={<GroupIcon />}></LayoutCard>
    </div>
  )
}

export default Members;
