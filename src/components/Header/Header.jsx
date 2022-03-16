import Image from "next/image"
import Link from 'next/link'
import logoImg from '../../../public/logo.png'
import heroImg from '../../../public/hero.png'


const ITEMS=[
  {link:"#About",title:"ABOUT"},
  {link:"#Skills",title:"SKILLS"},
  {link:"#Values",title:"VALUES"},
  {link:"#Futures",title:"FUTURES"},
];


export const Header=()=> {
  return (
    <header>
        <div id="Header" className='lg:container  lg:flex  lg:justify-between lg:items-center'>
          <Link href="#Header">
            <a>
             <p className=" text-center"><Image src={logoImg} width={200} height={100}   alt='logo' placeholder="blur"  /></p>
            </a>
          </Link>
          <nav>
            <ul className='flex justify-around  text-text-green font-semibold'>
              {ITEMS.map((item)=>{
                return(
                  <li key={item.title} className=' lg:m-3'>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div id="hero" className=" py-5 px-14 lg:flex lg:justify-between lg:items-center    bg-bg-green bg-center">
          <ul className=" mb-2 lg:ml-5  "  >
            <li className=" my-2 text-center text-white text-3xl lg:text-5xl lg:tracking-widest" >メインタイトル</li>
            <li className=" my-2 text-center lg:text-left text-white lg:text-2xl lg:tracking-wider" >サブタイトル</li>
          </ul>
          <p className=" text-center">
            <Image src={heroImg}  alt="hero" className="col-start-3 object-center" />
          </p>

        </div>
    </header>

    
       
  );
};