
import Image from "next/image";
const Card = ({ title, decription, data }) => {
    return (
        <div>
            <div className="text-center  md:w-[55%] w-full mx-auto">
                <h2 className="pt-[35px] pb-[5px] text-[35px] font-family sm:text-center text-start sm:px-0 px-[20px] sm:w-full w-[70%]">{title}</h2>
                <p className="text-[15px] text-gray-300 sm:block hidden">{decription}</p>
            </div>
            <div className="grid grid-cols-12 gap-[20px] mt-[40px]">
                {data.map((item, index) => {
                    return <div className="md:col-span-6 col-span-12 p-[10px] ticket-card-bg-color rounded-[30px] md:mx-p mx-[20px]" key={index}>
                        <Image src={item.image} alt="" className="w-[100%]" />
                        <div className="flex justify-between items-center p-[20px]">
                            <div className="flex flex-col">
                                <p className="text-[25px]">{item.text}</p>
                                <p className="bg-baseColor text-[12px] py-[5px] px-[15px] mt-[12px] rounded-[15px] self-start cursor-pointer">
                                    100 SR PER GUEST
                                </p>
                            </div>

                            <div className="cursor-pointer">
                                <svg className="w-8 h-8 text-gray-400 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg></div>
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}

export default Card;