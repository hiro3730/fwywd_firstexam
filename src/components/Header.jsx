import Image from "next/image";
import Link from 'next/link';
import logoimg from "../../public/logo.png";

const ITEMS=[
  {link:"#about",title:"ABOUT"},
  {link:"#skills",title:"SKILLS"},
  {link:"#values",title:"VALUES"},
  {link:"#futures",title:"FUTURES"},
];


export const Header=()=> {
  return (
    <header className='container mx-auto'>
        <div className='flex flex-row justify-between items-center'>
          <Link href="">
            <a>
              <Image src={logoimg} width={360} height={180}   alt='logo' placeholder="blur" />
            </a>
          </Link>
          <nav>
            <ul className=' flex  text-text-green'>
              {ITEMS.map((item)=>{
                return(
                  <li key={item.title} className='mx-4'>
                    <a href="item.link">{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
  
    </header>
    
       
  );
};