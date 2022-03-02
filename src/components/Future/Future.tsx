import Image from "next/image";
import futureimg from "../../../public/future.png";
 
export const Future=()=>{
    return(
        <div id="Futures" className=" pt-72 pb-10  bg-bg-future-pc bg-no-repeat bg-[length:100%_100%] relative -top-60 -z-10 -mb-60 ">
            <div className=" mx-[210px] flex justify-center">
                <div className=" mr-4 basis-6/12">
                    <p className=" tracking-wider mb-5">
                    <div className="flex items-baseline justify-start">
                        <h1 className=" text-text-black tracking-wide text-2xl font-bold">3年後にやりたいこと</h1><span className=" ml-4 font-semibold text-text-green">FUTURE</span>
                    </div>
                    </p>
                    <p className=" tracking-wider" >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <p className=" ml-4 basis-6/12">
                    <Image src={futureimg}/>
                </p>
            </div>
        </div>
        
    )
}