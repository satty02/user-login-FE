import React from 'react'
import piechart from './asset/totalItem/piechart.png'
import blue from './asset/totalItem/blue-tick.png';
import magenta from './asset/totalItem/magenta-tick.png';
import green from './asset/totalItem/green tick.png'

function TotalItem() {
  return (
    <div className='flex gap-[16px]'>
    <div className='flex flex-col ml-[24px] mt-[16px]'>
        <ul className='flex gap-[16px]'>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$8288.8</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Balance available</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>7988</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total win tickets</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$76</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total bet amount</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>722</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total active lottries</p>
            </li>
        </ul>
        <ul className='flex gap-[16px] mt-[16px]'>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$188</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total void amount</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$88.9</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total payout amount</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$8288</p> 
                   <p className='flex items-center w-[133px]  h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Total tickets purchased</p>
            </li>
            <li className='flex flex-col self-stretch items-start w-[159px] h-[112px] border-[1px] border-solid border-[#EBEBEB] rounded-[8px] p-[16px] justify-center bg-[#fff]' >
                   <p className=' text-[#000] flex items-center h-[39px]   font-inter text-[32px]  not-italic font-[600] leading-normal tracking-[-1.28px]'>$1200</p> 
                   <p className='flex items-center   h-[15px] text-[#000] font-inter text-[12px]  not-italic font-[400] leading-normal'>Avg sale/day </p>
            </li>
        </ul>

        
    </div>
        <div className='flex items-center w-[435px] h-[240px] gap-[24px] border-[1px] rounded-[8px] px-[40px] mt-[16px] bg-white'>
            <img className='flex  w-[178px] h-[178px]' alt='piechart-logo' src={piechart}/>
            <ul>
                <li className='flex items-center gap-[8px] w-[132px] h-[19px]'>
                    <img className='w-[16px] h-[16px]' alt='blue box' src={blue}/>
                    <p className='flex items-center text-[16px] h-[19px] text-[#000] font-inter not-italic font-[500] leading-normal'>Active admins</p>
                </li>
                <li className='flex items-center my-[16px] gap-[8px] w-[132px] h-[19px]'>
                    <img className='w-[16px] h-[16px]' alt="magenta box" src={magenta}/>
                    <p className='flex items-center text-[16px] h-[19px] text-[#000] font-inter not-italic font-[500] leading-normal'>Active staff</p>
                </li>
                <li className='flex items-center gap-[8px] w-[132px] h-[19px]'>
                    <img className='w-[16px] h-[16px]' alt='green box' src={green}/>
                    <p className='flex items-center text-[16px] h-[19px] text-[#000] font-inter not-italic font-[500] leading-normal'>Active agents</p>
                </li>
            </ul>
        
        </div>

    </div>
    
  )
}

export default TotalItem