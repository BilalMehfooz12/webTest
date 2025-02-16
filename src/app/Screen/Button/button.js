const Button = ({ text, showBtnArrow }) => {
    return <div >
        <button className={`bg-gradient-to-b from-baseColor to-[#DCBB75] text-[17px] h-[40px] ${showBtnArrow ? 'pl-[20px] pr-[15px]' : 'px-[35px]'} rounded-[16px] flex gap-x-[20px] items-center hover:opacity-[0.9]`}>
            {text}
            {showBtnArrow && <svg className="w-8 h-8 text-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>}
        </button>
    </div>
}

export default Button