import React from 'react'
import menu from './asset/topNav/menu.png';
import logo from './asset/topNav/logo.png';
import settings from './asset/topNav/settings.png'
import info from './asset/topNav/info.png'
import inner from './asset/topNav/inner.png'

function TopNav() {
  return (
    <div className='bg-[#ffff] w-[1440px] h-[72px] px-[16px] py-[10px]  border'>
        <ul className='flex gap-[24px] '>
            <li className='cursor-pointer items-center pt-[10px]'>
                <img className='w-[32px] h-[32px] flex-shrink-0' alt='menu-logo' src={menu}/>          
            </li>
            <li className='flex cursor-pointer items-center gap-[8px]'>
                <img className='flex-shrink-0' alt='logo' src={logo}/>
                <p className='logo-text w-[120px] h-[34px] flex-shrink text-[28px] text-[#23365F] not-italic font-[400] leading-normal'>FANTASY LOTO</p>          
            </li>
            <li className='flex flex-shrink-0 items-center ml '>
                <input type='text' id='text' className='peer border-[1px] border-solid border-[#EBEBEB] bg-[#FBFBFB] rounded-[8px] w-[268px] h-[40px] px-[16px] py--[14px] placeholder-transparent' placeholder='Search user...' />
                <label htmlFor='text' className=' text-[#9C9C9C] font-inter  not-italic font-[500] leading-normal opacity-[0.8999999761581421] absolute  peer-placeholder-shown:left-[304px] peer-focus:text-transparent transition-all'>Search user...</label>
            </li>
            <li className='flex cursor-pointer items-center gap-[8px]'>
                <div className='w-[584px] h-[22px] bg-[#ffff]'></div>
            </li>
            <li className='flex cursor-pointer items-center gap-[8px]'>
                <img className='flex-shrink-0' alt='settings-logo' src={settings}/>
            </li>
            <li className='flex cursor-pointer items-center gap-[8px]'>
                <img className='flex-shrink-0' alt='info-logo' src={info}/>
            </li>
            <li className='flex cursor-pointer items-center gap-[8px]'>
                <img className='flex-shrink-0 w-[44px] h-[44px]' alt='inner-logo' src={inner}/>
                <p className='flex flex-col justify-center text-[12px] w-[68px] h-[35px] text-[#9c9c9c] font-inter not-italic font-[500] leading-normal opacity-[0.8999999761581421]'>Alexandra Samantha</p>
            </li>
        </ul>
    </div>
  )
}

export default TopNav