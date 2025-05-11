import React from "react";
import { Button } from "../../components/ui/button";

export const HomeNigeria = (): JSX.Element => {
  return (
    <div className="bg-[#180e72] flex flex-row justify-center w-full">
      <div className="bg-[#180e72] overflow-hidden w-[430px] h-[932px] relative">
        {/* World map and Nigeria flag */}
        <div className="absolute w-[277px] h-[253px] top-[344px] left-[76px]">
          <img
            className="absolute w-[277px] h-[205px] top-0 left-0"
            alt="World map illustration"
            src="https://c.animaapp.com/majtsznhUYdjzH/img/undraw-world-re-768g-1.svg"
          />
          <img
            className="absolute w-[61px] h-[61px] top-48 left-28 object-cover"
            alt="Nigeria flag"
            src="https://c.animaapp.com/majtsznhUYdjzH/img/nigeria-3.png"
          />
        </div>

        {/* Text description */}
        <div className="absolute w-[277px] h-[57px] top-[675px] left-[77px]">
          <div className="absolute w-[277px] top-0 left-0 [font-family:'Kurale',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            Your Best and fastest Receiving
          </div>
          <div className="absolute top-[27px] left-[66px] [font-family:'Kurale',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            Payment Method
          </div>
        </div>

        {/* Instant Receive text */}
        <div className="absolute top-[637px] left-[138px] [font-family:'Lalezar',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
          Instant Receive
        </div>

        {/* Get Started button */}
        <Button className="absolute w-[370px] h-[57px] top-[768px] left-[33px] bg-[#304ffe] rounded-[30px] hover:bg-[#304ffe]/90">
          <span className="[font-family:'Impact-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Get Started
          </span>
        </Button>

        {/* Logo and status bar area */}
        <div className="absolute w-[523px] h-[379px] top-[-111px] left-[-118px]">
          <div className="absolute w-[523px] h-[379px] top-0 left-0">
            <div className="absolute w-[25px] h-[25px] top-[354px] left-[358px]" />
            <div className="absolute w-[152px] h-[206px] -top-2.5 left-[95px] bg-[url(https://c.animaapp.com/majtsznhUYdjzH/img/ellipse-1.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[111px] h-[135px] top-11 left-5"
                alt="Ellipse"
                src="https://c.animaapp.com/majtsznhUYdjzH/img/ellipse-1.svg"
              />
            </div>
            <div className="absolute top-[298px] left-[279px] [font-family:'Kumar_One',Helvetica] font-normal text-[#fbf1f1] text-2xl tracking-[0] leading-[normal]">
              iReceive
            </div>
          </div>

          {/* Status bar elements */}
          <img
            className="absolute w-[370px] h-[15px] top-[156px] left-[148px]"
            alt="Pointer"
            src="https://c.animaapp.com/majtsznhUYdjzH/img/pointer.svg"
          />
          <div className="absolute w-[341px] h-[17px] top-[123px] left-[156px]">
            <div className="absolute w-8 h-[17px] top-0 left-0">
              <div className="absolute w-[30px] -top-px -left-px [-webkit-text-stroke:1px_#707070] [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
                9:41
              </div>
            </div>
            <div className="absolute w-[67px] h-3 top-0.5 left-[274px]">
              <div className="absolute w-6 h-3 top-0 left-[42px] bg-[url(https://c.animaapp.com/majtsznhUYdjzH/img/rectangle.svg)] bg-[100%_100%]">
                <div className="relative w-[18px] h-2 top-0.5 left-0.5 bg-white rounded-[1.6px]" />
              </div>
              <img
                className="absolute w-[17px] h-[11px] top-0 left-0"
                alt="Signal icon"
                src="https://c.animaapp.com/majtsznhUYdjzH/img/combined-shape.svg"
              />
              <img
                className="absolute w-[15px] h-[11px] top-0 left-[22px]"
                alt="Wi-Fi icon"
                src="https://c.animaapp.com/majtsznhUYdjzH/img/wi-fi.svg"
              />
            </div>
          </div>
        </div>

        {/* Sign in text */}
        <div className="absolute top-[840px] left-[134px] [font-family:'Times-Bold',Helvetica] font-bold text-transparent text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="text-[#e9e7e7]">Already have an account ? </span>
          <span className="text-[#9beef6] cursor-pointer">Sign in</span>
        </div>

        {/* Nigeria text */}
        <div className="absolute top-[601px] left-[197px] [font-family:'Lalezar',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
          Nigeria
        </div>
      </div>
    </div>
  );
};
