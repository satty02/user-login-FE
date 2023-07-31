import React, {useState} from 'react';
import axios from 'axios';
import image1 from '../images/logo.png';
import image2 from '../images/logo2.png';
import off_eye from '../images/visibility_off.png';
import on_eye from '../images/remove_red_eye.png';
import check_circle from '../images/check_circle.png'
import close from '../images/close.png'
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, SetShowPassword] = useState(false);
    const [dob,setDob] = useState('');
    const [name, setName] = useState('');
    

     const [errorMessageUsername, setErrorMessageUsername] = useState('');
     const [errorMessagePassword, setErrorMessagePassword] = useState('');
     const [errorMessageDob, setErrorMessageDob] = useState('');
    
     const [successMessage, setSuccessMessage] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password || !dob) {
            alert('Please fill in all the fields.');
            return;
        }
        
        try {
            setErrorMessageUsername('');
            setErrorMessagePassword('');
            setErrorMessageDob('');
            // Send the user login credentials to the API endpoint
            const response = await axios.post('http://user-login-be.vercel.app/api/login', {
              username,
              password,
              dob,
            });

            const {data} = response;


            if (data.success){
                // On successfull login display the success message

                setName(data.result);
                

                setSuccessMessage('Login successful! Redirecting to Dashboard...');
                setTimeout(()=> setSuccessMessage(''),5000);

                setTimeout(()=>navigate(`/user`),5000)

            }else {
                if(data.message==='Email doesn’t exist'){
                    setErrorMessageUsername('Email doesn’t exist')
                }else if (data.message==='Password is not correct'){
                    setErrorMessagePassword("Incorrect Password");
                }else if(data.message==='Invalid date'){
                    setErrorMessageDob('Invalid date')
                }else {
                    alert('Invalid Credentials')
                }
                
            }
        } catch (error){
            console.error(error);
        }
    }

    const handleEye = (e) =>{
        e.preventDefault();
        SetShowPassword(!showPassword);
    };

    const handleSuccess =()=>{
        setSuccessMessage(false)
    };

    return (
        <>
            <section class="main-container">
                <div className=' ml-[36px] mt-[825px] w-[267px] h-[55px] gap-[8px] flex'>
                    <img src={image2}
                        className=''
                        alt='company-logo'/>
                    <div className=' w-[203px] h-[37px] gap-[4px] mt-[9px] '>
                        <p className='w-[77px] h-[15px] font-Inter text-[12px] font-[400] leading-[15px] tracking-[-0.01em] text-left'>Developed by</p>
                        <p className='w-[203px] h-[18px] font-Inter text-[15px] font-[600] leading-[18.15px] tracking-[-1%] text-left text-[#F8FAFC]'>QualyTrust IT Services, India</p>
                    </div>
                </div>

            


                <img src={image1}
                    alt='logo'
                    className='w-[368px] h-[322px] mt-[295px] ml-[-151px]'/>
                <div class="form-container">
                    <div class=" rounded-[16px] p-[40px] gap-[16px] bg-[#FBFBFB] shadow-[0_1px_3px_0px_rgba(0,0,0,0.08)]">
                        <h1 class="sign-header font-inter">
                            Sign in to get started
                        </h1>

                        <form onSubmit={handleLogin}>

                            {/*Email Input  */}
                            <div className={`common-container pt-[12px] pb-0 px-[16px] ${errorMessageUsername?'ring-[#E21E1E] ring-[2px]':''}`}>
                                <div className="relative bg-inherit ">
                                    <input 
                                        type="text" 
                                        id="username" 
                                        name="username" 
                                        className="peer  font-inter  w-[544px] text-[#000] placeholder-transparent" 
                                        onChange={(e)=>setUsername(e.target.value)} 
                                        value={username} 
                                        placeholder="User name"
                            
                                    />
                                    <label htmlFor="username" className={`common-label font-inter left-0 -top-2 text-[12px] text-[#ECECEC] bg-inherit peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-0 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:h-[15px] transition-all`}>User name</label>
                                </div>
                            </div>

                            <div>{errorMessageUsername && <p className='error-msg font-inter mt-[-16px]'>{errorMessageUsername}</p>}</div>

                            {/* Password Input */}
                            <div className={`common-container ${errorMessagePassword?'ring-[#E21E1E] ring-[2px]':''}`}>
                                <div className="relative bg-inherit ">
                                    <input 
                                        type={showPassword ?"text" :"password"} 
                                        id="password" 
                                        name="password" 
                                        className=" font-inter peer  w-[516px] placeholder-transparent"  
                                        placeholder="Password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    <label for="password" className={`common-label font-inter left-0 -top-2 text-[12px] text-[#ECECEC] bg-inherit peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-0 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:h-[15px] transition-all`}>Password</label>
                                </div>
                                <button onClick={handleEye} className="relative w-[20px] h-[20px] mt-[-12px]  py-[10px] px-[10px]  overflow-hidden">
                                    <img
                                    src={showPassword?on_eye:off_eye}
                                    alt="eye"
                                    className="absolute top-0 left-0 w-[20px] h-[20px] opacity-70 pointer-events-none"
                                    />
                                </button>
                            </div>

                            {errorMessagePassword && <p className='error-msg font-inter mt-[-15px]'>{errorMessagePassword}</p>}
        
                            {/*Date Input  */}
                            <div className={`common-container pt-[12px] pb-0 px-[16px] ${errorMessageDob?'ring-[#E21E1E] ring-[2px]':''}`}>
                                <div className="relative bg-inherit ">
                                    <input 
                                        type="datetime-local" 
                                        id="Date of birth" 
                                        name="Date of birth" 
                                        className={`peer font-inter w-[544px] ${dob?'':'text-[white]'}  placeholder-transparent focus:text-[#000]`}    
                                        onChange={(e)=>setDob(e.target.value)}
                                        
                                    />
                                    <label htmlFor="Date of birth" className={`common-label font-inter ${dob?'left-0 -top-2 text-[12px]':"left-0 top-1 text-[15px]"}  text-[#ECECEC] bg-inherit peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-0 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:h-[15px] transition-all`}>Date of birth</label>
                                </div>
                            </div>
                            {errorMessageDob && <p className='error-msg font-inter mt-[-15px] '>{errorMessageDob}</p>}


                            {/* Credentials utility */}
                            <div class="flex items-center justify-between my-[16px]">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 bg-gray-50  focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="flex-[1_0_0%] font-inter leading-normal text-[16px] font-medium text-[#000] opacity-[0.8999999761581421]">Keep me login</label>
                                    </div>
                                </div>
                                <a href="/" class="font-inter leading-normal underline text-right text-[16px] font-medium text-[#000] opacity-[0.8999999761581421]">Forgot password?</a>
                            </div>

                            <button type="submit" class="w-full mt-[0px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        
                        </form>
                    </div>
                </div>

                    {/* SUCCESS NOTIFICATION */}
                {    successMessage &&
                 <div className='success-alert ml-[-1200px] mt-[617px]'>
                    <img src={check_circle} className='w-[40px] h-[40px]' alt='check circle'/>
                    <p className='flex flex-col  justify-center  text-[20px] h-[24px] w-[308px] text-[#000] font-inter not-italic font-[500] leading-[119.523%] opacity-[0.8999999761581421]'>Welcome {name} </p>
                    <button onClick={handleSuccess} className="relative w-[32px] h-[32px] overflow-hidden">
                                    <img
                                    src={close}
                                    alt="eye"
                                    className="absolute top-0 left-0 w-[32px] h-[32px]"
                                    />
                    </button>
                </div>
}
                
            </section>
        </>
    )
}

export default Login
