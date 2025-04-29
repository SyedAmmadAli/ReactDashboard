import React from 'react'

const SocialLogin = (props) => {
  return (
    <div>
      <button className="flex justify-center items-center bg-[#F7F7F8] hover:bg-[#F1F1F2] rounded-lg py-2.5 px-6 cursor-pointer w-full [@media(min-width:860px)]:w-40 [@media(min-width:768px)]:w-30 [@media(max-width:767px)]:w-40 [@media(max-width:340px)]:!w-33">
        <img src={props.icon} alt="logo" className='w-5 h-5 mr-2' />
        <p>{props.label}</p>
      </button>
    </div>
  )
}

export default SocialLogin;
