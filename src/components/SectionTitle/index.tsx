export const SectionTitle=(props)=>{
    return(
        <div className={`flex items-baseline justify-${props.position}`}>
            <h1 className=" text-text-black tracking-wide text-2xl font-bold">{props.title}</h1>
            <span className=" ml-4 font-semibold text-text-green">{props.lead}</span>
        </div>
    
    );
};