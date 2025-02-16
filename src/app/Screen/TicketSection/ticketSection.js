import Image from "next/image"
import ticketImage from "../../../../public/images/ticketImage.png"

const TicketSection = () => {
    return <div className="section-bg-color text-white pb-[20px] sm:px-0 px-[20px]">
        <div className="text-center  md:w-[50%] w-full mx-auto">
            <h2 className="pt-[35px] pb-[5px] text-[35px] font-family text-gray-300">
                Mall Of: Endless Possibilities
            </h2>
            <p className="text-[15px] text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className="md:w-[60%] w-full mx-auto mt-[35px] relative">
            <Image
                src={ticketImage} alt="Ticket Section" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex items-center justify-center cursor-pointer 
                  w-[50px] h-[50px] rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" className="text-[#0F1500]">
                    <path fill="currentColor" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
                </svg>
            </div>
        </div>

        <div className="md:w-[60%] ticket-card-bg-color shadow-lg mx-auto rounded-[10px] text-white flex justify-between items-center p-[20px]">
            <div className="grid grid-cols-12">
                <div className="md:col-span-11 sm:w-[75%] col-span-12">
                    <p className="text-[13px] text-gray-300">25 SR/GUEST</p>
                    <h2 className="mt-[20px] text-[25px] font-family mb-[10px]">
                        Get your General Access Ticket
                    </h2>
                    <p className="text-[15px] text-gray-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text
                    </p>
                </div>
                <div className="md:col-span-1 col-span-12 flex items-center justify-end">
                    <svg className="w-8 h-8 text-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
}

export default TicketSection