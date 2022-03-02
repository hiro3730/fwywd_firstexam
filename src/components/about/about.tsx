import Image from "next/image";
import about_1 from "../../../public/about-1.png";
import about_2 from "../../../public/about-2.png";
import about_3 from "../../../public/about-3.png"

export const About=()=>{
    return(
        <section id="About" className=" pt-10 pb-20 bg-bg-about-pc bg-center bg-no-repeat bg-cover ">
            <div className="flex items-baseline justify-center">
                <h1 className=" text-text-black tracking-wide text-2xl font-bold">私について</h1><span className=" ml-4 font-semibold text-text-green">ABOUT</span>
            </div>
            <div className=" w-5/6 my-7 flex mx-auto px-[100px] ">
                <div className=" mx-6">
                    <div className=" w-9/12 mx-auto px-6"><Image className=" mx-auto" src={about_1} width={160} height={130} alt="aboutimg" placeholder="blur"/></div>
                    <h2 className=" text-center text-text-green font-bold ">趣味</h2>     
                    <p className=" text-text-black">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div> 
                <div className=" mx-6">
                    <div className=" w-9/12 mx-auto px-5"><Image src={about_2} width={160} height={130} alt="about2img" placeholder="blur"/></div>
                    <h2 className=" text-center text-text-green font-bold">好きな食べもの</h2>
                    <p className=" text-text-black">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className=" mx-6">
                    <div className=" w-9/12 mx-auto px-6"><Image src={about_3} width={160} height={130} alt="about3img" placeholder="blur"/></div>
                    <h2 className=" text-center text-text-green font-bold">性格</h2>
                    <p className=" text-text-black">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
        </section>
        
    );
};