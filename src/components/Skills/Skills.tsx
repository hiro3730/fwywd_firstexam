import Image from "next/image";
import skillimg from "../../../public/skill.png"
import bgskill from "../../../public/bg-skills.png"

export const Skills=()=>{
    return(
        <div id="Skills" className=" py-12 px-5 bg-bg-skills-sp bg-[length:100%_100%] bg-no-repeat lg:h-[600px]  lg:pt-[100px] lg:bg-bg-skill-pc lg:bg-no-repeat lg:bg-[length:100%_100%]  lg:relative lg:-top-14 lg:-mb-14 ">
            <div className=" lg:ml-10 lg:flex lg:items-baseline lg:justify-center">
                <h1 className=" text-center text-text-black tracking-wide text-2xl font-bold">スキル</h1><p className=" text-center ml-4 font-semibold text-text-green">SKILLS</p>
            </div>
            <div className=" lg:px-[210px] lg:flex justify-center content-center  ">
                <div className=" basis-5/12 pt-6  mr-2 "><Image src={skillimg}/></div>
                <div className=" basis-7/12  ml-2 ">
                    <p className=" text-sm mt-2">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    <div className=" scale-y-90 bg-white px-9 pt-3 pb-5">
                        <div className="pt-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className=" text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-text-green ">
                                        skillskill
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className=" w-[87%] overflow-hidden h-3 mb-1 text-xs flex rounded bg-progress-pale">
                                    <div className=" w-[40%] shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-progress-deep"></div>
                                </div>
                                <span className="text-xs font-semibold inline-block text-text-green">
                                    40%
                                </span>
                            </div>
                        </div>   
                        <div className="pt-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className=" text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-text-green ">
                                        skillskill
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className=" w-[87%] overflow-hidden h-3 mb-1 text-xs flex rounded bg-progress-pale">
                                    <div className=" w-[40%] shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-progress-deep"></div>
                                </div>
                                <span className="text-xs font-semibold inline-block text-text-green">
                                    40%
                                </span>
                            </div>
                        </div>   
                        <div className="pt-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className=" text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-text-green ">
                                        skillskill
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className=" w-[87%] overflow-hidden h-3 mb-1 text-xs flex rounded bg-progress-pale">
                                    <div className=" w-[40%] shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-progress-deep"></div>
                                </div>
                                <span className="text-xs font-semibold inline-block text-text-green">
                                    40%
                                </span>
                            </div>
                        </div>   
                        <div className="pt-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className=" text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-text-green ">
                                        skillskill
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className=" w-[87%] overflow-hidden h-3 mb-1 text-xs flex rounded bg-progress-pale">
                                    <div className=" w-[40%] shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-progress-deep"></div>
                                </div>
                                <span className="text-xs font-semibold inline-block text-text-green">
                                    40%
                                </span>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        
    );
};