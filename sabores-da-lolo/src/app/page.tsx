import Head from 'next/head';
import TopBar from './components/TopBar';
import Produtos from './components/Produtos';
import Base from './components/Base';
import ClientWrapper from './components/ClientWrapper';

export const metadata = {
  title: 'Sabores da Lolô',
  description: 'Delícias artesanais direto da cozinha da Lolô',
  icons: {
    icon: "/assets/profilePictures/lolo3d.png",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabores da Lolô</title>
        <meta name="description" content="Descubra nossos pães, bolos e doces feitos com carinho." />
        <meta property="og:title" content="Sabores da Lolô" />
        <meta property="og:description" content="Delícias artesanais direto da cozinha da Lolô." />
        <meta property="og:image" content="/assets/profilePictures/lolo3d.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" type='image/png' href="/assets/profilePictures/lolo3d.png" />
      </Head>
      <ClientWrapper>
        <TopBar />
        <Base />
        <Produtos />
      </ClientWrapper>
    </>
  );
}