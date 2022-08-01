import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'
import Aboutus from '../components/Aboutus'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import Mint from '../components/Mint'
import Roadmap from '../components/Roadmap'
import Slider from '../components/Slider'
import Team from '../components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MetaBeer Bottle is a collection of 9999 unique collectible bottles for the digital world and easily traded through the use of the Polygon Network." />
        <meta name="keywords" content="MetaBeer Bottle,MetaBeer Bottles,MetaBeer Bottle NFT,MetaBeer  NFT,Meta Beer Bottle,Meta Beer Bottles,Meta Beer Website,Meta Beer Bottle Website,Meta Beer Bottles ebsite,MetaBeer Bottle Website,MetaBeer Bottles Website,Meta Bottle Verse,Meta BottleVerse,BottleVerse,Meta Beer Logo,MetaBeer Logo,Meta Beer Bottle Logo,MetaBeer Bottle Logo,MetaBeer,Meta NFT,Beer NFT,NFT,Meta,MetaBeer Bottle Metaverse" />
        <meta property="og:image" content="https://www.metabeerbottle.com/_next/image?url=%2Fimages%2FMain_Banner_Img.png&w=2048&q=75" />
        <meta property="og:image:width" content="675" />
        <meta property="og:image:height" content="1000" />
        <title>MetaBeer Bottle</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Script src='/js/jquery-3.6.0.min.js' strategy='afterInteractive' />
      <Script src='/js/owl.carousel.min.js' strategy='afterInteractive' />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy='afterInteractive' />
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' strategy='afterInteractive' />
      <Script src='/js/script.js' strategy='afterInteractive' />
      <div className="progressbar" id="progressbar"></div>
      {/* =============== Header =============== */}
      <Header />
      {/* =============== Main Banner ========== */}
      <MainBanner />
      <Slider />
      {/* ============= Minting area ========== */}
      <Mint />
      {/* ============ About us ============ */}
      <Aboutus />
      {/* ============ Roadmap ============== */}
      <Roadmap />
      {/* =============== Team =============== */}
      <Team />
      {/* ============== Faq ==================== */}
      <Faq />
      {/* =============== Footer =============== */}
      <Footer />
      {/* ================= Toaster =============== */}
      <Toaster />
    </>
  )
}
