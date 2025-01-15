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
        <meta name="description" content="React personal portfolio with tsParticles and modern ui/ux design using reat, nextjs, html, css, typescript..."/>
        <meta name="keywords" content="manuj, rai, manuj rai, portfolio, react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, personal portfolio, framer-motion, 3d-website, particle-effect, manuj rai portfolio"/>
        <meta name="author" content="Manuj Rai" />
        <meta name="theme-color" content="#f13024" />
        <meta property="og:title" content="Manuj Rai - React Portfolio" />
        <meta property="og:description" content="React personal portfolio with tsParticles and modern ui/ux design using reat, nextjs, html, css, typescript..." />
        <meta property="og:url" content="https://react-portfolio-livid-delta.vercel.app/"/>
        <meta property="og:image" content="https://react-portfolio-livid-delta.vercel.app/public/project-1.jpg" />
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
