import Button from "../Button/button";
import Container from "../Container/container";
import Card from "../card/card";
import Slider from "../slider/slider";
import { sliderData, experinceData, experinceSliderData } from "../Data/data";

const BookTicket = () => {
    return (
        <div className="section-bg-color text-white">
            <Container>
                <div className="grid grid-cols-12 md:px-0 sm:mx-[60px] mx-[20px]">
                    <div className="md:col-span-6  col-span-12">
                        <h2 className="pt-[35px] pb-[5px] text-[35px] font-family">
                            Book General Access ticket and enjoy the attractions for free
                        </h2>
                        <div className="mt-[20px]">
                            <Button text="Book General Access Ticket" showBtnArrow={true} />
                        </div>
                    </div>
                </div>

                <div className="mt-[40px] sm:mx-[60px]">
                    <Slider data={sliderData} />
                </div>

                <div className="mt-[10px]">
                    <Card title="Experience the Finest Cuisine" decription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." data={experinceData} />
                </div>

                <div className="mt-[60px]">
                    <div className="grid grid-cols-12 gap-x-[30px]">
                        <div className="lg:col-span-3 md:col-span-4 col-span-12 md:mt-[30%] mt-[5%] md:px-0 px-[20px]">
                            <p className="text-[25px] font-family sm:w-full w-[50%] ">
                                Curate your experience as you like
                            </p>
                            <div className="mt-[20px]">
                                <Button text="Book Tickets" showBtnArrow={true} />
                            </div>
                        </div>

                        <div className="lg:col-span-9 md:col-span-8 col-span-12 md:mt-0 mt-[5%]">
                            <Slider data={experinceSliderData} odd={true} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BookTicket;