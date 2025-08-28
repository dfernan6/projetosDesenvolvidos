import Image from 'next/image';
import Head from 'next/head';

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
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Sabores da Lolô</h1>
      <Image
        src="/assets/profilePictures/lolo3d.png"
        alt="Logo da Lolô"
        width={315}
        height={315}
        className="shadow-[0px_4px_12px_rgba(2,2,2,0.712)]"
        style={{ borderRadius: '50%' }}
      />
      <p className="mt-4">Descubra nossos pães, bolos e doces feitos com carinho.</p>
    </main>
  </>
  );
}