import React from 'react';
import dashboard from './asset/dashboard.png';
import admins from './asset/admins.png'
import people from './asset/people.png'
import Agents from './asset/Agents.png'
import Balance from './asset/Balance.png';
import Games from './asset/Games.png';
import Lottery from './asset/lottery.png'
import BetNumber from './asset/BetNumber.png';
import BetType from './asset/BetType.png';
import Winning from './asset/Winning.png';
import Manual from './asset/Manual.png';
import Rules from './asset/Rules.png';
import Reports from './asset/Reports.png';
import city from './asset/city.png';
import image2 from '../../images/logo2.png'


const Sidebar = () => {
  return (
    <div className="border w-[256px] h-[828px] p-[16px] bg-[#FBFBFB] ">
      <ul>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={dashboard} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Dashboard</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={admins} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Admins</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={people} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>People</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Agents} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Agents</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Balance} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Balance</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Games} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Games</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Lottery} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Lottery limit</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={BetNumber} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Bet number limit</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={BetType} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Bet type & Win ratio</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Winning} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Winning ratio</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Manual} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Manual win result</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Rules} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Rules</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={Reports} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>Reports</p>
            </div>
        </li>
        <li className="cursor-pointer  w-[224] h-[44px] py-[12px] px-[8px]">
            <div className='flex gap-[12px]'>
                <img className=' w-[20px] h-[20px]' src={city} alt='dash-logo'/>
                <p className='flex items-center justify-center h-[20px]  text-[#000]  font-inter text-[16px] not-italic text-[500] leading-normal opacity-[0.8999999761581421]'>State/city</p>
            </div>
        </li>
        
      </ul>
                <div className=' mt-[118px] w-[224px] h-[26px] gap-[12px] flex'>
                    <img src={image2}
                        className='w-[39px] h-[41px] flex-shrink-[0]'
                        alt='company-logo'/>
                    <div className='flex flex-col items-start w-[158px] h-[31px]  mt-[3px] gap-[4px]'>
                        <p className='flex items-center text-[#131313] h-[12px] font-Inter text-[10px] not-italic font-[400] leading-normal tracking-[-0.1px] opacity-[0.5] '>Developed by</p>
                        <p className='flex items-center w-[158px] h-[15px] font-Inter text-[12px] font-[500] leading-normal tracking-[-0.48px] text-left text-[#3E3C3C] '>QualyTrust IT Services, India</p>
                    </div>
                </div>
      </div>

  );
};

export default Sidebar;
