import React from 'react'
import LayoutCard from '../components/LayoutCard';
import HomeIcon from '@material-ui/icons/Home';
function Home() {
  return (
    <div className='centerCard'>
      <LayoutCard icon={<HomeIcon />}></LayoutCard>
    </div>
  )
}

export default Home;
