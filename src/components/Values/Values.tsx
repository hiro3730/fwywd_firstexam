import { SectionTitle } from "../SectionTitle/index";
import Image from "next/image";
import value1 from "../../../public/value1.png";
import value2 from "../../../public/value2.png";
import value3 from "../../../public/value3.png";

export const Values=()=>{
    return(
        <div id="Values" className=" mx-[210px] pb-4 relative  bg-white">
            <SectionTitle title="価値観" lead="VALUES" position="center"/>
            <div className="mt-2 pb-8 flex justify-items-center ">
                <div className=" px-2 basis-1/3">
                    <p className=" mx-[50px] "><Image src={value1}/></p>
                    <h2 className=" text-center my-4 font-medium">価値観01</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className=" px-2  basis-1/3 border-x-2 border-x-border-green">
                    <p className=" mx-[50px]"><Image src={value2}/></p>                    
                    <h2 className=" text-center my-4 font-medium">価値観02</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className=" px-2 basis-1/3">
                    <p className=" mx-[50px]"><Image src={value3}/></p>                    
                    <h2 className=" text-center my-4 font-medium">価値観03</h2>
                    <p className=" tracking-wider">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
        </div>
        
        
    )
}