import Image from 'next/image';
import Head from 'next/head';
import TopBar from './components/TopBar';

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

      <TopBar />

      {/* Seção de boas-vindas */}
      <section className="w-full flex flex-col items-center justify-center min-h-screen text-center p-6 bg-[#fff0f7]">
        <h1 className="text-4xl font-extrabold text-[#381819] mb-6">
          Um pedacinho de afeto em cada receita artesanal 💖
        </h1>
        <Image
          src="/assets/profilePictures/lolo3d.png"
          alt="Logo da Lolô"
          width={315}
          height={315}
          className="shadow-[0px_4px_12px_rgba(2,2,2,0.712)] rounded-full"
        />
        <p className="mt-6 text-lg text-[#4B3A2F] leading-relaxed max-w-2xl mx-auto">
          Seja muito bem-vindo à <b>Sabores da Lolô</b> — Onde cada pão, bolo e doce é feito com mãos carinhosas e ingredientes escolhidos a dedo. Aqui, tradição e afeto se misturam para criar experiências que aquecem o coração. Sinta-se em casa, descubra nossos sabores e deixe que a Lolô transforme seu dia com um toque doce e artesanal.
        </p>
      </section>

<section className="w-full py-16 px-6 bg-gradient-to-b from-[#fff0f7] to-[#381819] text-[#3A2C1E]">
  <h2 className="text-3xl font-bold text-center mb-10 text-[#4B3A2F]">Produtos</h2>

  <div
    className="flex overflow-x-auto scroll-smooth pl-4 pr-4"
    style={{ scrollSnapType: 'x mandatory' }}
  >
    {[
      {
        title: "Pães",
        image: "/assets/products/paes.JPEG",
        desc: "Macio, dourado e feito com fermentação natural. Ideal para o café da manhã.",
      },
      {
        title: "Pudins",
        image: "/assets/products/pudins.JPEG",
        desc: "Coxinhas, empadas e quitutes irresistíveis para qualquer ocasião.",
      },
      {
        title: "Bolos",
        image: "/assets/products/bolos.JPEG",
        desc: "Clássico da cozinha brasileira com cobertura generosa de chocolate.",
      },
      {
        title: "Doces",
        image: "/assets/products/doces.JPG",
        desc: "Brigadeiros, beijinhos e outras delícias feitas com amor e tradição.",
      },
      {
        title: "Salgados",
        image: "/assets/products/salgados.JPG",
        desc: "Coxinhas, empadas e quitutes irresistíveis para qualquer ocasião.",
      },
            {
        title: "Bolos de Aniversário",
        image: "/assets/products/bolosDeAniversario.JPEG",
        desc: "Coxinhas, empadas e quitutes irresistíveis para qualquer ocasião.",
      },
    ].map((item, index) => (
<div
  key={index}
  className={`min-w-[300px] max-w-[300px] bg-white rounded-lg p-5 scroll-snap-align-start overflow-hidden break-words border border-[#4B3A2F] shadow-[0_4px_12px_rgba(255,192,203,0.4)] backdrop-blur-sm ${
    index === 0 ? 'ml-4' : ''
  } ${index === 5 ? 'mr-4' : 'mr-2'}`}
>
<Image
  src={item.image}
  alt={item.title}
  width={300}
  height={300}
  className="rounded-md mb-4 border border-[#4B3A2F] shadow-[0_2px_8px_rgba(0,0,0,0.15)] max-h-[300px] min-h-[200px] object-cover"
/>

        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

        {/* Descrição dividida por frases */}
        <div className="text-sm leading-snug max-h-[80px] overflow-hidden">
          {item.desc.split('.').map((line, i) =>
            line.trim() ? (
              <div key={i} className="mb-1">
                {line.trim()}.
              </div>
            ) : null
          )}
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}