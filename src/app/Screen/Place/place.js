
import Image from "next/image";
import Button from "../Button/button";
import Map from "../../../../public/images/map.png"
const Place = () => {
    return <div className="section-bg-color">
        <div className="w-[80%] mx-auto">
            <div className="md:grid md:grid-cols-12 gap-x-[20px] flex flex-col-reverse">
                <div className="md:col-span-6 col-span-12">
                    <Image src={Map} alt="" />
                </div>

                <div className="lg:col-span-3 md:col-span-6 col-span-12 flex items-center text-white md:mt-0 mt-[30px]">
                    <div className="flex flex-col">
                        <p className="text-[12px] text-gray-400">EXPERIENCE THE GROVES</p>
                        <p className="text-[25px] py-[15px] font-family">Find your place</p>
                        <p className="text-[12px] text-gray-400">
                            Our interactive map will show you the way to the shops and restaurants that you want to see.
                        </p>
                        <div className="mt-[25px]">
                            <Button text="Open the Map" showBtnArrow={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Place;