"use client";
import Footer from "@/components/Footer";
import Sider from "@/components/Sider";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";
import Feature from "@/components/Feature";
import Faq from "@/components/FAQ";
import Cta from "@/components/CTA";
import SectionTestional from "@/components/SectionTestional";
import "animate.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



export default function Home() {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
   
  })
  return (
    <ReactLenis root>
      <>
       <HeroSection />
       <Sider />
       <SectionTestional />
       <Faq />

       <Feature />
       <Cta />

       <NewsLetter />

       <Footer />
    </>
      
    </ReactLenis>
  )
}



// export default function Home() {

//   return (
//     <>
//       <HeroSection />
//       <Sider />
//       <SectionTestional />
//       <Faq />

//       <Feature />
//       <Cta />

//       <NewsLetter />

//       <Footer />
//     </>
//   );
// }
