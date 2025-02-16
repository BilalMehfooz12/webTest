"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeroSection from "@/app/Screen/HeroSection/heroSection";
import logo from "../../././../../public/images/logo.png";
import Container from "@/app/Screen/Container/container";
import Button from "@/app/Screen/Button/button";
import { navData } from "@/app/Screen/Data/data";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname();

    return (
        <div className="bg-image-banner">
            <header className=" text-white bg-header py-4 fixed w-full top-0 z-50 ">
                <div className=" mx-auto flex justify-between items-center lg:px-[140px] sm:px-[5px] sm:pr-[10px] px-[24px]">
                    <div className="flex items-center md:px-[10px]">
                        <Image src={logo} alt="" height={40} />
                    </div>

                    <div className="hidden md:flex gap-[20px] items-center">
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" className="text-gray-400" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" /></svg></div>

                        <div><svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" /></svg></div>

                        <div><svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" /></svg></div>

                        <div><svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480" /></svg></div>

                        <div>
                            <Button text="Log in" />
                        </div>
                    </div>

                    <button className="md:hidden text-baseColor" onClick={() => setIsOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
                {isOpen && (
                    <div className="fixed ">
                        <div className="fixed top-0 right-0 w-full h-full section-bg-color text-white shadow-lg transform translate-x-0 transition-transform duration-300 py-6">
                            <div className="flex justify-between items-center px-6">
                                <div className="flex items-center -mt-[8px]">
                                    <Image src={logo} alt="" height={40} />
                                </div>

                                <button onClick={() => setIsOpen(false)} className="text-baseColor">
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="mt-12 flex flex-col text-start">
                                {navData.map((item, index) => {
                                    return <div key={index} onClick={() => router.push(item.path)} className={`${index == 0 ? 'border-y' : 'border-b'} border-b section-bg-color p-[20px]`}>
                                        {item.name}
                                    </div>
                                })}
                            </nav>
                        </div>
                    </div>
                )
                }

                <div className="md:block hidden border-y border-gray-400 mt-[20px] px-[10px]">
                    <Container>
                        <div className="flex justify-between items-center py-[10px] ">
                            {navData.map((item, index) => {
                                return <div key={index} onClick={() => router.push(item.path)} className="cursor-pointer">
                                    {item.name}
                                </div>
                            })}
                        </div>
                    </Container>
                </div>
            </header >
            {pathname === "/" && <HeroSection />}
        </div >
    );
};

export default Header;
