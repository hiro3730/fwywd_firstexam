import Head from "next/head";
import { Header } from "../components/Header.jsx";



const Home=()=> {
  return (
    <html lang='ja'>
      <Head>
        <meta charSet=" utf-8"/>
        <title>fwywd</title>
      </Head>

      <body>
        <Header/>
      </body>
    </html>

  );
    
};
export default Home;
