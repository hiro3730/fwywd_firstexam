import Head from "next/head";
import { Header } from "../components/Header/Header.jsx";



const Home=()=> {
  return (
    <html lang='ja'>
      <Head>
        <meta charSet=" utf-8"/>
        <title>test</title>
      </Head>

      <body>
        <Header/>
      </body>
    </html>

  );
    
};
export default Home;
