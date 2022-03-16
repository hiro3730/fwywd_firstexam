import Image from "next/image";
import value1 from "../../../public/value1.png";
import value2 from "../../../public/value2.png";
import value3 from "../../../public/value3.png";

export const Values=()=>{
    return(
        <div id="Values" className=" mx-4 px-2 pt-2 lg:mx-[210px] lg:pb-4 relative  bg-white">
            <div className=" lg:flex items-baseline justify-center">
                <h1 className=" text-center text-text-black tracking-wide text-2xl font-bold">価値観</h1><p className=" text-center lg:ml-4 font-semibold text-text-green">VALUES</p>
            </div>
            <div className="mt-2 pb-8 lg:flex justify-items-center ">
                <div className=" my-3 px-2 basis-1/3">
                    <p className=" text-center mx-[50px] "><Image src={value1}/></p>
                    <h2 className=" text-center my-2 lg:my-4 font-medium">価値観01</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className=" my-3 px-2  basis-1/3 lg:border-x-2 lg:border-x-border-green">
                    <p className=" text-center mx-[50px]"><Image src={value2}/></p>                    
                    <h2 className=" text-center my-2 lg:my-4 font-medium">価値観02</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className=" my-3 px-2 basis-1/3">
                    <p className=" text-center mx-[50px]"><Image src={value3}/></p>                    
                    <h2 className=" text-center my-2 lg:my-4 font-medium">価値観03</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
        </div>
        
        
    )
}