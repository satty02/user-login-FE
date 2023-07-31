import React from 'react';
import TopNav from './TopNav';
import Sidebar from './SideBar';
import TotalItem from './TotalItem';
import Chart from './Chart';

function DashBoard() {
  return (
    <div className="w-[1440px] h-[924px] bg-[#EBEBEB]">
        <TopNav/>
        <div>
          <div className="flex ">
            <Sidebar/>
            <div>
              <TotalItem/>
              <Chart/>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default DashBoard