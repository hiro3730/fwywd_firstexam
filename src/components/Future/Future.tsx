import Image from "next/image";
import futureimg from "../../../public/future.png";
 
export const Future=()=>{
    return(
        <div id="Futures" className=" px-3 pt-72 lg:pb-10 bg-bg-future-sp lg:bg-bg-future-pc bg-no-repeat bg-[length:100%_100%] relative -top-60 -z-10 -mb-60 ">
            <div className=" lg:mx-[210px] lg:flex lg:justify-center">
                <div className=" lg:mr-4 basis-6/12">
                    <p className=" tracking-wider mb-5">
                        <div className="lg:flex items-baseline justify-start">
                            <h1 className=" text-center text-text-black tracking-wide text-2xl font-bold">3年後にやりたいこと</h1><p className=" text-center ml-4 font-semibold text-text-green">FUTURE</p>
                        </div>
                    </p>
                    <p className=" tracking-wider" >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <p className=" text-center lg:ml-4 basis-6/12 ">
                    <Image src={futureimg}/>
                </p>
            </div>
        </div>
        
    )
}