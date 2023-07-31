import React from 'react'
import dot from './asset/chart/dot.png'

function Chart() {
  return (
    <div className='w-[1136px] h-[364px] flex-shrink-0 border-[1px] rounded-[8px] border-[#EBEBEB] mt-[16px] ml-[24px] bg-[#fff]'>
       <div className='flex'>
            <div>
                <p className='flex items-center ml-[21px] mt-[13px] w-[64px] h-[29px] text-[#000] font-inter text-[24px] not-italic font-[600] leading-normal'>Sales</p>
                <ul className='flex flex-col w-[42.326px] flex-shrink-0 gap-y-[22px] h-[251px]  ml-[20px] mt-[8.24px]'>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$3000</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$2500</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$2000</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$1500</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$1000</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$500</li>
                    <li className='w-[42px] h-[17px] text-[#000] text-[14px] not-italic font-[400] leading-normal text-right'>$0</li>
                </ul>
            </div>
                
            <div className='ml-[-3px] mt-[61px] w-[1026px] h-[203px]  flex-shrink-0 '>
                
                <ul className='flex gap-[90.39px]'>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                    <li className='inline-block h-[244.423px]  w-[1.04px] self-stretch bg-[#EBEBEB] opacity-100 dark:opacity-50'></li>
                </ul>
                <ul className='flex flex-col gap-y-[49px] mt-[-248px]'>
                    <li className='border border-[#EBEBEB] border-dashed w-[1026px]'></li>
                    <li className='border border-[#EBEBEB] border-dashed w-[1026px]'></li>
                    <li className='border border-[#EBEBEB] border-dashed w-[1026px]'></li>
                    <li className='border border-[#EBEBEB] border-dashed w-[1026px]'></li>
                    <li className='border border-[#EBEBEB] border-dashed w-[1026px]'></li>
                </ul>
                
                <svg className='mt-[-179px] bg-[#fff]' xmlns="http://www.w3.org/2000/svg" width="1027" height="208" viewBox="0 0 1027 208" fill="none">
                    <path d="M2 157.49L128.123 112.287C130.497 111.436 133.134 111.754 135.238 113.147L177.168 140.902C179.826 142.66 183.273 142.675 185.945 140.938L274.514 83.3594C278.067 81.0496 282.805 81.9112 285.317 85.324L371.625 202.569C374.751 206.816 381.059 206.929 384.336 202.797L496.085 61.8687C498.812 58.4294 503.801 57.8298 507.266 60.525L624.837 151.991C628.368 154.738 633.465 154.055 636.149 150.477L680.471 91.3824L740.795 5.86723C743.431 2.1305 748.657 1.3597 752.26 4.17635L832.953 67.268C835.483 69.2456 838.949 69.5194 841.758 67.9635L891.732 40.2774C893.672 39.2027 895.971 38.9815 898.081 39.6666L974.383 64.4519C977.082 65.3287 980.044 64.7098 982.166 62.8256L1025 24.7954" stroke="#007AFF" stroke-width="4" stroke-linecap="round"/>
                </svg>

                <ul className='flex'>
                    <li className='ml-[-11px] mt-[26px] w-[70px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Jan 2023
                    </li>
                    <li className='ml-[21px] mt-[26px] w-[25px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Feb
                    </li>
                    <li className='ml-[67px] mt-[26px] w-[26px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Mar
                    </li>
                    <li className='ml-[66px] mt-[26px] w-[30px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Apr
                    </li>
                    <li className='ml-[65px] mt-[26px] w-[28px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        May
                    </li>
                    <li className='ml-[68px] mt-[26px] w-[24px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Jun
                    </li>
                    <li className='ml-[67px] mt-[26px] w-[20px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Jul
                    </li>
                    <li className='ml-[65px] mt-[26px] w-[27px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Aug
                    </li>
                    <li className='ml-[67px] mt-[26px] w-[26px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Sep
                    </li>
                    <li className='ml-[66px] mt-[26px] w-[24px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Oct
                    </li>
                    <li className='ml-[66px] mt-[26px] w-[27px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Nov
                    </li>
                    <li className='ml-[65px] mt-[26px] w-[27px] h-[17px] font-inter text-[14px] not-italic font-[400] leading-normal'>
                        Dec
                    </li>
                </ul>
                <div className='w-[98px] ml-[422.96px] mt-[-281px] h-[96px]'>
                    <svg className='bg-[#ffffff]' xmlns="http://www.w3.org/2000/svg" width="98" height="65" viewBox="0 0 98 65" fill="none">
<path d="M5.93939 0C2.65916 0 0 3.36633 0 7.5189V48.8729C0 53.0255 2.65916 56.3918 5.93939 56.3918H69.6007C71.6933 56.3918 73.6347 57.482 74.7239 59.2688L78.2176 65L82.2158 59.0466C83.3302 57.3872 85.1978 56.3918 87.1967 56.3918H92.0606C95.3409 56.3918 98 53.0255 98 48.8729V7.5189C98 3.36633 95.3409 0 92.0606 0H5.93939Z" fill="white"/>
</svg>
                    <p className='h-[17px]  mt-[-59px] text-[#0000004d] font-inter text-[14px] not-italic font-[400] leading-normal'>Sale 16 Jun</p>
                    <p className='text-[20px] h-[24px] text-[#000000b3] font-inter not-italic font-[700] leading-normal'>$150</p>
                    <img className='ml-[61px] mt-[24px]' src={dot} alt='dot'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chart