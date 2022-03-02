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
        <div className='container  flex flex-row justify-between items-center'>
          <Link href="">
            <a>
              <Image src={logoImg} width={200} height={100}   alt='logo' placeholder="blur" />
            </a>
          </Link>
          <nav>
            <ul className=' flex  text-text-green font-semibold'>
              {ITEMS.map((item)=>{
                return(
                  <li key={item.title} className='mx-4'>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div id="hero" className="grid grid-cols-2 gap-96    bg-bg-green bg-center">
          <ul className="grid grid-lows-2 place-content-center  "  >
            <li className=" text-white text-4xl tracking-widest" >メインタイトル</li>
            <li className=" text-white" >サブタイトル</li>
          </ul>
          <Image src={heroImg}  alt="hero" className="col-start-3 object-center" />

        </div>
    </header>

    
       
  );
};