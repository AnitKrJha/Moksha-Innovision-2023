import Image from "next/image";
import { useRef } from "react";
import FaqContainer from "./FaqContainer";


const FaqMain = () => {
  const containerRef: any = useRef();
  return (
    <div
      className="w-full relative  pt-[7vh]"
      ref={containerRef}
    >
      <div className="flex flex-col md:flex-row-reverse  md:px-[5vw]  lg:px-[8vw] items-center md:justify-between min-h-[93vh] pb-8">
        <div className="w-[50%] md:px-[5%] lg:px-[8%]">
          <div className="h-[30vh] md:h-[50%]   mt-10">
            <Image
              src={"peacock.svg"}
              alt=""
              width={100}
              height={100}
              className="owl-big w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-[60vw] md:mt-10 flex  lg:w-[38vw]">
          <FaqContainer />
        </div>
      </div>

    </div>
  );
};

export default FaqMain;
/* 
<div className="grid grid-cols-12 grid-rows-6 max-w-7xl m-auto h-[93vh]  z-10 pt-8 transition ">
          <div className="owl relative -ml-8 -mt-8  col-start-2 col-end-12 sm:col-end-5 md:col-end-6  row-start-1 row-end-7 flex items-center justify-center  w-0 md:w-80 lg:w-96  ">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" owl-big"
            />
          </div>
          <div className="cloud col-start-9 col-end-12 md:col-start-5 md:col-end-7   items-start md:items-end sm:-mt-4 hidden md:flex row-start-2 md:row-start-2 z-[11]"></div>
          <div className="Faqs  z-10 col-span-10  col-start-2 md:col-start-7 lg:col-start-7 col-end-12  row-start-3 md:row-start-2 faq-container">
            <FaqContainer />
          </div>
          <div className="row-start-1 row-span-2 col-span-full flex mb-3 mx-auto sm:hidden">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" relative owl-small"
            />
          </div>
        </div>
*/
