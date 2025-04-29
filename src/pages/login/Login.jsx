import React from 'react';
import logo from '../../assets/img/logo.png';
import loginIllustration from '../../assets/img/loginIllustration.png';
import LoginPartner from '../../components/SocialLogin';
import googleIcon from '../../assets/img/googleIcon.svg';
import facebookIcon from '../../assets/img/facebookIcon.svg';
import InputWithLabel from '../../components/InputWithLabel';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Styles from './OrSection.module.css'

const Signup = () => {
    return (
        <div className="flex justify-center items-center bg-[#FAFAFA] [@media(max-width:767px)]:p-6 [@media(max-width:400px)]:!p-0">
            <div className="h-full w-1/2 p-12 bg-white flex justify-center items-center flex-col max-[767px]:w-100 max-[767px]:p-6 [@media(max-width:767px)]:rounded-xl [@media(max-width:767px)]:border border-[rgba(3,2,41,0.1)] [@media(max-width:400px)]:!rounded-none [@media(max-width:400px)]:border-none">
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="logo" className="w-15" />
                    <h1 className="mt-2 font-medium text-lg">Login</h1>
                </div>
                <div className='flex justify-between items-center w-1/1 mt-5'>
                    <div className="mr-2">
                        <LoginPartner icon={googleIcon} label={"Google"} />
                    </div>
                    <div>
                        <LoginPartner icon={facebookIcon} label={"Facebook"} />
                    </div>
                </div>
                <div className={Styles.orSection}>
                    <div className='border-1 border-[rgba(3,2,41,0.1)] w-full'></div>
                    <div className='px-3'>Or</div>
                    <div className='border-1 border-[rgba(3,2,41,0.1)] w-full'></div>
                </div>
                <div className="mt-5 flex flex-col w-full gap-y-2">
                    <InputWithLabel type={"text"} labelTxt={"Email Address"} />
                    <InputWithLabel type={"password"} labelTxt={"Password"} />
                </div>
                <div className="mt-5 text-sm flex justify-between w-full">
                    <div className='flex items-center'>
                        <input type="checkbox" className="mr-2 mt-1" />
                        Remember me
                    </div>
                    <div>
                        <Link to="/" className="text-[#605BFF]">Reset Password?</Link>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <Button btnText={"Login"} />
                </div>
                <div className='mt-5'>
                    Don't have an account yet? <Link to={'/'} className="text-[#605BFF]">New Account</Link>
                </div>
            </div>
            <div className="h-full w-full p-4 bg-[#FAFAFA] flex justify-center items-center hidden md:flex">
                <img src={loginIllustration} alt="loginIllustration" className="w-125" />
            </div>
        </div>
    );
};

export default Signup;
