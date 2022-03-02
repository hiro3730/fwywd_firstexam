import { SectionTitle } from "../SectionTitle/index";
import Image from "next/image";
import futureimg from "../../../public/future.png";
 
export const Future=()=>{
    return(
        <div id="Futures" className=" pt-72 pb-10  bg-bg-future-pc bg-no-repeat bg-[length:100%_100%] relative -top-60 -z-10 -mb-60 ">
            <div className=" mx-[210px] flex justify-center">
                <div className=" mr-4 basis-6/12">
                    <p className=" tracking-wider mb-5"><SectionTitle title="3年後にやりたいこと" lead="FUTURE" position="start"/></p>
                    <p className=" tracking-wider" >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <p className=" ml-4 basis-6/12">
                    <Image src={futureimg}/>
                </p>
            </div>
        </div>
        
    )
}