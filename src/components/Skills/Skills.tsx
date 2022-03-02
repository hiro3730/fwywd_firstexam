import { SectionTitle } from "../SectionTitle/index";
import Image from "next/image";
import skillimg from "../../../public/skill.png"
import bgskill from "../../../public/bg-skills.png"

export const Skills=()=>{
    return(
        <div id="Skills" className=" h-[600px]  pt-[120px] bg-bg-skill-pc bg-no-repeat bg-[length:100%_100%]  relative -top-14 -mb-14 ">
            <div className=" px-[210px] flex justify-center content-center  ">
                <div className=" basis-5/12 pt-6  mr-2 "><Image src={skillimg}/></div>
                <div className=" basis-7/12  ml-2 ">
                    <SectionTitle title="スキル" lead="SKILLS" position="start" />
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