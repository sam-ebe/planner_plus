import React from 'react';
import LayoutCard from '../components/LayoutCard';
import TodayIcon from '@material-ui/icons/Today';
function Calendar() {
  return (
    <div className='centerCard'>
      <LayoutCard icon={<TodayIcon />}></LayoutCard>
    </div>  
  )
}

export default Calendar;
