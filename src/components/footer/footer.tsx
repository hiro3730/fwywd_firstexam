import Image from "next/image";
import footerlogo from "../../../public/logo_white.png";
import twitterlogo from "../../../public/twitter.png";
import facebooklogo from "../../../public/facebook.png";

export const Footer=()=>{
    return(
        <div className=" bg-bg-black relative ">
            <p className=" py-5 align-middle text-center text-sm font-light text-white">CREATED BY  　　 <span className=" text-lg font-medium">名前 太郎</span></p>
            <p className=" text-center"><Image src={footerlogo} width={130} height={150}/></p>
            <div className=" my-7 flex justify-center">
                <p><Image src={twitterlogo} width={20} height={20} /></p>
                <p><Image src={facebooklogo} width={20} height={20} /></p>
            </div>
            <p className=" pb-5 text-xs font-light text-center text-white">© 2021 KIKAGAKU </p>
        </div>
    )
};