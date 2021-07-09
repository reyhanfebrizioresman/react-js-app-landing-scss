import { useEffect,useState } from "react";
import { Navbar,Hero,Features,About, Presentation, Download,Contact } from "./Components";
import './global.scss'
import { css } from '@emotion/react'
import { SyncLoader } from "react-spinners";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  const [loading,setLoading] = useState(false);
  const override = css`
    display: flex;
    margin-top: 16rem;
    justify-content: center;
  `;
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <div>
      {
        loading ? <SyncLoader color={"#0099ff"} loading={loading} size={40} css={override}/>
        :
        <>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Presentation />
        <Download />
        <Contact />
        </>
      }
    </div>
  );
}

export default App;
