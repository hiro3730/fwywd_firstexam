import Head from "next/head";
import { Header } from "../components/Header/Header.jsx";
import { About } from "../components/about/about";
import { Skills } from "../components/Skills/Skills";
import { Values } from "../components/Values/Values";
import { Future } from "../components/Future/Future";
import { Footer } from "../components/footer/footer";

const Home=()=> {
  return (
    <html lang='ja'>
      <Head>
        <meta charSet=" utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <title>test</title>
      </Head>

      <body>
        <Header/>
        <About />
        <Skills />
        <Values/>
        <Future/>
        <Footer />
      </body>
    </html>

  );
    
};
export default Home;
