import React from "react";
import Maha from "../assets/MahaDance.png";
import Kerala from "../assets/KeralaDance.png";
import Tamil from "../assets/Tamil Nadu.png"

const Card = () => {
  const data = [
    {
      img: Kerala,
      title: "Kerala",
      Content:
        " Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
      buttonLabel: "view",
    },
    {
        img: Maha,
        title: "Maharashtra",
        Content:
          " Aliquam hendreritl Lorem ipsum dolor sit amet.  accumsan nec.",
        buttonLabel: "view",
      },
      {
        img: Tamil,
        title: "Tamil Nadu",
        Content:
          " Aliquam hendreritl Lorem ipsum dolor sit amet. cbdkwil accumsan nec.",
        buttonLabel: "view",
      }
  ];
  return (
    <>
     <div className="flex flex-wrap justify-evenly gap-8 ">
          {
            data.map((item,index)=>(<div key={index}  className="w-[350px] h-[450px] mt-[50px]  border-[1px] border-[#E9E9E9] rounded-2xl  ">
                <div className="w-[405px]  mt-[21px] ml-[21px]">
                  <img className="w-[300px] h-[250px] rounded " src={item.img} alt="" />
                </div>
                <div className="flex flex-col flex-wrap font-dm-sans ml-[21px]">
                  <h4 className="w-full h-7.5  font-medium text-[20px] leading-[30px] tracking-[0]  text-start  ">
                {item.title}
                  </h4>
                  <h6 className="w-[355px] h-[55px] font-normal text-[10px] leading-4 tracking-[0] text-start ">
                    {item.Content}
                  </h6>
                  <div className="w-[300px] h-[50px] top-[458px] rounded-[16px] border-[1px] border-[#405FF2] flex items-center justify-center ">
                    <div className="w-[34x] h-[27px]  text-[#405ff2] space-x-2 text-[15px] font-medium leading-[27px] px-2 py-3 tracking-[0%] flex   justify-center items-center ">
                      <button>{item.buttonLabel}</button>
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1609 0.860352H5.60538C5.39042 0.860352 5.21648 1.03429 5.21648 1.24925C5.21648 1.46421 5.39042 1.63815 5.60538 1.63815H13.2221L0.663746 14.1966C0.511824 14.3485 0.511824 14.5946 0.663746 14.7465C0.739689 14.8224 0.83922 14.8604 0.938715 14.8604C1.03821 14.8604 1.1377 14.8224 1.21368 14.7465L13.772 2.18805V9.80482C13.772 10.0198 13.9459 10.1937 14.1609 10.1937C14.3759 10.1937 14.5498 10.0198 14.5498 9.80482V1.24925C14.5498 1.03429 14.3758 0.860352 14.1609 0.860352Z"
                            fill="#405FF2"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>))
          }
     </div>
    </>
  );
};

export default Card;
