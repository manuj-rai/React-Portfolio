import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Manuj Rai - React Portfolio</title>
        <meta name="google-site-verification" content="gSlh7T20iaZygVYTxWU7ebIY6smlJFA33MfSiUex5ME" />
        <meta name="description" content="A modern React-based personal portfolio showcasing tsParticles integration, cutting-edge UI/UX design, and development with React, Next.js, HTML, CSS, and TypeScript."/>
        <meta name="keywords" content="Manuj Rai, Manuj Rai portfolio, personal portfolio, React portfolio, Next.js portfolio, HTML CSS JavaScript, modern UI/UX design, Framer Motion, 3D website, particle effects, web developer portfolio" />
        <meta name="author" content="Manuj Rai" />
        <meta name="theme-color" content="#f13024" />
        <meta property="og:title" content="Manuj Rai - React Portfolio" />
        <meta property="og:description" content="React personal portfolio with tsParticles and modern ui/ux design using reat, nextjs, html, css, typescript..." />
        <meta property="og:url" content="https://manuj-rai-react-portfolio.vercel.app/"/>
        <meta property="og:image" content="https://manuj-rai-react-portfolio.vercel.app/project-1.jpg" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:site" content="@manuj-rai"/> 
        <meta name="twitter:title" content="Manuj Rai - React Portfolio"/> 
        <meta name="twitter:description" content="A modern React-based personal portfolio showcasing tsParticles integration, cutting-edge UI/UX design, and development with React, Next.js, HTML, CSS, and TypeScript." /> 
        <meta name="twitter:image" content="https://manuj-rai-react-portfolio.vercel.app/project-1.jpg"/> 
        <meta name="twitter:image:alt" content="Manuj Rai Modern React Portfolio "/>
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
